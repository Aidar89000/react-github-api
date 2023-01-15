import { NavLink } from "react-router-dom"

const Navbar = props =>{

    const navLinks = ['Home', 'Info']

    return(
       <div className='navbar bg-light navbar-expand-lg mb-2'>
            <ul className='navbar-nav'>

                <li className="navbar-brand">
                    GitHub поиск
                </li>

                {navLinks.map(e=>

                <li className="nav-item active" key={e}>
                    <NavLink className="nav-link" to={e}>{e}</NavLink>
                </li>
                    
                )}

            </ul>
       </div>
     )
}
export default Navbar