{
  /*
    Componentes Internos de la Barra de Navegación Interna 
    que corresponderán a la movilidad de cada uno de los MiniBots
  */
}

import './navInside.css'

import {Routes, Route, Link } from 'react-router-dom'

import controlHome from '../../../assets/icons/nav_icons/home.svg'
import controlConfig from '../../../assets/icons/nav_icons/config.svg'
import controlStatus from '../../../assets/icons/nav_icons/status.svg'
import about from '../../../assets/icons/nav_icons/about_us.svg'
import robot from '../../../assets/icons/nav_icons/about_robots.svg'
import control from '../../../assets/icons/nav_icons/control.svg'

//? Routes Components
import {StartHome} from '../../routes/starthome'
import {Home} from '../../routes/home'
import {Control} from '../../routes/control'

export function Inside(){
 return (
  <>
    <ul className='inside-nav'>

  
      <Link className='inside-component' to='/home-page'>
          <img className='icon-component' src={controlHome} alt="#"/>
      </Link>
      
      <Link className='inside-component' to='/status-page'>
          <img className='icon-component' src={controlStatus} alt="#"/>
      </Link>
      
      <Link className='inside-component' to='/control-page'>
          <img className='icon-component' src={control} alt="#"/>
      </Link>
      
      <Link className='inside-component' to='/about-page'>
          <img className='icon-component' src={about} alt="#"/>
      </Link>
      
      <Link className='inside-component' to='/robot-page'>
          <img className='icon-component' src={robot} alt="#"/>
      </Link>
     
      <Link className='inside-component' to='/config-page'>
          <img className='icon-component' src={controlConfig} alt="#"/>
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
export function Robot () {
  return (
    <h1>SOY EL ROBOT</h1>
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
