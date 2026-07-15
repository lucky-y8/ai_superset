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
import { getClientErrorObject, SupersetClient } from '@superset-ui/core';
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from 'spec/helpers/testing-library';

import RegisterForm from './RegisterForm';

const mockAddDangerToast = jest.fn();
const mockAddSuccessToast = jest.fn();

jest.mock('src/components/MessageToasts/withToasts', () => ({
  useToasts: () => ({
    addDangerToast: mockAddDangerToast,
    addSuccessToast: mockAddSuccessToast,
  }),
}));

jest.mock('@superset-ui/core', () => ({
  ...jest.requireActual('@superset-ui/core'),
  getClientErrorObject: jest.fn(),
}));

const fillForm = () => {
  fireEvent.change(screen.getByPlaceholderText('昵称'), {
    target: { value: 'new-user' },
  });
  fireEvent.change(screen.getByPlaceholderText('邮箱地址'), {
    target: { value: 'new-user@example.com' },
  });
  fireEvent.change(screen.getByPlaceholderText('设置密码'), {
    target: { value: 'password' },
  });
  fireEvent.change(screen.getByPlaceholderText('确认密码'), {
    target: { value: 'password' },
  });
  fireEvent.change(screen.getByPlaceholderText('验证码'), {
    target: { value: '123456' },
  });
};

beforeEach(() => {
  jest.clearAllMocks();
});

test('shows success feedback and returns to login after registration', async () => {
  const onSuccess = jest.fn();
  jest.spyOn(SupersetClient, 'post').mockResolvedValue({} as never);

  render(<RegisterForm onSuccess={onSuccess} />, { useRedux: true });
  fillForm();
  fireEvent.click(screen.getByRole('button', { name: '创建账号' }));

  await waitFor(() => {
    expect(mockAddSuccessToast).toHaveBeenCalledWith(
      '注册成功，请使用新账号登录',
    );
  });
  expect(onSuccess).toHaveBeenCalledWith('new-user');
  expect(SupersetClient.post).toHaveBeenCalledWith({
    endpoint: '/api/v1/v2/users/register/',
    jsonPayload: {
      conf_password: 'password',
      email: 'new-user@example.com',
      first_name: 'new-user',
      last_name: 'new-user',
      password: 'password',
      username: 'new-user',
      verify_code: '123456',
    },
  });
});

test('shows backend feedback when registration fails', async () => {
  jest.spyOn(SupersetClient, 'post').mockRejectedValue(new Error('Conflict'));
  jest.mocked(getClientErrorObject).mockResolvedValue({
    message: 'The username or email is already registered.',
  });

  render(<RegisterForm onSuccess={jest.fn()} />, { useRedux: true });
  fillForm();
  fireEvent.click(screen.getByRole('button', { name: '创建账号' }));

  await waitFor(() => {
    expect(mockAddDangerToast).toHaveBeenCalledWith(
      'The username or email is already registered.',
    );
  });
  expect(screen.getByRole('alert')).toHaveTextContent(
    'The username or email is already registered.',
  );
  expect(mockAddSuccessToast).not.toHaveBeenCalled();
});

test('sends a verification code and starts the countdown', async () => {
  jest.spyOn(SupersetClient, 'post').mockResolvedValue({} as never);

  render(<RegisterForm onSuccess={jest.fn()} />, { useRedux: true });
  fireEvent.change(screen.getByPlaceholderText('邮箱地址'), {
    target: { value: 'new-user@example.com' },
  });
  fireEvent.click(screen.getByRole('button', { name: /获\s*取/ }));

  await waitFor(() => {
    expect(SupersetClient.post).toHaveBeenCalledWith({
      endpoint: '/api/v1/v2/users/verification-code/',
      jsonPayload: { email: 'new-user@example.com' },
    });
  });
  expect(mockAddSuccessToast).toHaveBeenCalledWith('验证码已发送，请检查邮箱');
  expect(screen.getByRole('button', { name: /60\s*s/ })).toBeDisabled();
});

test('does not start the countdown when verification email delivery fails', async () => {
  jest
    .spyOn(SupersetClient, 'post')
    .mockRejectedValue(new Error('SMTP failed'));
  jest.mocked(getClientErrorObject).mockResolvedValue({
    message: 'The verification email could not be sent.',
  });

  render(<RegisterForm onSuccess={jest.fn()} />, { useRedux: true });
  fireEvent.change(screen.getByPlaceholderText('邮箱地址'), {
    target: { value: 'new-user@example.com' },
  });
  fireEvent.click(screen.getByRole('button', { name: /获\s*取/ }));

  await waitFor(() => {
    expect(mockAddDangerToast).toHaveBeenCalledWith(
      'The verification email could not be sent.',
    );
  });
  expect(screen.getByRole('alert')).toHaveTextContent(
    'The verification email could not be sent.',
  );
  expect(screen.getByRole('button', { name: /获\s*取/ })).toBeEnabled();
});
