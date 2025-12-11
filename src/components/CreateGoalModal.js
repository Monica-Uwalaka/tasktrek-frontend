import React, {useState} from "react"
import { Modal, Button, Box } from '@mui/material';
import GoalForm from "./GoalForm";

const CreateGoalModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    
    

    return (
    <div className="modal">
        <Button  variant="outlined" onClick={handleOpen}> Define a Goal </Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
                
            <Box className="modal">
                <GoalForm/>
            </Box>
        </Modal>
    
    </div>)
}

export default CreateGoalModal;