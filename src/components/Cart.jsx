import CartServices from "./CartServices";

const Cart = ({ cartServices }) => {
  return (
    <div className="cart">
      <h3>This is your cart.</h3>
      {cartServices.map((service) => (
        <CartServices key={service.id}service={service} />
      ))}

    </div>
  );
};

export default Cart;
