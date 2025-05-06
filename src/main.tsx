import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'  
import { Home } from './pages/Home/Home.tsx'
import { Projects } from './pages/Projects/Projects.tsx'
import { About } from './pages/About/About.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/about",
        element: <About />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
