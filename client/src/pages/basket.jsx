// src/components/basket/basket.jsx
import React from 'react';
import Promo from './../components/promo/promo';
import { useBasket } from '../components/context/basketcontext';
import '../components/context/basket.css'
import { NavLink } from 'react-router-dom';
import basketFree from '../img/banner/basket_free.png'

function Basket(props) {
    const { basketItems } = useBasket();

    return (
        <section>
            {/* <Promo /> */}
            <div className="container">
                <div className="basket_field">

                    <h3 className='basket_title'>Корзина</h3>

                    {basketItems.length === 0 ? (
                        // <p>Ваша корзина пуста</p>
                        <div className="">
                            <img className='basketfree_img' src={basketFree}/>
                            <p className='basketfree_title'>Корзина пуста</p>
                            <p className='basketfree_subtitle'>Но это никогда не поздно исправить :)</p>
                            <NavLink to='/' className='basketfree_button'>В каталог товаров</NavLink>
                        </div>
                    ) : (
                        <ul className='basket_ul'>
                            {basketItems.map(item => (
                                <NavLink to={`/product/${item.id}`}>
                                    <li key={item.id}>
                                        <h3>{item.title}</h3>
                                        <img src={item.img} alt={item.title} />
                                        <div>Цена: {item.price}</div>
                                        <div>Рейтинг: {item.raiting}</div>
                                    </li>
                                </NavLink>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Basket;