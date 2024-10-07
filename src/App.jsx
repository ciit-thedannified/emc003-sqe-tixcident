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
      <div className="mainAppContainer">
        <div className='appContainer' id='sidebar'><Sidebar /></div>
        <div className='appContainer' id='outlet'><Outlet /></div>
      </div>
      <Footer />
    </>
  )
}

export default App
