import { useParams } from "react-router-dom";

import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";
import { RoomCode } from "../components/RoomCode";

import "../styles/room.scss";

type RoomParams = {
  id: string;
};;

export function Room(props: any) {
  const params = useParams<RoomParams>();
  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="letmeask" />
          <RoomCode code={params.id} />
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala React</h1>
          <span>4 perguntas</span>
        </div>

        <form action="">
          <textarea placeholder="o que vc quer perguntas"></textarea>

          <div className="form-footer">
            <span>
              Para evniar uma pergunta, <button>faça seu login</button>
            </span>
            <Button type="submit">Enviar Pergunta</Button>
          </div>
        </form>
      </main>
    </div>
  );
}
