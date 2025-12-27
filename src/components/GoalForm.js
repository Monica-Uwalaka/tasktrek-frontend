import React, {useState} from "react";
import {Box, Stack, TextField, Button, } from '@mui/material';
import BasicDatePicker from "./BasicDatePicker";
import dayjs from "dayjs";

const GoalForm = () => {
    const[form, setForm] = useState({
          title: "",
          description: "",
          startDate: dayjs(),
          endDate: dayjs()
    });

    const handleSubmit = (e) => {
        // e.preventDefault();
        localStorage.setItem("title", form.title) ; 
        localStorage.setItem("startdate", form.startDate) ; 
        localStorage.setItem("enddate", form.endDate) ; 
        localStorage.setItem("description", form.description);
    }

    return (
    <Box component="form">
        <Stack spacing={2} sx={{ width: "300px", padding: "20px", margin: "20px", border:"0px solid black", borderRadius:"20px "}}>
            <h3> Define a Goal</h3>
            <TextField id="title" label="Title" variant="outlined" onChange={(e) => setForm({...form , title: e.target.value})}/>
            <TextField id="description" label="Description"  type='description' variant="outlined" onChange={(e) => setForm({...form , description: e.target.value})}/>
            <BasicDatePicker  onChange={(e) => setForm({...form , startDate: e.target.value})} />
            <BasicDatePicker  onChange={(e) => setForm({...form , endDate: e.target.value})} />

            <Button type="submit"  onClick={handleSubmit}> Submit </Button>
        </Stack> 
    </Box>
    );
  
}

export default GoalForm;