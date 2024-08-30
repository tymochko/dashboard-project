import React from "react";
import { IDashboardUser } from "@/interfaces/IDashboardUser";
import Button from "@mui/material/Button";

interface UsersListProps {
  users: IDashboardUser[];
  onEditUser: (user: IDashboardUser) => void;
  onDeleteUser: (userId: string) => void;
}

const UsersList = ({ users, onEditUser, onDeleteUser }: UsersListProps) => {
  return (
    <ul>
      {users.map((user: IDashboardUser) => (
        <li key={user.id}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => onEditUser(user)}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => onDeleteUser(user.id)}
          >
            Delete
          </Button>
          <span className="ml-6">
            {user.fullName} - {user.carMake} - {user.age} - {user.pet}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
