/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/* eslint-disable theme-colors/no-literal-colors */
import { useState } from 'react';
import { getClientErrorObject, SupersetClient } from '@superset-ui/core';
import { Form, Input, Button } from '@superset-ui/core/components';
import { styled } from '@apache-superset/core/theme';
import { useToasts } from 'src/components/MessageToasts/withToasts';

import { useVerifyCountdown } from './hooks';
import type { RegisterFormValues } from './types';

const StyledForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 20px;
  }

  .ant-form-item-explain-error {
    margin-top: 8px;
    line-height: 1.35;
  }

  .ant-form-item-label {
    display: none;
  }

  .ant-input,
  .ant-input-affix-wrapper {
    min-height: 56px;
    padding: 14px 18px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 20px;
    background: var(--login-input-bg);
    background-color: var(--login-input-bg);
    color: var(--login-text);
    box-shadow: none;
    transition:
      border-color 0.3s ease,
      box-shadow 0.3s ease;
  }

  .ant-input::placeholder {
    color: var(--login-muted);
  }

  .ant-input-status-error,
  .ant-input-status-error:not(.ant-input-disabled),
  .ant-input-affix-wrapper-status-error,
  .ant-input-affix-wrapper-status-error:not(.ant-input-affix-wrapper-disabled),
  .ant-input-outlined.ant-input-status-error,
  .ant-input-outlined.ant-input-status-error:not(.ant-input-disabled),
  .ant-input-outlined.ant-input-status-error:hover,
  .ant-input-outlined.ant-input-status-error:focus,
  .ant-input-outlined.ant-input-status-error.ant-input-focused,
  .ant-input-outlined.ant-input-status-error:not(.ant-input-disabled):hover,
  .ant-input-outlined.ant-input-status-error:not(.ant-input-disabled):focus {
    border-color: #fb7185;
    background-color: var(--login-input-bg);
    color: var(--login-text);
    box-shadow: none;
  }

  .ant-input-affix-wrapper input.ant-input {
    min-height: auto;
    padding: 0;
    border: 0;
    border-radius: 0;
    background: transparent;
  }

  .ant-input-affix-wrapper .ant-input-suffix {
    color: var(--login-text);
    font-size: 22px;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-text-fill-color: var(--login-text);
    box-shadow: 0 0 0 1000px rgba(15, 23, 42, 0.86) inset;
    caret-color: var(--login-text);
  }

  .ant-input:focus,
  .ant-input-focused,
  .ant-input-affix-wrapper-focused {
    border-color: #38bdf8;
    box-shadow: 0 0 0 4px rgba(56, 189, 248, 0.2);
  }

  .ant-btn-primary {
    min-height: 56px;
    border: 0;
    border-radius: 20px;
    background: linear-gradient(135deg, #06b6d4, #2563eb);
    font-weight: 800;
  }
`;

const VerifyRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 96px;
  gap: 12px;
  margin-bottom: 24px;

  .ant-form-item {
    margin-bottom: 0;
  }
`;

const VerifyButton = styled(Button)`
  min-height: 56px;
  border: 0;
  border-radius: 18px;
  background: #06b6d4;
  color: #fff;
  font-weight: 800;
`;

const ErrorMessage = styled.div`
  margin-bottom: 16px;
  padding: 12px 16px;
  border: 1px solid #fb7185;
  border-radius: 8px;
  background: rgba(190, 18, 60, 0.16);
  color: var(--login-text);
  line-height: 1.5;
`;

type RegisterFormProps = {
  onSuccess: (username: string) => void;
};

export default function RegisterForm({ onSuccess }: RegisterFormProps) {
  const [form] = Form.useForm<RegisterFormValues>();
  const [loading, setLoading] = useState(false);
  const [sendingCode, setSendingCode] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { addDangerToast, addSuccessToast } = useToasts();
  const { countdown, startCountdown, isCounting } = useVerifyCountdown();

  const showError = async (error: unknown, fallback: string) => {
    let message = fallback;
    try {
      const clientError = await getClientErrorObject(error);
      if (typeof clientError.error === 'string' && clientError.error) {
        message = clientError.error;
      } else if (
        typeof clientError.message === 'string' &&
        clientError.message
      ) {
        message = clientError.message;
      }
    } catch {
      if (error instanceof Error && error.message) {
        message = error.message;
      }
    }
    setErrorMessage(message);
    addDangerToast(message);
  };

  const sendVerificationCode = async () => {
    setErrorMessage('');
    try {
      const { email } = await form.validateFields(['email']);
      setSendingCode(true);
      await SupersetClient.post({
        endpoint: '/api/v1/v2/users/verification-code/',
        jsonPayload: { email },
      });
      addSuccessToast('验证码已发送，请检查邮箱');
      startCountdown();
    } catch (error) {
      if (error && typeof error === 'object' && 'errorFields' in error) {
        return;
      }
      await showError(error, '验证码发送失败，请稍后重试');
    } finally {
      setSendingCode(false);
    }
  };

  const onFinish = async (values: RegisterFormValues) => {
    setErrorMessage('');
    setLoading(true);

    const payload = {
      username: values.nickname,
      first_name: values.nickname,
      last_name: values.nickname,
      email: values.email,
      password: values.password,
      conf_password: values.confirmPassword,
    };

    try {
      await SupersetClient.post({
        endpoint: '/api/v1/v2/users/register/',
        jsonPayload: {
          ...payload,
          verify_code: values.verifyCode,
        },
      });
      addSuccessToast('注册成功，请使用新账号登录');
      form.resetFields();
      onSuccess(values.nickname);
    } catch (error) {
      await showError(error, '注册失败，请稍后重试');
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledForm form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item
        label="Nickname"
        name="nickname"
        rules={[{ required: true, message: 'Please enter your nickname' }]}
      >
        <Input placeholder="昵称" />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Please enter your email' },
          { type: 'email', message: 'Please enter a valid email address' },
        ]}
      >
        <Input placeholder="邮箱地址" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please enter your password' }]}
      >
        <Input.Password placeholder="设置密码" autoComplete="new-password" />
      </Form.Item>

      <Form.Item
        label="Confirm password"
        name="confirmPassword"
        dependencies={['password']}
        rules={[
          { required: true, message: '请再次输入密码' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('两次输入的密码不一致'));
            },
          }),
        ]}
      >
        <Input.Password placeholder="确认密码" autoComplete="new-password" />
      </Form.Item>

      <VerifyRow>
        <Form.Item
          label="Verify code"
          name="verifyCode"
          rules={[
            { required: true, message: '请输入验证码' },
            { pattern: /^\d{6}$/, message: '请输入 6 位数字验证码' },
          ]}
        >
          <Input placeholder="验证码" inputMode="numeric" maxLength={6} />
        </Form.Item>
        <VerifyButton
          htmlType="button"
          disabled={isCounting || sendingCode}
          loading={sendingCode}
          onClick={sendVerificationCode}
        >
          {isCounting ? `${countdown}s` : '获取'}
        </VerifyButton>
      </VerifyRow>

      {errorMessage && <ErrorMessage role="alert">{errorMessage}</ErrorMessage>}

      <Button type="primary" htmlType="submit" loading={loading} block>
        创建账号
      </Button>
    </StyledForm>
  );
}
