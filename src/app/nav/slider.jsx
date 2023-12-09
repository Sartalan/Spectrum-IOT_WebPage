import {SocialList} from "./nav"


export function Slider() {
   
      return (
  
  <>
  
  {/* ------------ */}
  
        <ul className='slider-ul'>
  
          <SocialList
            socialLinkLi="https://discord.com"  /*a href */
            iconLinkLi="icons/social_icons/discord.svg"    /*img src */
            altLi="Enlace a mi Discord"    /*alt => img */
          />
  
          <SocialList
            socialLinkLi="https://twitter.com/?lang=es"  /*a href */
            iconLinkLi="icons/social_icons/twitter.svg"   /*img src */
            altLi="Enlace a mi Twitter"    /*alt => img */
          />
  
          <SocialList
            socialLinkLi="https://www.instagram.com"  /*a href */
            iconLinkLi="icons/social_icons/instagram.svg"    /*img src */
            altLi="Enlace a mi Instagram"    /*alt => img */
          />
  
          
          <SocialList
            socialLinkLi="https://github.com"  /*a href */
            iconLinkLi="icons/social_icons/github.svg"     /*img src */
            altLi="Enlace a mi Github"    /*alt => img */
          />
  
    
        </ul>
  
  </> 
      )
  }

