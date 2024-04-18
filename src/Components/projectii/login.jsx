import React, { useState } from 'react';
import './login.css';
import axios from 'axios';

import u_icon from '../Assets/per.png';
import p_icon from '../Assets/pass.png';
import email_icon from '../Assets/email.png';

const Projectii = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })
    const handleChange = (event) =>{
        setValues ({...values, [event.target.name]:[event.target.value]})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/projecti', values)
        .then(res => console.log("Registered Succesfully"))
        .catch(err => console.log(err));
    }
    const [action,setAction] = useState("Login")
    return (
        <form onSubmit={handleSubmit}>
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            
            <div className="inputs">
                <div className="input">
                    <img src={u_icon} alt="" className="" />
                    <input type="text" placeholder='Username' name='name' id = "name"
                    onChange={handleChange} />
                </div>
                
                    {action==="Login"?<div></div>:<div className="input">
                    <img src={email_icon} alt="" className="" />
                    <input type="email" placeholder='Email' name='email' id = "email"
                    onChange={handleChange} />
                </div>}
                <div className="input">
                    <img src={p_icon} alt="" className="" />
                    <input type="password" placeholder='Password' name='password' id ="passward"
                    onChange={handleChange} />
                </div>
            </div>{action==="Sign Up"?<div></div>:<div className="forgot-password">Cannot Remember Password <span onClick={()=>{setAction("Sign Up")}}>Click Here!</span></div>}
            {action==="Login"?<div></div>:<div className="forgot-password"> Already have an Account <span onClick={()=>{setAction("Login")}}>Click Here!</span></div>
        }
            <div className="submit-container">
                <button type = 'Submit' className={action==="Login"?"submit gray":"submit"}>Sign Up</button>
                <button type = 'Submit' className={action==="Sign Up"?"submit gray":"submit"}>Login</button>
            </div>
        </div>
        </form>
    );
};

export default Projectii;
