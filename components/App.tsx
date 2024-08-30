import CreateUserForm from "@/components/Forms/CreateUserForm";
import DeleteConfirmationForm from "@/components/Forms/DeleteConfirmationForm";
import UsersList from "@/components/UsersList";
import { useUsers } from "@/hooks/useUsers";
import { IDashboardUser } from "@/interfaces/IDashboardUser";
import Button from "@mui/material/Button";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BaseDialog from "./Dialogs/BaseDialog";
import UpdateUserForm from "./Forms/UpdateUserForm";

const App = () => {
  const { data: users, error, isLoading } = useUsers();

  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [userToUpdate, setUserToUpdate] = useState<IDashboardUser | null>(null);
  const [userIdToDelete, setUserIdToDelete] = useState<string | null>(null);

  const triggerEditUserAction = (user: IDashboardUser) => {
    setUserToUpdate(user);
    setUpdateModalOpen(true);
  };

  const triggerDeleteUserAction = (userId: string) => {
    setUserIdToDelete(userId);
    setDeleteModalOpen(true);
  };

  const submitCreateUser = (userData: any) => {
    // Тут буде виконання POST запиту на бекенд для створення користувача
    console.log("New user:", userData);
    toast.success("Користувача успішно створено!");
    setCreateModalOpen(false);
  };

  const submitUpdateUser = (user: IDashboardUser) => {
    // Тут буде виконання POST запиту на бекенд для створення користувача
    console.log("New user:", user);
    toast.success("Користувача успішно updated!");
    setUpdateModalOpen(false);
  };

  const confirmDeleteUser = () => {
    // Виконай DELETE запит на бекенд для видалення користувача
    toast.success("Користувача успішно видалено!");
    setDeleteModalOpen(false);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <Button variant="contained" onClick={() => setCreateModalOpen(true)}>
        Add New User
      </Button>

      <UsersList
        users={users}
        onDeleteUser={triggerDeleteUserAction}
        onEditUser={triggerEditUserAction}
      />

      <BaseDialog
        isOpen={isCreateModalOpen}
        onClose={() => setCreateModalOpen(false)}
      >
        <CreateUserForm
          onClose={() => setCreateModalOpen(false)}
          onSubmit={submitCreateUser}
        />
      </BaseDialog>

      {userToUpdate?.id && (
        <BaseDialog
          isOpen={isUpdateModalOpen}
          onClose={() => setUpdateModalOpen(false)}
        >
          <UpdateUserForm
            user={userToUpdate}
            onClose={() => setUpdateModalOpen(false)}
            onSubmit={submitUpdateUser}
          />
        </BaseDialog>
      )}

      {userIdToDelete && (
        <BaseDialog
          isOpen={isDeleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
        >
          <DeleteConfirmationForm
            onClose={() => setDeleteModalOpen(false)}
            onDelete={confirmDeleteUser}
          />
        </BaseDialog>
      )}
    </>
  );
};

export default App;
