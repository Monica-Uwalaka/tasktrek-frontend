//@ts-check
import { useEffect, useState } from 'react';
import axios from "axios";
import React from 'react';
import { useNavigate } from 'react-router';
import {Box, Stack, TextField, Button, Link, } from '@mui/material'




const SignUpForm = () => {
    let navigate = useNavigate();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [formFilled, setFormFilled] = useState(false);
    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: "", 
    })

    useEffect(() => {
        setFormFilled(form.firstname.length > 0 && form.lastname.length > 0 && form.username.length > 0 && form.email.length > 0  && form.password.length > 0)
    },[form]
    )

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
                <Button variant="contained" disabled={!formFilled} onClick={handleSignUp}> Submit </Button>
                <h5>Already have an account? <Link href="/signin"> Sign in </Link></h5>
            </Stack> 
        </Box>
    );
}

export { SignUpForm }