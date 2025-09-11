import React, {  } from 'react';
import { Box, Button, Link} from '@mui/material';
import '../styling/general.css';
import Dashboard from './Dashboard';


const HomePage = () => {
    const current_user = localStorage.getItem("current_user");

    if (current_user){
        return( 
        <Dashboard signedInUser ={current_user}/>
        )
    }
    else{
        return(
            <Box className="vertical-center-screen">
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

