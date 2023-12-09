import '../../assets/styles/routes_styles/general.routes.styles.css'
import '../../assets/styles/routes_styles/robot.css'




export function Robot(){
  return(
    <div className="banner-container">
      <Banner
        bannerIcon="/icons/nav_icons/robot.svg"
        bannerAlt="Name"
        robotName="Aldo"
      />

      <Banner
        bannerIcon="/icons/nav_icons/robot.svg"
        bannerAlt="Name"
        robotName="Jamón"
      />
      
    </div>
  )
} 

function Banner({bannerIcon,bannerAlt,robotName}){
  return(
    <div className="banner">
      <h2 className='banner-text'>{robotName}</h2>
      <img className='banner-img' src={bannerIcon} alt={bannerAlt} />
    </div>
  )
}