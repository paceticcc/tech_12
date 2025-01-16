import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Восстановление пользователя из localStorage при загрузке
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Функция для входа пользователя
  const loginUser = (userData) => {
    const isAdmin = userData.email === 'admin1@gmail.com'; // Проверка на администратора
    setUser({ ...userData, isAdmin });
    localStorage.setItem('user', JSON.stringify({ ...userData, isAdmin })); // Сохраняем пользователя в localStorage
  };

  // Функция для выхода пользователя
  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('user'); // Удаляем пользователя из localStorage
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};