import './App.css'
import { Navbar } from './components/Navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
