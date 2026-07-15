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
import { Form, Input, Button } from '@superset-ui/core/components';
import { styled } from '@apache-superset/core/theme';

import type { LoginFormValues } from './types';

type LoginFormProps = {
  form: ReturnType<typeof Form.useForm>[0];
  loading: boolean;
  errorMessage?: string;
  onFinish: (values: LoginFormValues) => void;
};

const StyledForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 20px;
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
    color: var(--login-text);
    box-shadow: none;
    transition:
      border-color 0.3s ease,
      box-shadow 0.3s ease;
  }

  .ant-input::placeholder {
    color: var(--login-muted);
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

  .ant-input:focus,
  .ant-input-focused,
  .ant-input-affix-wrapper-focused {
    border-color: #38bdf8;
    box-shadow: 0 0 0 4px rgba(56, 189, 248, 0.2);
  }

  .ant-btn-primary {
    width: 100%;
    min-height: 56px;
    border: 0;
    border-radius: 20px;
    background: linear-gradient(135deg, #06b6d4, #2563eb);
    color: #fff;
    font-weight: 800;
    box-shadow: none;
    transition: transform 0.3s ease;
  }

  .ant-btn-primary:hover,
  .ant-btn-primary:focus {
    transform: translateY(-2px) scale(1.02);
    background: linear-gradient(135deg, #06b6d4, #2563eb);
  }
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

const Instruction = styled.p`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export default function LoginForm({
  form,
  loading,
  errorMessage,
  onFinish,
}: LoginFormProps) {
  return (
    <StyledForm
      form={form}
      onFinish={onFinish}
      layout="vertical"
      data-test="login-form"
      data-testid="login-form"
    >
      <Instruction>Enter your login and password below:</Instruction>
      <Form.Item
        label="Username:"
        name="username"
        rules={[{ required: true, message: 'Please enter your username' }]}
      >
        <Input
          data-test="username-input"
          data-testid="username-input"
          placeholder="邮箱地址"
        />
      </Form.Item>

      <Form.Item
        label="Password:"
        name="password"
        rules={[{ required: true, message: 'Please enter your password' }]}
      >
        <Input.Password
          data-test="password-input"
          data-testid="password-input"
          iconRender={visible => (visible ? '🙈' : '🐰')}
          placeholder="密码"
        />
      </Form.Item>

      {errorMessage && <ErrorMessage role="alert">{errorMessage}</ErrorMessage>}

      <Button
        aria-label="Sign in"
        data-test="login-button"
        data-testid="login-button"
        type="primary"
        htmlType="submit"
        loading={loading}
        block
      >
        进入数据驾驶舱
      </Button>
    </StyledForm>
  );
}
