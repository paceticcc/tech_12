import React, { useState } from 'react';
import axios from 'axios';
import '../components/adminpanel/adminpanel.css';
import AllProductsList from '../components/adminpanel/AllProductsList';
import AddProductForm from '../components/adminpanel/AddProductForm'; // Импортируем компонент AddProductForm

function AdminPanel() {
  const [activeTab, setActiveTab] = useState('Товары');
  const [showAddProductForm, setShowAddProductForm] = useState(false);

  const handleProductAdded = (newProduct) => {
    // Здесь можно обновить список товаров, если это необходимо
    console.log('Новый товар добавлен:', newProduct);
  };

  return (
    <div className="admin">
      <div className="container">
        <div className="admin_navigation">
          <li
            className={`menu_bar ${activeTab === 'Товары' ? 'active' : ''}`}
            onClick={() => setActiveTab('Товары')}
          >
            Товары
          </li>
          <li
            className={`menu_bar ${activeTab === 'Пользователи' ? 'active' : ''}`}
            onClick={() => setActiveTab('Пользователи')}
          >
            Пользователи
          </li>
        </div>

        {/* Отображаем контент в зависимости от активной вкладки */}
        {activeTab === 'Товары' && (
          <div>
            <button className='add_new_product_button' onClick={() => setShowAddProductForm(!showAddProductForm)}>
              {showAddProductForm ? 'Скрыть форму добавления товара' : 'Добавить новый товар'}
            </button>
            {showAddProductForm && <AddProductForm onProductAdded={handleProductAdded} />}
            <AllProductsList />
          </div>
        )}
        {activeTab === 'Пользователи' && <div>Пользователи</div>}
      </div>
    </div>
  );
}

export default AdminPanel;