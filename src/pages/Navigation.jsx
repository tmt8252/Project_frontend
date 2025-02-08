import { NavLink } from 'react-router-dom'
import logo from '../Assets/logo1.jpg'
const Navigation = () => {

    return (
        <nav>
            <div>
                <a href='/' className="navbarLogo"><img src={logo} alt="logo" /></a>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button>Search</button>
            </div>
            <ul>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'login'}>Login</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation