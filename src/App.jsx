import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import About from './pages/About';
import SkillProjects from './pages/SkillProjects';
import ProjectDetails from './pages/ProjectDetails';

// Single page layout with all sections
function MainPage() {
  return (
    <>
      <section id="home">
        <Home />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="about">
        <About />
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      <div
        className="min-h-screen"
        style={{ backgroundColor: 'var(--bg-primary)' }}
      >
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/skills/:skillId" element={<SkillProjects />} />
            <Route path="/projects/:projectId" element={<ProjectDetails />} />
          </Routes>
        </AnimatePresence>

        {/* Footer */}
        <footer
          className="py-8 text-center"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderTop: '1px solid var(--border-color)',
          }}
        >
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Yashwanth U. All rights reserved.
          </p>
          <p className="text-xs mt-2" style={{ color: 'var(--text-muted)' }}>
            Built with React, Tailwind CSS & Framer Motion
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
