import { io, Socket } from "socket.io-client";

// Configure via frontend/.env -> VITE_API_URL
const SOCKET_URL: string = (import.meta as any).env?.VITE_API_URL || "http://localhost:4000";

let socket: Socket | null = null;

export const getSocket = () => {
  if (!socket) {
    socket = io(SOCKET_URL, { withCredentials: true });
  }
  return socket;
};
