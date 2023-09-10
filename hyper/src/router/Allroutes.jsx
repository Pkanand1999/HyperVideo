import React from 'react'
import {Routes,Route} from 'react-router'
import Home from '../pages/Home'
import Playback from '../pages/Playback'

function Allroutes() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/playback' element={<Playback/>} />
    </Routes>
    </>
  )
}

export default Allroutes