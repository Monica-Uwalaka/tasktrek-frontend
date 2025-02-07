import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';
import Grid from '@mui/material/Grid2';
import { Box, Paper, Button, Link} from '@mui/material';
import { styled } from '@mui/material/styles';
import '../styling/general.css';



const HomePage = () => {
    let navigate =  useNavigate();

    const handlelogout = () => {
        localStorage.setItem("current_user", "") 
        localStorage.setItem("access-token", "")
        navigate("/")
    }

    const current_user: string | null = localStorage.getItem("current_user");

    if (current_user){
        return( 
        <> 
            <h5> Welcome to Takstrek {current_user}  </h5>
            <button type="button" onClick={handlelogout}> Logout </button>
        </>
        )
    }

    else{
        return(
            <Box>
                <h1>TaskTrek</h1>
                <h3> Stay accountable to your goals !</h3> 
                <Button variant= "outlined" > <Link href="/signup"> Create account </Link> </Button>
                <Box>
                    <h5> Already have an account?</h5>
                    <Button variant= "outlined"> < Link href="/signin"> Sign in </Link> </Button>
                </Box>
            </Box>     
  );
    }
  
}

export { HomePage}

