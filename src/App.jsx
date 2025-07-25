import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CharacterDetails from "./components/CharacterDetails";
import { CharacterProvider } from "./context/CharacterContext";

function App() {
  return (
    <CharacterProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:name" element={<CharacterDetails />} />
        </Routes>
      </BrowserRouter>
    </CharacterProvider>
  );
}

export default App;
