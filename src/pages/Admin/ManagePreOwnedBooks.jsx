import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaPlus, FaSearch, FaRegClock } from 'react-icons/fa';
import './ManagePreOwnedBooks.css';
import AdminNavbar from './AdminNavbar.jsx';
import AdminSidebar from './AdminSidebar.jsx';
import './AdminDashboard.css';

const ManagePreOwnedBooks = () => {
  const [preOwnedBooks, setPreOwnedBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    price: '',
    condition: '',
    category: '',
    seller: '',
    acquisitionDate: '',
    imageUrl: ''
  });

  // Mock data for demo
  useEffect(() => {
    // In a real app, you would fetch from API
    const mockPreOwnedBooks = [
      {
        id: 1,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        description: 'Slightly worn copy. Minor highlighting on some pages.',
        price: 5.99,
        condition: 'Good',
        category: 'Fiction',
        seller: 'John Smith',
        acquisitionDate: '2023-03-15',
        imageUrl: 'https://example.com/mockingbird-used.jpg'
      },
      {
        id: 2,
        title: '1984',
        author: 'George Orwell',
        description: 'Well-preserved copy. No writing or markings.',
        price: 4.50,
        condition: 'Very Good',
        category: 'Fiction',
        seller: 'Sarah Jones',
        acquisitionDate: '2023-02-20',
        imageUrl: 'https://example.com/1984-used.jpg'
      },
      {
        id: 3,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        description: 'Cover shows minor wear. Pages are in excellent condition.',
        price: 6.25,
        condition: 'Very Good',
        category: 'Fiction',
        seller: 'Mike Brown',
        acquisitionDate: '2023-03-05',
        imageUrl: 'https://example.com/gatsby-used.jpg'
      },
      {
        id: 4,
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        description: 'Vintage edition. Some foxing on pages. Binding intact.',
        price: 8.99,
        condition: 'Fair',
        category: 'Romance',
        seller: 'Emily Davis',
        acquisitionDate: '2023-01-10',
        imageUrl: 'https://example.com/pride-prejudice-used.jpg'
      }
    ];
    
    setPreOwnedBooks(mockPreOwnedBooks);
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
      condition: '',
      category: '',
      seller: '',
      acquisitionDate: new Date().toISOString().split('T')[0],
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
      price: book.price,
      condition: book.condition,
      category: book.category,
      seller: book.seller,
      acquisitionDate: book.acquisitionDate,
      imageUrl: book.imageUrl
    });
    setIsModalOpen(true);
  };

  const handleDeleteBook = (bookId) => {
    if (window.confirm('Are you sure you want to delete this pre-owned book?')) {
      // In a real app, you would call an API to delete the book
      setPreOwnedBooks(preOwnedBooks.filter(book => book.id !== bookId));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (currentBook) {
      // Update existing book
      const updatedBooks = preOwnedBooks.map(book => 
        book.id === currentBook.id ? { 
          ...book, 
          ...formData,
          price: parseFloat(formData.price)
        } : book
      );
      setPreOwnedBooks(updatedBooks);
    } else {
      // Add new book
      const newBook = {
        id: Date.now(),
        ...formData,
        price: parseFloat(formData.price)
      };
      setPreOwnedBooks([...preOwnedBooks, newBook]);
    }
    
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const filteredBooks = preOwnedBooks.filter(book => 
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.seller.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="admin-container">
      <AdminNavbar />
      <div className="admin-content-container">
        <AdminSidebar />
        <main className="admin-content">
          <div className="manage-preowned-books-container">
            <div className="manage-preowned-books-header">
              <h2>Manage Pre-Owned Books</h2>
              <button className="add-book-btn" onClick={handleAddBook}>
                <FaPlus /> Add Pre-Owned Book
              </button>
            </div>
            
            <div className="books-search-bar">
              <form onSubmit={handleSearch}>
                <div className="search-input-container">
                  <FaSearch className="search-icon" />
                  <input 
                    type="text" 
                    placeholder="Search by title, author, category, or seller" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </form>
            </div>
            
            <div className="preowned-books-table-container">
              <table className="preowned-books-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Condition</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Seller</th>
                    <th>Acquired</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBooks.map(book => (
                    <tr key={book.id}>
                      <td>#{book.id}</td>
                      <td>{book.title}</td>
                      <td>{book.author}</td>
                      <td>
                        <span className={`condition-badge condition-${book.condition.toLowerCase().replace(' ', '-')}`}>
                          {book.condition}
                        </span>
                      </td>
                      <td>${book.price.toFixed(2)}</td>
                      <td>{book.category}</td>
                      <td>{book.seller}</td>
                      <td>{book.acquisitionDate}</td>
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
                      <td colSpan="9" className="no-results">No pre-owned books found matching your search.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            
            {/* Add/Edit Pre-Owned Book Modal */}
            {isModalOpen && (
              <div className="book-modal-overlay">
                <div className="book-modal">
                  <h3>{currentBook ? 'Edit Pre-Owned Book' : 'Add Pre-Owned Book'}</h3>
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
                      <label htmlFor="description">Description (Condition Details)</label>
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
                        <label htmlFor="price">Price ($)</label>
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
                        <label htmlFor="condition">Condition</label>
                        <select 
                          id="condition" 
                          name="condition"
                          value={formData.condition}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select condition</option>
                          <option value="Like New">Like New</option>
                          <option value="Very Good">Very Good</option>
                          <option value="Good">Good</option>
                          <option value="Fair">Fair</option>
                          <option value="Poor">Poor</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="form-row">
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
                        <label htmlFor="acquisitionDate">Acquisition Date</label>
                        <input 
                          type="date" 
                          id="acquisitionDate" 
                          name="acquisitionDate"
                          value={formData.acquisitionDate}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="seller">Seller Name</label>
                      <input 
                        type="text" 
                        id="seller" 
                        name="seller"
                        value={formData.seller}
                        onChange={handleInputChange}
                        required
                      />
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
        </main>
      </div>
    </div>
  );
};

export default ManagePreOwnedBooks;