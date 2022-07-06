import { Route, Routes } from "react-router-dom";
import "./App.css";

import Coffe from "./pages/Coffe";
import Sweets from "./pages/Sweets";
import Beer from "./pages/Beer";
import Wine from "./pages/Wine";
import Cocktails from "./pages/Cocktails";
import Juices from "./pages/Juices";
import Shots from "./pages/Shots";
import Home from "./pages/Home";

function App() {
  console.log("App");
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/coffes" element={<Coffe />} />
        <Route path="/sweets" element={<Sweets />} />
        <Route path="/beers" element={<Beer />} />
        <Route path="/wines" element={<Wine />} />
        <Route path="/cocktails" element={<Cocktails />} />
        <Route path="/juices" element={<Juices />} />
        <Route path="/alcohol" element={<Shots />} />
      </Routes>
    </div>
  );
}

export default App;
