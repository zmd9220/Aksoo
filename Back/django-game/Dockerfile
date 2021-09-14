#아래 적힌 이미지를 베이스 이미지로 한다.
#이 명령어가 실행되면 Dockerhub에서 해당 이미지를 pull한다.
FROM nikolaik/python-nodejs:python3.8-nodejs14

#mkdir 명령어를 실행한다.
RUN mkdir /code

#동작 디렉토리를 /code로 옮긴다.
WORKDIR /code

#requirement.txt를 code 아래로 옮긴다.
ADD ./requirements.txt /code/requirements.txt 

RUN pip install -r /code/requirements.txt #requirement.txt를 읽어서 필요한 패키지를 다운받는다
RUN pip install gunicorn #python과 nginx를 연결해주는 interface

#현재 디렉토리를 /code에 복사해서 넣겠다
ADD . /code 
RUN ["chmod", "+x", "start.sh"] # bash script 권한 설정
ENTRYPOINT ["sh","start.sh"] # bash script 실행, 이 스크립트는 다음 챕터에서 만들겠다

# # echo "==> Migration 파일 생성"
# RUN yes | python manage.py makemigrations --settings=config.deploy.settings

# # echo "==> Migrate 실행"
# RUN python manage.py migrate --settings=config.deploy.settings --fake-initial

# # echo "==> collectstatic 실행"
# RUN python manage.py collectstatic --settings=config.deploy.settings --noinput -v 3

# # echo "==> 패키지 다운로드"
# RUN pip install -r /code/requirements.txt

# # echo "==> 배포!"
# CMD [gunicorn -b 0.0.0.0:8000 --env DJANGO_SETTINGS_MODULE=django_game.settings django_game.wsgi:application]
# # CMD ["gunicorn", "--bind", "0.0.0.0:8000", "stock.wsgi:application"]

