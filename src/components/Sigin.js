import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '../styles/Sigin.css'

  const Signin = () => {
  const navigator=useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const handleEmail = (e)=>setemail(e.target.value)
  const handlePass = (e)=> setpassword(e.target.value)


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const redirectToPHARM = () => {
    navigator(`/Tablets/${email}`)
  };

  const redirectToRegistration = () => {
    navigator("/registration")
  };
  

  return (
    <div className="center">
      <h1>Login</h1>
      <form method="post">
        <div className="txt_field">
          <input name="username" type="text" value={email} onChange={handleEmail} required />
          <span></span>
          <label>Mail</label>
        </div>
        <div className="txt_field">
          <input 
            name="password" 
            type={showPassword ? "text" : "password"}
            value={password} onChange={handlePass} 
            required 
          />
          {/* <span>
            <FontAwesomeIcon 
              icon={showPassword ? faEyeSlash : faEye} 
              onClick={togglePasswordVisibility} 
            />
          </span> */}
          <label>Password</label>
        </div>
        <div className="pass">Forgot Password?</div>
        <input type="button" value="Login" onClick={redirectToPHARM} />
        <div className="signup_link">
          Not a member? <a href="#" onClick={redirectToRegistration}>Signup</a>
        </div>
      </form>
    </div>
  );
};

export default Signin;
