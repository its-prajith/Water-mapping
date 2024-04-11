import React from 'react'
import image from "../images/pipelogo.png"


export default function Navbar() {
  return (
    <nav className="nav">
    <a href ="/" className='site-title'><b>WATER MAPPING</b></a>
        <img src={image} alt="no image"  height={60} />
      <ul>  
       <li className='active'> <a href='./Home'>HOME</a></li>
       <li className='active'> <a href='./Dashboard'>DASHBOARD</a></li>
       <li className='active'> <a href='./Grievance'>GRIEVANCE</a></li>
      
       <li className='active'> <a href='./Status'>STATUS</a></li>

        </ul>  
    </nav>
  )
}
