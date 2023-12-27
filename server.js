const express = require('express');
const path = require('path');
const compression = require('compression'); // Подключаем middleware сжатия
const app = express();

const PORT = process.env.PORT || 3000;
const oneDay = 24 * 60 * 60 * 1000; // Кеширование на 1 день

// Используем middleware сжатия
app.use(compression());

// Настройка кеширования статических файлов
app.use(express.static(path.join(__dirname, 'build'), {
  maxAge: oneDay,
  etag: true // Включение ETag для кеширования
}));

// Обрабатываем любой другой запрос на сервере
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Запускаем сервер на всех сетевых интерфейсах
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
