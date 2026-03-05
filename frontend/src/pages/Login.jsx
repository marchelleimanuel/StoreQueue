import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    console.log('ini username', username);
    console.log('ini password', password);
    navigate('/home')
  }

  return (
    <>
      <div className="text-5xl font-bold">LOGIN</div>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" className="border border-black" onChange={(e) => setUsername(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" className="border border-black" onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <button onClick={onSubmit} className="border border-black cursor-pointer px-4 py-2 bg-blue-300">Login</button>
    </>
  )
}

export default Login