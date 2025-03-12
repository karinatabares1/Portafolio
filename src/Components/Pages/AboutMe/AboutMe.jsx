// import React from 'react';
// import { FaCode, FaUsers } from "react-icons/fa";

// export const AboutMe = () => {
//   return (
//     <div className="p-8">
//       {/* Encabezado Principal */}
//       <h1 className="text-5xl font-extrabold text-center text-blue-700 mb-12">
//         Sobre Mí 🚀
//       </h1>

//       {/* Contenedor Principal */}
//       <div className="space-y-16">

//         {/* Habilidades Técnicas */}
//         <div>
//           <h2 className="text-3xl font-semibold text-blue-600 flex items-center gap-2 mb-6">
//             <FaCode className="text-blue-500 text-4xl" /> Habilidades Técnicas
//           </h2>

//           <div className="grid grid-cols-2 gap-8">
//             {/* Habilidades Frontend */}
//             <div>
//               <h3 className="text-pink-900 text-xl font-semibold">Frontend</h3>
//               <div className="flex items-center justify-between relative before:absolute before:w-full before:h-1 before:bg-blue-400 before:top-1/2 mb-8">
//                 {["HTML", "CSS", "JavaScript", "React", "Tailwind"].map((tech, index) => (
//                   <div key={index} className="relative text-center">
//                     <div className="w-10 h-10 bg-pink-900 text-white flex items-center justify-center rounded-full shadow-lg">{index + 1}</div>
//                     <p className="mt-3 text-gray-700">{tech}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Habilidades Backend */}
//             <div>
//               <h3 className="text-green-800 text-xl font-semibold">Backend y Bases de Datos</h3>
//               <div className="flex items-center justify-between relative before:absolute before:w-full before:h-1 before:bg-blue-400 before:top-1/2 mb-8">
//                 {["Node.js", "MongoDB", "JavaScript", "MySQL", "Java"].map((tech, index) => (
//                   <div key={index} className="relative text-center">
//                     <div className="w-10 h-10 bg-green-800 text-white flex items-center justify-center rounded-full shadow-lg">{index + 1}</div>
//                     <p className="mt-3 text-gray-700">{tech}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Control de Versiones */}
//             <div>
//               <h3 className="text-gray-800 text-xl font-semibold">Control de Versiones</h3>
//               <div className="flex items-center justify-between relative before:absolute before:w-full before:h-1 before:bg-blue-400 before:top-1/2 mb-8">
//                 {["Git", "GitHub"].map((tech, index) => (
//                   <div key={index} className="relative text-center">
//                     <div className="w-10 h-10 bg-gray-800 text-white flex items-center justify-center rounded-full shadow-lg">{index + 1}</div>
//                     <p className="mt-3 text-gray-700">{tech}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Educación y Liderazgo */}
//             <div>
//               <h3 className="text-fuchsia-950 text-xl font-semibold">Educación y Liderazgo</h3>
//               <div className="flex items-center justify-between relative before:absolute before:w-full before:h-1 before:bg-blue-400 before:top-1/2 mb-8">
//                 {["Lógica", "Preparación"].map((tech, index) => (
//                   <div key={index} className="relative text-center">
//                     <div className="w-10 h-10 bg-fuchsia-950 text-white flex items-center justify-center rounded-full shadow-lg">{index + 1}</div>
//                     <p className="mt-3 text-gray-700">{tech}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Habilidades Sociales */}
//         <div>
//           <h2 className="text-3xl font-semibold text-green-600 flex items-center gap-2 mb-6">
//             <FaUsers className="text-green-500 text-4xl" /> Habilidades Sociales
//           </h2>
//           <div className="grid grid-cols-2 gap-6">
//             <div className="p-6 bg-green-100 rounded-lg shadow-lg hover:scale-105 transition">
//               <h3 className="text-xl font-semibold text-green-700">Trabajo en Equipo 🤝</h3>
//               <p className="text-gray-600">Me adapto bien a grupos, comunicando ideas y contribuyendo al éxito del equipo.</p>
//             </div>
//             <div className="p-6 bg-green-100 rounded-lg shadow-lg hover:scale-105 transition">
//               <h3 className="text-xl font-semibold text-green-700">Resolución de Problemas 💡</h3>
//               <p className="text-gray-600">Analizo situaciones y encuentro soluciones eficientes bajo presión.</p>
//             </div>
//             <div className="p-6 bg-green-100 rounded-lg shadow-lg hover:scale-105 transition">
//               <h3 className="text-xl font-semibold text-green-700">Comunicación ✨</h3>
//               <p className="text-gray-600">Explico ideas de manera clara y efectiva en distintos formatos.</p>
//             </div>
//             <div className="p-6 bg-green-100 rounded-lg shadow-lg hover:scale-105 transition">
//               <h3 className="text-xl font-semibold text-green-700">Liderazgo 🎯</h3>
//               <p className="text-gray-600">Dirijo proyectos asegurando el cumplimiento de objetivos con motivación.</p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };





import React from 'react';
import { FaCode, FaUsers } from "react-icons/fa";

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
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 flex items-center gap-2 mb-6">
            <FaCode className="text-blue-500 text-3xl md:text-4xl" /> Habilidades Técnicas
          </h2>

          {/* Contenedor en dos columnas en pantallas grandes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Habilidades Frontend y Backend */}
            <div>
              <h3 className="text-pink-900 text-lg md:text-xl font-semibold mb-3">Frontend</h3>
              <div className="flex items-center justify-between relative before:absolute before:w-full before:h-1 before:bg-blue-400 before:top-1/2 mb-8">
                {["HTML", "CSS", "JavaScript", "React", "Tailwind"].map((tech, index) => (
                  <div key={index} className="relative text-center">
                    <div className="w-10 h-10 bg-pink-900 text-white flex items-center justify-center rounded-full shadow-lg">
                      {index + 1}
                    </div>
                    <p className="mt-2 text-gray-700 text-sm">{tech}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-green-800 text-lg md:text-xl font-semibold mb-3">Backend y Bases de Datos</h3>
              <div className="flex items-center justify-between relative before:absolute before:w-full before:h-1 before:bg-blue-400 before:top-1/2 mb-8">
                {["Node.js", "MongoDB", "JavaScript", "MySQL", "Java"].map((tech, index) => (
                  <div key={index} className="relative text-center">
                    <div className="w-10 h-10 bg-green-800 text-white flex items-center justify-center rounded-full shadow-lg">
                      {index + 1}
                    </div>
                    <p className="mt-2 text-gray-700 text-sm">{tech}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Control de Versiones y Educación */}
            <div>
              <h3 className="text-gray-800 text-lg md:text-xl font-semibold mb-3">Control de Versiones</h3>
              <div className="flex items-center justify-between relative before:absolute before:w-full before:h-1 before:bg-blue-400 before:top-1/2 mb-8 max-w-[60%] md:max-w-full mx-auto">
                {["Git", "GitHub"].map((tech, index) => (
                  <div key={index} className="relative text-center">
                    <div className="w-10 h-10 bg-gray-800 text-white flex items-center justify-center rounded-full shadow-lg">
                      {index + 1}
                    </div>
                    <p className="mt-2 text-gray-700 text-sm">{tech}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-fuchsia-950 text-lg md:text-xl font-semibold mb-3">Educación y Liderazgo</h3>
              <div className="flex items-center justify-between relative before:absolute before:w-full before:h-1 before:bg-blue-400 before:top-1/2 mb-8 max-w-[60%] md:max-w-full mx-auto">
                {["Lógica", "Preparación"].map((tech, index) => (
                  <div key={index} className="relative text-center">
                    <div className="w-10 h-10 bg-fuchsia-950 text-white flex items-center justify-center rounded-full shadow-lg">
                      {index + 1}
                    </div>
                    <p className="mt-2 text-gray-700 text-sm">{tech}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Habilidades Sociales */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-green-600 flex items-center gap-2 mb-6">
            <FaUsers className="text-green-500 text-3xl md:text-4xl" /> Habilidades Sociales
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Trabajo en Equipo 🤝", description: "Me adapto bien a grupos, comunicando ideas y contribuyendo al éxito del equipo." },
              { title: "Resolución de Problemas 💡", description: "Analizo situaciones y encuentro soluciones eficientes bajo presión." },
              { title: "Comunicación ✨", description: "Explico ideas de manera clara y efectiva en distintos formatos." },
              { title: "Liderazgo 🎯", description: "Dirijo proyectos asegurando el cumplimiento de objetivos con motivación." }
            ].map((skill, index) => (
              <div key={index} className="p-6 bg-green-100 rounded-lg shadow-lg hover:scale-105 transition">
                <h3 className="text-lg md:text-xl font-semibold text-green-700">{skill.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
