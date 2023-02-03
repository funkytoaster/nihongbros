import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import VocabularyPage from "./pages/vocabulary.tsx";
import KanasPage from "./pages/kanas.jsx";
import HomePage from "./pages/home.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="kanas" element={<KanasPage />} />
        <Route path="vocab" element={<VocabularyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
