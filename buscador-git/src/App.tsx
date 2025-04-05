import { useState } from "react";
import axios from "axios";
import UserCard from "./components/UserCard";
import { IoLogoGithub } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

import './App.css'

export default function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(res.data);
    } catch (err) {
      setUserData(null);
      setError("Usuário não encontrado.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="title"><IoLogoGithub size={45}/>Perfil <strong>GitHub</strong></h1>
      <div className="container-input">
        <input
          type="text"
          placeholder="Digite o nome de usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded"
        />
        <button
          onClick={fetchUser}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          <IoIosSearch size={30} color="white"/>

        </button>
      </div>

      {loading && <p className="mt-4">Carregando...</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
      {userData && <UserCard user={userData} />}
    </div>
  );
}
