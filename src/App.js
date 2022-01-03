
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Services from './components/Services';
//import higijenskiTretman from '.slike/higijenskiTretman.jpg';





function App() {
  const services = [
    {
      id: 1,
      i:"https://www.skincarecentar.com/wp-content/uploads/2019/11/1-medicinski-tretmani-lica.jpg",
      title: "Hemijski piling",
      price: "2000,00 dinara",
      amount: 0,
    },
    {
      id: 2,
      i: "http://www.cavimaster.com/wp-content/uploads/2015/01/pocetna-tretmani-lica.jpg",
      title: "Mezoterapija",
      price: "3000,00 dinara",
      amount: 0,
    },
    {
      id: 3,
      i: "https://mezokokteli.com/wp-content/uploads/2020/12/dermaroller.jpg",
      title: "Dermaroler",
      price: "3500,00 dinara",
      amount: 0,
    },
  ];
  return (
    <div className="App">
      <NavBar />
      <Services services={services} />
    
    </div>
  );

}

export default App;
