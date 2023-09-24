import './nav.css'
import bar from '../assets/icons/bar.svg'
import icon from '../assets/icons/nanotechnology.png'
import menu from '../assets/icons/menu.svg'

export function Nav () {
  return (
    <>
    <header className='side-bar'>
      <nav className='nav'>

       <Top 
        name="IOT - Project" 
        spanText="Internet of Things"
        />    

       <ul className="list">

       </ul>


        
      </nav>
     
    </header>
    <div className='slider-nav'>
          <div>
            <img className='menu-arrow' src={menu} alt="" />
          </div>
        </div>
  
    </>
  )
}

export function Top({name,spanText}){
  return (
    
      <div className="top-navigation">
        <div className="box">
          <img className='top-icon' src={icon} alt="" />
          <span className='iot-text'>{spanText}</span>
        </div>
      </div>
      
  )
}















 

