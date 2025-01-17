import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';

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
        //TODO: display dashboard
        <> 
            <h5> Welcome to Takstrek {current_user}  </h5>
            <button type="button" onClick={handlelogout}> Logout </button>
        </>
        
        )
    }

    else{
        return(
            <>
                <Link to= "/signup"> Sign up </Link>
                <Link to= "/signin"> Sign in </Link>
            </>
            
        )
    }
  
}

export { HomePage}

