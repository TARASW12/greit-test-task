Тестове завдання для React Junior

📌 Опис завдання

Завдання полягало у створенні адаптивного гріду для відображення карток проєктів із кастомною пагінацією та слайдером зображень.

🚩 Основні вимоги:

Адаптивний дизайн – реалізований адаптивний грід, який коректно відображається на пристроях різних розмірів.

Кастомна пагінація – ручна реалізація пагінації з використанням хуків React (useState).

Слайдер зображень – реалізація власного слайдеру без сторонніх бібліотек (useState, useEffect, useRef).

Чистий код – використано React з функціональними компонентами та хуками.

Запит до API – отримано дані через Fetch API.

Обробка помилок – передбачена коректна обробка помилок API (відсутність даних, помилки сервера).

Без бібліотек – рішення не використовує сторонні бібліотеки типу axios, swiper, react-paginate тощо.

🔗 Використане API

Запит до API для отримання списку проєктів:

curl --location 'https://crm.server.pro-part.es/api/v1/secondary-projects/integration/projects?accessKey=A7gjfjj0WdBynt8d&secretKey=tGH5UlZcgNtAPrfq9MnmMhWji9j5vYXn&isPagination=true&size=30&page=0' \
--header 'Content-Type: application/json' \
--data '{}'

🛠️ Реалізовані фічі:

Адаптивний UI для різних розмірів екрану (від мобільних до десктопних пристроїв).

Грід із картками проєктів з кастомною ручною пагінацією.

Валідація відповідей API та обробка можливих помилок.

Повторно використовувані React-компоненти (картки, кнопки, слайдер).

🚀 Технології

React

React Hooks (useState, useEffect, useRef)

Fetch API

Tailwind CSS

TypeScript

Next.js

Проєкт розгорнуто і доступний за посиланням:
https://greit-test-task.vercel.app/

👉 Посилання на репозиторій GitHub
https://github.com/TARASW12/greit-test-task

📦 Як запустити локально

Клонувати репозиторій
git clone https://github.com/TARASW12/greit-test-task.git

Встановити залежності
npm install

Запустити сервер розробки
npm run dev

Проєкт відкриється за адресою http://localhost:3000
