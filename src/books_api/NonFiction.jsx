import './api.css';
import React, { useState, useEffect } from 'react';

const NonFiction = () => {
    const [books, setBooks] = useState([]);

    // Fetch fiction books or use your existing data fetching logic
    useEffect(() => {
        // Your existing fetch logic
        // ...
    }, []);

    const handleAddToCart = (book) => {

        // Add to cart functionality
        console.log('Added to cart:', book);
        // You can implement your cart logic here
    };

    const nonf = [
        {
            "id": 1,
            "title": "Sapiens: A Brief History of Humankind",
            "author": "Yuval Noah Harari",
            "genre": "Non-fiction",
            "subtitle": "A deep dive into the history of human civilization",
            "isbn13": "9780062316097",
            "price": "3,200",
            "published_date": "2011-02-10",
            "image": "https://m.media-amazon.com/images/I/41yu2qXhXXL.SY445_SX342.jpg"
        },
        {
            "id": 2,
            "title": "Educated",
            "author": "Tara Westover",
            "genre": "Non-Fiction",
            "subtitle": "A woman’s journey from an isolated childhood to academia",
            "isbn13": "9780399590504",
            "price": "3,300",
            "published_date": "2018-02-20",
            "image": "https://m.media-amazon.com/images/I/41PYbhOmkzL.SY445_SX342.jpg"
        },
        {
            "id": 3,
            "title": "The Immortal Life of Henrietta Lacks",
            "author": "Rebecca Skloot",
            "genre": "Non-Fiction",
            "subtitle": "The story behind the woman whose cells changed medicine forever",
            "isbn13": "9781400052189",
            "price": "3,400",
            "published_date": "2010-02-02",
            "image": "https://m.media-amazon.com/images/I/91Xsy7U27RL.SL1500.jpg"
        },
        {
            "id": 4,
            "title": "The Wright Brothers",
            "author": "David McCullough",
            "genre": "Non-Fiction",
            "subtitle": "The inspiring story of the pioneers of aviation",
            "isbn13": "9781476728759",
            "price": "3,500",
            "published_date": "2015-05-05",
            "image": "https://m.media-amazon.com/images/I/414puf7uG3L.SY445_SX342.jpg"
        },
        {
            "id": 5,
            "title": "Outliers",
            "author": "Malcolm Gladwell",
            "genre": "Non-Fiction",
            "subtitle": "The story of success and what makes high achievers different",
            "isbn13": "9780316017930",
            "price": "3,600",
            "published_date": "2008-11-18",
            "image": "https://m.media-amazon.com/images/I/41MJc+8fkyL.SY445_SX342.jpg"
        },
        {
            "id": 6,
            "title": "The Power of Habit",
            "author": "Charles Duhigg",
            "genre": "Non-Fiction",
            "subtitle": "How habits work and how they can be changed",
            "isbn13": "9780812981605",
            "price": "3,700",
            "published_date": "2012-02-28",
            "image": "https://m.media-amazon.com/images/I/41IhmDI07KL.SY445_SX342.jpg"
        },
        {
            "id": 7,
            "title": "The Subtle Art of Not Giving a F*ck",
            "author": "Mark Manson",
            "genre": "Non-Fiction",
            "subtitle": "A counterintuitive approach to living a good life",
            "isbn13": "9780062457714",
            "price": "3,800",
            "published_date": "2016-09-13",
            "image": "https://m.media-amazon.com/images/I/511vJPN7p5L.SY445_SX342.jpg"
        },
        {
            "id": 8,
            "title": "Atomic Habits",
            "author": "James Clear",
            "genre": "Non-Fiction",
            "subtitle": "Tiny changes, remarkable results",
            "isbn13": "9780735211292",
            "price": "3,900",
            "published_date": "2018-10-16",
            "image": "https://m.media-amazon.com/images/I/419aJfhczCL.SY445_SX342.jpg"
        },
        {
            "id": 9,
            "title": "Thinking, Fast and Slow",
            "author": "Daniel Kahneman",
            "genre": "Non-Fiction",
            "subtitle": "Understanding human thought processes and decision making",
            "isbn13": "9780374533558",
            "price": "4,000",
            "published_date": "2011-10-25",
            "image": "https://m.media-amazon.com/images/I/41ALfsawZDL.SY445_SX342.jpg"
        },
        {
            "id": 10,
            "title": "Becoming",
            "author": "Michelle Obama",
            "genre": "Non-Fiction",
            "subtitle": "The personal journey of the former First Lady",
            "isbn13": "9781524763138",
            "price": "4,100",
            "published_date": "2018-11-13",
            "image": "https://m.media-amazon.com/images/I/41sQOIOgf4L.SY445_SX342.jpg"
        },
        {
            "id": 11,
            "title": "A Short History of Nearly Everything",
            "author": "Bill Bryson",
            "genre": "Non-Fiction",
            "subtitle": "A journey through science and the universe",
            "isbn13": "9780767908184",
            "price": "4,200",
            "published_date": "2003-05-06",
            "image": "https://m.media-amazon.com/images/I/51GiW1XpQsL.SY445_SX342.jpg"
        },
        {
            "id": 12,
            "title": "Why We Sleep",
            "author": "Matthew Walker",
            "genre": "Non-Fiction",
            "subtitle": "The new science of sleep and dreams",
            "isbn13": "9781501144318",
            "price": "4,300",
            "published_date": "2017-10-03",
            "image": "https://m.media-amazon.com/images/I/31oxhaIe19L.SY445_SX342.jpg"
        },
        {
            "id": 13,
            "title": "Blink",
            "author": "Malcolm Gladwell",
            "genre": "Non-Fiction",
            "subtitle": "The power of thinking without thinking",
            "isbn13": "9780316010665",
            "price": "4,400",
            "published_date": "2005-01-11",
            "image": "https://m.media-amazon.com/images/I/81wdCn9ap7L.SL1500.jpg"
        },
        {
            "id": 14,
            "title": "Quiet",
            "author": "Susan Cain",
            "genre": "Non-Fiction",
            "subtitle": "The power of introverts in a world that can't stop talking",
            "isbn13": "9780307352156",
            "price": "4,500",
            "published_date": "2012-01-24",
            "image": "https://m.media-amazon.com/images/I/41do7mxLBwL.SY445_SX342.jpg"
        },
        {
            "id": 15,
            "title": "Homo Deus",
            "author": "Yuval Noah Harari",
            "genre": "Non-fiction",
            "subtitle": "A brief history of tomorrow",
            "isbn13": "9780062464315",
            "price": "4,600",
            "published_date": "2016-09-06",
            "image": "https://m.media-amazon.com/images/I/41x9l0H2UGL.SY445_SX342.jpg"
        },
        {
            "id": 16,
            "title": "The 5 AM Club",
            "author": "Robin Sharma",
            "genre": "Non-Fiction",
            "subtitle": "Own your morning, elevate your life",
            "isbn13": "9781443456623",
            "price": "4,700",
            "published_date": "2018-12-04",
            "image": "https://m.media-amazon.com/images/I/71Jg6kSgYwL.SL1500.jpg"
        },
        {
            "id": 17,
            "title": "The Man Who Mistook His Wife for a Hat",
            "author": "Oliver Sacks",
            "genre": "Non-Fiction",
            "subtitle": "Extraordinary tales of the human mind",
            "isbn13": "9780684853949",
            "price": "4,800",
            "published_date": "1985-10-22",
            "image": "https://m.media-amazon.com/images/I/81ku0JJRoaL.SL1500.jpg"
        },
        {
            "id": 18,
            "title": "Can’t Hurt Me",
            "author": "David Goggins",
            "genre": "Non-Fiction",
            "subtitle": "Master your mind and defy the odds",
            "isbn13": "9781544507859",
            "price": "4,900",
            "published_date": "2018-11-15",
            "image": "https://m.media-amazon.com/images/I/41bpcBeccaL.SY445_SX342.jpg"
        },
        {
            "id": 19,
            "title": "Born a Crime",
            "author": "Trevor Noah",
            "genre": "Non-Fiction",
            "subtitle": "Stories from a South African childhood",
            "isbn13": "9780399588174",
            "price": "5,000",
            "published_date": "2016-11-15",
            "image": "https://m.media-amazon.com/images/I/81jXsZ45WAL.SL1500.jpg"
        },
        {
            "id": 20,
            "title": "The Code Breaker",
            "author": "Walter Isaacson",
            "genre": "Non-Fiction",
            "subtitle": "Jennifer Doudna, gene editing, and the future of the human race",
            "isbn13": "9781982115852",
            "price": "5,100",
            "published_date": "2021-03-09",
            "image": "https://m.media-amazon.com/images/I/41an9tLSfBL.SY445_SX342.jpg"
        },
    ]
    return (
        <div className="nonf-container">
            <h1 className="nonf-title">Non-Fiction Books</h1>
            <div className="books-grid">
                {nonf.map((item) => (
                    <div key={item.id} className="book-card">
                        <div className="book-image-container">
                            <img src={item.image} alt={item.title} className="book-image" />
                        </div>
                        <div className="book-details">
                            <h3 className="book-title">{item.title}</h3>
                            <p className="book-author">by {item.author}</p>
                            <p className="book-price">₹{item.price}</p>
                            <button
                                className="add-to-cart-btn"
                                onClick={() => handleAddToCart(item)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NonFiction;