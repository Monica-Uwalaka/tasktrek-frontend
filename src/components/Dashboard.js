import React from "react";
import { styled } from '@mui/material/styles';
import {Grid, Paper} from "@mui/material";
import SideNabar from "./sideNavbar";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: (theme.vars ?? theme).palette.text.secondary,
//   ...theme.applyStyles('dark', {
//     backgroundColor: '#1A2027',
//   }),
// })); 

const Dashboard = ({signedInUser}) => {
   
    return(<Grid container spacing={2}>
      <Grid size={2}>
        <SideNabar/>
      </Grid>
      <Grid size={10}>
        {/* <Item>size=4</Item> */}
      </Grid>
    </Grid>)
}

export default Dashboard
