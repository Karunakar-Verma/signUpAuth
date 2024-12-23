import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/register', { name, email, password })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="border  rounded-lg p-8 shadow-slate-100">
      <form onSubmit={submitHandler} className="flex flex-col m-2 p-2">
        <div className="flex flex-col p-2">
          <label className="flex justify-start text-base">Name</label>
          <input
            type="text"
            placeholder="Enter name.."
            className="p-2 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col p-2">
          <label className="flex justify-start text-base">Email</label>
          <input
            type="email"
            placeholder="Enter email.."
            className="p-2 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col p-2">
          <label className="flex justify-start text-base">Password</label>
          <input
            type="password"
            placeholder="Enter password.."
            className="p-2 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className='m-2'>Register</button>
      </form>
      <div >
      Already Registered !
      <Link to="/login"> Login</Link>
      </div>
    </div>
  );
};

export default Home;
