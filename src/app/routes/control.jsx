import './routes_styles/control.css'
import './routes_styles/general-routes-styles.css'
import rightArrow from '../../assets/icons/control_icons/right.svg'
import leftArrow from '../../assets/icons/control_icons/left.svg'
import upArrow from '../../assets/icons/control_icons/up.svg'
import downArrow from '../../assets/icons/control_icons/down.svg'

export function Control () {
    
    return (
        <>
            <main className="main">
            <div className="control-container">
                <div className="controller-box">

                    <div className="center"></div>

                    <div className="left controller-btn">
                        <img className="arrow-in" src={leftArrow} alt=""/>
                    </div>

                    <div className="right controller-btn">
                        <img className="arrow-in" src={rightArrow} alt=""/>
                    </div>

                    <div className="down controller-btn">
                        <img className="arrow-in" src={downArrow} alt=""/>
                    </div>

                    <div className="up controller-btn">
                        <img className="arrow-in" src={upArrow} alt=""/>
                    </div>

                </div>
            </div>
            </main>
        </>
    )

}


    
      