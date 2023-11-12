
import {useState} from 'react'
import {Inside} from './inside/navInside'
import './nav.css'

import icon from '../../assets/icons/top.png'
import menu from '../../assets/icons/social_icons/menu.svg'
import twitterIcon from '../../assets/icons/social_icons/twitter.svg'
import githubIcon from '../../assets/icons/social_icons/github.svg'
import instagramIcon from '../../assets/icons/social_icons/instagram.svg'
import discordIcon from '../../assets/icons/social_icons/discord.svg'

export function Nav () {

  return (
    <>
    <header className="side-bar">
      <nav className='nav'>

       <Top 
        spanText="Internet of Things"
        />

        <Inside/>
            

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

  const [open,close,left,right] = useState(false)
  // const navMoving = document.querySelector(".side-bar");

  const sideState = left 
  ? 'side-bar'
  : 'side-bar left'

  const arrowState = open 
  ? 'menu-arrow close'  
  : 'menu-arrow'

  const touch = () => {
 
  // const navMoving = document.querySelector(".side-bar");
  close(!open)
  }

    return (

<>

    <div className="slider-nav">
      <div onClick={touch}>
        <img className={arrowState} src={menu} alt="" />
      </div>


{/* ------------ */}

      <ul className='slider-ul'>

        <SocialList
          socialLinkLi="https://discord.com"  /*a href */
          iconLinkLi={discordIcon}    /*img src */
          altLi="Enlace a mi Discord"    /*alt => img */
        />

        <SocialList
          socialLinkLi="https://twitter.com/?lang=es"  /*a href */
          iconLinkLi={twitterIcon}    /*img src */
          altLi="Enlace a mi Twitter"    /*alt => img */
        />

        <SocialList
          socialLinkLi="https://www.instagram.com"  /*a href */
          iconLinkLi={instagramIcon}    /*img src */
          altLi="Enlace a mi Instagram"    /*alt => img */
        />

        
        <SocialList
          socialLinkLi="https://github.com"  /*a href */
          iconLinkLi={githubIcon}    /*img src */
          altLi="Enlace a mi Github"    /*alt => img */
        />

  
      </ul>
    </div>

</> 
    )
}


export function SocialList({socialLinkLi, iconLinkLi, altLi}) {
  
  return (
      <li className='social-link-list' >
          <a href={socialLinkLi}>
              <img className='slider-img' src={iconLinkLi} alt={altLi}/>
          </a>
      </li>
   ) 
}
















 

