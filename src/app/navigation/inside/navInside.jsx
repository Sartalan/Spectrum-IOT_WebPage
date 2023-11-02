{
  /*
    Componentes Internos de la Barra de Navegación Interna 
    que corresponderán a la movilidad de cada uno de los MiniBots
  */
}


import './navInside.css'
import '../../routes/routes.css'

import {Routes, Route, Link } from 'react-router-dom'

import controlHome from '../../../assets/icons/nav_icons/home.svg'
import controlConfig from '../../../assets/icons/nav_icons/config.svg'
import controlStatus from '../../../assets/icons/nav_icons/status.svg'
import about from '../../../assets/icons/nav_icons/about_us.svg'
import robot from '../../../assets/icons/nav_icons/about_robots.svg'

import {Home} from '../../routes/home'

export function Inside(){
 return (
  <>
    <ul className='inside-nav'>

      <div className="inside-component">
         <Link to='/home-page'><img className='icon-component' src={controlHome} alt="#"/></Link>
      </div>

      <div className="inside-component">
         <Link to='/status-page'><img className='icon-component' src={controlStatus} alt="#"/></Link>
      </div>

      <div className="inside-component">
         <Link to='/about-page'><img className='icon-component' src={about} alt="#"/></Link>
      </div>

      <div className="inside-component">
         <Link to='/robot-page'><img className='icon-component' src={robot} alt="#"/></Link>
      </div>

      <div className="inside-component">
         <Link to='/config-page'><img className='icon-component' src={controlConfig} alt="#"/></Link>
      </div>
      
      
    </ul>

    </>
 )
} 

export function Normal () {
  return (
    <h1>Soy POR DEFECTO XD </h1>
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
          <Route path='/' element={<Normal/>}/>
          <Route path='/home-page' element={<Home/>}/>
          <Route path='/status-page' element={<Status/>}/>
          <Route path='/about-page' element={<About/>}/>
          <Route path='/robot-page' element={<Robot/>}/>
          <Route path='/config-page' element={<Config/>}/>
        </Routes>
      </main>
    )
  }
