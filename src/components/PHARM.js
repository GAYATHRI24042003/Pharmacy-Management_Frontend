import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
// import { faBars } from '@fontawesome/free-solid-svg-icons';
import '../styles/PHARM.css';
import video1 from '../assets/video.mp4'
import { useParams } from 'react-router-dom';
import {findByemail}from '../Service/Service';


const PHARM = () => {
  const [scrollColor, setScrollColor] = useState("transparent");
  const {email}=useParams()
  const [id,setid] = useState('')
  const [name,setname] = useState('')
  // const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const[products,setproducts]=useState([])

  const handle = (e)=>{
    const user={id,name,email,password,products}
  }

  useEffect(() => {
    findByemail(email).then((response)=>{
      setid(response.data.id)
      setname(response.data.name)
      setpassword(response.data.password)
      setproducts(response.data.products)
      console.log(response.data)

      
    }).catch(error=>{
      console.log(error)
    })
    const handleScroll = () => {
      const top = window.scrollY;
      if (top >= 50) {
        setScrollColor("#9ffcff");
      } else {
        setScrollColor("transparent");
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    
  }, []);


  return (
    <div>
      <div className="Nav" style={{ backgroundColor: scrollColor }} id="Nav1">
        <div className="NavbarContainer">
          <div className="MobileIcon">
            {/* <FontAwesomeIcon icon={faBars} /> */}
          </div>
          <ul className="NavMenu">
            <li className="NavItem">
              <a id="linkcolor" className="NavLinks">About</a>
            </li>
            <li className="NavItem">
              <a id="linkcolor1" className="NavLinks" >My Orders</a>
            </li>
          </ul>
          <div className="NavBtn">
            <button type="button" name="button" className="NavBtnLink" onClick={() => { /* Logout logic */ }}>
              Log out
            </button>
          </div>
        </div>
      </div>
      {/* <div className="HeroContainer">
        {/* <div className="HeroBg">
         
        </div> */}
        {/* <div className="HeroContent">
          <marquee>
            <h1 className="HeroH1">Pharmeasy</h1>
          </marquee>
          <p className="HeroP">'Your health partner' <br /><br />Welcome..!</p>
        </div>
      </div> */} 
      <div className="InfoContainer" id="about">
        <div className="InfoWrapper">
          <div className="InfoRow">
            <div className="Column1">
              <div className="TextWrapper">
                <p className="TopLine" style={{ color: "black" }}>MEDICINES!!!</p>
                <h1 className="Heading" style={{ color: "black" }}>TRACK YOUR HEALTH</h1>
                <div className="BtnWrap">
                  <button type="button" name="button" className="NavBtnLink" onClick={() => { /* Order Now logic */ }}>
                    ORDER NOW
                  </button>
                </div>
              </div>
            </div>
            <div className="Column2">
              <div className="ImgWrap">
                <img className="Img" src="../assets/high-angle-pill-foils-plastic-containers.jpg" alt="IMAGE" style={{ borderRadius: "40px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="InfoContainer">
        <div className="InfoWrapper">
          <div className="InfoRow" style={{ gridTemplateAreas: "'col1 col2'" }}>
            <div className="Column1">
              <div className="TextWrapper">
                <p className="TopLine">GET YOUR CART</p>
                <h1 className="Heading">BE HEALTHIER ALWAYS</h1>
                <p className="Subtitle">ALL IS WELL</p>
                <div className="BtnWrap">
                  <button type="button" name="button" className="NavBtnLink" onClick={() => {navigator(`/Tablets/${id}`)}}>
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div className="Column2">
              <div className="ImgWrap">
                <img className="Img" src="flat-lay-time-medicine.jpg" alt="MEDICINES" style={{ borderRadius: "40%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="FooterContainer" id="contact">
        <div className="FooterWrap">
          <div className="FooterLinksContainer">
            <div className="FooterLinksWrapper">
              <div className="FooterLinkItems">
                <h1 className="FooterLinkTitle" style={{ marginBottom: "10%" }}>About Us</h1>
                <a href="#about" className="FooterLink" style={{ marginBottom: "8%" }}>Services</a>
              </div>
            </div>
          </div>
          <div className="SocialMedia">
            <div className="SocialMediaWrap">
              <a href="#" className="SocialLogo">Pharmeasy</a>
              <p className="WebsiteRights">Pharmeasy © 2024</p>
              <div className="SocialIcons">
                <a href="https://www.facebook.com/" className="SocialIconLink"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                <a href="https://twitter.com/" className="SocialIconLink"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="https://www.instagram.com/" className="SocialIconLink"><i className="fa fa-instagram" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  //   <video  height={300} width={400} autoPlay muted loop >
  //   <source src={video1} type="video/mp4" />
  // </video>
  );
};

export default PHARM;
