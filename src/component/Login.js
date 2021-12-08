import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import "./css/loginSignup.scss"
export default function Login() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const dispatch=useDispatch()
    const history =useHistory()
    const submit=()=>{
        let obj=JSON.parse(localStorage.getItem(email))
        if(obj!=null ){
        
            if(obj.email==email && obj.password==password){
                dispatch({type:"login",payload:obj})
                history.push("/")
            }else{
                alert("something wrong")
            }
        }else{
            alert("wrong try again later")
        }
        setEmail("")
        setPassword("")
    }
    return (
        <div className="login">
            <h1 data-testid="loginTitle">Login</h1>
            <input type="email" value={email} class="form-control" placeholder="Username"
                onChange={e=>setEmail(e.target.value)}
            />
            <input value={password}type="password" class="form-control" placeholder='password'
                onChange={e=>setPassword(e.target.value)}
            />
            <button onClick={submit}className="btn btn-danger">submit</button>
                <div className="line"><hr/>
                <span>OR</span><hr/></div>
            <button className="btn btn-primary">Signup</button>
        </div>
    )
}
