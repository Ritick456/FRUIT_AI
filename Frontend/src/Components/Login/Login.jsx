import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import navigate

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    
      navigate('/home'); // Use navigate to redirect on successful login
    
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="max-w-md w-full mx-auto p-4 bg-white rounded shadow-md">
        <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
        <p className="text-gray-600 text-sm text-center mb-4">By signing in you are agreeing to our <span className="text-blue-600">Terms and Condition</span></p>
        <div className="flex justify-center gap-6 mb-4">
          <div className="">Login</div>
          <div className="">Signup</div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Enter Your Email"
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-gray-600">Remember Me</label>
            </div>
            <p className="text-gray-600">Forget Password</p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Login</button>
        </form>
        <div className="flex justify-center mb-4">
          <p className="text-gray-600">or Connect With</p>
        </div>
        <div className="flex justify-center">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Facebook" className="w-8 h-8 mr-4" />
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Twitter" className="w-8 h-8 mr-4" />
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111642.png" alt="Instagram" className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default Login;