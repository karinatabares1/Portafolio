import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import '../../../index.css'
import { ItemNavbar } from '../../UI/ItemNavbar/ItemNavbar'
import { FaFacebook,FaInstagramSquare, FaGithub} from "react-icons/fa"

export const Fooder = () => {
    return (
    <>
    <footer className='text-white p-4 flex flex-col justify-center w-full bg-gray-900 mt-auto ' >
      <p>Desarrollado por: <strong>KARINA TABARES </strong> </p>
      <h2 className="text-lg font-semibold">© 2025 Mi Portafolio</h2>
      <Navbar>
        <ul className= 'space-x-4 flex justify-center' >
          <ItemNavbar content= {<FaFacebook />} route="https://www.facebook.com/share/15u5adQ2VH/" />
          <ItemNavbar content= {<FaInstagramSquare />} route="https://www.instagram.com/karina_97ca?igsh=djk0d2JmamNlMDI4"/> 
          <ItemNavbar content= {<FaGithub />} route="https://github.com/karinatabares1"/>    
        </ul>
      </Navbar>
      </footer>
    </>
    )
  }