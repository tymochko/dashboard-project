import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const createUser = async (newUser: {
  fullName: string;
  carMake: string;
  age: number;
  pet: string;
}) => {
  const response = await fetch('http://localhost:3002/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  });

  if (!response.ok) {
    throw new Error('Помилка при створенні користувача');
  }

  return response.json();
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation(createUser, {
    onSuccess: () => {
      // Оновлення кешу після успішного створення користувача
      queryClient.invalidateQueries(['users']);
      toast.success('Користувача успішно створено!');
    },
    onError: (error) => {
      toast.error('Помилка при створенні користувача');
      console.error('Помилка:', error);
    },
  });
};
