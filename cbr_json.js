"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const fs_1 = __importDefault(require("fs"));
const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
axios_1.default.get(url)
    .then(response => {
    const data = response.data;
    const rates = [];
    for (let currency in data.Valute) {
        rates.push({
            currency: data.Valute[currency].Name,
            charCode: data.Valute[currency].CharCode,
            value: data.Valute[currency].Value
        });
    }
    fs_1.default.writeFileSync('cbr_rates.json', JSON.stringify(rates, null, 2));
    console.log(`Сохранено ${rates.length} курсов валют`);
    console.log(rates.slice(0, 5));
})
    .catch(error => {
    console.error('Ошибка:', error.message);
});
