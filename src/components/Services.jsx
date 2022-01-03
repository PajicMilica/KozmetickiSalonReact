import React from "react";
import OneService from "./OneService";

const Services = ({ services, onAdd, onRemove  }) => {

  return (
    <div className="all-services">

      {services.map((service) => (
        <OneService
         key={service.id}
         service={service}
         onAdd={onAdd}
         onRemove={onRemove}
/>
      ))}


    </div>
  );
};


export default Services;
