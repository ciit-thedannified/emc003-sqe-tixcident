import React from 'react'

/* styles */
import './nav.css'

/* assets */
import create_icn from '../assets/create.svg'
import notif_icn from '../assets/notif.svg'
import logout_icn from '../assets/logout.svg'

function Navbar() {
  return (
    <nav>
      <h1>TIXIDENT</h1>
        <menu>
            <li className='menuLi'><img src={create_icn} alt='create icon' id='create_icn' className='notif_icn' /> Create</li>
            <li className='menuLi'><img src={notif_icn} alt='notification icon' id='notif_icn' className='notif_icn' /> Notifications</li>
            <li className='menuLi'><img src={logout_icn} alt='logout icon' id='logout_icn' className='notif_icn' /> Logout</li>
        </menu>
    </nav>
  )
}

export default Navbar