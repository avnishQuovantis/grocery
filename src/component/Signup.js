
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router'
import "./css/loginSignup.css"
export default function Signup() {
    const selector=useSelector(state=>state.home)
    const dispatch=useDispatch()
    const history=useHistory()
    const [state,setState]=useState({
        fname:"",
        lname:"",
        email:"",
        password:"",
        address:""
    })
    const changeInput=(e)=>{
        // console.log(e.target.name,e.target.value);
        setState({...state,[e.target.name]:e.target.value})
    }
    const submitButton=()=>{        
        // console.log(selector.auth.hasOwnProperty(state.email));
        dispatch({type:"signup",payload:state})
        setState({ fname:"",
        lname:"",
        email:"",
        password:"",
        address:""})
        history.push("/login")
    }
    return (
        <div className="login ">
             <h1>SignUp</h1>
             <input name="fname" type="text" value={state.fname} class="form-control" placeholder="fname"
                onChange={changeInput}
            />
            <input name="lname" type="text" value={state.lname} class="form-control" placeholder="lname"
                onChange={changeInput}
            />
            <input name="address" type="text" value={state.address} class="form-control" placeholder="address"
                onChange={changeInput}
            />
            <input name="email" type="email" value={state.email} class="form-control" placeholder="email"
                onChange={changeInput}
            />
            <input name="password"value={state.password}type="password" class="form-control" placeholder='password'
                onChange={changeInput}
            />
            <button className="btn btn-danger" onClick={submitButton}>submit</button>
                
        </div>
    )
}
