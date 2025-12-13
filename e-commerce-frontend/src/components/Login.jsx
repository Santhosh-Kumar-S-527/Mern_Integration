import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const[email, setEmail] = useState("");
    const navigate = useNavigate();
    const handleLogin = () => {
        localStorage.setItem("user", email);
        navigate("/");
    };
  return (
    <div>
        <h2>Login</h2>
        <form>
            <input type = "email" placeholder = "Enter Email" onChange = {(e) => setEmail(e.target.value)} />
            <button onClick = {handleLogin}>Login</button>
        </form>
    </div>
  )
}
