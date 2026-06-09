# Парсер курсов валют на TypeScript

Парсер получает данные с API cbr-xml-daily.ru и сохраняет курсы валют в файл cbr_rates.json.  
Переписан с JavaScript на TypeScript.

## Как 🚀 запустить

1. Установи [Node.js](https://nodejs.org/)
2. Склонируй репозиторий:
   ```bash
   git clone https://github.com/xVOLKx/ts-cbr-parser.git
   cd ts-cbr-parser
   ```
3. Установи зависимости:
    ```bash
    npm install
    ```
4. Скомпилируй TypeScript:
    ```bash
    npm run build
    ```
5. Запусти:
    ```bash
    npm start
    ```
Результат

· В консоль выводятся первые 5 курсов валют.
· Все 54 курса сохраняются в файл cbr_rates.json.

🛠️ Технологии

· Node.js
· TypeScript
· Axios