import React from "react";
import girl from "../../../assets/Images/girl.png"
import { FaGraduationCap } from "react-icons/fa";

export const Main = () => {
    return(
      <div className="flex flex-col md:flex-row items-center justify-center px-2 gap-10 py-15">

        <div className="md:w-1/2 flex justify-center p-6 pr-10">
         <img src={girl} alt="" className="w-110 h-110 rounded-full shadow-lg"/> 
        </div>
        

        <div className="md:w-1/2 text-center md:text-left">

          <h1 className= "text-blue-700 font-bold text-6xl mb-4 hover:text-sky-400 hover:underline">Karina Tabares</h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-lg" >
          Soy desarrolladora web con habilidades en diseño de interfaces atractivas y funcionales. 
          Me gusta trabajar en equipo y aportar soluciones efectivas en cada proyecto.
          </p>
      
         <div className="mt-6">
          <h1 className="text-2xl font-bold">Nivel de ingles : A1</h1>
         </div>

          {/* Sección de Estudios */}
       <div className="mt-10 bg-white p-6 rounded-xl shadow-md">
           <h2 className="text-2xl font-semibold text-blue-600 flex items-center gap-2">
            <FaGraduationCap className="text-blue-500" /> Estudios
           </h2>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2">
            <li>📌 Tecnologo en Analisis y Desarrollo de software - <span className="text-gray-900 font-medium">Sena (En proceso)</span></li>
            <li>📌 Bachiller - <span className="text-gray-900 font-medium">Institución Educativa Ciudad Dorada</span></li>
            <li>📌 Tecnico en Programación de software  - <span className="text-gray-900 font-medium">Sena</span></li>
            <li>📌 Curso de Programación basica - <span className="text-gray-900 font-medium">Platzi</span></li>
           
            
          </ul>
       </div>

        </div>
      
      </div>
    )
}
