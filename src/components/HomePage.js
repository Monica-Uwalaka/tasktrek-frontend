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
                <Button variant= "contained" > <Link href="/signup" sx={{color:"white"}}> Create account </Link> </Button>
                <Box>
                    <h5> Already have an account?</h5>
                    <Button variant= "contained"> < Link href="/signin" sx={{color:"white"}} > Sign in </Link> </Button>
                </Box>
            </Box>     
        );
    }
}

export { HomePage}

