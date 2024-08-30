import { IDashboardUser } from "@/interfaces/IDashboardUser";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

interface UpdateUserProps {
  user: IDashboardUser;
  onClose: () => void;
  onSubmit: (user: IDashboardUser) => void;
}

const UpdateUserForm = ({ user, onClose, onSubmit }: UpdateUserProps) => {
  const [fullName, setFullName] = useState(user.fullName);
  const [carMake, setCarMake] = useState(user.carMake);
  const [age, setAge] = useState(user.age);
  const [pet, setPet] = useState(user.pet);

  const handleSubmit = () => {
    if (fullName && carMake && age && pet) {
      onSubmit({ fullName, carMake, age, pet, id: user.id });
    }
  };

  return (
    <>
      <DialogContent dividers className="flex flex-col">
        <TextField
          label="Full name:"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <TextField
          label="Car make:"
          value={carMake}
          onChange={(e) => setCarMake(e.target.value)}
          required
        />
        <TextField
          label="Age:"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <TextField
          label="Pet:"
          value={pet}
          onChange={(e) => setPet(e.target.value)}
          required
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onClose}>
          Close
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </DialogActions>
    </>
  );
};

export default UpdateUserForm;
