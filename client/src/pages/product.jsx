import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Импортируем axios
import { useBasket } from '../components/context/basketcontext';
import '../style/product.css';
import baskettake from '../img/icons/cart_icon.png';

function Product() {
  const { id } = useParams(); // Получаем id из URL
  const [product, setProduct] = useState(null); // Состояние для хранения данных о товаре
  const [loading, setLoading] = useState(true); // Состояние для отслеживания загрузки
  const [error, setError] = useState(null); // Состояние для отслеживания ошибок

  const { addToBasket } = useBasket();

  // Загрузка данных о товаре
  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(response => {
        setProduct(response.data); // Устанавливаем данные о товаре
        setLoading(false); // Загрузка завершена
      })
      .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
        setError('Ошибка при загрузке данных'); // Устанавливаем ошибку
        setLoading(false); // Загрузка завершена
      });
  }, [id]); // Зависимость от id

  const handleAddToBasket = () => {
    if (product) {
      addToBasket(product); // Добавляем товар в корзину
    }
  };

  // Если данные загружаются
  if (loading) {
    return <div>Загрузка...</div>;
  }

  // Если произошла ошибка
  if (error) {
    return <div>{error}</div>;
  }

  // Если товар не найден
  if (!product) {
    return <div>Товар не найден</div>;
  }

  return (
    <section>
      <div className="container">
        <span className='product_title'>
          {product.title}
        </span>

        <div className="product_field">
          <div className="product_img_filed">
            <img className='product_img' src={`http://localhost:5000/${product.img}`} alt={product.title} />
          </div>
          <div className="product_info">
            <div className="product_info_poisition">
              <div className='product_price'>Цена: {product.price}</div>
              <div>Рейтинг: {product.raiting}</div>
              <button onClick={handleAddToBasket} className="add_to_basket_button">
                <img className='card_image_raiting' src={baskettake} alt="" />
                {/* Добавить в корзину */}
              </button>
              <div className="add_comment">
                <div className="comment_text">Оставить отзыв:</div>
              </div>
            </div>
          </div>
        </div>
        <div className="pepole_comment">
          <div className="people_comment_block">Отзывы других покупателей</div>
        </div>
      </div>
    </section>
  );
}

export default Product;