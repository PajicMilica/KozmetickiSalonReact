
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Services from './components/Services';
import { useState } from "react";


function App() {
  const [number, setNumber] = useState(0);
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
  ]);


  const addServices = (id) => {
    services.map((service) => {
      if (service.id === id) {
        service.amount = service.amount + 1;
        setNumber(number + 1);
      }
    });
  };
  const removeServices = (id) => {
    services.map((service) => {
      if (service.id === id) {
        if (service.amount > 0) {
          service.amount = service.amount - 1;
          setNumber(number - 1);
        } else {
          alert("Amount of service is already 0.");
        }
      }
    });
  };



  return (
    <div className="App">
      <NavBar />
      <Services services={services} onAdd={addServices} onRemove={removeServices} />
    
    </div>
  );

}

export default App;
