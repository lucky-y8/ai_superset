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
import { useState, useEffect, useMemo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from '@superset-ui/core/components';
import { SupersetClient } from '@superset-ui/core';
import { t } from '@apache-superset/core/translation';
import { addDangerToast } from 'src/components/MessageToasts/actions';
import getBootstrapData from 'src/utils/getBootstrapData';

import type { LoginFormValues, ActiveTab } from './types';
import { AuthType } from './types';

export function useAuthConfig() {
  const bootstrapData = getBootstrapData();

  return {
    authType: bootstrapData.common.conf.AUTH_TYPE as AuthType,
    providers: bootstrapData.common.conf.AUTH_PROVIDERS ?? [],
    authRegistration: bootstrapData.common.conf
      .AUTH_USER_REGISTRATION as boolean,
  };
}

export function useLoginForm() {
  const [form] = Form.useForm<LoginFormValues>();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const nextUrl = useMemo(() => {
    try {
      return new URLSearchParams(window.location.search).get('next') ?? '';
    } catch {
      return '';
    }
  }, []);

  const loginEndpoint = useMemo(
    () => (nextUrl ? `/login/?next=${encodeURIComponent(nextUrl)}` : '/login/'),
    [nextUrl],
  );

  const buildProviderLoginUrl = useCallback(
    (providerName: string) => {
      const base = `/login/${providerName}`;
      return nextUrl
        ? `${base}${base.includes('?') ? '&' : '?'}next=${encodeURIComponent(nextUrl)}`
        : base;
    },
    [nextUrl],
  );

  useEffect(() => {
    if (sessionStorage.getItem('login_attempted') === 'true') {
      sessionStorage.removeItem('login_attempted');
      dispatch(addDangerToast(t('Invalid username or password')));
      form.setFieldsValue({ password: '' });
    }
  }, [dispatch, form]);

  const onFinish = useCallback(
    (values: LoginFormValues) => {
      setLoading(true);
      sessionStorage.setItem('login_attempted', 'true');
      SupersetClient.postForm(loginEndpoint, values, '');
    },
    [loginEndpoint],
  );

  return { form, loading, onFinish, buildProviderLoginUrl };
}

export function useVerifyCountdown(seconds = 60) {
  const [countdown, setCountdown] = useState(0);

  const startCountdown = useCallback(() => {
    setCountdown(seconds);
  }, [seconds]);

  useEffect(() => {
    if (countdown <= 0) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setCountdown(previous => Math.max(previous - 1, 0));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [countdown]);

  return { countdown, startCountdown, isCounting: countdown > 0 };
}

export function useLoginTab(defaultTab: ActiveTab = 'login') {
  const [activeTab, setActiveTab] = useState<ActiveTab>(defaultTab);
  return { activeTab, setActiveTab };
}
