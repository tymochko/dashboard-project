"use client";

import App from "@/components/App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>

      <ToastContainer position="top-right" autoClose={3000} />
    </main>
  );
}
