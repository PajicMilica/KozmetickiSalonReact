
const CartProduct = ({ service }) => {
    
    return (
      <div className="card-cart" >
        <img
          className="card-img-left"
          className="card-img-top"
          src={service.i}
        />
        <div className="card-body">
        <h3 className="card-title">{service.title}</h3>
        <p className="card-text">{service.price}</p>
          <h3>Amount: {service.amount}</h3>
        </div>
      </div>
    );
  };
  
  export default CartProduct;
  