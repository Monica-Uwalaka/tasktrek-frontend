import { useState } from 'react';
import axios from "axios";
import React from 'react';
import { useNavigate } from 'react-router';
import {Box, Stack, TextField, Button, Link, } from '@mui/material'


const SignInForm = () => {
    const[form, setForm] = useState({
        username: "",
        password: ""
    })
    let navigate =  useNavigate();

    const handleSignIn = async (e) => {
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
        <Box component="form" sx={{ width: 500, padding: "20px", margin: "20px", border:"1px solid black", borderRadius:"20px "}}>
            <Stack spacing={2} sx={{}}>
                <h4> Sign Into Your Tasktrek Account </h4>
                <TextField id="username" label="Username" variant="outlined" onChange={(e) => setForm({...form , username: e.target.value})}/>
                <TextField id="password" label="Password" variant="outlined" onChange={(e) => setForm({...form, password: e.target.value})}/>
                <Button variant="contained" onClick={handleSignIn}> Submit </Button>
                <h5>Don't have an account? <Link href="/signup"> Sign up </Link></h5>
            </Stack> 
        </Box>
        
        
    // <div>
    //     <h3>Sign in </h3>
    //     <form id="sign-in-form" >
    //         <label>
    //             Username:
    //             <input autoComplete="off" id= "sign-in-username" name="username" value={form.username} onChange={(e) => setForm({...form , username: e.target.value})}/>
    //         </label>
    //         <label>
    //             Password:
    //             <input autoComplete="off" id= "sign-in-password" name="password" type="password" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} />
    //         </label>

    //         <button type="button" onClick={handleSignIn}> Submit </button>
    //     </form>
    //     <Link to= "/signup"> Sign up </Link>
    // </div>
     );
}

export { SignInForm }