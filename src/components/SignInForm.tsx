import { useEffect, useState } from 'react';
import axios from "axios";
import React from 'react';
import { useNavigate } from 'react-router';
import {Box, Stack, TextField, Button, Link, } from '@mui/material'


const SignInForm = () => {
    let navigate =  useNavigate();
    const [signInError, setSignInError] = useState("")
    const [formFilled, setFormFilled] = useState(false);
    const[form, setForm] = useState({
        username: "",
        password: ""
    });

    useEffect(() => {
        setFormFilled(form.username.length > 0  && form.password.length > 0)
    },[form])

    useEffect(() =>{
        // checks fror changes in error message at sign in 
    },[signInError])

    const handleUsernameChange = (e) => {
        setForm({...form , username: e.target.value})
    }

    const handlePasswordChange = (e) => {
        setForm({...form, password: e.target.value})
    }

    const handleSignIn = async (e) => {
        e.preventDefault();
        
        await axios.post("http://127.0.0.1:8000/auth/token", 
            form, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }   
        }).then((response)=>{
            let data = response.data
            localStorage.clear()
            localStorage.setItem("current_user", data.username) 
            localStorage.setItem("access-token", data.access_token) 
            console.log(typeof(data), data.username)
            navigate("/")
        })
        .catch((error)=>{
            if (error.response){
                setSignInError(error.response.data.detail)
                console.log(error.response.data)
            } 
        })}

    return (
        <Box component="form" sx={{ width: 500, padding: "20px", margin: "20px", border:"1px solid black", borderRadius:"20px "}}>
            <Stack spacing={2} sx={{}}>
                <h4> Sign Into Your Tasktrek Account </h4>
                <TextField id="username" label="Username" variant="outlined" onChange={handleUsernameChange}/>
                <TextField id="password"  type='password' label="Password" variant="outlined" onChange={handlePasswordChange}/>
                {signInError ? (<h5 className='error-message'>{signInError}</h5>) : <></>} 
                <Button type="submit" variant="contained" disabled={!formFilled} onClick={handleSignIn}> Sign in </Button>
                <h5>Don't have an account? <Link href="/signup"> Sign up </Link></h5>
            </Stack> 
        </Box>
     );
}

export { SignInForm }