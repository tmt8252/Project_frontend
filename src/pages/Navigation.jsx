import { NavLink } from 'react-router-dom'

const Navigation = () => {
    
    return (
        <nav>
            <div>
                <h3 className="Logo">Logo</h3>
            </div>


            <ul>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'login'}>Login</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation