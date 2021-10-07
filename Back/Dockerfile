FROM python

RUN pip3 install django

WORKDIR /usr/src/app

COPY . .

WORKDIR ./django-game
RUN pip3 install -r requirements.txt

CMD ["python3", "manage.py", "runserver", "0:8000"]

EXPOSE 8000
