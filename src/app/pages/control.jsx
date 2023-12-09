import '../../assets/styles/routes_styles/control.css'
import '../../assets/styles/routes_styles/general.routes.styles.css'

export function Control () {
    
    return (
        <>

            <div className="side-speed-bar">
                    <div className="one speed-elements-in">1</div>
                    <div className="two speed-elements-in">2</div>
                    <div className="three speed-elements-in">3</div>
            </div>
        
            <div className="control-container">

                <div className="controller-box">

                    <div className="center"></div>

                    <div className="left controller-btn">
                        <img className="arrow-in" src="/icons/control_icons/left.svg" alt=""/>
                    </div>

                    <div className="right controller-btn">
                        <img className="arrow-in" src="/icons/control_icons/right.svg" alt=""/>
                    </div>

                    <div className="down controller-btn">
                        <img className="arrow-in" src="/icons/control_icons/down.svg" alt=""/>
                    </div>

                    <div className="up controller-btn">
                        <img className="arrow-in" src="/icons/control_icons/up.svg" alt=""/>
                    </div>

                </div>
            </div>
        
        </>
    )
}


