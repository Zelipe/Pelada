import { GameDay, Player } from "./types";

// Configure via frontend/.env -> VITE_API_URL
// Example: http://localhost:4000 (local) or https://seu-backend.onrender.com
const API_URL: string = (import.meta as any).env?.VITE_API_URL || "http://localhost:4000";

const putPlayer = async (player: Player) => {
  try {
    const res = await fetch(`${API_URL}/players/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(player),
      credentials: "include",
    });
    if (!res.ok) throw new Error(await res.text());
    return await res.json();
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const getPlayer = async (playerId: string) => {
  try {
    const res = await fetch(`${API_URL}/players/${playerId}`, {
      credentials: "include",
    });
    if (!res.ok) throw new Error(await res.text());
    return await res.json();
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const getPlayers = async () => {
  try {
    const res = await fetch(`${API_URL}/players/`, { credentials: "include" });
    if (!res.ok) throw new Error(await res.text());
    return await res.json();
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const postGameDay = async (gameDay: GameDay) => {
  try {
    const res = await fetch(`${API_URL}/game-days/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(gameDay),
      credentials: "include",
    });
    if (!res.ok) throw new Error(await res.text());
    return await res.json();
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const getGameDay = async (id: string) => {
  try {
    const res = await fetch(`${API_URL}/game-days/${id}`, {
      credentials: "include",
    });
    if (!res.ok) throw new Error(await res.text());
    return await res.json();
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const putGameDay = async (gameDay: GameDay) => {
  try {
    const res = await fetch(`${API_URL}/game-days/${gameDay._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(gameDay),
      credentials: "include",
    });
    if (!res.ok) throw new Error(await res.text());
    return await res.json();
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const getGameDayByCode = async (code: string) => {
  try {
    const res = await fetch(`${API_URL}/game-days/code/${code}`, {
      credentials: "include",
    });
    if (!res.ok) throw new Error(await res.text());
    return await res.json();
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const postTransferGameDay = async (gameDayId: string, playerId: string) => {
  try {
    const res = await fetch(`${API_URL}/game-days/transfer`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ gameDayId, playerId }),
      credentials: "include",
    });
    if (!res.ok) throw new Error(await res.text());
    return await res.json();
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const getGameDays = async (playerId: string) => {
  try {
    const res = await fetch(`${API_URL}/game-days/player/${playerId}`, {
      credentials: "include",
    });
    if (!res.ok) throw new Error(await res.text());
    return await res.json();
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export {
  API_URL,
  putPlayer,
  getPlayer,
  getPlayers,
  postGameDay,
  getGameDay,
  putGameDay,
  getGameDayByCode,
  postTransferGameDay,
  getGameDays,
};
