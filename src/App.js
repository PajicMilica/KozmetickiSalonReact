
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Services from './components/Services';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart';



function App() {
  const [number, setNumber] = useState(0);
  const [cartServices, setCartServices] = useState([]);


  const [services] = useState([
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
    {
      id: 4,
      i: "https://www.zajenata.bg/gallery/111/big_4a0a8291f7cc0286193ba846e6c12fd1.jpg",
      title: "Nadogradnja noktiju",
      price: "1700,00 dinara",
      amount: 0,
    },
    {
      id: 5,
      i: "https://mezokokteli.com/wp-content/uploads/2020/12/dermaroller.jpg",
      title: "Dermaroler",
      price: "3500,00 dinara",
      amount: 0,
    },
  ]);

  const refreshCart = () => {
    const cartServices = services.filter((service) => service.amount > 0);
    setCartServices(cartServices);
  };


  const addServices = (id) => {
    services.map((service) => {
      if (service.id === id) {
        service.amount = service.amount + 1;
        setNumber(number + 1);
        refreshCart();
      }
    });
  };
  const removeServices = (id) => {
    services.map((service) => {
      if (service.id === id) {
        if (service.amount > 0) {
          service.amount = service.amount - 1;
          setNumber(number - 1);
          refreshCart();
        } else {
          alert("Amount of service is already 0.");
        }
      }
    });
  };



  return (
    <div className="App">
      <BrowserRouter>

      <NavBar number={number}></NavBar>

      <Routes>

      <Route path="/" element={
      <Services services={services} onAdd={addServices} onRemove={removeServices} /> } />

      <Route path = "/cart" element={<Cart  cartServices={cartServices} />}/>

      </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
