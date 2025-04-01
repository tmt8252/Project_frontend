import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaPlus, FaSearch, FaCalendarAlt, FaBook } from 'react-icons/fa';
import './ManageRentalBooks.css';
import './AdminDashboard.css';
import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';


const ManageRentalBooks = () => {
  const [rentalBooks, setRentalBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    rentalPrice: '',
    securityDeposit: '',
    availableCopies: '',
    maxRentalDays: '',
    category: '',
    imageUrl: ''
  });

  // Mock data for demo
  useEffect(() => {
    // In a real app, you would fetch from API
    const mockRentalBooks = [
      {
        id: 1,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        description: 'The story of racial injustice and the loss of innocence in the American South during the Great Depression.',
        rentalPrice: 2.99,
        securityDeposit: 15.00,
        availableCopies: 8,
        maxRentalDays: 14,
        category: 'Fiction',
        imageUrl: 'https://example.com/mockingbird.jpg',
        currentlyRented: 2
      },
      {
        id: 2,
        title: '1984',
        author: 'George Orwell',
        description: 'A dystopian social science fiction novel that examines the consequences of totalitarianism.',
        rentalPrice: 2.49,
        securityDeposit: 12.00,
        availableCopies: 5,
        maxRentalDays: 14,
        category: 'Fiction',
        imageUrl: 'https://example.com/1984.jpg',
        currentlyRented: 3
      },
      {
        id: 3,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        description: 'A story of wealth, class, love and the American Dream in the 1920s.',
        rentalPrice: 2.99,
        securityDeposit: 14.00,
        availableCopies: 6,
        maxRentalDays: 21,
        category: 'Fiction',
        imageUrl: 'https://example.com/gatsby.jpg',
        currentlyRented: 1
      },
      {
        id: 4,
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        description: 'A romantic novel of manners that depicts the emotional development of Elizabeth Bennet.',
        rentalPrice: 2.49,
        securityDeposit: 13.00,
        availableCopies: 4,
        maxRentalDays: 14,
        category: 'Romance',
        imageUrl: 'https://example.com/pride-prejudice.jpg',
        currentlyRented: 2
      }
    ];

    setRentalBooks(mockRentalBooks);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Filter books based on search query
    // In a real app, you might want to call an API with the search term
  };

  const handleAddBook = () => {
    setCurrentBook(null);
    setFormData({
      title: '',
      author: '',
      description: '',
      rentalPrice: '',
      securityDeposit: '',
      availableCopies: '',
      maxRentalDays: '',
      category: '',
      imageUrl: ''
    });
    setIsModalOpen(true);
  };

  const handleEditBook = (book) => {
    setCurrentBook(book);
    setFormData({
      title: book.title,
      author: book.author,
      description: book.description,
      rentalPrice: book.rentalPrice,
      securityDeposit: book.securityDeposit,
      availableCopies: book.availableCopies,
      maxRentalDays: book.maxRentalDays,
      category: book.category,
      imageUrl: book.imageUrl
    });
    setIsModalOpen(true);
  };

  const handleDeleteBook = (bookId) => {
    if (window.confirm('Are you sure you want to delete this rental book?')) {
      // In a real app, you would call an API to delete the book
      setRentalBooks(rentalBooks.filter(book => book.id !== bookId));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (currentBook) {
      // Update existing book
      const updatedBooks = rentalBooks.map(book =>
        book.id === currentBook.id ? {
          ...book,
          ...formData,
          rentalPrice: parseFloat(formData.rentalPrice),
          securityDeposit: parseFloat(formData.securityDeposit),
          availableCopies: parseInt(formData.availableCopies),
          maxRentalDays: parseInt(formData.maxRentalDays)
        } : book
      );
      setRentalBooks(updatedBooks);
    } else {
      // Add new book
      const newBook = {
        id: Date.now(),
        ...formData,
        rentalPrice: parseFloat(formData.rentalPrice),
        securityDeposit: parseFloat(formData.securityDeposit),
        availableCopies: parseInt(formData.availableCopies),
        maxRentalDays: parseInt(formData.maxRentalDays),
        currentlyRented: 0
      };
      setRentalBooks([...rentalBooks, newBook]);
    }

    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const filteredBooks = rentalBooks.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="admin-container">
      <AdminNavbar />

      <div className="admin-content-container">
        <AdminSidebar />
        <div className="manage-rental-books-container">
          <div className="manage-rental-books-header">
            <h2>Manage Rental Books</h2>
            <button className="add-book-btn" onClick={handleAddBook}>
              <FaPlus /> Add New Rental Book
            </button>
          </div>

          <div className="books-search-bar">
            <form onSubmit={handleSearch}>
              <div className="search-input-container">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search by title, author, or category"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>
          </div>

          <div className="rental-books-table-container">
            <table className="rental-books-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Category</th>
                  <th>Price/Day</th>
                  <th>Deposit</th>
                  <th>Max Days</th>
                  <th>Available</th>
                  <th>Rented</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredBooks.map(book => (
                  <tr key={book.id}>
                    <td>#{book.id}</td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.category}</td>
                    <td>${book.rentalPrice.toFixed(2)}</td>
                    <td>${book.securityDeposit.toFixed(2)}</td>
                    <td>{book.maxRentalDays}</td>
                    <td>{book.availableCopies}</td>
                    <td>{book.currentlyRented}</td>
                    <td className="actions-cell">
                      <button
                        className="edit-btn"
                        onClick={() => handleEditBook(book)}
                        aria-label="Edit book"
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => handleDeleteBook(book.id)}
                        aria-label="Delete book"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
                {filteredBooks.length === 0 && (
                  <tr>
                    <td colSpan="10" className="no-results">No rental books found matching your search.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Add/Edit Rental Book Modal */}
          {isModalOpen && (
            <div className="book-modal-overlay">
              <div className="book-modal">
                <h3>{currentBook ? 'Edit Rental Book' : 'Add New Rental Book'}</h3>
                <form onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input
                      type="text"
                      id="author"
                      name="author"
                      value={formData.author}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows="3"
                      required
                    ></textarea>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="rentalPrice">Rental Price per Day ($)</label>
                      <input
                        type="number"
                        id="rentalPrice"
                        name="rentalPrice"
                        step="0.01"
                        min="0"
                        value={formData.rentalPrice}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="securityDeposit">Security Deposit ($)</label>
                      <input
                        type="number"
                        id="securityDeposit"
                        name="securityDeposit"
                        step="0.01"
                        min="0"
                        value={formData.securityDeposit}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="availableCopies">Available Copies</label>
                      <input
                        type="number"
                        id="availableCopies"
                        name="availableCopies"
                        min="0"
                        value={formData.availableCopies}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="maxRentalDays">Maximum Rental Days</label>
                      <input
                        type="number"
                        id="maxRentalDays"
                        name="maxRentalDays"
                        min="1"
                        value={formData.maxRentalDays}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a category</option>
                      <option value="Fiction">Fiction</option>
                      <option value="Non-Fiction">Non-Fiction</option>
                      <option value="Children">Children</option>
                      <option value="Romance">Romance</option>
                      <option value="Drama">Drama</option>
                      <option value="Horror">Horror</option>
                      <option value="Thriller">Thriller</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="imageUrl">Image URL</label>
                    <input
                      type="text"
                      id="imageUrl"
                      name="imageUrl"
                      value={formData.imageUrl}
                      onChange={handleInputChange}
                      placeholder="https://example.com/book.jpg"
                    />
                  </div>

                  <div className="modal-buttons">
                    <button type="button" onClick={() => setIsModalOpen(false)} className="cancel-btn">
                      Cancel
                    </button>
                    <button type="submit" className="save-btn">
                      {currentBook ? 'Update Book' : 'Add Book'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageRentalBooks;