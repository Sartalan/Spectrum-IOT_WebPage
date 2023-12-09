import './routes_styles/general-routes-styles.css'
import './routes_styles/robot.css'
import robot from '../../assets/icons/nav_icons/robot.svg'


export function Robot(){
  return(
    <div className="banner-container">
      <Banner
        bannerIcon={robot}
        bannerAlt="Name"
        robotName="Aldo"
      />

      <Banner
        bannerIcon={robot}
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