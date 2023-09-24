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

      </nav>
    </header>

    <Slider/> 
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

export function Slider() {
    return (
<>
    <div className='slider-nav'>
      <div>
        <img className='menu-arrow' src={menu} alt="" />
      </div>

{/* ------------ */}

      <ul className='slider-ul'>

        <SocialList
          socialLinkLi="#"
          iconLinkLi="#"
          altLi="dsawds"
        />

      </ul>
    </div>

</> 
    )
}

{/*


*/}
export function SocialList({socialLinkLi, iconLinkLi, altLi}) {
  
  return (
      <li className='social-link-list' >
          <a href={socialLinkLi}>
              <img src={iconLinkLi} alt={altLi}/>
          </a>
      </li>
   ) 
}
















 

