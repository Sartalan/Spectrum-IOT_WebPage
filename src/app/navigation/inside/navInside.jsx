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
import aboutRobots from '../../../assets/icons/nav_icons/about_robots.svg'

export function Inside(){
 return (
  <>
    <ul className='inside-nav'>

      <div className="inside-component">
         <Link to='/raro-page'><img className='icon-component' src={controlHome} alt="#"/></Link>
      </div>
      <div className="inside-component">
         <Link to='/coso-page'><img className='icon-component' src={controlHome} alt="#"/></Link>
      </div>
      
      
    </ul>

    </>
 )
} 

export function Normal () {
  return (
    <h1>Soy un titulo </h1>
  )
}
export function Raro () {
  return (
    <h1>SOY RARODASDAS</h1>
  )
}
export function Coso () {
  return (
    <h1>SOY YO QUE SE</h1>
  )
}

export function Haupt(){
    return (
      <main className='main'>
        <Routes>
          <Route path='/' element={<Normal/>}/>
          <Route path='/raro-page' element={<Raro/>}/>
          <Route path='/coso-page' element={<Coso/>}/>
        </Routes>
      </main>
    )
  }
