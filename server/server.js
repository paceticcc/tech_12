const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 5000;

// Отдача статических файлов из папки public
app.use(express.static(path.join(__dirname, 'public')));

// Middleware для обработки JSON и CORS
app.use(cors());
app.use(express.json());
// Обслуживаем статические файлы из папки "public"
app.use('/images', express.static('public/images'));

// Подключение к базе данных MySQL
const db = mysql.createConnection({
  host: 'localhost',     // Хост базы данных
  user: 'root',          // Имя пользователя MySQL
  password: '********', // Пароль пользователя MySQL
  database: 'magazine'   // Название базы данных
});

// Проверка подключения к базе данных
db.connect((err) => {
  if (err) {
    console.error('Ошибка подключения к базе данных:', err);
  } else {
    console.log('Подключение к базе данных успешно установлено');
  }
});

// Обработчик для корневого маршрута
app.get('/', (req, res) => {
  res.send('Сервер работает!');
});

// API для получения всех товаров
app.get('/api/products', (req, res) => {
  const sql = 'SELECT * FROM cards';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Ошибка при выполнении запроса:', err);
      res.status(500).send('Ошибка сервера');
    } else {
      res.json(result);
    }
  });
});

// API для получения товара по ID
app.get('/api/products/:id', (req, res) => {
  const productId = req.params.id;
  const sql = 'SELECT * FROM cards WHERE id = ?'; // Исправлено: таблица "cards" вместо "товары"

  db.query(sql, [productId], (err, result) => {
    if (err) {
      console.error('Ошибка при выполнении запроса:', err);
      res.status(500).send('Ошибка сервера');
    } else {
      if (result.length > 0) {
        res.json(result[0]);
      } else {
        res.status(404).send('Товар не найден');
      }
    }
  });
});

// API для получения товаров по списку ID
app.post('/api/products/by-ids', (req, res) => {
  const productIds = req.body.ids;
  if (!Array.isArray(productIds)) {
    return res.status(400).send('Некорректный формат данных: ожидается массив ID');
  }

  const sql = 'SELECT * FROM cards WHERE id IN (?)'; // Исправлено: таблица "cards" вместо "товары"

  db.query(sql, [productIds], (err, result) => {
    if (err) {
      console.error('Ошибка при выполнении запроса:', err);
      res.status(500).send('Ошибка сервера');
    } else {
      res.json(result);
    }
  });
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});