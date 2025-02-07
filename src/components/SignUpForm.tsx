//@ts-check
import { useState } from 'react';
import axios from "axios";
import React from 'react';
import { useNavigate } from 'react-router';
import {Box, Stack, TextField, Button, Link, } from '@mui/material'




const SignUpForm = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
    );
}

export { SignUpForm }