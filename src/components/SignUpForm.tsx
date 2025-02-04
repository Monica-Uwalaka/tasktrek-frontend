//@ts-check
import { useState } from 'react';
import axios from "axios";
import React from 'react';
import { useNavigate } from 'react-router';
import {Box, Stack, TextField, Button, Link, } from '@mui/material'




const SignUpForm = () => {
    let navigate = useNavigate();
    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: "", 
    })

    const handleSignUp = async () => {
       await axios.post("http://127.0.0.1:8000/auth/register", 
            form, {
            headers: {
                'Content-Type': 'application/json'
            }   
        }).then((res)=>{
            navigate("/")
        })
    }

    return (
        <Box component="form" sx={{ width: 500, padding: "20px", margin: "20px", border:"1px solid black", borderRadius:"20px "}}>
        <Stack spacing={2} sx={{}}>
            <h4> Sign Into Your Tasktrek Account </h4>
            <TextField id="firstname" label="First name" variant="outlined" onChange={(e) => setForm({...form , firstname: e.target.value})}/>
            <TextField id="lastname" label="Last name" variant="outlined" onChange={(e) => setForm({...form , lastname: e.target.value})}/>
            <TextField id="email" label="Email" variant="outlined" onChange={(e) => setForm({...form , email: e.target.value})}/>
            <TextField id="username" label="Username" variant="outlined" onChange={(e) => setForm({...form , username: e.target.value})}/>
            <TextField id="password" label="Password" variant="outlined" onChange={(e) => setForm({...form, password: e.target.value})}/>
            <Button variant="contained" onClick={handleSignUp}> Submit </Button>
            <h5>Already have an account? <Link href="/signin"> Sign in </Link></h5>
        </Stack> 
    </Box>
    
    // <div>
    //     <h3>Tasktrek</h3>
    //     <h4> Sign up to stay on top of your goals</h4>
    //     <form id="sign-up-form" >
    //         <label>
    //             First name:
    //             <input  autoComplete="off" id= "firstname" name="firstname" value={form.firstname} onChange={(e) => setForm({...form, firstname: e.target.value})}/>
    //         </label>

    //         <label>
    //             last name:
    //             <input autoComplete="off" id= "lastname" name="lastname" value={form.lastname} onChange={(e) => setForm({...form, lastname: e.target.value})}/>
    //         </label>

    //         <label>
    //             Username:
    //             <input autoComplete="off" id= "sign-up-username" name="username" value={form.username} onChange={(e) => setForm({...form, username: e.target.value})}/>
    //         </label>

    //         <label>
    //             Email:
    //             <input  autoComplete="off" id= "email" name="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
    //         </label>

    //         <label>
    //             Password:
    //             <input autoComplete="off" id= "sign-up-password" name="password" type="password" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} />
    //         </label>

    //         <button type="button" onClick={handleSignUp}> Submit </button>
    //     </form>
    //     <Link to= "/signin"> Sign in </Link>
    // </div>
    );
}

export { SignUpForm }