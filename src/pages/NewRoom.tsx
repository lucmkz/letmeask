
import { Link } from "react-router-dom";

import illustrationImg from "../assets/images/illustration.svg";
import logo from "../assets/images/logo.svg";

import "../styles/auth.scss";
import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";
import { FormEvent, useState } from "react";

export function NewRoom() {
  const { user } = useAuth();
  const [newRoom, setNewRoom] = useState('')

  async function handleCreateRoom(e: FormEvent) {
    e.preventDefault()

    if (newRoom.trim() === '') {return}

    console.log(newRoom)
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração" />
        <strong>Create your Q&amp;A room live</strong>
        <p>answer your audience in real-time</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logo} alt="letmeask" />
          <h2>Create New Room</h2>
          <form onSubmit={handleCreateRoom}>
            <input onChange={e => setNewRoom(e.target.value)} value={newRoom} type="text" placeholder="Room`s name" />
            <Button type="submit">Create room</Button>
          </form>
          <p>
            Do you want to join in a existent Room?{" "}
            <Link to="/">Click here</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
