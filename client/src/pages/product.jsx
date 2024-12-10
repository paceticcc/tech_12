import React from 'react';
import { useParams } from 'react-router-dom';
import { cards } from '../helpers/cards_list';
import { useBasket } from '../components/context/basketcontext';
import '../style/product.css'

function Product() {

    const { id } = useParams();
    const product = cards.find(card => card.id === parseInt(id));

    const { addToBasket } = useBasket();

    const handleAddToBasket = () => {
        addToBasket(product);
    };

    if (!product) {
        return <div>Товар не найден</div>;
    }

    return (
        <section>
            <div className="container">
                <div className="product_field">
                    <span className='product_title'>
                        {product.title}
                    </span>
                    <div className="product_img_filed">
                        <img className='product_img' src={product.img} alt={product.title} />
                    </div>
                    <div>Цена: {product.price}</div>
                    <div>Рейтинг: {product.raiting}</div>
                    <button onClick={handleAddToBasket} className="add_to_basket_button">
                        Добавить в корзину
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Product;