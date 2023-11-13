import {SocialList} from "./nav"
import twitterIcon from '../../assets/icons/social_icons/twitter.svg'
import githubIcon from '../../assets/icons/social_icons/github.svg'
import instagramIcon from '../../assets/icons/social_icons/instagram.svg'
import discordIcon from '../../assets/icons/social_icons/discord.svg'

export function Slider() {
   
      return (
  
  <>
  
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
  
  </> 
      )
  }

