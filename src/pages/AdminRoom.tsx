import { useHistory, useParams } from "react-router-dom";

import logoImg from "../assets/images/logo.svg";
import deleteImage from "../assets/images/delete.svg";

import { Button } from "../components/Button";
import { Question } from "../components/Question";
import { RoomCode } from "../components/RoomCode";
// import { useAuth } from "../hooks/useAuth";
import { useRoom } from "../hooks/useRoom";

import "../styles/room.scss";
import { database } from "../services/firebase";

type RoomParams = {
  id: string;
};

export function AdminRoom(props: any) {
  const params = useParams<RoomParams>();
  // const { user } = useAuth();

  const history = useHistory();
  const roomId = params.id;

  const { questions, title } = useRoom(roomId);

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm("You sure you want to delete this question?")) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    history.push("/");
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleEndRoom}>
              Encerrar Sala
            </Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && (
            <span>
              {questions.length} pergunta{questions.length >= 2 && "s"}
            </span>
          )}
        </div>

        <div className="question-list">
          {questions.map((question) => {
            return (
              <Question
                content={question.content}
                author={question.author}
                key={question.id}
              >
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImage} alt="Delete Question" />
                </button>
              </Question>
            );
          })}
        </div>
      </main>
    </div>
  );
}
