import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3002/users");
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      toast.success("Users received");
      return response.json();
    },
  });
};
