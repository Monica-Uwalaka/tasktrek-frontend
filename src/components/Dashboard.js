import React from "react";
import { useNavigate } from 'react-router';
import CreateGoalModal from "./CreateGoalModal";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';



const Dashboard = ({signedInUser}) => {
    let navigate =  useNavigate();
    const goal = localStorage.getItem("title")
    const startDate = localStorage.getItem("startdate")
    const endDate = localStorage.getItem('endDate')
    const description = localStorage.getItem("description")
    const handlelogout = () => {
        localStorage.setItem("current_user", "") 
        localStorage.setItem("access-token", "")
        navigate("/")
        window.location.reload()
    }
    return(<> 
        <AppBar sx={{ flexGrow: 1, background: "white" }} position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, color:"black"}}>
          Hello {signedInUser} 
          </Typography>
          <Button sx={{color:"black"}} type="button" variant="outlined" onClick={handlelogout}> Logout </Button>
    
        </Toolbar>
      </AppBar>
        {goal? <h2>Goal: {goal} </h2> : <CreateGoalModal/>}
        {startDate?<h2>Start Date: {startDate} </h2>: "" }
        {endDate?<h2>End Date: {endDate} </h2>: "" }
        {description?<h2>Description: {description} </h2>: "" }

    </>)
}

export default Dashboard
