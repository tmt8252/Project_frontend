import { NavLink } from 'react-router-dom'

const Navigation = () => {
    
    return (
        <nav>
            <div>
                <a href='/' className="navbarLogo">Logo</a>
            </div>


            <ul>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'login'}>Login</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation