import React from 'react';

import './App.css';
import Header from './atomos/header';
import Footer from './atomos/footer';
import Avatar from './atomos/avatar';
import Futbol from './futbol.jpg';
import Card from './atomos/card';
import Badge from './atomos/badge';
import Counter from './atomos/counter';

function App() {
  return (
    <div className="App">
      <Header title="Soccer"/>
      <div className="container"> 
        <Avatar 
        imageSrc={Futbol} 
        description="deporte"/>
        <Card title="REAL MADRID" content="The best team in the world and its best player was Cristiano Ronaldo"/>
        <Card title="BAYER DE MUNICH" content="one of the best teams in England and is recognized for its titles in Europe"/>
        <Card title="MANCHESTER UNITED" content="The team that leads the German league almost every year"/>
        <Badge label="The best players"/>
        <Counter/>
      </div>
        <Footer content="Created with ❤️ by Nicolas"/>
    </div>
  );
}

export default App;
