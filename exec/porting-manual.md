## 1. Back-end

### 1) Back/django-game/ 으로 이동한다.

### 2) 터미널창을 열어 다음과 같이 입력하여 가상환경을 만든다.

```bash
python -m venv venv
```

### 3) 다음과 같이 입력하여 가상환경을 킨다.

```bash
source venv/Scripts/activate
```

### 4) 다음과 같이 입력하여 필요한 package를 다운받는다.

```bash
pip install -r requirements.txt
```

### 5) 장고 서버를 킨다.

```bash
python manage.py runserver
```



## 2. Front-end

### 1) .env.local 파일을 Front/client/ 경로에 만든다.

### 2) .env.local을 열어 아래 내용을 붙여넣는다.

```
VUE_APP_SERVER_URL = http://127.0.0.1:8000
```

### 3) Front/client/ 경로에서 터미널창을 킨다.

### 4) 다음과 같이 package를 설치한다.

```bash
npm install
```

### 5) 다음과 같이 서버를 킨다.

```bash
npm run serve
```

