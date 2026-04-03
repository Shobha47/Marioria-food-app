import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import "./App.css";
import NotFound from "./pages/Not-Found";
import SmoothScroll from "./components/SmoothScrolling";

function App() {
  return (
    <BrowserRouter>
    <SmoothScroll />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* 404 Route (ALWAYS LAST) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;