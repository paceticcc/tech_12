import React, { useState, useEffect } from 'react';
import Card from '../card/card';
import './covers.css';
import axios from 'axios'; // Импортируем axios

function Covers() {
  const [covers, setCovers] = useState([]); // Состояние для хранения данных о чехлах

  useEffect(() => {
    // Загрузка данных с сервера
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        // Фильтруем данные по категории "Чехлы"
        const filteredCovers = response.data.filter(card => card.category === 'Чехлы');
        setCovers(filteredCovers); // Устанавливаем отфильтрованные данные
      })
      .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
      });
  }, []); // Пустой массив зависимостей означает, что эффект выполнится только один раз при монтировании

  return (
    <section className='covers'>
      <div className="container">
        <div className="covers_header">
          <h2 className='tittle_2'>Чехлы</h2>
        </div>
        <div className="covers_cards">
          {covers.map(card => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              img={card.img}
              price={card.price}
              raiting={card.raiting}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Covers;