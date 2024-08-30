import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import React from "react";

interface DeleteConfirmationFormProps {
  onClose: () => void;
  onDelete: () => void;
}

const DeleteConfirmationForm = ({
  onClose,
  onDelete,
}: DeleteConfirmationFormProps) => {
  return (
    <>
      <DialogContent dividers className="flex flex-col">
        <Typography>You are about to delete this user</Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onClose}>
          Close
        </Button>
        <Button variant="contained" color="error" onClick={onDelete}>
          Delete
        </Button>
      </DialogActions>
    </>
  );
};

export default DeleteConfirmationForm;
