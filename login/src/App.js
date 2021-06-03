import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import fire from "./fire";
import Login from "./login";
import Home from "./home";

const App = () => {
  const [user, setUser] = useState();

  const handleLogout = () => {
    fire.auth().signOut();
  };

  return (
    <div className="App">
      {user ? (
        <Home handleLogout={handleLogout} />
      ) : (
        <Login user={user} setUser={setUser} />
      )}
    </div>
  );
};

export default App;
