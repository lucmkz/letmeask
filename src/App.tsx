import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

import { BrowserRouter, Route } from 'react-router-dom';

import "./services/firebase";
import "./styles/global.scss";
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <BrowserRouter>
    <AuthContextProvider>
        <Route path='/' component={Home} exact />
        <Route path='/room/new' component={NewRoom} />
    </AuthContextProvider>

    </BrowserRouter>
  );
}

export default App;
