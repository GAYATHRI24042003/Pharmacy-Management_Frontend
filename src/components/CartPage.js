import React, { useState } from 'react';
import { updateUser } from '../Service/Service';
import '../styles/cart.css'

const CartPage = ({ items, mail, onClose }) => {
  const [quantities, setQuantities] = useState(
    items.reduce((acc, item) => {
      acc[item.id] = 0; // Initialize quantities to 1 for each item
      return acc;
    }, {})
  );
  const[items1,setitems]=useState(items)

const handleQuantityChange = (itemId, quantity) => {

  const updatedItems = items1.map(item => {
    if (item.id === itemId) {
      return {
        ...item,
        quantity: quantity
      };
    }
    return item; 
  });
 
 
  setitems(updatedItems);
};


  const totalPrice= items1.reduce((total, item) => {
    return total + (item.price*item.quantity);
  }, 0)

  const handleBuy = () => {
    const products = items1.map(product => {
      const { id, ...productWithoutId } = product;
      return productWithoutId;
    });
    updateUser(mail,{mail,products}).then((response)=>{
      console.log(response.data)
  }).catch(error=>{
      console.log(error)
  })
  console.log("products",products)
    console.log('Buying items:', items1);
    onClose();
  };

  return (
    <div className="cart-overlay">
      <div className="cart-container">
        <div className="close-btn-container">
          <button className="close-btn" onClick={onClose}>Close</button>
        </div>
        <h2>Cart</h2>
        {items1.map(item => (
          <div key={item.id} className="cart-item">
            <div className="item-details">
              <span className="item-name">{item.pname}</span>
              <span className="item-price">${item.price}</span>
            </div>
            <div className="quantity-controls">
              <button
                onClick={() => handleQuantityChange(item.id,Math.max(item.quantity - 1,0 ))}
              >
                -
              </button>
              <span className="item-quantity">{item.quantity}</span>
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
        ))}
        <div className="total-price">Total: ${totalPrice}</div>
        <button onClick={handleBuy}>Buy</button>
      </div>
    </div>
  );
};

export default CartPage;
