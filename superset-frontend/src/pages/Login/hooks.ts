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
import { getClientErrorObject, SupersetClient } from '@superset-ui/core';
import { t } from '@apache-superset/core/translation';
import { addDangerToast } from 'src/components/MessageToasts/actions';
import getBootstrapData from 'src/utils/getBootstrapData';

import type { LoginFormValues, ActiveTab } from './types';
import { AuthType } from './types';

function getSafeRedirectUrl(nextUrl: string) {
  if (!nextUrl) {
    return '/';
  }

  try {
    const url = new URL(nextUrl, window.location.origin);
    if (url.origin === window.location.origin) {
      return `${url.pathname}${url.search}${url.hash}`;
    }
  } catch {
    return '/';
  }

  return '/';
}

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

  const buildProviderLoginUrl = useCallback(
    (providerName: string) => {
      const base = `/login/${providerName}`;
      return nextUrl
        ? `${base}${base.includes('?') ? '&' : '?'}next=${encodeURIComponent(nextUrl)}`
        : base;
    },
    [nextUrl],
  );

  const showLoginError = useCallback(
    async (error: unknown) => {
      let message = t('Invalid username or password');
      try {
        const clientError = await getClientErrorObject(
          error as Parameters<typeof getClientErrorObject>[0],
        );
        if (clientError.error) {
          message = clientError.error;
        } else if (clientError.message) {
          message = clientError.message;
        }
      } catch {
        if (error instanceof Error && error.message) {
          message = error.message;
        }
      }

      form.setFields([
        {
          name: 'password',
          errors: [message],
        },
      ]);
      dispatch(addDangerToast(message));
    },
    [dispatch, form],
  );

  const onFinish = useCallback(
    async (values: LoginFormValues) => {
      setLoading(true);
      form.setFields([{ name: 'password', errors: [] }]);

      try {
        await SupersetClient.post({
          endpoint: '/api/v1/v2/users/login/',
          jsonPayload: values,
          ignoreUnauthorized: true,
        });
        window.location.assign(getSafeRedirectUrl(nextUrl));
      } catch (error) {
        await showLoginError(error);
        form.setFieldsValue({ password: '' });
        setLoading(false);
      }
    },
    [form, nextUrl, showLoginError],
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
