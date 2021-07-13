import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";

import "../styles/room.scss";

export function Room(props: any) {
  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="letmeask" />
          <div>codigo</div>
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
