import React, { useState } from 'react';
import axios from 'axios';
import '../components/adminpanel/adminpanel.css'

function AdminPanel() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [raiting, setRaiting] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/products', {
                title,
                price,
                raiting,
                category
            });
            alert('Product added');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
            <input type="text" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
            <input type="text" placeholder="Raiting" value={raiting} onChange={e => setRaiting(e.target.value)} />
            <input type="text" placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} />
            <button type="submit">Add Product</button>
        </form>
    );
}

export default AdminPanel;