import React, { useState, useEffect } from 'react';
import { FaSearch, FaStar, FaEye } from 'react-icons/fa';
import './ManageFeedbacks.css';
import './AdminDashboard.css';
import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';

const ManageFeedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [ratingFilter, setRatingFilter] = useState('all');
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  // Mock data for demo
  useEffect(() => {
    // In a real app, you would fetch from API
    const mockFeedbacks = [
      {
        id: 1,
        user: {
          id: 1,
          name: 'John Smith',
          email: 'john.smith@example.com'
        },
        book: {
          id: 1,
          title: 'To Kill a Mockingbird',
          author: 'Harper Lee'
        },
        rating: 5,
        comment: 'One of the best classics I\'ve ever read. The characters are so well developed and the story is incredibly moving.',
        date: '2023-04-15'
      },
      {
        id: 2,
        user: {
          id: 2,
          name: 'Sarah Jones',
          email: 'sarah.jones@example.com'
        },
        book: {
          id: 2,
          title: '1984',
          author: 'George Orwell'
        },
        rating: 4,
        comment: 'A thought-provoking dystopian novel that remains relevant today. The pacing is a bit slow at times, but the ideas presented are powerful.',
        date: '2023-04-14'
      },
      {
        id: 3,
        user: {
          id: 3,
          name: 'Mike Brown',
          email: 'mike.brown@example.com'
        },
        book: {
          id: 3,
          title: 'The Great Gatsby',
          author: 'F. Scott Fitzgerald'
        },
        rating: 3,
        comment: 'Well-written but I found it hard to connect with any of the characters. The portrayal of the Jazz Age is vivid though.',
        date: '2023-04-14'
      },
      {
        id: 4,
        user: {
          id: 4,
          name: 'Emily Davis',
          email: 'emily.davis@example.com'
        },
        book: {
          id: 4,
          title: 'Pride and Prejudice',
          author: 'Jane Austen'
        },
        rating: 5,
        comment: 'Absolutely loved this book! Jane Austen\'s wit and social commentary are unmatched. Elizabeth Bennet is such a compelling character.',
        date: '2023-04-13'
      },
      {
        id: 5,
        user: {
          id: 5,
          name: 'David Wilson',
          email: 'david.wilson@example.com'
        },
        book: {
          id: 5,
          title: 'The Catcher in the Rye',
          author: 'J.D. Salinger'
        },
        rating: 2,
        comment: 'Not my cup of tea. I found Holden to be whiny and the plot meandering. I understand its literary significance but didn\'t enjoy reading it.',
        date: '2023-04-12'
      }
    ];

    setFeedbacks(mockFeedbacks);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // In a real app, you might call an API endpoint with the search term
  };

  const viewFeedbackDetails = (feedback) => {
    setSelectedFeedback(feedback);
    setIsDetailModalOpen(true);
  };

  const closeDetailModal = () => {
    setIsDetailModalOpen(false);
    setSelectedFeedback(null);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        className={i < rating ? 'star filled' : 'star empty'}
      />
    ));
  };

  const filteredFeedbacks = feedbacks
    .filter(feedback =>
      (ratingFilter === 'all' || feedback.rating === parseInt(ratingFilter)) &&
      (feedback.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        feedback.book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        feedback.comment.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  return (
    <div className="admin-container">
      <AdminNavbar />

      <div className="admin-content-container">
        <AdminSidebar />
        <div className="manage-feedbacks-container">
          <div className="manage-feedbacks-header">
            <h2>Manage Feedbacks</h2>
          </div>

          <div className="feedbacks-filters">
            <div className="feedbacks-search-bar">
              <form onSubmit={handleSearch}>
                <div className="search-input-container">
                  <FaSearch className="search-icon" />
                  <input
                    type="text"
                    placeholder="Search by customer, book, or keywords"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </form>
            </div>

            <div className="rating-filter">
              <label htmlFor="rating-select">Filter by Rating:</label>
              <select
                id="rating-select"
                value={ratingFilter}
                onChange={(e) => setRatingFilter(e.target.value)}
              >
                <option value="all">All Ratings</option>
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
                <option value="2">2 Stars</option>
                <option value="1">1 Star</option>
              </select>
            </div>
          </div>

          <div className="feedbacks-table-container">
            <table className="feedbacks-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Customer</th>
                  <th>Book</th>
                  <th>Rating</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredFeedbacks.map(feedback => (
                  <tr key={feedback.id}>
                    <td>#{feedback.id}</td>
                    <td>{feedback.user.name}</td>
                    <td>{feedback.book.title}</td>
                    <td className="rating-cell">
                      <div className="rating-stars">
                        {renderStars(feedback.rating)}
                      </div>
                    </td>
                    <td>{feedback.date}</td>
                    <td>
                      <button
                        className="view-details-btn"
                        onClick={() => viewFeedbackDetails(feedback)}
                      >
                        <FaEye />
                        <span>View</span>
                      </button>
                    </td>
                  </tr>
                ))}
                {filteredFeedbacks.length === 0 && (
                  <tr>
                    <td colSpan="6" className="no-results">No feedbacks found matching your criteria.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Feedback Details Modal */}
          {isDetailModalOpen && selectedFeedback && (
            <div className="feedback-modal-overlay">
              <div className="feedback-modal">
                <div className="feedback-modal-header">
                  <h3>Feedback Details</h3>
                  <button className="close-btn" onClick={closeDetailModal}>&times;</button>
                </div>

                <div className="feedback-details">
                  <div className="feedback-info">
                    <div className="feedback-book-info">
                      <h4>{selectedFeedback.book.title}</h4>
                      <p className="book-author">by {selectedFeedback.book.author}</p>
                    </div>

                    <div className="feedback-rating">
                      <div className="rating-stars large">
                        {renderStars(selectedFeedback.rating)}
                      </div>
                      <p className="rating-text">{selectedFeedback.rating} out of 5</p>
                    </div>

                    <div className="feedback-customer">
                      <p><strong>Customer:</strong> {selectedFeedback.user.name}</p>
                      <p><strong>Email:</strong> {selectedFeedback.user.email}</p>
                      <p><strong>Date:</strong> {selectedFeedback.date}</p>
                    </div>

                    <div className="feedback-comment">
                      <h4>Comment</h4>
                      <div className="comment-text">
                        <p>{selectedFeedback.comment}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="modal-buttons">
                  <button className="close-modal-btn" onClick={closeDetailModal}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageFeedbacks;