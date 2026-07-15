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
import { styled } from '@apache-superset/core/theme';

import LoginBackground from './LoginBackground';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { useAuthConfig, useLoginForm, useLoginTab } from './hooks';
import { AuthType } from './types';

const PageShell = styled.main`
  --login-bg1: #020617;
  --login-bg2: #0f172a;
  --login-bg3: #111827;
  --login-glass: rgba(255, 255, 255, 0.12);
  --login-text: #fff;
  --login-muted: rgba(255, 255, 255, 0.78);
  --login-card-border: rgba(255, 255, 255, 0.18);
  --login-input-bg: rgba(0, 0, 0, 0.25);
  --login-tab-bg: rgba(0, 0, 0, 0.2);

  position: fixed;
  inset: 0;
  z-index: 1;
  min-height: 100vh;
  overflow: hidden;
  color: var(--login-text);
  background:
    radial-gradient(
      circle at top left,
      rgba(14, 165, 233, 0.34) 0%,
      transparent 40%
    ),
    radial-gradient(
      circle at bottom right,
      rgba(147, 51, 234, 0.34) 0%,
      transparent 40%
    ),
    linear-gradient(
      135deg,
      var(--login-bg1),
      var(--login-bg2),
      var(--login-bg3)
    );
  transition:
    background 0.5s ease,
    color 0.5s ease;

  &[data-login-theme='light'] {
    --login-bg1: #e0f2fe;
    --login-bg2: #f0f9ff;
    --login-bg3: #fff;
    --login-glass: rgba(255, 255, 255, 0.76);
    --login-text: #111827;
    --login-muted: rgba(17, 24, 39, 0.72);
    --login-card-border: rgba(0, 0, 0, 0.06);
    --login-input-bg: #fff;
    --login-tab-bg: rgba(15, 23, 42, 0.08);
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
  }

  @keyframes pulseGlow {
    0%,
    100% {
      box-shadow: 0 0 30px rgba(14, 165, 233, 0.25);
    }
    50% {
      box-shadow: 0 0 80px rgba(14, 165, 233, 0.55);
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes barPulse {
    0%,
    100% {
      opacity: 0.72;
    }
    50% {
      opacity: 1;
    }
  }

  @media (max-width: 1024px) {
    overflow-y: auto;
  }
`;

const ThemeButton = styled.button`
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 4;
  padding: 12px 20px;
  border: 1px solid var(--login-card-border);
  border-radius: 18px;
  background: var(--login-glass);
  backdrop-filter: blur(24px);
  color: var(--login-text);
  font-weight: 800;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 640px) {
    top: 10px;
    right: 10px;
    padding: 10px 14px;
  }
`;

const PageGrid = styled.div`
  position: relative;
  z-index: 1;
  width: min(1280px, 100%);
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(360px, 480px);
  align-items: center;
  gap: 40px;
  padding: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 78px 20px 28px;
  }
`;

const FormPanel = styled.section`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 520px;
  margin: 0 auto;
  padding: 40px;
  overflow: hidden;
  border: 1px solid var(--login-card-border);
  border-radius: 32px;
  background: var(--login-glass);
  backdrop-filter: blur(24px);
  box-shadow: 0 28px 90px rgba(2, 6, 23, 0.28);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      rgba(6, 182, 212, 0.1),
      rgba(59, 130, 246, 0.1),
      rgba(147, 51, 234, 0.1)
    );
    pointer-events: none;
  }

  @media (max-width: 640px) {
    padding: 28px 20px;
    border-radius: 26px;
  }
`;

const FormContent = styled.div`
  position: relative;
  z-index: 1;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 32px;
`;

const Title = styled.h1`
  margin: 0;
  color: transparent;
  background: linear-gradient(90deg, #f97316, #06b6d4);
  background-clip: text;
  font-size: 48px;
  font-weight: 900;
  letter-spacing: 0;

  @media (max-width: 640px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.p`
  margin: 16px 0 0;
  color: var(--login-muted);
`;

const TabList = styled.div`
  display: flex;
  padding: 8px;
  margin-bottom: 28px;
  border-radius: 18px;
  background: var(--login-tab-bg);
`;

const TabButton = styled.button<{ $active: boolean }>`
  flex: 1;
  padding: 12px;
  border: 0;
  border-radius: 12px;
  background: ${({ $active }) => ($active ? '#06b6d4' : 'transparent')};
  color: ${({ $active }) => ($active ? '#fff' : 'var(--login-text)')};
  font-weight: 800;
  cursor: pointer;
  transition:
    background 0.25s ease,
    color 0.25s ease;
`;

const ProviderList = styled.div`
  display: grid;
  gap: 10px;
  margin-bottom: 18px;
`;

const ProviderLink = styled.a`
  display: block;
  padding: 12px 14px;
  border: 1px solid var(--login-card-border);
  border-radius: 16px;
  color: var(--login-text);
  text-align: center;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.1);
  transition:
    transform 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    color: var(--login-text);
    transform: translateY(-1px);
    border-color: rgba(34, 211, 238, 0.6);
    text-decoration: none;
  }
`;

function formatProviderName(name: string) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

export function getInitialTheme(date = new Date()): 'dark' | 'light' {
  const hour = date.getHours();
  return hour >= 6 && hour < 18 ? 'light' : 'dark';
}

export default function LoginPage() {
  const { authType, providers } = useAuthConfig();
  const { form, loading, errorMessage, onFinish, buildProviderLoginUrl } =
    useLoginForm();
  const { activeTab, setActiveTab } = useLoginTab('login');
  const [theme, setTheme] = useState<'dark' | 'light'>(getInitialTheme);

  const showProviders =
    (authType === AuthType.AuthOauth || authType === AuthType.AuthSAML) &&
    providers.length > 0;

  return (
    <PageShell data-login-theme={theme}>
      <ThemeButton
        type="button"
        onClick={() =>
          setTheme(current => (current === 'dark' ? 'light' : 'dark'))
        }
      >
        {theme === 'dark' ? '夜间模式' : '白天模式'}
      </ThemeButton>
      <PageGrid>
        <LoginBackground />
        <FormPanel aria-label="Superset BI login">
          <FormContent>
            <Header>
              <Title>Superset BI</Title>
              <Subtitle>下一代智能数据分析平台</Subtitle>
            </Header>

            <TabList role="tablist" aria-label="Login mode">
              <TabButton
                type="button"
                $active={activeTab === 'login'}
                onClick={() => setActiveTab('login')}
              >
                登录
              </TabButton>
              <TabButton
                type="button"
                $active={activeTab === 'register'}
                onClick={() => setActiveTab('register')}
              >
                注册
              </TabButton>
            </TabList>

            {activeTab === 'login' && (
              <>
                {showProviders && (
                  <ProviderList>
                    {providers.map(provider => (
                      <ProviderLink
                        href={buildProviderLoginUrl(provider.name)}
                        key={provider.name}
                      >
                        Sign in with {formatProviderName(provider.name)}
                      </ProviderLink>
                    ))}
                  </ProviderList>
                )}
                <LoginForm
                  form={form}
                  loading={loading}
                  errorMessage={errorMessage}
                  onFinish={onFinish}
                />
              </>
            )}

            {activeTab === 'register' && (
              <RegisterForm
                onSuccess={username => {
                  form.setFieldsValue({ username });
                  setActiveTab('login');
                }}
              />
            )}
          </FormContent>
        </FormPanel>
      </PageGrid>
    </PageShell>
  );
}
