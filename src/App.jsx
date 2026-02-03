import { HashRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
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

// Scroll restoration component
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash, scroll to that section
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          const navHeight = 80;
          const elementPosition = element.offsetTop - navHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    } else {
      // Otherwise scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
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
            {/* Catch-all route - redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
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
        </footer>
      </div>
    </Router>
  );
}

export default App;

