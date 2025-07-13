# FunQueue Frontend

React와 Firebase를 사용한 FunQueue 애플리케이션입니다.

## 기술 스택

- **React 19.1.0** - 사용자 인터페이스
- **Firebase** - 백엔드 서비스 (인증, 데이터베이스, 스토리지)
- **Material-UI** - UI 컴포넌트 라이브러리
- **React Router** - 클라이언트 사이드 라우팅

## 설치 및 실행

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경변수 설정

`env.example` 파일을 참고하여 `.env` 파일을 생성하고 Firebase 설정을 입력하세요:

```bash
cp env.example .env
```

Firebase 콘솔에서 프로젝트 설정을 가져와서 `.env` 파일에 입력하세요.

### 3. 개발 서버 실행

```bash
npm start
```

애플리케이션이 [http://localhost:3000](http://localhost:3000)에서 실행됩니다.

## 프로젝트 구조

```
src/
├── components/     # 재사용 가능한 컴포넌트
├── pages/         # 페이지 컴포넌트
├── hooks/         # 커스텀 훅
├── utils/         # 유틸리티 함수
├── contexts/      # React 컨텍스트
├── firebase.js    # Firebase 설정
└── App.js         # 메인 앱 컴포넌트
```

## Firebase 설정

1. [Firebase Console](https://console.firebase.google.com/)에서 새 프로젝트 생성
2. 웹 앱 추가
3. 설정 정보를 `.env` 파일에 입력
4. 필요한 서비스 활성화:
   - Authentication
   - Firestore Database
   - Storage

## 사용 가능한 스크립트

- `npm start` - 개발 서버 실행
- `npm run build` - 프로덕션 빌드
- `npm test` - 테스트 실행
- `npm run eject` - 설정 추출 (주의: 되돌릴 수 없음)

## 모바일 최적화

이 앱은 모바일과 데스크톱 모두에서 최적화되어 있습니다:

### 모바일 지원 기능

- **반응형 디자인**: 모든 화면 크기에 맞게 자동 조정
- **터치 최적화**: 모바일 터치 인터페이스에 최적화된 버튼 크기
- **PWA 지원**: 홈 화면에 추가 가능한 웹 앱
- **iOS/Android 최적화**: 각 플랫폼에 맞는 메타 태그 설정

### 테스트 방법

1. **데스크톱**: 브라우저에서 개발자 도구 > Device Toolbar 사용
2. **모바일**: 같은 네트워크에서 IP 주소로 접속
   ```bash
   # 개발 서버 IP 확인
   ifconfig | grep "inet " | grep -v 127.0.0.1
   ```

## 배포

```bash
npm run build
```

빌드된 파일은 `build/` 폴더에 생성됩니다.

### Firebase Hosting 배포

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```
