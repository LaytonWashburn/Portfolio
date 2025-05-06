import './App.css'
import { Navbar } from './components/Navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div id="root">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
