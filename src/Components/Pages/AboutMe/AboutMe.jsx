import React from 'react';
import { FaCode,FaJava, FaUsers,FaHtml5,FaGit,FaGithub,FaLightbulb, FaCss3Alt, FaReact, FaNodeJs} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { CiViewList } from "react-icons/ci";



export const AboutMe = () => {
  return (
    <div className="p-6 md:p-12">
      {/* Encabezado Principal */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-700 mb-10 md:mb-12">
        Sobre Mí 🚀
      </h1>

      {/* Contenedor Principal */}
      <div className="space-y-12 md:space-y-16">
        {/* Habilidades Técnicas */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 flex items-center justify-center gap-2 mb-6">
            <FaCode className="text-blue-500 text-3xl md:text-4xl" /> Habilidades Técnicas
          </h2>

          {/* Contenedor en dos columnas en pantallas grandes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            {/* Habilidades Frontend y Backend */}
            <div>
              <h3 className="text-pink-900 text-lg md:text-xl font-semibold mb-3 text-center md:text-left">Frontend</h3>
              <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-4 md:gap-x-6 relative before:absolute before:w-full before:h-1 before:top-1/2 mb-8">
                <div className="relative text-center">
                  <FaHtml5 className="w-10 h-10 bg-pink-900 text-white flex items-center justify-center rounded-full shadow-lg"/>
                  <p className="mt-2 text-gray-700 text-sm">HTML</p>
                </div>
                <div className="relative text-center">
                  < FaCss3Alt  className="w-10 h-10 bg-pink-900 text-white flex items-center justify-center rounded-full shadow-lg"/>
                  <p className="mt-2 text-gray-700 text-sm">CSS</p>
                </div>
                <div className="relative text-center">
                  <IoLogoJavascript className="w-10 h-10 bg-pink-900 text-white flex items-center justify-center rounded-full shadow-lg"/>
                  <p className="mt-2 text-gray-700 text-sm">JavaScript</p>
                </div>
                <div className="relative text-center">
                  <FaReact className="w-10 h-10 bg-pink-900 text-white flex items-center justify-center rounded-full shadow-lg"/>
                  <p className="mt-2 text-gray-700 text-sm">React</p>
                </div>
                <div className="relative text-center">
                  <RiTailwindCssFill className="w-10 h-10 bg-pink-900 text-white flex items-center justify-center rounded-full shadow-lg"/>
                  <p className="mt-2 text-gray-700 text-sm">Tailwind</p>
                </div>
              </div>

              <h3 className="text-green-800 text-lg md:text-xl font-semibold mb-3 text-center md:text-left">Backend y Bases de Datos</h3>
              <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-4 md:gap-x-6 relative before:absolute before:w-full before:h-1 before:top-1/2 mb-8">
                <div className="relative text-center">
                  <FaNodeJs  className="w-10 h-10 bg-green-800 text-white flex items-center justify-center rounded-full shadow-lg"/>
                  <p className="mt-2 text-gray-700 text-sm">Node.js</p>
                </div>
                <div className="relative text-center">
                  <SiMongodb className="w-10 h-10 bg-green-800 text-white flex items-center justify-center rounded-full shadow-lg"/>
                  <p className="mt-2 text-gray-700 text-sm">MongoDB</p>
                </div>
                <div className="relative text-center">
                  <IoLogoJavascript className="w-10 h-10 bg-green-800 text-white flex items-center justify-center rounded-full shadow-lg"/>
                  <p className="mt-2 text-gray-700 text-sm">JavaScript</p>
                </div>
                <div className="relative text-center">
                  <GrMysql className="w-10 h-10 bg-green-800 text-white flex items-center justify-center rounded-full shadow-lg"/>
                  <p className="mt-2 text-gray-700 text-sm">MySQL</p>
                </div>
                <div className="relative text-center">
                  <FaJava className="w-10 h-10 bg-green-800 text-white flex items-center justify-center rounded-full shadow-lg"/>
                  <p className="mt-2 text-gray-700 text-sm">Java</p>
                </div>
              </div>
            </div>

            {/* Control de Versiones y Educación */}
            <div>
              <h3 className="text-gray-800 text-lg md:text-xl font-semibold mb-3 text-center md:text-left">Control de Versiones</h3>
              <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-4 md:gap-x-6 relative before:absolute before:w-full before:h-1 before:top-1/2 mb-8 max-w-[60%] md:max-w-full mx-auto">
                <div className="relative text-center">
                  <FaGit className="w-10 h-10 bg-gray-800 text-white flex items-center justify-center rounded-full shadow-lg" />
                  <p className="mt-2 text-gray-700 text-sm">Git</p>
                </div>
                <div className="relative text-center">
                  <FaGithub className="w-10 h-10 bg-gray-800 text-white flex items-center justify-center rounded-full shadow-lg"/>
                  <p className="mt-2 text-gray-700 text-sm">GitHub</p>
                </div>
              </div>

              <h3 className="text-fuchsia-950 text-lg md:text-xl font-semibold mb-3 text-center md:text-left">Educación y Liderazgo</h3>
              <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-4 md:gap-x-6 relative before:absolute before:w-full before:h-1 before:top-1/2 mb-8 max-w-[60%] md:max-w-full mx-auto">
                <div className="relative text-center">
                  <FaLightbulb className="w-10 h-10 bg-fuchsia-950 text-white flex items-center justify-center rounded-full shadow-lg"/>
                  <p className="mt-2 text-gray-700 text-sm">Lógica</p>
                </div>
                <div className="relative text-center">
                  <CiViewList className="w-10 h-10 bg-fuchsia-950 text-white flex items-center justify-center rounded-full shadow-lg"/>
                  <p className="mt-2 text-gray-700 text-sm">Preparación</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Habilidades Sociales */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-green-600 flex items-center justify-center gap-2 mb-6">
            <FaUsers className="text-green-500 text-3xl md:text-4xl" /> Habilidades Sociales
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-green-100 rounded-lg shadow-lg hover:scale-105 transition">
              <h3 className="text-lg md:text-xl font-semibold text-green-700">Trabajo en Equipo 🤝</h3>
              <p className="text-gray-600 text-sm md:text-base">Me adapto bien a grupos, comunicando ideas y contribuyendo al éxito del equipo.</p>
            </div>
            <div className="p-6 bg-green-100 rounded-lg shadow-lg hover:scale-105 transition">
              <h3 className="text-lg md:text-xl font-semibold text-green-700">Resolución de Problemas 💡</h3>
              <p className="text-gray-600 text-sm md:text-base">Analizo situaciones y encuentro soluciones eficientes bajo presión.</p>
            </div>
            <div className="p-6 bg-green-100 rounded-lg shadow-lg hover:scale-105 transition">
              <h3 className="text-lg md:text-xl font-semibold text-green-700">Comunicación ✨</h3>
              <p className="text-gray-600 text-sm md:text-base">Explico ideas de manera clara y efectiva en distintos formatos.</p>
            </div>
            <div className="p-6 bg-green-100 rounded-lg shadow-lg hover:scale-105 transition">
              <h3 className="text-lg md:text-xl font-semibold text-green-700">Liderazgo 🎯</h3>
              <p className="text-gray-600 text-sm md:text-base">Dirijo proyectos asegurando el cumplimiento de objetivos con motivación.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};