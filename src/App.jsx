import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./pages/Navigation";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Fiction from "./books_api/Fiction";
import NonFiction from "./books_api/NonFiction";
import Footer from "./pages/Footer";
import Children from "./books_api/Children";
import Romance from "./books_api/Romance";
import Drama from "./books_api/Drama";
import Horror from "./books_api/Horror";
import Thriller from "./books_api/Thriller";
import SellYourBook from "./pages/SellYourBook";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";

// Admin pages
import AdminDashboard from "./pages/Admin/AdminDashboard";
import ManageBooks from "./pages/Admin/ManageBooks";
import ManageOrders from "./pages/Admin/ManageOrders";
import ManageUsers from "./pages/Admin/ManageUsers";
import ManageFeedbacks from "./pages/Admin/ManageFeedbacks";
import ManageRentalBooks from "./pages/Admin/ManageRentalBooks";
import ManagePreOwnedBooks from "./pages/Admin/ManagePreOwnedBooks";
import Cart from "./pages/Cart";

const RouteHandler = () => {
  const { isAuthenticated, user } = useAuth();
  const isAdmin = user?.role === 'admin'; // Assuming your user object has a role property
  
  return (
    <Routes>
      {/* Customer routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={isAuthenticated ? <Home /> : <Login />} />
      <Route path="/registration" element={isAuthenticated ? <Home /> : <Registration />} />
      <Route path="/sell-book" element={<SellYourBook />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/Fiction" element={<Fiction />} />
      <Route path="/Non-Fiction" element={<NonFiction />} />
      <Route path="/Children" element={<Children />} />
      <Route path="/Romance" element={<Romance />} />
      <Route path="/Drama" element={<Drama />} />
      <Route path="/Horror" element={<Horror />} />
      <Route path="/Thriller" element={<Thriller />} />
      
      {/* Admin routes */}
      <Route path="/admin" element={isAdmin ? <AdminDashboard /> : <Login />} />
      <Route path="/admin/manage-books" element={isAdmin ? <ManageBooks /> : <Login />} />
      <Route path="/admin/manage-orders" element={isAdmin ? <ManageOrders /> : <Login />} />
      <Route path="/admin/manage-users" element={isAdmin ? <ManageUsers /> : <Login />} />
      <Route path="/admin/manage-feedbacks" element={isAdmin ? <ManageFeedbacks /> : <Login />} />
      <Route path="/admin/manage-rental-books" element={isAdmin ? <ManageRentalBooks /> : <Login />} />
      <Route path="/admin/manage-pre-owned-books" element={isAdmin ? <ManagePreOwnedBooks /> : <Login />} />
    </Routes>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Navigation />
          <RouteHandler />
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;