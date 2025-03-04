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
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li className="dropdown">
                            <NavLink to={'/categories'} className="browse-button">
                                Browse
                            </NavLink>
                            <div className="dropdown-content">
                                <NavLink to="/fiction" className="dropdown-item">
                                    <div>
                                        <span>Fiction</span>
                                        <small>Novels, Stories & More</small>
                                    </div>
                                </NavLink>
                                <NavLink to="/non-fiction" className="dropdown-item">
                                    <div>
                                        <span>Non-Fiction</span>
                                        <small>Biography, Self-Help & More</small>
                                    </div>
                                </NavLink>
                                <NavLink to="/children" className="dropdown-item">
                                    <div>
                                        <span>Children's</span>
                                        <small>Picture Books & Stories</small>
                                    </div>
                                </NavLink>
                                <NavLink to="/academic" className="dropdown-item">
                                    <div>
                                        <span>Academic</span>
                                        <small>Textbooks & Study Materials</small>
                                    </div>
                                </NavLink>
                            </div>
                        </li>
                        <li>
                            <NavLink to={'/pre-owned'} className="nav-item">
                                Pre-owned Books
                            </NavLink>
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