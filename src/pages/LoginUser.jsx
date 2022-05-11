import React, { useState } from 'react'
import { LoginContainer } from '../styles/modal'

const LoginUser = () => {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const handleSubmit = (e) => {
e.preventDefault();
if (!email.trim() || !password.trim()) {

}
}

  return <LoginContainer>
    <h2>Crear Usuario</h2>
    <hr />
    <div className="field">
    <input type="email" placeholder="Email Address" autoComplete='off' onChange={(e) => setEmail(e.target.value)}/>
    </div>

    <div className="filed">
    <input type="password" placeholder="Password" autoComplete='off' onChange={(e) => setPassword(e.target.value)}/>
    </div>

    <div className="field">
    <button>Register</button>
    </div>
  </LoginContainer>
}

export default LoginUser