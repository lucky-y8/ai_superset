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
import { useEffect, useRef } from 'react';
import { styled } from '@apache-superset/core/theme';

type Particle = {
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  life: number;
  size: number;
  color: string;
};

const Canvas = styled.canvas`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
`;

const VisualPanel = styled.section`
  position: relative;
  z-index: 1;
  min-height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Ring = styled.div<{ $size: number; $reverse?: boolean }>`
  position: absolute;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border: 1px solid rgba(34, 211, 238, 0.22);
  border-radius: 50%;
  animation: rotate ${({ $reverse }) => ($reverse ? 12 : 18)}s linear infinite
    ${({ $reverse }) => ($reverse ? 'reverse' : 'normal')};
`;

const Core = styled.div`
  position: relative;
  width: 288px;
  height: 288px;
  border-radius: 50%;
  background: linear-gradient(135deg, #06b6d4, #2563eb 50%, #7c3aed);
  box-shadow: 0 0 42px rgba(14, 165, 233, 0.36);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  animation: pulseGlow 4s ease-in-out infinite;
  transform-origin: center;
  will-change: transform;

  @keyframes coreHoverSpin {
    0% {
      transform: scale(1) rotate(0deg);
    }
    34% {
      transform: scale(0.94) rotate(-5deg);
    }
    72% {
      transform: scale(1.1) rotate(7deg);
    }
    100% {
      transform: scale(1.06) rotate(0deg);
    }
  }

  &:hover {
    animation:
      pulseGlow 4s ease-in-out infinite,
      coreHoverSpin 820ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
  }
`;

const CoreContent = styled.div`
  text-align: center;
  z-index: 1;
`;

const CoreIcon = styled.div`
  font-size: 68px;
  line-height: 1;
  margin-bottom: 12px;
`;

const CoreTitle = styled.h1`
  margin: 0;
  color: #fff;
  font-size: 36px;
  font-weight: 900;
  letter-spacing: 0;
`;

const CoreSubtitle = styled.p`
  margin: 8px 0 0;
  color: #cffafe;
  font-weight: 600;
`;

const FloatingStat = styled.div<{
  $top?: string;
  $right?: string;
  $bottom?: string;
  $left?: string;
  $duration?: number;
}>`
  position: absolute;
  top: ${({ $top }) => $top};
  right: ${({ $right }) => $right};
  bottom: ${({ $bottom }) => $bottom};
  left: ${({ $left }) => $left};
  min-width: 126px;
  padding: 16px;
  border-radius: 24px;
  border: 1px solid var(--login-card-border);
  background: var(--login-glass);
  backdrop-filter: blur(24px);
  color: var(--login-text);
  box-shadow: 0 18px 60px rgba(2, 6, 23, 0.18);
  animation: float ${({ $duration }) => $duration ?? 4}s ease-in-out infinite;
`;

const StatLabel = styled.div`
  color: #67e8f9;
  font-size: 12px;
`;

const StatValue = styled.div`
  margin-top: 4px;
  font-size: 24px;
  font-weight: 800;
`;

const ChartCard = styled.div<{
  $top?: string;
  $right?: string;
  $bottom?: string;
  $left?: string;
}>`
  position: absolute;
  top: ${({ $top }) => $top};
  right: ${({ $right }) => $right};
  bottom: ${({ $bottom }) => $bottom};
  left: ${({ $left }) => $left};
  width: 224px;
  padding: 20px;
  border-radius: 24px;
  border: 1px solid var(--login-card-border);
  background: var(--login-glass);
  backdrop-filter: blur(24px);
  color: var(--login-text);
  box-shadow: 0 20px 70px rgba(2, 6, 23, 0.16);
  transition: transform 0.35s ease;

  &:hover {
    transform: translateY(-8px) scale(1.03);
  }
`;

const Bars = styled.div`
  height: 96px;
  display: flex;
  align-items: flex-end;
  gap: 8px;
`;

const Bar = styled.div<{ $height: number; $color: string }>`
  width: 24px;
  height: ${({ $height }) => $height}%;
  border-radius: 10px 10px 0 0;
  background: ${({ $color }) => $color};
  animation: barPulse 1.8s ease-in-out infinite;
`;

const ChartTitle = styled.div`
  margin-top: 16px;
  font-weight: 800;
`;

function createParticle(x: number, y: number): Particle {
  return {
    x,
    y,
    speedX: (Math.random() - 0.5) * 3,
    speedY: (Math.random() - 0.5) * 3,
    life: 100,
    size: Math.random() * 4 + 1,
    color: `hsl(${Math.random() * 360},100%,70%)`,
  };
}

export default function LoginBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (!canvas || !context) {
      return undefined;
    }

    const particles: Particle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const spawnParticles = (x: number, y: number) => {
      for (let index = 0; index < 5; index += 1) {
        particles.push(createParticle(x, y));
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      spawnParticles(event.clientX, event.clientY);
    };

    const handleTouchMove = (event: TouchEvent) => {
      const [touch] = event.touches;
      if (touch) {
        spawnParticles(touch.clientX, touch.clientY);
      }
    };

    let animationFrame = 0;

    const animateParticles = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      for (let index = particles.length - 1; index >= 0; index -= 1) {
        const particle = particles[index];
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.life -= 1;
        particle.size *= 0.98;

        context.fillStyle = particle.color;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();

        if (particle.life <= 0) {
          particles.splice(index, 1);
        }
      }

      animationFrame = requestAnimationFrame(animateParticles);
    };

    resizeCanvas();
    animateParticles();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <>
      <Canvas ref={canvasRef} aria-hidden="true" />
      <VisualPanel aria-hidden="true">
        <Ring $size={520} />
        <Ring $size={420} $reverse />
        <Core>
          <CoreContent>
            <CoreIcon>📊</CoreIcon>
            <CoreTitle>SUPERSET</CoreTitle>
            <CoreSubtitle>AI DATA ANALYTICS</CoreSubtitle>
          </CoreContent>
          <FloatingStat $top="24px" $left="-80px">
            <StatLabel>实时数据</StatLabel>
            <StatValue>1.2TB</StatValue>
          </FloatingStat>
          <FloatingStat $top="96px" $right="-80px" $duration={5}>
            <StatLabel>在线用户</StatLabel>
            <StatValue>98K</StatValue>
          </FloatingStat>
          <FloatingStat $bottom="-40px" $left="64px" $duration={6}>
            <StatLabel>AI 查询</StatLabel>
            <StatValue>8.9M</StatValue>
          </FloatingStat>
        </Core>
        <ChartCard $top="40px" $left="40px">
          <Bars>
            <Bar $color="#22d3ee" $height={30} />
            <Bar $color="#3b82f6" $height={80} />
            <Bar $color="#a855f7" $height={50} />
            <Bar $color="#ec4899" $height={90} />
          </Bars>
          <ChartTitle>Revenue Analytics</ChartTitle>
        </ChartCard>
        <ChartCard $right="40px" $bottom="40px">
          <svg viewBox="0 0 200 100" width="100%" height="96" role="img">
            <polyline
              fill="none"
              stroke="#22d3ee"
              strokeWidth="4"
              points="0,80 40,50 80,70 120,20 160,40 200,10"
            />
          </svg>
          <ChartTitle>AI Prediction</ChartTitle>
        </ChartCard>
      </VisualPanel>
    </>
  );
}
