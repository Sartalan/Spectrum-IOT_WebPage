import './nav.css'
import './slider-nav.css'
import icon from '../assets/icons/nanotechnology.png'
import menu from '../assets/icons/menu.svg'
import twitterIcon from '../assets/icons/twitter.svg'
import githubIcon from '../assets/icons/github.svg'
import instagramIcon from '../assets/icons/instagram.svg'
import discordIcon from '../assets/icons/discord.svg'


export function Nav () {
  return (
    <>
    <header className='side-bar'>
      <nav className='nav'>

       <Top 
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
          socialLinkLi="https://discord.com"  /*a href */
          iconLinkLi={discordIcon}    /*img src */
          altLi="dsawds"    /*alt => img */
        />

        <SocialList
          socialLinkLi="https://twitter.com/?lang=es"  /*a href */
          iconLinkLi={twitterIcon}    /*img src */
          altLi="dsawds"    /*alt => img */
        />

        <SocialList
          socialLinkLi="https://www.instagram.com"  /*a href */
          iconLinkLi={instagramIcon}    /*img src */
          altLi="dsawds"    /*alt => img */
        />

        
        <SocialList
          socialLinkLi="https://github.com"  /*a href */
          iconLinkLi={githubIcon}    /*img src */
          altLi="dsawds"    /*alt => img */
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
              <img className='slider-img' src={iconLinkLi} alt={altLi}/>
          </a>
      </li>
   ) 
}
















 

