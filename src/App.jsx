import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Experience } from "./pages/Experience";
import { Project } from "./pages/Project";
import { Work } from "./pages/Work";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/work" element={<Work />} />
        <Route path="/projects/:id" element={<Project />} />
      </Routes>

      <Footer />
    </>
  );
}
