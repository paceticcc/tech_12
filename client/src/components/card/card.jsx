import React from 'react';
import './card.css';
import cardRaiting from './../../img/icons/like_con.png';
import { NavLink } from 'react-router-dom';
import { useBasket } from '../context/basketcontext';
import baskettake from '../../img/icons/cart_icon.png'

function Card(props) {
    const { addToBasket } = useBasket();

    const handleAddToBasket = () => {
        addToBasket(props);
    };

    return (
        <section className='card'>
            <div className="container">
                <NavLink to={`/product/${props.id}`} className='card_link'>
                    <img className='card_image' src={`http://localhost:5000/${props.img}`} /> {/* Изображение загружается с сервера */}
                </NavLink>
                <div className="card_body">
                    <NavLink to={`/product/${props.id}`} className="card_text">
                        <div className="card_title">
                            {props.title}
                        </div>
                    </NavLink>
                    <div className="card_price">{props.price}$</div>
                    <div className="card_icon">
                        <div href='#корзина' className='card_link_to_cart'>
                            <img className='card_image_raiting' src={cardRaiting} alt="" />
                        </div>
                        <div className="card_raiting">Рейтинг {props.raiting}</div>
                    </div>
                    <button onClick={handleAddToBasket} className="add_to_basket_button">
                        <img className='card_image_raiting' src={props.imgbuy} alt="" />
                        {/* Добавить в корзину */}
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Card;