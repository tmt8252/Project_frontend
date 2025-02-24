import { NavLink } from 'react-router-dom'
import logo from '../Assets/logo1.jpg'

const Navigation = () => {
    return (
        <>
            <div className="announcement-bar">
                <p>Free Shipping on Orders Over ₹499! Use Code: BOOKWORM</p>
            </div>
            <nav>
                <div className="nav-left">
                    <a href='/' className="navbarLogo">
                        <img src={logo} alt="logo" />
                        <span className="store-name">BookHaven</span>
                    </a>
                </div>
                <div className="nav-center">
                    <div className="search-bar">
                        <input type="text" placeholder="Search for books, authors, genres..." />
                        <button><i className="fas fa-search"></i></button>
                    </div>
                </div>
                <div className="nav-right">
                    <ul>
                        <li><NavLink to={'/'}><i className="fas fa-home"></i> Home</NavLink></li>
                        <li className="dropdown">
                            <NavLink to={'/categories'}>
                                <i className="fas fa-book"></i> Browse <i className="fas fa-chevron-down"></i>
                            </NavLink>
                            <div className="dropdown-content">
                                <NavLink to="/fiction">Fiction</NavLink>
                                <NavLink to="/non-fiction">Non-Fiction</NavLink>
                                <NavLink to="/children">Children's</NavLink>
                                <NavLink to="/academic">Academic</NavLink>
                            </div>
                        </li>
                        <li>
                            <NavLink to={'/cart'} className="cart-link" data-tooltip="Shopping Cart">
                                <div className="icon-container">
                                    <i className="fas fa-shopping-cart"></i>
                                </div>
                                Cart
                                <span className="cart-count">0</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/login'} data-tooltip="Account">
                                <div className="icon-container">
                                    <i className="fas fa-user"></i>
                                </div>
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navigation