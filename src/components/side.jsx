import React from 'react'

/* styles */
import './side.css'

function Sidebar() {
  return (
    <section>
      <div className='sidebarContainer'>

        {/* skeleton only */}

        <div className='sideButton'>
          Home
        </div>
        <div className='sideButton'>
          Tickets
        </div>
        <div className='sideButton'>
          Account
        </div>
        <div className='sideButton'>
          Help
        </div>
      </div>
    </section>
  )
}

export default Sidebar