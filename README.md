# 종훈 프로젝트

이 레포지토리는 Turborepo와 PNPM을 사용한 모노레포 구조로 구성되어 있습니다.

## 구조

- `apps/*`: 애플리케이션 코드
- `packages/*`: 공유 패키지 (디자인 시스템, 유틸리티 등)

## 기술 스택

- **패키지 관리**: PNPM
- **모노레포 도구**: Turborepo
- **언어**: TypeScript
- **기타**: React, Radix UI, vanilla-extract, Electron, Vite, Storybook

## 시작하기

### 의존성 설치

```bash
pnpm install
```

### 개발 모드 실행

```bash
pnpm dev
```

### 빌드

```bash
pnpm build
```

### 린트

```bash
pnpm lint
```

### 포맷팅

```bash
pnpm format
```

## 라이센스

MIT
