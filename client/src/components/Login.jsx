import React, { useContext, useState } from 'react'
import UserContext from '../ContextAPI/UserContext'

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {user, setUser} = useContext(UserContext);
    
    function handleSubmit(e){
        e.preventDefault();
        setUser({username:username, password:password})
        setUsername("");
        setPassword("");
    }
  return (
    <div id="login-form" >
    <div>{user?.username}</div>
        <form action="">
            <input 
            type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Enter your Username'    
            />
            <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter your Password'    
            />
            <button onClick={(e) => handleSubmit(e)}>Submit</button>
        </form>
    </div>
  )
}

export default Login