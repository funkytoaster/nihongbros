import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import VocabularyPage from "./pages/vocabulary.tsx";
import KanasPage from "./pages/kanas.jsx";
import HomePage from "./pages/home.tsx";
import kanalist from "./assets/kanalist";
import basicKatas from "./assets/basicKataList";
import basicCombiKatas from "./assets/basicCombiKatas";
import fullKata from "./assets/fullKata";
import hiragana from "./assets/hiragana";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="kanas" element={<KanasPage kanalist={kanalist} />} />
        <Route path="hira" element={<KanasPage kanalist={hiragana} />} />
        <Route
          path="basicKatas"
          element={<KanasPage kanalist={basicKatas} />}
        />
        <Route
          path="basicCombiKatas"
          element={<KanasPage kanalist={basicCombiKatas} />}
        />
        <Route path="fullKatas" element={<KanasPage kanalist={fullKata} />} />
        <Route path="vocab" element={<VocabularyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
