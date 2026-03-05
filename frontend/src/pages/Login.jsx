import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState('');

  const onClickEnter = () => {
    console.log('ini password', password);
    navigate('/admin')
  }

  return (
    <>
      <div className="min-h-screen flex justify-center items-center p-10 flex-col gap-10">
        <div className="text-5xl font-bold">Admin's Authentication</div>
        <div>
          <label className="mr-2" htmlFor="password">Enter Password</label>
          <input type="password" id="password" className="border border-black" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button onClick={onClickEnter} className="border border-black cursor-pointer px-4 py-2 bg-blue-300">Enter</button>
      </div>
    </>
  )
}

export default Login