{
  /*
    Componentes Internos de la Barra de Navegación Interna 
    que corresponderán a la movilidad de cada uno de los MiniBots
  */
}


import './navInside.css'

import controlIcon from './src_inside/example_one.svg'
import controlIcon2 from './src_inside/example_two.svg'
import controlIcon3 from './src_inside/example_three.svg'
import controlIcon4 from './src_inside/example_four.svg'

export function Inside(){
 return (
    <div className='inside-nav'>

      <InsideNavComponent 
        controllerIconComponent={controlIcon}
      />
        <InsideNavComponent 
        controllerIconComponent={controlIcon2}
      />
 
      <InsideNavComponent 
        controllerIconComponent={controlIcon3}
      />
      
      <InsideNavComponent 
        controllerIconComponent={controlIcon4}
      />
        <InsideNavComponent 
        controllerIconComponent={controlIcon4}
      />
        <InsideNavComponent 
        controllerIconComponent={controlIcon4}
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