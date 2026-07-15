import json
import os
import re
import sys
import time
from typing import Any

import polib
from openai import OpenAI


if len(sys.argv) < 3:
    print("用法:")
    print("python translate_po.py input.po output.po")
    sys.exit(1)
INPUT_PO = sys.argv[1]
OUTPUT_PO = sys.argv[2]

BASE_URL = os.getenv("OPENAI_BASE_URL", "https://api.deepseek.com")
API_KEY = os.getenv("OPENAI_API_KEY", "sk-bf7f604d412645d4af21d86f6591c892")
MODEL = os.getenv("OPENAI_MODEL", "deepseek-chat")

if not API_KEY:
    raise ValueError("请设置 OPENAI_API_KEY")

client = OpenAI(api_key=API_KEY, base_url=BASE_URL)

if os.path.exists(OUTPUT_PO):
    print(f"检测到已有文件: {OUTPUT_PO}")
    print("继续审校已有翻译...\n")
    po = polib.pofile(OUTPUT_PO)
else:
    print(f"读取原始文件: {INPUT_PO}\n")
    po = polib.pofile(INPUT_PO)

total = len(po)
checked = 0
skipped = 0
fixed = 0
failed = 0


def should_review(entry: polib.POEntry) -> bool:
    if entry.obsolete:
        return False

    if "fuzzy" in entry.flags:
        return False

    if not entry.msgid.strip():
        return False

    if entry.msgid_plural:
        return any(value.strip() for value in entry.msgstr_plural.values())

    return bool(entry.msgstr.strip())


def extract_json(text: str) -> dict[str, Any]:
    text = text.strip()

    if text.startswith("```"):
        text = re.sub(r"^```(?:json)?\s*", "", text)
        text = re.sub(r"\s*```$", "", text)

    try:
        return json.loads(text)
    except json.JSONDecodeError:
        match = re.search(r"\{.*\}", text, re.S)
        if not match:
            raise
        return json.loads(match.group(0))


def review_translation(msgid: str, msgstr: str) -> tuple[bool, str, str]:
    prompt = f"""
请审校下面的软件国际化翻译是否准确。

要求：
1. 判断中文是否准确表达英文含义
2. 软件术语要专业、简洁
3. 保留变量、占位符、HTML、Markdown、Jinja、URL
4. 不要改变换行格式
5. 只返回 JSON，不要解释

JSON 格式：
{{
  "is_correct": true,
  "corrected": "如果正确则原样返回中文；如果不正确则返回修正后的中文",
  "reason": "简短说明错误原因；如果正确则为空字符串"
}}

英文 msgid:
{msgid}

当前中文 msgstr:
{msgstr}
"""

    response = client.chat.completions.create(
        model=MODEL,
        messages=[
            {
                "role": "system",
                "content": "你是专业的软件国际化中文审校助手。",
            },
            {"role": "user", "content": prompt},
        ],
        temperature=0,
    )

    content = response.choices[0].message.content or ""
    data = extract_json(content)
    is_correct = bool(data.get("is_correct"))
    corrected = str(data.get("corrected", "")).strip()
    reason = str(data.get("reason", "")).strip()

    if not corrected:
        corrected = msgstr

    return is_correct, corrected, reason


def review_entry(entry: polib.POEntry) -> bool:
    changed = False

    if entry.msgid_plural:
        for plural_index, current_msgstr in sorted(entry.msgstr_plural.items()):
            if not current_msgstr.strip():
                continue

            source = entry.msgid if plural_index == "0" else entry.msgid_plural
            is_correct, corrected, reason = review_translation(source, current_msgstr)

            if not is_correct and corrected != current_msgstr:
                print("=" * 80)
                print("发现错误翻译:")
                print(f"msgid: {source}")
                print(f"原 msgstr[{plural_index}]: {current_msgstr}")
                print(f"新 msgstr[{plural_index}]: {corrected}")
                if reason:
                    print(f"原因: {reason}")

                entry.msgstr_plural[plural_index] = corrected
                changed = True

        return changed

    is_correct, corrected, reason = review_translation(entry.msgid, entry.msgstr)

    if not is_correct and corrected != entry.msgstr:
        print("=" * 80)
        print("发现错误翻译:")
        print(f"msgid: {entry.msgid}")
        print(f"原 msgstr: {entry.msgstr}")
        print(f"新 msgstr: {corrected}")
        if reason:
            print(f"原因: {reason}")

        entry.msgstr = corrected
        changed = True

    return changed


for index, entry in enumerate(po, start=1):
    if not should_review(entry):
        skipped += 1
        continue

    print(f"[{index}/{total}] 审校: {entry.msgid[:120]}")

    retry = 0
    while retry < 3:
        try:
            if review_entry(entry):
                fixed += 1

            checked += 1

            if checked % 10 == 0:
                po.save(OUTPUT_PO)
                print("已自动保存")

            time.sleep(0.5)
            break

        except KeyboardInterrupt:
            print("\n用户中断，正在保存...")
            po.save(OUTPUT_PO)
            print("已保存")
            sys.exit(0)

        except Exception as ex:  # pylint: disable=broad-except
            retry += 1
            print(f"审校失败，重试 {retry}/3: {ex}")
            time.sleep(3)

            if retry >= 3:
                failed += 1

po.save(OUTPUT_PO)

print("\n")
print("=" * 80)
print("审校完成")
print("=" * 80)
print(f"总条目: {total}")
print(f"已审校: {checked}")
print(f"跳过数量: {skipped}")
print(f"修正数量: {fixed}")
print(f"失败数量: {failed}")
print(f"\n输出文件: {OUTPUT_PO}")
