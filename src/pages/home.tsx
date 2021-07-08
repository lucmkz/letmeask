import illustrationImg from "../assets/images/illustration.svg";
import logo from "../assets/images/logo.svg";
import googleIconImage from "../assets/images/google-icon.svg";

export function Home() {
  return (
    <div>
      <aside>
        <img src={illustrationImg} alt="Ilustração" />
        <strong>Create your Q&amp;A room live</strong>
        <p>answer your audience in real-time</p>
      </aside>
      <main>
        <div>
          <img src={logo} alt="letmeask" />
        </div>
        <button>
          <img src={googleIconImage} alt="Icon Logo" />
          Create your room with Google
        </button>
        <div>Or join a room</div>
        <form>
          <input type="text" placeholder="type your room`s code" />
          <button type="submit">Join Room</button>
        </form>
      </main>
    </div>
  );
}
