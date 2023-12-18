<p align="center">
  <a href="https://github.com/c3kta/nodejs-typescript-swagger-expressjs-pg-production-ready-template-2024/tree/main"><img src="https://cdn-icons-png.flaticon.com/512/2164/2164832.png" width="200" alt="Nest Logo" /></a> 
</p>

<p align="center">Production ready шаблон для создания REST API на Node.js</p>

## Описание

Шаблон предназначен для быстрой инциализации проектов на [Express.js](https://expressjs.com/ru/), [TypeScript](https://www.typescriptlang.org/) и [PostgreSQL](https://www.postgresql.org/).

## Установка
Склонируйте репозиторий на свою локальную машину
```bash
$ git clone https://github.com/c3kta/nodejs-typescript-swagger-expressjs-pg-production-ready-template-2024.git
```

Перейдите в папку с проектом
```bash
$ cd nodejs-typescript-swagger-expressjs-pg-production-ready-template-2024
```

Установите все зависимости
```bash
$ npm install
```

Инциализируйте свой .env файл по примеру:
```
# APPLICATION
PORT=8000
VERSION=1.0.0
NODE_ENV=development

# DATABASE
DB_USER=admin
DB_PASSWORD=admin
DB_HOST=localhost
DB_PORT=5432
DB_MAIN_NAME=flame
```

## Запуск приложения

```bash
# Скомпилировать проект
$ npm run build

# Запустить в режиме реального времени
$ npm run start:dev

# Запустить в pruduction моде
$ npm run start:prod

# Запустить линтер
$ npm run lint
```

## Документация
Для документации в этом проекте используется [SWAGGER](https://swagger.io/).

Чтобы получить полную докуменитацию по ключам данного API, после инициализации проекта на своей локальной машине, перейдите на http://localhost:3000/ \
Для переноса всех ключей API в [Postman](https://www.postman.com/) нажмите на "Импортировать коллекцию по ссылке" и вставьте это http://localhost:8000/api-docs/swagger.json

## Мои контакты

- Вконтакте - [@maximtark](https://vk.com/maximtark)
- Telegram - [@nodejsman](https://t.me/nodejsman)
- HeadHunter - [JavaScript developer](https://rostov.hh.ru/resume/2741aa41ff031e9b950039ed1f5a444f554777/)

<p align="center" style="margin-top: 30px;">
    <a href="https://vk.com/maximtark" target="_blank"><img style="width: 50px; margin: 0 30px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/1024px-VK_Compact_Logo_%282021-present%29.svg.png"></a>
    <a href="https://t.me/nodejsman" target="_blank"><img style="width: 50px; margin: 0 30px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/512px-Telegram_2019_Logo.svg.png"></a>
    <a href="https://rostov.hh.ru/resume/2741aa41ff031e9b950039ed1f5a444f554777/" target="_blank"><img style="width: 50px; margin: 0 30px" src="https://tech.hh.ru/api/logos/min-hh-red.png"></a>
</p>