import {Slider} from './slider'
import {Inside} from './navInside'
import { useState } from "react"



import '../../assets/styles/nav.css';


export function Nav () {

  const [left,right] = useState(false)
  const [open,close] = useState(false)

  const sideState = left 
   ? 'side-bar'
   : 'side-bar left'
 
   const arrowState = open 
   ? 'menu-arrow close'  
   : 'menu-arrow'
 
   const touch = () => {
    right(!left)
    close(!open)
   }


  return (
    <>
    <header className={sideState}>
      <nav className='nav'>

       <Top 
        spanText="Internet of Things"
        />

        <Inside/>
            

      </nav>
    </header>

    <div className="slider-nav">
        <div onClick={touch}>
            <img  className={arrowState} src="/icons/social_icons/menu.svg" alt="" />
        </div>

        <Slider/> 

    </div>

    </>
  )
}

export function Top({spanText}){
  return (
    
      <div className="top-navigation">
        <div className="box">
          <img className='top-icon' src="/top.png" alt="" />
          <span className='iot-text'>{spanText}</span>
        </div>
      </div>

  )
}



export function SocialList({socialLinkLi, iconLinkLi, altLi}) {
  
  return (
      <li className='social-link-list' >
          <a href={socialLinkLi} target='_blank'>
              <img className='slider-img' src={iconLinkLi} alt={altLi}/>
          </a>
      </li>
   ) 
}
















 

