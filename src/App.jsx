import react from "react";

import AllPlayers from "./Components/AllPlayers";
import SinglePlayer from "./Components/SinglePlayer";
import NewPlayerForm from "./Components/NewPlayerForm";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <nav>
        <Link to="/">Home</Link>
        <Link to="form">Create New Pup</Link>
      </nav>
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/:dogId" element={<SinglePlayer />} />
        <Route path="/form" element={<NewPlayerForm />} />
      </Routes>
    </div>
  );
};

export default App;
