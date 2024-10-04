/* imports */
import Navbar from './components/nav'
import Sidebar from './components/side'
import Outlet from './components/outlet'
import Footer from './components/footer'

/* styles */
import './app.css'

function App() {

  {/* CLIENT SIDE */}

  return (

    <>
      <Navbar />
      <div className="appContainer">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
