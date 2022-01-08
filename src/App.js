
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Services from './components/Services';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart';
import Home from './components/Home';



function App() {
  const [number, setNumber] = useState(initNumber());
  const [cartServices, setCartServices] = useState([]);
  const [AllSumServices, setAllSumServices] = useState([]);
  const [cartSum, setCartSum] = useState(initSumCart());
  const [storage, setStorage] = useState(initStorage())


  const [services] = useState([
    {
      id: 1,
      i:"https://www.skincarecentar.com/wp-content/uploads/2019/11/1-medicinski-tretmani-lica.jpg",
      title: "Hemijski piling",
      priceStr: "Cena: 2000.00 din.",
      price: 2000.00,
    },
    {
      id: 2,
      i: "http://www.cavimaster.com/wp-content/uploads/2015/01/pocetna-tretmani-lica.jpg",
      title: "Mezoterapija",
      priceStr: "Cena: 3000.00 din.",
      price: 3000.00,
    },
    {
      id: 3,
      i: "https://mezokokteli.com/wp-content/uploads/2020/12/dermaroller.jpg",
      title: "Dermaroler",
      priceStr: "Cena: 3500.00 din.",
      price: 3500.00,
    },
    {
      id: 4,
      i: "https://www.zajenata.bg/gallery/111/big_4a0a8291f7cc0286193ba846e6c12fd1.jpg",
      title: "Nadogradnja noktiju",
      priceStr: "Cena: 1700.00 din.",
      price: 1700.00,
    },
    {
      id: 5,
      i: "https://integrabybeautyimagini.com/wp-content/uploads/2019/11/depilacija.jpg",
      title: "Depilacija",
      priceStr: "Cena: 1300.00 din.",
      price: 1300.00,
    },
    {
      id: 6,
      i: "https://www.mirraprof.rs/wp-content/uploads/2019/05/lash-lift-1-300x300.jpg",
      title: "Lash lift trepavica",
      priceStr: "Cena: 2400.00 din.",
      price: 2400.00,
    },
  
  ]);

  const refreshCart = () => {
    const cartServices = services.filter((service) => service.amount > 0);
    setCartServices(cartServices);
  };

  const STORAGE_KEY="cardServices";

  function initStorage() {
    if (!localStorage.getItem("cardServices")) {
      return [];
    }
    return JSON.parse(localStorage.getItem("cardServices"));
  }

  function initSumCart() {
    if (!localStorage.getItem("cardServices")) {
      return 0;
    }
    const cartItems = JSON.parse(localStorage.getItem("cardServices"));
    return cartItems.reduce((sum, x) => {return sum + (x.price*x.amount)}, 0);
  };

  function initNumber() {
    if (!localStorage.getItem("cardServices")) {
      return 0;
    }
    const cartItems = JSON.parse(localStorage.getItem("cardServices"));
    return cartItems.reduce((sum, x) => {return sum + x.amount}, 0);
  };

  // const addServices = (id) => {
  //   services.map((service) => {
  //     if (service.id === id) {
  //       service.amount = service.amount + 1;
  //       var cartItems = storage; 
  //       var indeks = cartItems.map((x) => x.id ).indexOf(service.id);
  //       if(indeks >= 0) {
  //         cartItems[indeks].amount = cartItems[indeks].amount + 1;
  //       } else {
  //         var item={
  //           id: service.id,
  //           i: service.i,
  //           title: service.title,
  //           priceStr: service.priceStr,
  //           price: service.price,
  //           amount: service.amount,
  //         };
  //         cartItems.push(item);
  //       }
  //       setNumber(cartItems.reduce((sum, x) => {return sum + x.amount}, 0));
  //       setCartSum(cartItems.reduce((sum, x) => {return sum + (x.price*x.amount)}, 0));
  //       setStorage(cartItems);
  //       localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
  //       console.log("Crd" + cartSum);
  //     }
  //   });
  // };

  const addServices = (id) => {
    const indeks = storage.map((x) => x.id ).indexOf(id);  
    var cartItems = storage;
    if (indeks >= 0) {
        cartItems[indeks].amount = cartItems[indeks].amount + 1;
    } else {
      const serviceIndex = services.map((x) => x.id ).indexOf(id);
      const service = services[serviceIndex];
      var item={
        id: service.id,
        i: service.i,
        title: service.title,
        priceStr: service.priceStr,
        price: service.price,
        amount: 1,
      };
      cartItems.push(item);
    }
    setNumber(cartItems.reduce((sum, x) => {return sum + x.amount}, 0));
    setCartSum(cartItems.reduce((sum, x) => {return sum + (x.price*x.amount)}, 0));
    setStorage(cartItems);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
  };


  const removeServices = (id) => {
    const filtered = storage.filter((service) => service.id === id);
    if (filtered.length > 0) {
      const service = filtered[0];
      service.amount = service.amount - 1;
      var cartItems = storage;
      var indeks = cartItems.map((x) => x.id ).indexOf(service.id);
      if(service.amount > 0) {
        cartItems[indeks].amount = service.amount;
      } else {
        cartItems.splice(indeks, 1);
      }
      setNumber(cartItems.reduce((sum, x) => {return sum + x.amount}, 0));
      setCartSum(cartItems.reduce((sum, x) => {return sum + (x.price*x.amount)}, 0));
      setStorage(cartItems);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
    } else {
      alert("Usluga ne postoji u korpi.");
    }
  };


  return (
    <div className="App">
      <BrowserRouter>

        <NavBar number={number}></NavBar>

        <Routes>
          <Route path = "/" element={<Home />}/>
          <Route path="/services" element={
          <Services services={services} onAdd={addServices} onRemove={removeServices} /> } />
           
          <Route path = "/cart" element={<Cart  cartServices={storage} cartSum={cartSum/*storageSum()*/} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
