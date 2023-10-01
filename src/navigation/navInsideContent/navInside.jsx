{
  /*
    Componentes Internos de la Barra de Navegación Interna 
    que corresponderán a la movilidad de cada uno de los MiniBots
  */
}


import './navInside.css'

import controlHome from './src_inside/home.svg'
import controlConfig from './src_inside/config.svg'
import controlStatus from './src_inside/status.svg'
import about from './src_inside/about_us.svg'
import aboutRobots from './src_inside/about_robots.svg'

export function Inside(){
 return (
    <div className='inside-nav'>

      <InsideNavComponent 
        controllerIconComponent={controlHome}
      />
      <InsideNavComponent 
        controllerIconComponent={controlStatus}
      />
        <InsideNavComponent 
        controllerIconComponent={about}
      />
          <InsideNavComponent 
        controllerIconComponent={aboutRobots}
      />
       <InsideNavComponent 
        controllerIconComponent={controlConfig}
      />

      

      
      
      
    </div>
 )
} 

export function InsideNavComponent({controllerIconComponent}){
  return (
    <div className="inside-component">
      <img className='icon-component' src={controllerIconComponent} alt="" />  
    </div>
  )
}