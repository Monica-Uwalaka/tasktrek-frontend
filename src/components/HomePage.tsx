import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router';
import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';

const HomePage = () => {

    const current_user: string | null = localStorage.getItem("current_user");

    if (current_user){
        return( 
        //TODO: display dashboard
        <> 
            Welcome to Takstrek {current_user} 
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

