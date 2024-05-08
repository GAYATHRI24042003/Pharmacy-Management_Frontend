import React, { useState } from 'react';
import { Link,useNavigate, useParams } from 'react-router-dom';  // If you use React Router
import '../styles/demo.css'
import CartPage from './CartPage';

const Tablets = () => {
  const navigator=useNavigate()
  const {email}=useParams()
  const rtohome = () => {
    // Handle the navigation to home
  };
  const [isCartOpen,setIsCartOpen]= useState(false)

  const [items, setItems] = useState([]);
  const change1 = () => {
    // Handle the go back action
  };
  const medicines=[{id: 1, title: 'PARACETAMOL', img: require('../assets/pills-out-from-bottle.jpg'), price: 200, content: 'Paracetamol is a commonly used medicine...'},
  {id: 2, title: 'DIGINE', img: require('../assets/download.jpeg'), price: 150, content: 'Digene is an antacid that is known to provide...'},
  {id: 3, title: 'DIGINE TABLETS', img: require('../assets/download (1).jpeg'), price: 250, content: 'Provide effective relief from acidity and its symptoms...'},
  {id: 4, title: 'METAPHARMIN HYPOCHLORIDE', img: require('../assets/download (2).jpeg'), price: 300, content: 'Metformin hydrochloride is a biguanide with antihyperglycaemic effects...'},
  {id: 5, title: 'CETZINE', img: require('../assets/download (3).jpeg'), price: 210, content: 'Cetzine Tablet is a Tablet manufactured by GLAXO SMITHKLINE PHARMA...'},
  {id: 6, title: 'Cough Syrup', img: require('../assets/images (1).jpeg'), price: 500, content: 'This combination medication is used to temporarily treat cough, chest congestion...'}
]
const m = medicines.map((m) => (
  <div className="columns" key={m.id}>
    <ul className="price">
      <li className="header">{m.title}</li>
      <div className="imagewrapper">
        <img src={m.img} alt="" />
      </div>
      <li className="grey">Rs. {m.price}</li>
      <li>{m.content}</li>
      <a className="button" onClick={() => addItemToCart({ id: m.id, pname: m.title, quantity:1, price: m.price })}>Add To cart</a>
    </ul>
  </div>
));

const addItemToCart = (item) => {
  setItems(prevItems => [...prevItems, item]);
};

  return (
    <>
      {/* Navigation Bar */}
      <div className="Nav" id="Nav1">
        <div className="NavbarContainer">
          <img src={require("../assets/download.png")} alt="logo" className="NavLogo" onClick={rtohome} />
          <div className="MobileIcon">
            <i className="fa fa-bars"></i>
          </div>
          <ul className="NavMenu">
            <li className="NavItem">
              <Link id="linkcolor" onClick={() => setIsCartOpen(true)} className="NavLinks" style={{ color: 'black' }}>Cart</Link>
            </li>
            <li className="NavItem">
              <Link id="linkcolor2" onClick={rtohome} className="NavLinks" to="/contact" style={{ color: 'black' }}>Contact Us</Link>
            </li>
          </ul>
          <div className="NavBtn">
            <button type="button" className="NavBtnLink" onClick={change1} style={{ marginLeft: '8%' }}>Go Back</button>
          </div>
        </div>
      </div>

      {/* Medicine Cards */}
      <div className="pricingcontainer">
        <div className="pricingwrapper">
          {/* Medicine 1 */}
          {m}
        </div>
      </div>
      {isCartOpen && <CartPage items={items} mail={email} onClose={() => setIsCartOpen(false)} />}
      
    </>
  );
};

export default Tablets;
