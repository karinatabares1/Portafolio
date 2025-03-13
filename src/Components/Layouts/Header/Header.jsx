import React from "react";
import { ItemNavbar } from "../../UI/ItemNavbar/ItemNavbar";
import { Navbar } from "../Navbar/Navbar";

export const Header = () => {
  return (
    <header className="w-full bg-white shadow-md p-4 flex flex-col md:flex-row items-center justify-between">
      {/* Título */}
      <h1 className="text-3xl md:text-4xl font-bold text-blue mb-2 md:mb-0">
        Perfil Personal
      </h1>

      {/* Navbar */}
      <Navbar>
        <ul className="text-xl md:text-2xl font-bold flex flex-wrap justify-center md:justify-end space-x-4">
          <ItemNavbar route="/" content="Inicio" styles="text-gray-700" />
          <ItemNavbar route="/AboutMe" content="Sobre mí" styles="text-gray-700" />
        </ul>
      </Navbar>
    </header>
  );
};



