import React, { useState, useEffect } from 'react';
import './headphones.css';
import Card from '../card/card';
import { cards } from '../../helpers/cards_list';

function Headphones() {
    const [headphones, setHeadphones] = useState([]);

    useEffect(() => {
        const filteredHeadphones = cards.filter(card => card.category === 'Наушники');
        setHeadphones(filteredHeadphones);
    }, []);

    return (
        <section className='headphones'>
            <div className="container">
                <div className="headphones_header">
                    <h2 className='tittle_2'>Наушники</h2>
                </div>
                <div className="headphones_cards">
                    {headphones.map(card => (
                        <Card key={card.id} id={card.id} title={card.title} img={card.img} price={card.price} raiting={card.raiting} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Headphones;