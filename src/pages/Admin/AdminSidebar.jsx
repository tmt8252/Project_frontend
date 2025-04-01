import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTachometerAlt, FaBook, FaShoppingCart, FaUsers, FaComments, FaBookReader, FaBookOpen } from 'react-icons/fa';
import './AdminDashboard.css';

const AdminSidebar = () => {
    const location = useLocation();

    // Function to determine if a menu item is active
    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <>
            {/* Admin Sidebar */}
            <aside className="admin-sidebar">
                <ul>
                    <li>
                        <Link
                            to="/admin"
                            className={isActive('/admin') ? 'active' : ''}
                        >
                            <FaTachometerAlt />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/admin/manage-books"
                            className={isActive('/admin/manage-books') ? 'active' : ''}
                        >
                            <FaBook />
                            <span>Books</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/admin/manage-rental-books"
                            className={isActive('/admin/manage-rental-books') ? 'active' : ''}
                        >
                            <FaBookReader />
                            <span>Rental Books</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/admin/manage-pre-owned-books"
                            className={isActive('/admin/manage-pre-owned-books') ? 'active' : ''}
                        >
                            <FaBookOpen />
                            <span>Pre-Owned Books</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/admin/manage-orders"
                            className={isActive('/admin/manage-orders') ? 'active' : ''}
                        >
                            <FaShoppingCart />
                            <span>Orders</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/admin/manage-users"
                            className={isActive('/admin/manage-users') ? 'active' : ''}
                        >
                            <FaUsers />
                            <span>Customers</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/admin/manage-feedbacks"
                            className={isActive('/admin/manage-feedbacks') ? 'active' : ''}
                        >
                            <FaComments />
                            <span>Feedbacks</span>
                        </Link>
                    </li>
                </ul>
            </aside>
        </>
    );
};

export default AdminSidebar;