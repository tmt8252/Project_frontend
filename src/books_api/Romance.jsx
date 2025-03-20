import React from 'react'
import './api.css';

const Romance = () => {
    const romance = [
        {
            "id": 61,
            "title": "Pride and Prejudice",
            "author": "Jane Austen",
            "genre": "Romance",
            "subtitle": "A story of love and social standing",
            "isbn13": "9780141439518",
            "price": "1,500",
            "published_date": "1813-01-28",
            "image": "https://m.media-amazon.com/images/I/51Y5Z0K2s0L._SY466_.jpg"
        },
        {
            "id": 62,
            "title": "The Notebook",
            "author": "Nicholas Sparks",
            "genre": "Romance",
            "subtitle": "A timeless tale of love and memory",
            "isbn13": "9780446605236",
            "price": "1,800",
            "published_date": "1996-10-01",
            "image": "https://m.media-amazon.com/images/I/41idzf2giuL._SY445_SX342_.jpg"
        },
        {
            "id": 63,
            "title": "Me Before You",
            "author": "Jojo Moyes",
            "genre": "Romance",
            "subtitle": "An unforgettable love story",
            "isbn13": "9780143124541",
            "price": "2,000",
            "published_date": "2012-01-05",
            "image": "https://m.media-amazon.com/images/I/41QwHl4btUL._SY445_SX342_.jpg"
        },
        {
            "id": 64,
            "title": "Outlander",
            "author": "Diana Gabaldon",
            "genre": "Romance",
            "subtitle": "A tale of time travel and love",
            "isbn13": "9780440212560",
            "price": "2,500",
            "published_date": "1991-06-01",
            "image": "https://m.media-amazon.com/images/I/81TlHXl+gaL._SL1500_.jpg"
        },
        {
            "id": 65,
            "title": "The Fault in Our Stars",
            "author": "John Green",
            "genre": "Romance",
            "subtitle": "A heart-wrenching love story",
            "isbn13": "9780525478812",
            "price": "1,700",
            "published_date": "2012-01-10",
            "image": "https://m.media-amazon.com/images/I/51r27MDeQQL._SY445_SX342_.jpg"
        },
        {
            "id": 66,
            "title": "Bridgerton Series",
            "author": "Julia Quinn",
            "genre": "Romance",
            "subtitle": "Regency-era romance and intrigue",
            "isbn13": "9780062353641",
            "price": "3,200",
            "published_date": "2000-01-04",
            "image": "https://m.media-amazon.com/images/I/41B9ff1IGfL._SY445_SX342_.jpg"
        },
        {
            "id": 67,
            "title": "One Day",
            "author": "David Nicholls",
            "genre": "Romance",
            "subtitle": "A love story spanning decades",
            "isbn13": "9780340896983",
            "price": "1,900",
            "published_date": "2009-06-11",
            "image": "https://m.media-amazon.com/images/I/71wn8mzLXdL._SL1500_.jpg"
        },
        {
            "id": 68,
            "title": "The Rosie Project",
            "author": "Graeme Simsion",
            "genre": "Romantic",
            "subtitle": "A quirky love story",
            "isbn13": "9781476729091",
            "price": "1,600",
            "published_date": "2013-01-30",
            "image": "https://m.media-amazon.com/images/I/71wn8mzLXdL._SL1500_.jpg"
        },
        {
            "id": 69,
            "title": "The Time Traveler's Wife",
            "author": "Audrey Niffenegger",
            "genre": "Romance",
            "subtitle": "A love story across time",
            "isbn13": "9780156029438",
            "price": "2,200",
            "published_date": "2003-09-23",
            "image": "https://m.media-amazon.com/images/I/51rE-Aa8miL._SY445_SX342_.jpg"
        },
        {
            "id": 70,
            "title": "The Kiss Quotient",
            "author": "Helen Hoang",
            "genre": "Romance",
            "subtitle": "A unique and heartfelt love story",
            "isbn13": "9780451490803",
            "price": "1,800",
            "published_date": "2018-06-05",
            "image": "https://m.media-amazon.com/images/I/81t78e6SbgL._SL1500_.jpg"
        },
        {
            "id": 71,
            "title": "Red, White & Royal Blue",
            "author": "Casey McQuiston",
            "genre": "Romantic",
            "subtitle": "A love story between a prince and a president’s son",
            "isbn13": "9781250316776",
            "price": "1,900",
            "published_date": "2019-05-14",
            "image": "https://m.media-amazon.com/images/I/51+Zual5iXL._SY445_SX342_.jpg"
        },
        {
            "id": 72,
            "title": "Beach Read",
            "author": "Emily Henry",
            "genre": "Romance",
            "subtitle": "A summer of unexpected romance",
            "isbn13": "9781984806734",
            "price": "2,000",
            "published_date": "2020-05-19",
            "image": "https://m.media-amazon.com/images/I/41qKAWQ-lvL._SY445_SX342_.jpg"
        },
        {
            "id": 73,
            "title": "People We Meet on Vacation",
            "author": "Emily Henry",
            "genre": "Romantic",
            "subtitle": "A heartwarming story of friendship and love",
            "isbn13": "9781984806758",
            "price": "2,100",
            "published_date": "2021-05-11",
            "image": "https://m.media-amazon.com/images/I/71YdsKNLPAL._SL1500_.jpg"
        },
        {
            "id": 74,
            "title": "The Wedding Date",
            "author": "Jasmine Guillory",
            "genre": "Romance",
            "subtitle": "A fake date turns into something real",
            "isbn13": "9780399587665",
            "price": "1,700",
            "published_date": "2018-01-30",
            "image": "https://m.media-amazon.com/images/I/51YAbIIUq7L._SY445_SX342_.jpg"
        },
        {
            "id": 75,
            "title": "Love and Other Words",
            "author": "Christina Lauren",
            "genre": "Romance",
            "subtitle": "A second-chance love story",
            "isbn13": "9781501128011",
            "price": "1,800",
            "published_date": "2018-04-10",
            "image": "https://m.media-amazon.com/images/I/71bBJj4tZVL._SL1500_.jpg"
        },
        {
            "id": 76,
            "title": "The Hating Game",
            "author": "Sally Thorne",
            "genre": "Romantic",
            "subtitle": "An office rivalry that turns into romance",
            "isbn13": "9780062439598",
            "price": "1,900",
            "published_date": "2016-08-09",
            "image": "https://m.media-amazon.com/images/I/817HkQzwK8L._SL1500_.jpg"
        },
        {
            "id": 77,
            "title": "It Ends With Us",
            "author": "Colleen Hoover",
            "genre": "Romance",
            "subtitle": "An emotional and powerful love story",
            "isbn13": "9781501110368",
            "price": "2,100",
            "published_date": "2016-08-02",
            "image": "https://m.media-amazon.com/images/I/51Bado8svmL._SY445_SX342_.jpg"
        },
        {
            "id": 78,
            "title": "Every Summer After",
            "author": "Carley Fortune",
            "genre": "Romance",
            "subtitle": "A nostalgic summer love story",
            "isbn13": "9780593438534",
            "price": "2,200",
            "published_date": "2022-05-10",
            "image": "https://m.media-amazon.com/images/I/81W7mRbktsL._SL1500_.jpg"
        },
        {
            "id": 79,
            "title": "Book Lovers",
            "author": "Emily Henry",
            "genre": "Romantic",
            "subtitle": "A story of literary rivals turned lovers",
            "isbn13": "9780593334836",
            "price": "2,100",
            "published_date": "2022-05-03",
            "image": "https://m.media-amazon.com/images/I/71Xy4AL7jKL._SL1500_.jpg"
        },
        {
            "id": 80,
            "title": "Eleanor & Park",
            "author": "Rainbow Rowell",
            "genre": "Romance",
            "subtitle": "A heartfelt story of first love",
            "isbn13": "9781250012570",
            "price": "1,800",
            "published_date": "2013-02-26",
            "image": "https://m.media-amazon.com/images/I/41c7owATnSL._SY445_SX342_.jpg"
        }
    ]
    return (
        <>
            <div className="romance-container">
                <h1 className="romance-title">Romance Books</h1>
                <div className="books-grid">
                    {romance.map((item) => (
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
        </>
    )
}

export default Romance