import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import HubungiKami from "./page/HubungiKami";
function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hubungi-kami" element={<HubungiKami />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
