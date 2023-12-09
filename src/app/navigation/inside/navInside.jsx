{
  /*
    Componentes Internos de la Barra de Navegación Interna 
    que corresponderán a la movilidad de cada uno de los MiniBots
  */
}

import './navInside.css'

import {Routes, Route, Link } from 'react-router-dom'


//? Routes Components
import {StartHome} from '../../routes/starthome'
import {Home} from '../../routes/home'
import {Control} from '../../routes/control'
import {Robot} from '../../routes/robot'

export function Inside(){
 return (
  <>
    <ul className='inside-nav'>
  
      <Link className='inside-component' to='/home-page'>
          <img className='icon-component' src="/icons/nav_icons/home.svg" alt="#"/>
      </Link>

      <Link className='inside-component' to='/robot-page'>
          <img className='icon-component' src="/icons/nav_icons/robot.svg" alt="#"/>
      </Link>

      
      <Link className='inside-component' to='/control-page'>
          <img className='icon-component' src="/icons/nav_icons/control.svg" alt="#"/>
      </Link>
      
      <Link className='inside-component' to='/status-page'>
          <img className='icon-component' src="/icons/nav_icons/status.svg" alt="#"/>
      </Link>
      
      <Link className='inside-component' to='/about-page'>
          <img className='icon-component' src="/icons/nav_icons/about_us.svg" alt="#"/>
      </Link>
      
    
     
      <Link className='inside-component' to='/config-page'>
          <img className='icon-component' src="/icons/nav_icons/config.svg" alt="#"/>
      </Link>   
      
    </ul>

    </>
 )
} 

export function Status () {
  return (
    <h1>SOY STATUS</h1>
  )
}

export function About () {
  return (
    <h1>SOY ABOUT</h1>
  )
}

export function Config () {
  return (
    <h1>SOY LA CONFIGURACIÓN</h1>
  )
}

export function Haupt(){
    return (
      <main className='main'>
        <Routes>
          <Route path='/' element={<StartHome/>}/>
          <Route path='/home-page' element={<Home/>}/>
          <Route path='/status-page' element={<Status/>}/>
          <Route path='/about-page' element={<About/>}/>
          <Route path='/robot-page' element={<Robot/>}/>
          <Route path='/config-page' element={<Config/>}/>
          <Route path='/control-page' element={<Control/>}/>
        </Routes>
      </main>
    )
  }
