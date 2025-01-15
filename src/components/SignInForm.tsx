import { useState } from 'react';
import axios from "axios";
import React from 'react';
import { Link, useNavigate } from 'react-router';

const SignInForm = () => {
    const[form, setForm] = useState({
        username: "",
        password: ""
    })
    let navigate =  useNavigate();

    const handleSignIn = async () => {
        const {data} = await axios.post("http://127.0.0.1:8000/auth/token", 
            form, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }   
        }) 
        localStorage.clear()
        localStorage.setItem("current_user", data.username) 
        localStorage.setItem("access-token", data.access_token) 
        console.log(typeof(data), data.username)
        navigate("/")
    }

    return (
    <div>
        <h3>Sign in </h3>
        <form id="sign-in-form" >
            <label>
                Username:
                <input autoComplete="off" id= "sign-in-username" name="username" value={form.username} onChange={(e) => setForm({...form , username: e.target.value})}/>
            </label>
            <label>
                Password:
                <input autoComplete="off" id= "sign-in-password" name="password" type="password" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} />
            </label>

            <button type="button" onClick={handleSignIn}> Submit </button>
        </form>
        <Link to= "/signup"> Sign up </Link>
    </div>
    );
}

export { SignInForm }