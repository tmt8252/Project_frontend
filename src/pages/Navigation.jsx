import { NavLink } from "react-router-dom";
import logo from "../Assets/Logo_new.png";
import { BsCart3 } from "react-icons/bs"; // Cart icon
import { FiUser, FiSearch } from "react-icons/fi"; // User/Login icon and Search icon
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";

const Navigation = () => {
  const navigateFiction = useNavigate();

  const handleFiction = () => {
    navigateFiction("/Fiction");
  };

  const { logout, isAuthenticated } = useAuth();
  const { cart } = useCart();
  return (
    <>
      <div className="announcement-bar">
        <p>Free Shipping on Orders Over ₹499! Use Code: BOOKWORM</p>
      </div>
      <nav>
        <div className="nav-left">
          <a href="/" className="navbarLogo">
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
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="dropdown">
              <NavLink className="browse-button">
                Browse
              </NavLink>
              <div className="dropdown-content">
                <NavLink to="/Fiction" className="dropdown-item">
                  <div>
                    <span>Fiction</span>
                    <small>Novels, Stories & More</small>
                  </div>
                </NavLink>
                <NavLink to="/Non-Fiction" className="dropdown-item">
                  <div>
                    <span>Non-Fiction</span>
                    <small>Biography, Self-Help & More</small>
                  </div>
                </NavLink>
                <NavLink to="/Children" className="dropdown-item">
                  <div>
                    <span>Children's</span>
                    <small>Picture Books & Stories</small>
                  </div>
                </NavLink>
                <NavLink to="/Romance" className="dropdown-item">
                  <div>
                    <span>Romance</span>
                    <small>Love Stories & Romantic Tales</small>
                  </div>
                </NavLink>
                <NavLink to="/Drama" className="dropdown-item">
                  <div>
                    <span>Drama</span>
                    <small>Emotional & Dramatic Narratives</small>
                  </div>
                </NavLink>
                <NavLink to="/Horror" className="dropdown-item">
                  <div>
                    <span>Horror</span>
                    <small>Spine-Chilling & Supernatural</small>
                  </div>
                </NavLink>
                <NavLink to="/Thriller" className="dropdown-item">
                  <div>
                    <span>Thriller</span>
                    <small>Suspense, Mystery & Crime</small>
                  </div>
                </NavLink>
                {/* <NavLink to="/HistoricalFiction" className="dropdown-item">
                  <div>
                    <span>Historical Fiction</span>
                    <small>Past Eras & Historical Adventures</small>
                  </div>
                </NavLink>
                <NavLink to="/ScienceFiction" className="dropdown-item">
                  <div>
                    <span>Science Fiction</span>
                    <small>Futuristic & Sci-Fi Wonders</small>
                  </div>
                </NavLink>
                <NavLink to="/Comedy" className="dropdown-item">
                  <div>
                    <span>Comedy</span>
                    <small>Humor & Lighthearted Fun</small>
                  </div>
                </NavLink> */}
              </div>
            </li>
            <li>
              <NavLink to={"/sell-book"} className="nav-item sell-books-link">
                Sell Your Books
              </NavLink>
            </li>
            <li>
              <NavLink to={"/cart"} className="cart-button">
                <BsCart3 size={20} />
                <span className="cart-count">{cart.length}</span>
              </NavLink>
            </li>
            <li>
              <div className="user-dropdown">
                <div className="icon-link user-icon">
                  <FiUser size={20} />
                  <ul className="dropdown-menu">
                    <li>
                      {!isAuthenticated && <NavLink to="/login">Login</NavLink>}
                    </li>
                    <li>
                      <NavLink to="/orders">Orders</NavLink>
                    </li>
                    <li>
                      {isAuthenticated && (
                        <NavLink to="#" onClick={logout}>
                          Logout
                        </NavLink>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
