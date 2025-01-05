import React, { useState, useEffect } from 'react';
import Promo from './../components/promo/promo';
import { useBasket } from '../components/context/basketcontext';
import '../components/context/basket.css';
import { NavLink } from 'react-router-dom';
import basketFree from '../img/banner/basket_free.png';
import axios from 'axios'; // Импортируем axios

function Basket(props) {
  const { basketItems } = useBasket();
  const [products, setProducts] = useState([]); // Состояние для хранения данных о товарах
  const [loading, setLoading] = useState(true); // Состояние для отслеживания загрузки
  const [error, setError] = useState(null); // Состояние для отслеживания ошибок

  // Загрузка данных о товарах
  useEffect(() => {
    if (basketItems.length > 0) {
      const productIds = basketItems.map(item => item.id); // Получаем массив ID товаров

      axios.post('http://localhost:5000/api/products/by-ids', { ids: productIds })
        .then(response => {
          setProducts(response.data); // Устанавливаем данные о товарах
          setLoading(false); // Загрузка завершена
        })
        .catch(error => {
          console.error('Ошибка при загрузке данных:', error);
          setError('Ошибка при загрузке данных'); // Устанавливаем ошибку
          setLoading(false); // Загрузка завершена
        });
    } else {
      setLoading(false); // Если корзина пуста, загрузка завершена
    }
  }, [basketItems]);

  // Если данные загружаются
  if (loading) {
    return <div>Загрузка...</div>;
  }

  // Если произошла ошибка
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section>
      {/* <Promo /> */}
      <div className="container">
        <div className="basket_field">
          <h3 className='basket_title'>Корзина</h3>

          {basketItems.length === 0 ? (
            <div className="">
              <img className='basketfree_img' src={basketFree} alt="Корзина пуста" />
              <p className='basketfree_title'>Корзина пуста</p>
              <p className='basketfree_subtitle'>Но это никогда не поздно исправить :)</p>
              <NavLink to='/' className='basketfree_button'>В каталог товаров</NavLink>
            </div>
          ) : (
            <ul className='basket_ul'>
              {products.map(product => (
                <div className='basket_ul_info' key={product.id}>
                  <li className='basket_ul_info_position'>
                    <h3>{product.title}</h3>
                    <img src={`http://localhost:5000/${product.img}`} alt={product.title} />
                    <div className='one'>Цена: {product.price}</div>
                    <div className='two'>Рейтинг: {product.raiting}</div>
                    <img className='buy_botton' src={`http://localhost:5000/${product.imgbuy}`} alt="Купить" />
                  </li>
                  <NavLink to={`/product/${product.id}`} className='go_to_product_info'>
                    <div>Узнать больше о товаре</div>
                  </NavLink>
                </div>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

export default Basket;