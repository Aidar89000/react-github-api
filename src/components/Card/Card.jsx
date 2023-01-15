
import { NavLink } from "react-router-dom"
import './Card.scss'
import {useInView} from 'react-intersection-observer'

const Card = ({login,avatar_url}) =>{

    const {ref, inView} = useInView({
      triggerOnce: true,
      threshold: .5
    })

    return(
        <div ref={ref} className={`${inView ? 'card home-card' : 'home-card-sceleton' }`} >
            
        <img className="card-img-top" src={avatar_url} alt="Card capture"/>
          
        <div className="card-body">
          <h5 className="card-title">Имя: {login}</h5>
          
          <button  className="btn btn-primary mt-5">
            <NavLink to={`/Profile/${login}`} style={{color: 'white',textDecoration: 'none'}}>Открыть</NavLink>
          </button>

        </div>
      </div>
     )
}
export default Card