import { Routes, Route } from "react-router-dom"
import { Header } from "./Components/Layouts/Header/Header"
import { Home } from "./Components/Pages/Home/Home"
import { AboutMe } from "./Components/Pages/AboutMe/AboutMe"



export const App = ()  =>{
  return (
   <div className="flex flex-col w-full min-h-screen"> 
   <Header />
   <div className="flex flex-1 justify-center items-center p-4">
  <Routes>
    <Route path="/" element = {<Home /> }/>
    <Route path="/AboutMe" element = {<AboutMe /> }/>
   </Routes>
   </div>
   </div>

  )
}