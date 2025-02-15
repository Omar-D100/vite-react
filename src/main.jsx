import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/contact";
import Navbar from './components/navbar'; 
import Home from "./pages/home";
import Projects from "./pages/projects";
import Competance from "./pages/competance";
import Formation from "./pages/formation";
import About from "./pages/about";


createRoot(document.getElementById('root')).render(
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/competance" element={<Competance />} />
        <Route path="/formation" element={<Formation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
);
