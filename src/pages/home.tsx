import { useHistory } from "react-router-dom";

import illustrationImg from "../assets/images/illustration.svg";
import logo from "../assets/images/logo.svg";
import googleIconImage from "../assets/images/google-icon.svg";

import "../styles/auth.scss";
import { Button } from "../components/Button";

import { auth, firebase } from "../services/firebase";

export function Home() {
  const history = useHistory();

  function handleCreateRoom() {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then((result) => {
      console.log(result);
    });

    // history.push("/room/new");
  }

  function signIn() {}

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
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImage} alt="Icon Logo" />
            Create your room with Google
          </button>
          <div className="separator">Or join a room</div>
          <form>
            <input type="text" placeholder="type your room`s code" />
            <Button type="submit">Join Room</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
