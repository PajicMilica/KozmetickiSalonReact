import CartServices from "./CartServices";

const Cart = ({ cartServices, cartSum}) => {
  return (
    <div className="cart">
      <h3>Vaša korpa:</h3>
      <h3>Iznos: {cartSum}</h3>
      {cartServices.map((service) => (
        <CartServices service={service} />
      ))}

    </div>
  );
};

export default Cart;
