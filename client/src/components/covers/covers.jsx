import React from 'react';
import Card from '../card/card';
import './covers.css';
import { cards } from '../../helpers/cards_list';

function Covers() {
    const covers = cards.filter(card => card.category === 'Чехлы');

    return (
        <section className='covers'>
            <div className="container">
                <div className="covers_header">
                    <h2 className='tittle_2'>Чехлы</h2>
                </div>
                <div className="covers_cards">
                    {covers.map(card => (
                        <Card key={card.id} id={card.id} title={card.title} img={card.img} price={card.price} raiting={card.raiting} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Covers;