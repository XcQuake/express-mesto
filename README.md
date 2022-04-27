[![Tests](https://github.com/XcQuake/express-mesto/actions/workflows/tests-13-sprint.yml/badge.svg)](https://github.com/XcQuake/express-mesto/actions/workflows/tests-13-sprint.yml) [![Tests](https://github.com/XcQuake/express-mesto/actions/workflows/tests-14-sprint.yml/badge.svg)](https://github.com/XcQuake/express-mesto/actions/workflows/tests-14-sprint.yml)
# Проект Mesto фронтенд + бэкенд

## Описание 
Серверная часть проекта Mesto

## Технологии
* NodeJS
* ExpressJS
* MongoDB

**Используемые модули:**
* bcryptjs
* body-parser
* celebrate
* cookie-parser
* dotenv
* express-rate-limit
* helmet
* jsonwebtoken
* mongoose
* validator

## Директории

`/routes` — папка с файлами роутера  
`/controllers` — папка с файлами контроллеров пользователя и карточки   
`/models` — папка с файлами описания схем пользователя и карточки  
`/errors` — папка с файлами кастомных ошибок
`/middlewares` — папка с файлами мидлвэров
`/validators` — папка с файлами кастомных валидаторов

## Запуск проекта

`npm run start` — запускает сервер   
`npm run dev` — запускает сервер с hot-reload
