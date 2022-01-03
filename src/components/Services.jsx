import React from "react";
import OneService from "./OneService";

const Services = ({ services }) => {

  return (
    <div className="all-services">

      {services.map((service) => (
        <OneService service={service} />
      ))}


    </div>
  );
};


export default Services;
