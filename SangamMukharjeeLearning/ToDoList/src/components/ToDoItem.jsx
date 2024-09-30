import PropType from "prop-types";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { createContext, useState } from "react";
import ToDoDetails from "./ToDoDetails";

export const ModalContext = createContext();

function ToDoItem({ item }) {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 350,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardContent>
          <Typography variant="h5" color={"text.secondary"}>
            {item?.todo}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={openModal}
            sx={{
              backgroundColor: "black",
              color: "white",
              opacity: "0.75",
              "&:hover": {
                backgroundColor: "grey",
                color: "black",
                opacity: 1,
              },
            }}
          >
            Show Details
          </Button>
        </CardActions>
      </Card>
      {open && (
        <ModalContext.Provider value={{open, setOpen}}>
          <ToDoDetails item={item} />
        </ModalContext.Provider>
      )}
    </>
  );
}

ToDoItem.propTypes = {
  item: PropType.object,
};

export default ToDoItem;
