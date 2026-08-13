import axios from 'axios'
import React, { useState } from 'react'

const Signup = () => {
    const [fullName,setFullName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")


const handleSubmit = async ()=> {
try{
    const payload = {
    fullName,
    email,
    password
}

    const response  = await axios.post("http://localhost:3000/user/create",payload)
    alert("signup successful")
}
catch(err) {
    alert("error occur")
}
}


  return (
    <div>
        <input type="text" value={fullName} onChange={(e)=>setFullName(e.target.value)}  placeholder='full name' />
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='email' />
        <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' />
    <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Signup