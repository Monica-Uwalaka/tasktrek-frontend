import React from "react"
import { useNavigate } from 'react-router';


const Dashboard = ({signedInUser}) => {
    let navigate =  useNavigate();

    const handlelogout = () => {
        localStorage.setItem("current_user", "") 
        localStorage.setItem("access-token", "")
        navigate("/")
        window.location.reload()
    }
    return(<> 
        <h5> Welcome to Takstrek {signedInUser}  </h5>
        <button type="button" onClick={handlelogout}> Logout </button>
    </>)
}

export default Dashboard
