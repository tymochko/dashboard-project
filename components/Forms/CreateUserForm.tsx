import { Button, DialogActions, DialogContent, TextField } from "@mui/material";
import React, { useState } from "react";

interface CreateUserProps {
  onClose: () => void;
  onSubmit: (user: {
    fullName: string;
    carMake: string;
    age: string;
    pet: string;
  }) => void;
}

const CreateUserForm = ({ onClose, onSubmit }: CreateUserProps) => {
  const [fullName, setFullName] = useState("");
  const [carMake, setCarMake] = useState("");
  const [age, setAge] = useState("");
  const [pet, setPet] = useState("");

  const handleSubmit = () => {
    if (fullName && carMake && age && pet) {
      onSubmit({ fullName, carMake, age, pet });
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

export default CreateUserForm;
