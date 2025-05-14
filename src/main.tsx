import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HashRouter, Routes, Route } from 'react-router-dom'  
import { Home } from './pages/Home/Home.tsx'
import { Projects } from './pages/Projects/Projects.tsx'
import { About } from './pages/About/About.tsx'
import { Skills } from './pages/Skills/Skills.tsx'

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills/>} />
      </Route>
    </Routes>
  </HashRouter>
)
