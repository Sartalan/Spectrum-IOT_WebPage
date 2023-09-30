{
  /*
    Componentes Internos de la Barra de Navegación Interna 
    que corresponderán a la movilidad de cada uno de los MiniBots
  */
}


import './navInside.css'

import controlIcon from './src_inside/example.svg'

export function Inside(){
 return (
    <div className='inside-nav'>

      <InsideNavComponent 
        controllerIconComponent={controlIcon}
      />
        <InsideNavComponent 
        controllerIconComponent={controlIcon}
      />
 
      <InsideNavComponent 
        controllerIconComponent={controlIcon}
      />
      
      <InsideNavComponent 
        controllerIconComponent={controlIcon}
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