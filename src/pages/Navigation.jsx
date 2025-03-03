import { NavLink } from 'react-router-dom'
import logo from '../Assets/logo1.jpg'
import { BsCart3 } from 'react-icons/bs'  // Cart icon
import { FiUser, FiSearch } from 'react-icons/fi'   // User/Login icon and Search icon

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
                        <button>
                            <FiSearch className="search-icon" />
                        </button>
                        <input 
                            type="text" 
                            placeholder="Search for books, authors, genres..." 
                        />
                    </div>
                </div>
                <div className="nav-right">
                    <ul>
                        <li><NavLink to={'/'}><i className="fas fa-home"></i>Home</NavLink></li>
                        <li className="dropdown">
                            <NavLink to={'/categories'} className="browse-button">
                                <i className="fas fa-book"></i>Browse<i className="fas fa-chevron-down"></i>
                            </NavLink>
                            <div className="dropdown-content">
                                <NavLink to="/fiction" className="dropdown-item">
                                    <i className="fas fa-theater-masks"></i>
                                    <div>
                                        <span>Fiction</span>
                                        <small>Novels, Stories & More</small>
                                    </div>
                                </NavLink>
                                <NavLink to="/non-fiction" className="dropdown-item">
                                    <i className="fas fa-brain"></i>
                                    <div>
                                        <span>Non-Fiction</span>
                                        <small>Biography, Self-Help & More</small>
                                    </div>
                                </NavLink>
                                <NavLink to="/children" className="dropdown-item">
                                    <i className="fas fa-child"></i>
                                    <div>
                                        <span>Children's</span>
                                        <small>Picture Books & Stories</small>
                                    </div>
                                </NavLink>
                                <NavLink to="/academic" className="dropdown-item">
                                    <i className="fas fa-graduation-cap"></i>
                                    <div>
                                        <span>Academic</span>
                                        <small>Textbooks & Study Materials</small>
                                    </div>
                                </NavLink>
                            </div>
                        </li>
                        <li>
                            <NavLink to={'/cart'} className="cart-button">
                                <BsCart3 size={20} />
                                <span className="cart-count">0</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/login'} className="nav-login-button">
                                <FiUser size={20} />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navigation