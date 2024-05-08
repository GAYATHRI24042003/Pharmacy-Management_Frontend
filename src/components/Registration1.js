import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../Service/Service';
import '../styles/Registration1.css';

const Registration1 = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const handleName = (e)=> setname(e.target.value)
    const handleEmail = (e)=> setemail(e.target.value)
    const handlePass = (e)=> setpassword(e.target.value)

  const navigator=useNavigate()
  const handle = (e) => {
    e.preventDefault()
    const user ={name,email,password}
      createUser(user).then((response)=>{
          console.log(response.data)
          navigator('/signin')
      }).catch(error=>{
          console.log(error)
      })
      

  };

  return (
    <div className="container">
      <div className="title">Signup</div>
      <div className="content">
        <form>
          <div className="user-details">
            <div className="input-box">
              <span className="details">Name</span>
              <input type="text" placeholder="Enter your Name" name="name" value={name} onChange={handleName} required />
            </div>
            <div className="input-box">
              <span className="details">Email</span>
              <input type="text" placeholder="Enter your email" name="email" value={email} onChange={handleEmail} required />
            </div>
            <div className="input-box">
              <span className="details">Password</span>
              <input type="password" placeholder="Enter your password" name="password" value={password} onChange={handlePass} required />
            </div>
            <div className="button">
              <input type="button" value="Go Back"  />
              <input type="submit" value="Register" name="submit" style={{ marginLeft: '85px' }} onClick={handle}/>
            </div>
            <span style={{ color: 'red' }}></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration1;
