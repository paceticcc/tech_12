import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';
import '../../style/allproductslist.css';

function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        console.log(response.data); // Проверьте данные в консоли
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
      });
  }, []);

  // Функция для обновления товара
  const handleUpdateProduct = (id, updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, ...updatedProduct } : product
      )
    );
  };

  // Функция для удаления товара
  const handleDeleteProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <div className="container">
      <div className="all-products_header">
        <h2 className='tittle_2'>Все товары</h2>
      </div>
      <div className="all_products_cards_size">
        <div className="all_products_cards">
          {products.map(product => (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              img={product.img}
              price={product.price}
              raiting={product.raiting}
              category={product.category}
              characteristic={product.characteristic}
              // imgbuy={product.imgbuy} // Раскомментируйте, если это поле используется
              onUpdate={handleUpdateProduct} // Функция для обновления товара
              onDelete={handleDeleteProduct} // Функция для удаления товара
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllProducts;