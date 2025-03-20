import React from 'react'
import './api.css'

const Thriller = () => {
    const thriller = [
        {
            "id": 121,
            "title": "Gone Girl",
            "author": "Gillian Flynn",
            "genre": "Thriller",
            "subtitle": "A twisted tale of a missing wife and dark secrets",
            "isbn13": "9780307588371",
            "price": "2,300",
            "published_date": "2012-06-05",
            "image": "https://m.media-amazon.com/images/I/41bQ4uhDK1L._SY445_SX342_.jpg"
        },
        {
            "id": 122,
            "title": "The Girl with the Dragon Tattoo",
            "author": "Stieg Larsson",
            "genre": "Thriller",
            "subtitle": "A journalist and a hacker uncover a deadly mystery",
            "isbn13": "9780307949486",
            "price": "2,400",
            "published_date": "2005-08-01",
            "image": "https://m.media-amazon.com/images/I/517brh4+tIL._SY445_SX342_.jpg"
        },
        {
            "id": 123,
            "title": "The Silent Patient",
            "author": "Alex Michaelides",
            "genre": "Thriller",
            "subtitle": "A woman stops speaking after a shocking crime",
            "isbn13": "9781250301697",
            "price": "2,200",
            "published_date": "2019-02-05",
            "image": "https://m.media-amazon.com/images/I/5177eLEs+YL._SY445_SX342_.jpg"
        },
        {
            "id": 124,
            "title": "The Woman in the Window",
            "author": "A.J. Finn",
            "genre": "Thriller",
            "subtitle": "A recluse witnesses something shocking",
            "isbn13": "9780062678423",
            "price": "2,100",
            "published_date": "2018-01-02",
            "image": "https://m.media-amazon.com/images/I/51Q9K4l1I-L._SY445_SX342_.jpg"
        },
        {
            "id": 125,
            "title": "The Girl on the Train",
            "author": "Paula Hawkins",
            "genre": "Thriller",
            "subtitle": "An unreliable witness and a tangled mystery",
            "isbn13": "9781594634024",
            "price": "2,300",
            "published_date": "2015-01-13",
            "image": "https://m.media-amazon.com/images/I/414+7aha2zL._SY445_SX342_.jpg"
        },
        {
            "id": 126,
            "title": "Behind Closed Doors",
            "author": "B.A. Paris",
            "genre": "Thriller",
            "subtitle": "A seemingly perfect marriage hides dark secrets",
            "isbn13": "9781250132369",
            "price": "2,000",
            "published_date": "2016-08-09",
            "image": "https://m.media-amazon.com/images/I/41-l90+fSJL._SY445_SX342_.jpg"
        },
        {
            "id": 127,
            "title": "Verity",
            "author": "Colleen Hoover",
            "genre": "Thriller",
            "subtitle": "A writer discovers chilling truths in an unfinished manuscript",
            "isbn13": "9781791392796",
            "price": "2,300",
            "published_date": "2018-12-07",
            "image": "https://m.media-amazon.com/images/I/91GK2UcpNmL._SL1500_.jpg"
        },
        {
            "id": 128,
            "title": "The Couple Next Door",
            "author": "Shari Lapena",
            "genre": "Thriller",
            "subtitle": "A dinner party turns into a nightmare",
            "isbn13": "9780735221086",
            "price": "2,200",
            "published_date": "2016-08-23",
            "image": "https://m.media-amazon.com/images/I/51Bd6ppg6AL._SY445_SX342_.jpg"
        },
        {
            "id": 129,
            "title": "The Chain",
            "author": "Adrian McKinty",
            "genre": "Thriller",
            "subtitle": "A mother's worst nightmare—her child is kidnapped",
            "isbn13": "9780316531269",
            "price": "2,400",
            "published_date": "2019-07-09",
            "image": "https://m.media-amazon.com/images/I/41JhCf5CtKL._SY445_SX342_.jpg"
        },
        {
            "id": 130,
            "title": "The Snowman",
            "author": "Jo Nesbø",
            "genre": "Thriller",
            "subtitle": "A serial killer leaves a chilling signature",
            "isbn13": "9781784704758",
            "price": "2,500",
            "published_date": "2007-11-01",
            "image": "https://m.media-amazon.com/images/I/81ke+h3bKOL._SL1500_.jpg"
        },
        {
            "id": 131,
            "title": "I Am Watching You",
            "author": "Teresa Driscoll",
            "genre": "Thriller",
            "subtitle": "A girl vanishes after a train ride with strangers",
            "isbn13": "9781542046596",
            "price": "2,100",
            "published_date": "2017-10-01",
            "image": "https://m.media-amazon.com/images/I/51PeVt0WznL._SY445_SX342_.jpg"
        },
        {
            "id": 132,
            "title": "Before I Go to Sleep",
            "author": "S.J. Watson",
            "genre": "Thriller",
            "subtitle": "A woman with amnesia wakes up every day with no memory",
            "isbn13": "9780062060556",
            "price": "2,200",
            "published_date": "2011-06-14",
            "image": "https://m.media-amazon.com/images/I/81gXotZKEhL._SL1500_.jpg"
        },
        {
            "id": 133,
            "title": "An Anonymous Girl",
            "author": "Greer Hendricks & Sarah Pekkanen",
            "genre": "Thriller",
            "subtitle": "A psychological experiment turns into a dangerous game",
            "isbn13": "9781250133731",
            "price": "2,300",
            "published_date": "2019-01-08",
            "image": "https://m.media-amazon.com/images/I/413-oM9b4-L._SY445_SX342_.jpg"
        },
        {
            "id": 134,
            "title": "The Family Upstairs",
            "author": "Lisa Jewell",
            "genre": "Thriller",
            "subtitle": "A woman inherits a house with a dark past",
            "isbn13": "9781501190100",
            "price": "2,400",
            "published_date": "2019-08-06",
            "image": "https://m.media-amazon.com/images/I/51OpvbdQQ3L._SY445_SX342_.jpg"
        },
        {
            "id": 135,
            "title": "The Kind Worth Killing",
            "author": "Peter Swanson",
            "genre": "Thriller",
            "subtitle": "A chance meeting on a plane leads to a deadly game",
            "isbn13": "9780062267535",
            "price": "2,300",
            "published_date": "2015-02-03",
            "image": "https://m.media-amazon.com/images/I/51vSuqvkq6L._SY445_SX342_.jpg"
        },
        {
            "id": 136,
            "title": "Final Girls",
            "author": "Riley Sager",
            "genre": "Thriller",
            "subtitle": "Survivors of past massacres are being hunted",
            "isbn13": "9781101985366",
            "price": "2,200",
            "published_date": "2017-07-11",
            "image": "https://m.media-amazon.com/images/I/51xiBVUP67L._SY445_SX342_.jpg"
        },
        {
            "id": 137,
            "title": "The Guest List",
            "author": "Lucy Foley",
            "genre": "Thriller",
            "subtitle": "A wedding celebration turns into a murder mystery",
            "isbn13": "9780062868930",
            "price": "2,300",
            "published_date": "2020-06-02",
            "image": "https://m.media-amazon.com/images/I/41dvvaNzCiL._SY445_SX342_.jpg"
        },
        {
            "id": 138,
            "title": "Sharp Objects",
            "author": "Gillian Flynn",
            "genre": "Thriller",
            "subtitle": "A journalist investigates murders in her hometown",
            "isbn13": "9780307341556",
            "price": "2,400",
            "published_date": "2006-09-26",
            "image": "https://m.media-amazon.com/images/I/71-JO+PSPwL._SL1500_.jpg"
        },
        {
            "id": 139,
            "title": "The Girl Before",
            "author": "JP Delaney",
            "genre": "Thriller",
            "subtitle": "A woman moves into a house with strict rules—and a dark past",
            "isbn13": "9780425285046",
            "price": "2,300",
            "published_date": "2017-01-24",
            "image": "https://m.media-amazon.com/images/I/51e5x6pJ+lL.jpg"
        },
        {
            "id": 140,
            "title": "In a Dark, Dark Wood",
            "author": "Ruth Ware",
            "genre": "Thriller",
            "subtitle": "A bachelorette party in the woods takes a sinister turn",
            "isbn13": "9781501102318",
            "price": "2,200",
            "published_date": "2015-08-04",
            "image": "https://m.media-amazon.com/images/I/818uFTF+bbS._SL1500_.jpg"
        }
    ]
    return (
        <>
            <div className="thriller-container">
                <h1 className="thriller-title">Thriller Books</h1>
                <div className="books-grid">
                    {thriller.map((item) => (
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

export default Thriller