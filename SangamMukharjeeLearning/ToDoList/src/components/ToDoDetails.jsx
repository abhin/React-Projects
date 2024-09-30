import { Typography, Modal, Box, Button } from "@mui/material";
import { useContext } from "react";
import { ModalContext } from "./ToDoItem";

function ToDoDetails({item}) {
    const {open, setOpen} = useContext(ModalContext);

    const handleClose = () => {
        setOpen(false);
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        ToDo Details
                    </Typography>
                    <Typography component="div" id="modal-modal-description" sx={{ mt: 2 }}>
                        <p>Id: {item.id}</p>
                        <p>Name: {item.todo}</p>
                        <p>Is Completed: {item.completed && 'Yes' || 'No'}</p>
                        <p>User Id: {item.userId}</p>
                    </Typography>
                    <Button onClick={handleClose}>Close</Button>
                </Box>
            </Modal>
        </>
    )
}

export default ToDoDetails;