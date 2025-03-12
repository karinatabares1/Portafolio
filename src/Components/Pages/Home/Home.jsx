import React from 'react'
import { Fooder } from '../../Layouts/Fooder/Fooder'
import { Main } from '../../Layouts/Main/Main'


export const Home = () => {
  return(
    <div className="flex flex-col w-full items-center text-center">
    <Main />
    <Fooder />
    </div>
  )
  
}