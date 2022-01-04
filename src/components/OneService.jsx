import React from "react";
import { BsPlusLg, BsDashLg } from "react-icons/bs";


const OneService = ({ service, onAdd, onRemove }) => {


  return (
    <div className="card">
      <img
        className="card-img-top"
        src={service.i}
      />
      <div className="card-body">
        <h3 className="card-title">{service.title}</h3>
        <p className="card-text">{service.priceStr}</p>
        <button
            className="btn" onClick={() => onAdd(service.id)}
          >
            <BsPlusLg />
          </button>
          <button className="btn" onClick={() => onRemove(service.id)}>
            <BsDashLg />
          </button>
      </div>
    </div>
  );
};
  export default OneService;
