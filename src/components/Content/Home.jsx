import React from 'react';

// Импортируем гифку
import gif from './goyda.gif';

const Home = ({ children }) => {
  return (
    <div>
      <h1>Домашняя страница</h1>
      {/* Вставляем гифку */}
      <img src={gif} alt="Example GIF" />
    </div>
  );
};

export default Home;
