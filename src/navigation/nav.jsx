import './nav.css'
import '../img/top_nav_icon.png'
export function Nav ({topIcon}) {
  return (
    <header className='side-bar'>
      <nav className='nav'>

        <div className="top-navigation">
          <img src="../img/top_nav_icon.png" alt="" />
        </div>

{
  /* !----------------------------- */
}

        <div className="middle-navigation-content">
            
        </div>

{
  /* !----------------------------- */
}

        <div className="bottom-navigation">

        </div>


      </nav>
    </header>
  )
}
