# 명함형 포트폴리오 (React)

React + TypeScript + Vite + Framer Motion으로 만든 포트폴리오입니다.

## 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:5173 으로 접속하세요.

## 빌드 (배포용)

```bash
npm run build
```

생성된 파일은 `dist` 폴더에 있습니다.

## 온라인 배포 방법

### 방법 1: Vercel (추천 - 가장 간단)

1. **GitHub에 코드 업로드**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Vercel 배포**
   - https://vercel.com 접속
   - GitHub 계정으로 로그인
   - "New Project" 클릭
   - GitHub 저장소 선택
   - Framework Preset: "Vite" 선택
   - Root Directory: `personal-site` (또는 프로젝트 폴더명)
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - "Deploy" 클릭

3. **완료!** 몇 분 후 자동으로 배포됩니다.

### 방법 2: Netlify

1. **GitHub에 코드 업로드** (위와 동일)

2. **Netlify 배포**
   - https://netlify.com 접속
   - GitHub 계정으로 로그인
   - "Add new site" → "Import an existing project"
   - GitHub 저장소 선택
   - Build command: `npm run build`
   - Publish directory: `dist`
   - "Deploy site" 클릭

3. **React Router 설정**
   - 프로젝트 루트에 `public/_redirects` 파일 생성:
   ```
   /*    /index.html   200
   ```

### 방법 3: GitHub Pages

1. **vite.config.ts 수정** (base path 추가)
2. **GitHub Actions 설정** 필요
3. **더 복잡함** - Vercel/Netlify 추천

## 배포 전 체크리스트

- [ ] 모든 이미지가 `public/` 폴더에 있는지 확인
- [ ] `npm run build`가 에러 없이 실행되는지 확인
- [ ] 빌드된 `dist` 폴더에서 `npm run preview`로 테스트
