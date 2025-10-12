Описание
- Простое API на NestJS с сущностями Event и Booking.
- ORM: Prisma с SQLite (файл БД задаётся через переменную окружения `DATABASE_URL`).
- API Swagger доступен через `http://localhost:3000/api`.

1. Установить зависимости:
```bash
yarn install
```

2. Настроить окружение:
- Создайте `.env`:
```env
DATABASE_URL="file:./dev.db"
PORT=3000
```

3. Инициализировать/обновить Prisma:
```bash
npx prisma generate
npx prisma migrate dev --name init
```

4. Запустить приложение:
```bash
yarn start
```