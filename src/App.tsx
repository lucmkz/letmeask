import { BrowserRouter, Route, Switch } from "react-router-dom";

import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";

import "./styles/global.scss";

import { AuthContextProvider } from "./context/AuthContext";
import { AdminRoom } from "./pages/AdminRoom";
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />

          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
