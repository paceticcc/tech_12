import React, { useState, useEffect } from 'react';
import './wireless_headphones.css';
import Card from '../card/card';
import { cards } from '../../helpers/cards_list';

function WirelessHeadphones() {
    const [wirelessHeadphones, setWirelessHeadphones] = useState([]);

    useEffect(() => {
        const filteredWirelessHeadphones = cards.filter(card => card.category === 'Беспроводные наушники');
        setWirelessHeadphones(filteredWirelessHeadphones);
    }, []);

    return (
        <section className='wireless_headphones'>
            <div className="container">
                <div className="wireless_headphones_header">
                    <h2 className='tittle_2'>Беспроводные наушники</h2>
                </div>
                <div className="wireless_headphones_cards">
                    {wirelessHeadphones.map(card => (
                        <Card key={card.id} id={card.id} title={card.title} img={card.img} price={card.price} raiting={card.raiting} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WirelessHeadphones;