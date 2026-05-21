import React, {useState} from "react";
import {Box, Stack, TextField, Button, } from '@mui/material';
import BasicDatePicker from "./BasicDatePicker";
import axios from "axios";

const GoalForm = () => {
    const[form, setForm] = useState({
          title: "",
          description: "",
          deadline_date: new Date(),
        //   endDate: dayjs()
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        //parse date
        const formatted_date = new Date(form.deadline_date).toISOString()
        console.log(formatted_date)

        axios.post("http://127.0.0.1:8000/goals", {
            title: form.title,
            description:form.description,
            deadline_date: formatted_date

            }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("access-token")}`
            }   
        }).then((response) =>{
            console.log(response.data)
        }).catch((err) => console.log(err.response?.data));
    }

    return (
    <Box component="form">
        <Stack spacing={2} sx={{ width: "300px", padding: "20px", margin: "20px", border:"0px solid black", borderRadius:"20px "}}>
            <h3> Define a Goal</h3>
            <TextField id="title" label="title" variant="outlined" onChange={(e) => setForm({...form , title: e.target.value})}/>
            <TextField id="description" label="description"  type='description' variant="outlined" onChange={(e) => setForm({...form , description: e.target.value})}/>
            <BasicDatePicker id="deadline_date" lable="deadline_date" onChange={(e) => setForm({...form , deadline_date: e.target.value})} />
            <Button type="submit"  onClick={handleSubmit}> Submit </Button>
        </Stack> 
    </Box>
    );
  
}

export {GoalForm};