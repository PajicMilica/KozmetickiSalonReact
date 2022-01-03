import React from "react";
import { BsPlusLg, BsDashLg } from "react-icons/bs";


const OneService = ({ service }) => {
  
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={service.i}
      />
      <div className="card-body">
        <h3 className="card-title">{service.title}</h3>
        <p className="card-text">{service.price}</p>
        <button
            className="btn"
          >
            <BsPlusLg />
          </button>
          <button className="btn">
            <BsDashLg />
          </button>
      </div>
    </div>
  );
};
  export default OneService;
