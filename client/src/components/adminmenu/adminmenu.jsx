import React from 'react';
import { NavLink } from 'react-router-dom';
import './adminmenu.css'; // Импорт стилей

function AdminMenu() {
  return (
    <div className="admin-menu">
      <NavLink to="/admin" className="admin-menu__link">Admin Panel</NavLink>
    </div>
  );
}

export default AdminMenu;