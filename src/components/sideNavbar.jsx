import {React, useState} from "react";
import { Box, Button, Link, ListItem } from '@mui/material';
import { useNavigate } from 'react-router';
import Add from '@mui/icons-material/Add'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LogoutIcon from '@mui/icons-material/Logout';



const SideNabar = () => {
    // const [open, setOpen] = useState(true)
    let navigate =  useNavigate();
    const handlelogout = () => {
        localStorage.setItem("current_user", "") 
        localStorage.setItem("access-token", "")
        navigate("/")
        window.location.reload()

    const handleCreateGoal = () => {

    }
    }
    return(
        <Box id = "sidebar">
            <Box id="sideBarLinksContainer">
                 <Box className="sideNavLink" sx={{
                        '& > p': {
                            color: 'black',
                            fontSize: '1.5rem', 
                            fontWeight: "",
                            fontStyle:"oblique",
                            margin:"70px 0px 70px 0px"
                        },
                    }}>
                <p>  TaskTrek </p>
            </Box>
                <Button  className="sideNavLink"  href="#" startIcon={<AccountCircleIcon/>}> Profile</Button>
                <Button  className="sideNavLink" href="#" startIcon={<HomeIcon/>}> Dashboard</Button>
                <Button  className="sideNavLink"  href="#" startIcon={<LightbulbCircleIcon/>}> Goals </Button>
                <Button  className="sideNavLink"  href="#" startIcon={<ListAltIcon/>}> Tasks</Button>
                <Button  className="sideNavLink"  href="createGoal" startIcon={<Add/>}>  Create Goal </Button>
                
                <Button className="sideNavLink" startIcon={<LogoutIcon/>} onClick={handlelogout} sx={{marginTop:"auto", marginBottom:"20px", border:"2px solid balck"}}  > Log out</Button>
     
            </Box>
            
           
            
        {/* < Box id="footer"> </Box> */}
        </Box>
    )
}

export default SideNabar