import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });

      if (response.data === "Login Successful") {
       
        navigate("/MainContent"); 
      } else {
        
        alert("Invalid Credentials");
      }
    } catch (err) {
      console.error("Error logging in:", err);
      alert("Server error, please try again later.");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="border border-collapse rounded-lg p-2">
      <form onSubmit={submitHandler} className="flex flex-col m-2 p-2">
        <div className="flex flex-col p-2">
          <label className="flex justify-start text-lg">Email</label>
          <input
            type="email"
            placeholder="Enter email.."
            className="p-2 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col p-2">
          <label className="flex justify-start text-lg">Password</label>
          <input
            type="password"
            placeholder="Enter password.."
            className="p-2 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
