import './main.css'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {Nav} from "./navigation/nav"
import {Haupt} from './navigation/navInside'

const root = ReactDOM.createRoot(document.getElementById('root'))
  
  root.render(
    <BrowserRouter>  
        <Nav>
            
        </Nav>


        <Haupt>

        </Haupt>

    </BrowserRouter>
  )


