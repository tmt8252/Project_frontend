import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaPlus, FaSearch } from 'react-icons/fa';
import './ManageBooks.css';
import './AdminDashboard.css';
import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';

const ManageBooks = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    price: '',
    category: '',
    stock: '',
    imageUrl: ''
  });

  // Mock data for demo
  useEffect(() => {
    // In a real app, you would fetch from API
    const mockBooks = [
      {
        id: 1,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        description: 'The story of racial injustice and the loss of innocence in the American South during the Great Depression.',
        price: 12.99,
        category: 'Fiction',
        stock: 25,
        imageUrl: 'https://example.com/mockingbird.jpg'
      },
      {
        id: 2,
        title: '1984',
        author: 'George Orwell',
        description: 'A dystopian social science fiction novel that examines the consequences of totalitarianism.',
        price: 10.99,
        category: 'Fiction',
        stock: 18,
        imageUrl: 'https://example.com/1984.jpg'
      },
      {
        id: 3,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        description: 'A story of wealth, class, love and the American Dream in the 1920s.',
        price: 11.50,
        category: 'Fiction',
        stock: 22,
        imageUrl: 'https://example.com/gatsby.jpg'
      }
    ];

    setBooks(mockBooks);
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
      price: '',
      category: '',
      stock: '',
      imageUrl: ''
    });
    setIsModalOpen(true);
    setSuccessMessage('');
    setErrorMessage('');
  };

  const handleEditBook = (book) => {
    setCurrentBook(book);
    setFormData({
      title: book.title,
      author: book.author,
      description: book.description,
      price: book.price,
      category: book.category,
      stock: book.stock,
      imageUrl: book.imageUrl
    });
    setIsModalOpen(true);
    setSuccessMessage('');
    setErrorMessage('');
  };

  const handleDeleteBook = (bookId) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      try {
        // In a real app, you would call an API to delete the book
        setBooks(books.filter(book => book.id !== bookId));
        setSuccessMessage('Book deleted successfully');
      } catch (error) {
        setErrorMessage('Failed to delete the book. Please try again.');
      }
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    try {
      if (currentBook) {
        // Update existing book
        const updatedBooks = books.map(book =>
          book.id === currentBook.id ? { ...book, ...formData } : book
        );
        setBooks(updatedBooks);
        setSuccessMessage('Book updated successfully');
      } else {
        // Add new book
        const newBook = {
          id: Date.now(),
          ...formData
        };
        setBooks([...books, newBook]);
        setSuccessMessage('Book added successfully');
      }
      setIsModalOpen(false);
    } catch (error) {
      setErrorMessage('Failed to save the book. Please try again.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="admin-container">
      <AdminNavbar />

      <div className="admin-content-container">
        <AdminSidebar />
        <div className="manage-books-container">
          <div className="manage-books-header">
            <h2>Manage Books</h2>
            <button className="add-book-btn" onClick={handleAddBook}>
              <FaPlus /> Add New Book
            </button>
          </div>

          {successMessage && (
            <div className="success-message">
              {successMessage}
            </div>
          )}

          {errorMessage && (
            <div className="error-message">
              {errorMessage}
            </div>
          )}

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

          <div className="books-table-container">
            <table className="books-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Stock</th>
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
                    <td>${book.price}</td>
                    <td>{book.stock}</td>
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
                    <td colSpan="7" className="no-results">No books found matching your search.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Add/Edit Book Modal */}
          {isModalOpen && (
            <div className="book-modal-overlay">
              <div className="book-modal">
                <h3>{currentBook ? 'Edit Book' : 'Add New Book'}</h3>
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
                      <label htmlFor="price">Price (₹)</label>
                      <input
                        type="number"
                        id="price"
                        name="price"
                        step="0.01"
                        min="0"
                        value={formData.price}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="stock">Stock</label>
                      <input
                        type="number"
                        id="stock"
                        name="stock"
                        min="0"
                        value={formData.stock}
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

export default ManageBooks;