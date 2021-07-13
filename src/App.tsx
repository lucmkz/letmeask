import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

import { BrowserRouter, Route } from 'react-router-dom';

import "./services/firebase";
import "./styles/global.scss";

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Home} exact />
      <Route path='/room/new' component={NewRoom} />
    </BrowserRouter>
  );
}

export default App;
