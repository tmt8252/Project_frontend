import React from 'react'

const HistoricalFiction = () => {

    const historicalFiction = [
        {
            "id": 141,
            "title": "The Nightingale",
            "author": "Kristin Hannah",
            "genre": "Historical Fiction",
            "subtitle": "A tale of two sisters during World War II",
            "isbn13": "9781250080400",
            "price": "2,500",
            "published_date": "2015-02-03",
            "image": "https://m.media-amazon.com/images/I/41HbMwLNJzL._SY445_SX342_.jpg"
        },
        {
            "id": 142,
            "title": "The Book Thief",
            "author": "Markus Zusak",
            "genre": "Historical Fiction",
            "subtitle": "A young girl's love for books in Nazi Germany",
            "isbn13": "9780375842207",
            "price": "2,400",
            "published_date": "2005-03-14",
            "image": "https://m.media-amazon.com/images/I/41RKGjq-XGL._SY445_SX342_.jpg"
        },
        {
            "id": 143,
            "title": "All the Light We Cannot See",
            "author": "Anthony Doerr",
            "genre": "Historical Fiction",
            "subtitle": "A blind French girl and a German soldier in World War II",
            "isbn13": "9781501173219",
            "price": "2,600",
            "published_date": "2014-05-06",
            "image": "https://m.media-amazon.com/images/I/41iDuqt9-3L._SY445_SX342_.jpg"
        },
        {
            "id": 144,
            "title": "The Tattooist of Auschwitz",
            "author": "Heather Morris",
            "genre": "Historical Fiction",
            "subtitle": "A love story set in Auschwitz",
            "isbn13": "9780062797155",
            "price": "2,300",
            "published_date": "2018-09-04",
            "image": "https://m.media-amazon.com/images/I/81lfY0CFyaL._SL1500_.jpg"
        },
        {
            "id": 145,
            "title": "Beneath a Scarlet Sky",
            "author": "Mark Sullivan",
            "genre": "Historical Fiction",
            "subtitle": "A forgotten hero of World War II",
            "isbn13": "9781503943377",
            "price": "2,500",
            "published_date": "2017-05-01",
            "image": "https://m.media-amazon.com/images/I/81wRnKbEwlL._SL1500_.jpg"
        },
        {
            "id": 146,
            "title": "The Pillars of the Earth",
            "author": "Ken Follett",
            "genre": "Historical Fiction",
            "subtitle": "The building of a great cathedral in medieval England",
            "isbn13": "9780451225245",
            "price": "2,800",
            "published_date": "1989-10-01",
            "image": "https://m.media-amazon.com/images/I/41o84bE70wL._SY445_SX342_.jpg"
        },
        {
            "id": 147,
            "title": "The Alice Network",
            "author": "Kate Quinn",
            "genre": "Historical Fiction",
            "subtitle": "Female spies in World War I and II",
            "isbn13": "9780062654199",
            "price": "2,400",
            "published_date": "2017-06-06",
            "image": "https://m.media-amazon.com/images/I/81sa0+Azs-L._SL1500_.jpg"
        },
        {
            "id": 148,
            "title": "Wolf Hall",
            "author": "Hilary Mantel",
            "genre": "Historical Fiction",
            "subtitle": "The rise of Thomas Cromwell in Tudor England",
            "isbn13": "9780312429980",
            "price": "2,700",
            "published_date": "2009-04-30",
            "image": "https://m.media-amazon.com/images/I/51ulIL3ro3L._SY445_SX342_.jpg"
        },
        {
            "id": 149,
            "title": "Memoirs of a Geisha",
            "author": "Arthur Golden",
            "genre": "Historical Fiction",
            "subtitle": "A girl’s journey to becoming a famous geisha",
            "isbn13": "9780679781585",
            "price": "2,300",
            "published_date": "1997-09-27",
            "image": "https://m.media-amazon.com/images/I/41MGHx-nxBL._SY445_SX342_.jpg"
        },
        {
            "id": 150,
            "title": "The Other Boleyn Girl",
            "author": "Philippa Gregory",
            "genre": "Historical Fiction",
            "subtitle": "The story of Mary Boleyn, mistress of King Henry VIII",
            "isbn13": "9780743227445",
            "price": "2,400",
            "published_date": "2001-05-01",
            "image": "https://m.media-amazon.com/images/I/51m2TbJrXlL._SY445_SX342_.jpg"
        },
        {
            "id": 151,
            "title": "A Tale of Two Cities",
            "author": "Charles Dickens",
            "genre": "Historical Fiction",
            "subtitle": "A story of love and sacrifice during the French Revolution",
            "isbn13": "9780141439600",
            "price": "2,200",
            "published_date": "1859-04-30",
            "image": "https://m.media-amazon.com/images/I/51AJQaCzMxL._SY445_SX342_.jpg"
        },
        {
            "id": 152,
            "title": "I, Claudius",
            "author": "Robert Graves",
            "genre": "Historical Fiction",
            "subtitle": "The life of Roman Emperor Claudius",
            "isbn13": "9780679724773",
            "price": "2,500",
            "published_date": "1934-09-01",
            "image": "https://m.media-amazon.com/images/I/81wEHey2lkL._SL1500_.jpg"
        },
        {
            "id": 153,
            "title": "Shōgun",
            "author": "James Clavell",
            "genre": "Historical Fiction",
            "subtitle": "A tale of power and survival in feudal Japan",
            "isbn13": "9780440178002",
            "price": "2,800",
            "published_date": "1975-06-23",
            "image": "https://m.media-amazon.com/images/I/518a-NeuGEL._SY445_SX342_.jpg"
        },
        {
            "id": 154,
            "title": "The Paris Library",
            "author": "Janet Skeslien Charles",
            "genre": "Historical Fiction",
            "subtitle": "A librarian's fight to save books during World War II",
            "isbn13": "9781982134198",
            "price": "2,400",
            "published_date": "2021-02-09",
            "image": "https://m.media-amazon.com/images/I/41HUHsuANpL._SY445_SX342_.jpg"
        },
        {
            "id": 155,
            "title": "Homegoing",
            "author": "Yaa Gyasi",
            "genre": "Historical Fiction",
            "subtitle": "A multigenerational saga tracing the legacy of slavery",
            "isbn13": "9781101971062",
            "price": "2,300",
            "published_date": "2016-06-07",
            "image": "https://m.media-amazon.com/images/I/51X0igLrEGL._SY445_SX342_.jpg"
        },
        {
            "id": 156,
            "title": "The White Queen",
            "author": "Philippa Gregory",
            "genre": "Historical Fiction",
            "subtitle": "The rise of Elizabeth Woodville in the Wars of the Roses",
            "isbn13": "9781416563693",
            "price": "2,500",
            "published_date": "2009-08-18",
            "image": "https://m.media-amazon.com/images/I/91oUo-80+bL._SL1500_.jpg"
        },
        {
            "id": 157,
            "title": "The Red Tent",
            "author": "Anita Diamant",
            "genre": "Historical Fiction",
            "subtitle": "The untold story of Dinah from the Bible",
            "isbn13": "9780312427290",
            "price": "2,400",
            "published_date": "1997-09-15",
            "image": "https://m.media-amazon.com/images/I/51bplfrVj+L._SY445_SX342_.jpg"
        },
        {
            "id": 158,
            "title": "The Tea Girl of Hummingbird Lane",
            "author": "Lisa See",
            "genre": "Historical Fiction",
            "subtitle": "A mother-daughter story intertwined with Chinese tea culture",
            "isbn13": "9781501154829",
            "price": "2,300",
            "published_date": "2017-03-21",
            "image": "https://m.media-amazon.com/images/I/81URNOpF3vL._SL1500_.jpg"
        },
        {
            "id": 159,
            "title": "Before We Were Strangers",
            "author": "Renée Carlino",
            "genre": "Historical Fiction",
            "subtitle": "A second-chance love story spanning decades",
            "isbn13": "9781501105777",
            "price": "2,200",
            "published_date": "2015-08-18",
            "image": "https://m.media-amazon.com/images/I/41hyFMnh8ML._SY445_SX342_.jpg"
        },
        {
            "id": 160,
            "title": "The Rose Code",
            "author": "Kate Quinn",
            "genre": "Historical Fiction",
            "subtitle": "Three women codebreakers in World War II",
            "isbn13": "9780063059412",
            "price": "2,600",
            "published_date": "2021-03-09",
            "image": "https://m.media-amazon.com/images/I/51tz86kCZyL._SY445_SX342_.jpg"
        }
    ]
    return (
        <>
            <div className="historicalFiction-container">
                <h1 className="historicalFiction-title">Historical-Fiction Books</h1>
                <div className="books-grid">
                    {historicalFiction.map((item) => (
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

export default HistoricalFiction