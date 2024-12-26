import { useState } from 'react';
import axios from "axios";
import React from 'react';

const SignInForm = () => {
    const[form, setForm] = useState({
        username: "",
        password: ""
    })

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
        window.location.reload();
    }

    return (
    <div>
        <h3>Log in </h3>
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
    </div>
    );
}

export { SignInForm }