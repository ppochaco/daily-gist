# Daily Gist for Boostcamp Challenge

네부캠 챌린지 진행을 위한 마크다운 파일을 템플릿 기반으로 자동 생성합니다.

## 📂 생성되는 파일

> clone하고 파일 내용을 자유롭게 수정해 사용하세요!!

- [README.md](https://github.com/ppochaco/daily-gist/blob/main/templates/README.md)
- [나만의체크포인트.md](https://github.com/ppochaco/daily-gist/blob/main/templates/%EB%82%98%EB%A7%8C%EC%9D%98%EC%B2%B4%ED%81%AC%ED%8F%AC%EC%9D%B8%ED%8A%B8.md)
- [학습정리.md](https://github.com/ppochaco/daily-gist/blob/main/templates/%ED%95%99%EC%8A%B5%EC%A0%95%EB%A6%AC.md)

## ⚙️ 초기 설정

### 1. 프로젝트 클론하기

```bash
git clone https://github.com/ppochaco/daily-gist.git
cd daily-gist

```

### 2. 의존성 설치하기

```bash
npm install
```

### 3. Github Token 생성하기

> 이미 저장해둔 GitHub Token이 있다면 해당 단계는 생략 가능합니다.

1. Github 프로필 → Settings → Developer settings → Personal access tokens → Tokens(classic)
2. `Generate new toekn(classic)` 클릭
3. `gist` 권한 체크
4. 생성된 토큰 복사

### 4. .env 파일 생성하기

> 토큰은 `ghp`로 시작합니다.
> 유저 아이디는 CodeSquad에서 사용하는 J000 형식을 입력하면 됩니다.

```bash
GITHUB_TOKEN=복사한_토큰
USER_ID=유저_아이디
```

## 📄 사용법

### 1. 명령어로 Gist를 생성하기

#### 명령어

```bash
npm run daily -- <day 숫자>
```

- `npm run daily -- 01`을 실행하면,
  Gist description에 `J000 - Day01`가 자동으로 작성됩니다.

#### 실행 결과

```
✅ Gist가 성공적으로 생성되었습니다.
🔗 URL: https://gist.github.com/username/gisturl
```

- 3개의 마크다운 파일이 포함된 gist가 private로 생성됩니다.

| terminal                                                                                                                           | gist                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| <img width="682" height="561" alt="Image" src="https://github.com/user-attachments/assets/ab8d0b9d-422e-46a1-a5b5-2695b96698d1" /> | <img width="930" height="475" alt="Image" src="https://github.com/user-attachments/assets/0330e965-cc20-43bc-86e1-b22c0140687f" /> |

### 2. URL 복사하기

### 3. 원하는 폴더 위치에 Gist 클론하기

#### 명령어

```bash
 git clone 복사한_URL 생성할_폴더_이름
```

#### 실행 결과

- clone한 폴더에 3개의 마크다운 파일이 생성됩니다.

| 원하는 위치에서 clone                                                                                                           | 폴더 이동 후 생성된 파일 확인                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| <img width="683" height="489" alt="ab" src="https://github.com/user-attachments/assets/f6d04cc7-6e25-4513-a72a-fc5f12e89be1" /> | <img width="683" height="489" alt="Image" src="https://github.com/user-attachments/assets/8280a47f-cc82-4a85-a3a1-b6aca6d4faf4" /> |

## 🙌🏻 Contribute

- 버그를 발견했거나 새로운 기능을 제안하고 싶다면, 아래 링크를 통해 Issue를 생성해주세요!

  - #### [버그 제보하기](https://github.com/ppochaco/gist-creator/issues/new?template=bug_report.md)
  - #### [기능 제안하기](https://github.com/ppochaco/gist-creator/issues/new?template=feature_request.md)
