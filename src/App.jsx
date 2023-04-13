import react from "react";

import AllPlayers from "./Components/AllPlayers";
import SinglePlayer from "./Components/SinglePlayer";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/:dogId" element={<SinglePlayer />} />
      </Routes>
    </div>
  );
};

export default App;
