{
  /*
    Componentes Internos de la Barra de Navegación Interna 
    que corresponderán a la movilidad de cada uno de los MiniBots
  */
}


import './navInside.css'

import controlHome from '../../../assets/icons/nav_icons/home.svg'
import controlConfig from '../../../assets/icons/nav_icons/config.svg'
import controlStatus from '../../../assets/icons/nav_icons/status.svg'
import about from '../../../assets/icons/nav_icons/about_us.svg'
import aboutRobots from '../../../assets/icons/nav_icons/about_robots.svg'

export function Inside(){
 return (
    <ul className='inside-nav'>

      <div className="inside-component">
          <a href=""> 
            <img className='icon-component' src={controlHome} alt=""/>
          </a>
      </div>
      <div className="inside-component">
          <a href=""> 
            <img className='icon-component' src={controlStatus} alt=""/>
          </a>
      </div>
      <div className="inside-component">
          <a href=""> 
            <img className='icon-component' src={about} alt=""/>
          </a>
      </div>
      <div className="inside-component">
          <a href=""> 
            <img className='icon-component' src={aboutRobots} alt=""/>
          </a>
      </div>
      
    </ul>
 )
} 





//  J => 10 | 
//  K => 1  |
//  L => 12 |
//  F => 14 |