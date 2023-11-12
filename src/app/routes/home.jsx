import '../navigation/inside/navInside'
import './routes_styles/home.css'
import './routes_styles/general-routes-styles.css'


export function Home () {
    return (
    
      <div className="contentHome">
        <div className="box roomOne">
          <p className='text'>Kitchen</p>
        </div>

        <div className="box roomTwo">
          <p className='text'>Living Room</p>
        </div>

        <div className="box roomThree">
          <p className='text'>Bedroom</p>
        </div>
      </div>
    )
  }
