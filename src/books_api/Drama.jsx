import React from 'react'
import './api.css';


const Drama = () => {
    const drama = [
        {
            "id": 81,
            "title": "Wuthering Heights",
            "author": "Emily Brontë",
            "genre": "Drama",
            "subtitle": "A haunting tale of love and revenge",
            "isbn13": "9780141439556",
            "price": "1,500",
            "published_date": "1847-12-01",
            "image": "https://m.media-amazon.com/images/I/31+gKtDZpwL._SY445_SX342_.jpg"
        },
        {
            "id": 82,
            "title": "Atonement",
            "author": "Ian McEwan",
            "genre": "Drama",
            "subtitle": "A story of love, war, and regret",
            "isbn13": "9780385721790",
            "price": "1,800",
            "published_date": "2001-09-04",
            "image": "https://m.media-amazon.com/images/I/715phsBG7XL._SL1198_.jpg"
        },
        {
            "id": 83,
            "title": "Jane Eyre",
            "author": "Charlotte Brontë",
            "genre": "Drama",
            "subtitle": "A journey of love and self-discovery",
            "isbn13": "9780141441146",
            "price": "1,600",
            "published_date": "1847-10-16",
            "image": "https://m.media-amazon.com/images/I/41xARP44KAL._SY445_SX342_.jpg"
        },
        {
            "id": 84,
            "title": "The Picture of Dorian Gray",
            "author": "Oscar Wilde",
            "genre": "Drama",
            "subtitle": "A dark tale of vanity and corruption",
            "isbn13": "9780141439570",
            "price": "1,400",
            "published_date": "1890-07-20",
            "image": "https://m.media-amazon.com/images/I/51vDf4hpVZL._SX342_SY445_.jpg"
        },
        {
            "id": 85,
            "title": "The Bell Jar",
            "author": "Sylvia Plath",
            "genre": "Drama",
            "subtitle": "A poignant story of mental health struggles",
            "isbn13": "9780060837020",
            "price": "1,700",
            "published_date": "1963-01-14",
            "image": "https://m.media-amazon.com/images/I/71xz5j-4RSL._SL1500_.jpg"
        },
        {
            "id": 86,
            "title": "A Thousand Splendid Suns",
            "author": "Khaled Hosseini",
            "genre": "Drama",
            "subtitle": "A powerful story of love and resilience",
            "isbn13": "9781594483851",
            "price": "2,000",
            "published_date": "2007-05-22",
            "image": "https://m.media-amazon.com/images/I/41MES53mTYL._SY445_SX342_.jpg"
        },
        {
            "id": 87,
            "title": "The Color Purple",
            "author": "Alice Walker",
            "genre": "Drama",
            "subtitle": "A moving story of strength and survival",
            "isbn13": "9780151191536",
            "price": "1,800",
            "published_date": "1982-06-30",
            "image": "https://m.media-amazon.com/images/I/81rGqwO8QeL._SL1500_.jpg"
        },
        {
            "id": 88,
            "title": "The Remains of the Day",
            "author": "Kazuo Ishiguro",
            "genre": "Drama",
            "subtitle": "A butler's reflections on duty and lost love",
            "isbn13": "9780679731726",
            "price": "1,900",
            "published_date": "1989-05-01",
            "image": "https://m.media-amazon.com/images/I/41X66cGpxpL._SY445_SX342_.jpg"
        },
        {
            "id": 89,
            "title": "Normal People",
            "author": "Sally Rooney",
            "genre": "Drama",
            "subtitle": "A modern love story of connection and miscommunication",
            "isbn13": "9781984822178",
            "price": "2,100",
            "published_date": "2018-08-28",
            "image": "https://m.media-amazon.com/images/I/41BcUsti7pL._SY445_SX342_.jpg"
        },
        {
            "id": 90,
            "title": "Big Little Lies",
            "author": "Liane Moriarty",
            "genre": "Drama",
            "subtitle": "A suspenseful tale of secrets and friendships",
            "isbn13": "9780425274866",
            "price": "2,200",
            "published_date": "2014-07-29",
            "image": "https://m.media-amazon.com/images/I/81N+sjNpGML._SL1500_.jpg"
        },
        {
            "id": 91,
            "title": "Little Fires Everywhere",
            "author": "Celeste Ng",
            "genre": "Drama",
            "subtitle": "A gripping story of secrets and motherhood",
            "isbn13": "9780735224315",
            "price": "2,000",
            "published_date": "2017-09-12",
            "image": "https://m.media-amazon.com/images/I/51-FT9ReumL._SY445_SX342_.jpg"
        },
        {
            "id": 92,
            "title": "Shantaram",
            "author": "Gregory David Roberts",
            "genre": "Drama",
            "subtitle": "An epic story of adventure and redemption",
            "isbn13": "9780312330538",
            "price": "2,500",
            "published_date": "2003-09-01",
            "image": "https://m.media-amazon.com/images/I/51AJsPhKQdL._SY445_SX342_.jpg"
        },
        {
            "id": 93,
            "title": "A Little Life",
            "author": "Hanya Yanagihara",
            "genre": "Drama",
            "subtitle": "A deeply moving story of friendship and trauma",
            "isbn13": "9780385539258",
            "price": "2,800",
            "published_date": "2015-03-10",
            "image": "https://m.media-amazon.com/images/I/71kUYNSKKgL._SL1250_.jpg"
        },
        {
            "id": 94,
            "title": "The House of Mirth",
            "author": "Edith Wharton",
            "genre": "Drama",
            "subtitle": "A tragic tale of wealth and society",
            "isbn13": "9780140187298",
            "price": "1,600",
            "published_date": "1905-10-14",
            "image": "https://m.media-amazon.com/images/I/71w-tnJBBZS._SL1360_.jpg"
        },
        {
            "id": 95,
            "title": "The Help",
            "author": "Kathryn Stockett",
            "genre": "Drama",
            "subtitle": "A powerful story of race and resilience",
            "isbn13": "9780425232200",
            "price": "1,900",
            "published_date": "2009-02-10",
            "image": "https://m.media-amazon.com/images/I/41Nm+3XaK4L._SY445_SX342_.jpg"
        },
        {
            "id": 96,
            "title": "The Nightingale",
            "author": "Kristin Hannah",
            "genre": "Drama",
            "subtitle": "A heartbreaking tale of World War II",
            "isbn13": "9780312577223",
            "price": "2,100",
            "published_date": "2015-02-03",
            "image": "https://m.media-amazon.com/images/I/81OkWjcf4WL._SL1500_.jpg"
        },
        {
            "id": 97,
            "title": "The Light Between Oceans",
            "author": "M.L. Stedman",
            "genre": "Drama",
            "subtitle": "A story of love, loss, and a difficult choice",
            "isbn13": "9781451681758",
            "price": "1,900",
            "published_date": "2012-07-31",
            "image": "https://m.media-amazon.com/images/I/51MRaM+dJiL._SY445_SX342_.jpg"
        },
        {
            "id": 98,
            "title": "An American Marriage",
            "author": "Tayari Jones",
            "genre": "Drama",
            "subtitle": "A moving novel about love and injustice",
            "isbn13": "9781616208776",
            "price": "2,000",
            "published_date": "2018-02-06",
            "image": "https://m.media-amazon.com/images/I/81Ww1KGS3iL._SL1500_.jpg"
        },
        {
            "id": 99,
            "title": "The Goldfinch",
            "author": "Donna Tartt",
            "genre": "Drama",
            "subtitle": "A coming-of-age novel full of mystery and art",
            "isbn13": "9780316055437",
            "price": "2,300",
            "published_date": "2013-10-22",
            "image": "https://m.media-amazon.com/images/I/51kCei+c72L._SL1000_.jpg"
        },
        {
            "id": 100,
            "title": "Room",
            "author": "Emma Donoghue",
            "genre": "Drama",
            "subtitle": "A unique and gripping story of survival",
            "isbn13": "9780316098335",
            "price": "1,800",
            "published_date": "2010-09-13",
            "image": "https://m.media-amazon.com/images/I/410M6-c25WL._SY445_SX342_.jpg"
        }
    ]
    return (
        <>
            <div className="drama-container">
                <h1 className="drama-title">Drama Books</h1>
                <div className="books-grid">
                    {drama.map((item) => (
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

export default Drama