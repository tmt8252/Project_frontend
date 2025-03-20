import './api.css';

const Fiction = () => {
    const fiction = [
        {
          "id": 1,
          "title": "The Great Gatsby",
          "author": "F. Scott Fitzgerald",
          "genre": "Fiction",
          "subtitle": "A critique of the American Dream set in the Roaring Twenties",
          "isbn13": "9780743273565",
          "price": "1,300",
          "published_date": "1925-04-10",
          "image": "https://m.media-amazon.com/images/I/41LfbREAeyL._SX342_SY445_.jpg"
        },
        {
          "id": 2,
          "title": "1984",
          "author": "George Orwell",
          "genre": "Fiction",
          "subtitle": "A cautionary tale of totalitarianism and surveillance",
          "isbn13": "9780451524935",
          "price": "1,200",
          "published_date": "1949-06-08",
          "image": "https://m.media-amazon.com/images/I/517USUJAueL._SX342_SY445_.jpg"
        },
        {
          "id": 3,
          "title": "The Alchemist",
          "author": "Paulo Coelho",
          "genre": "Fiction",
          "subtitle": "A journey of self-discovery and personal legend",
          "isbn13": "9780062315007",
          "price": "1,600",
          "published_date": "1988-01-01",
          "image": "https://m.media-amazon.com/images/I/719SAY4GXcL._SL1500_.jpg"
        },
        {
          "id": 4,
          "title": "Life of Pi",
          "author": "Yann Martel",
          "genre": "Fiction",
          "subtitle": "A boy's survival journey with a tiger",
          "isbn13": "9780156027328",
          "price": "1,700",
          "published_date": "2001-09-11",
          "image": "https://m.media-amazon.com/images/I/51RXI789M0L._SY445_SX342_.jpg"
        },
        {
          "id": 5,
          "title": "The Book Thief",
          "author": "Markus Zusak",
          "genre": "Fiction",
          "subtitle": "A young girl's experience during Nazi Germany",
          "isbn13": "9780375842207",
          "price": "1,800",
          "published_date": "2005-03-14",
          "image": "https://m.media-amazon.com/images/I/51APkyJzNlL._SY445_SX342_.jpg"
        },
        {
          "id": 6,
          "title": "The Kite Runner",
          "author": "Khaled Hosseini",
          "genre": "Fiction",
          "subtitle": "A story of friendship, betrayal, and redemption",
          "isbn13": "9781594631931",
          "price": "1,900",
          "published_date": "2003-05-29",
          "image": "https://m.media-amazon.com/images/I/51bt7LtryoL._SY445_SX342_.jpg"
        },
        {
          "id": 7,
          "title": "Beloved",
          "author": "Toni Morrison",
          "genre": "Fiction",
          "subtitle": "A haunting tale of slavery and its aftermath",
          "isbn13": "9781400033416",
          "price": "1,600",
          "published_date": "1987-09-02",
          "image": "https://m.media-amazon.com/images/I/41PgAaTwa6L._SY445_SX342_.jpg"
        },
        {
          "id": 8,
          "title": "The Road",
          "author": "Cormac McCarthy",
          "genre": "Fiction",
          "subtitle": "A father and son's survival in a desolate world",
          "isbn13": "9780307387899",
          "price": "1,700",
          "published_date": "2006-09-26",
          "image": "https://m.media-amazon.com/images/I/81ChFcmhXDL._SL1500_.jpg"
        },
        {
          "id": 9,
          "title": "The Night Circus",
          "author": "Erin Morgenstern",
          "genre": "Fiction",
          "subtitle": "A magical competition between two young illusionists",
          "isbn13": "9780307744432",
          "price": "1,900",
          "published_date": "2011-09-13",
          "image": "https://m.media-amazon.com/images/I/81ou5dzXvPL._SL1500_.jpg"
        },
        {
          "id": 10,
          "title": "Circe",
          "author": "Madeline Miller",
          "genre": "Fiction",
          "subtitle": "A retelling of the life of the Greek sorceress Circe",
          "isbn13": "9780316556322",
          "price": "2,000",
          "published_date": "2018-04-10",
          "image": "https://m.media-amazon.com/images/I/513SvEhoPnL._SY445_SX342_.jpg"
        },
        {
          "id": 11,
          "title": "Cloud Atlas",
          "author": "David Mitchell",
          "genre": "Fiction",
          "subtitle": "A complex interwoven narrative spanning centuries",
          "isbn13": "9780375507250",
          "price": "2,200",
          "published_date": "2004-03-09",
          "image": "https://m.media-amazon.com/images/I/81++Ch8JTkL._SL1500_.jpg"
        },
        {
          "id": 12,
          "title": "A Man Called Ove",
          "author": "Fredrik Backman",
          "genre": "Fiction",
          "subtitle": "A grumpy old man's unexpected friendships",
          "isbn13": "9781476738024",
          "price": "1,700",
          "published_date": "2012-08-27",
          "image": "https://m.media-amazon.com/images/I/41nv31VDDhL._SY445_SX342_.jpg"
        },
        {
          "id": 13,
          "title": "Pachinko",
          "author": "Min Jin Lee",
          "genre": "Fiction",
          "subtitle": "A multi-generational story of a Korean family in Japan",
          "isbn13": "9781455563920",
          "price": "2,300",
          "published_date": "2017-02-07",
          "image": "https://m.media-amazon.com/images/I/71X7VQ6UXGL._SL1500_.jpg"
        },
        {
          "id": 14,
          "title": "Midnight's Children",
          "author": "Salman Rushdie",
          "genre": "Fiction",
          "subtitle": "A story about India's transition to independence",
          "isbn13": "9780812976533",
          "price": "2,500",
          "published_date": "1981-04-15",
          "image": "https://m.media-amazon.com/images/I/91XkGHMI3mS._SL1500_.jpg"
        },
        {
          "id": 15,
          "title": "The Goldfinch",
          "author": "Donna Tartt",
          "genre": "Fiction",
          "subtitle": "A coming-of-age story centered around an art theft",
          "isbn13": "9780316055437",
          "price": "2,800",
          "published_date": "2013-10-22",
          "image": "https://m.media-amazon.com/images/I/41E573sd26L._SY445_SX342_.jpg"
        },
    ]
  return (
    <>
    <div className="container">
        <div className="row">
            {fiction.map((item) => (
                <div className="map-card">
                    <img src={item.image} alt={item.title} />
                    <h3>{item.title}</h3>
                    <p>{item.author}</p>
                    <p>{item.price}</p>
                    <p>{item.published_date}</p>
                </div>
            ))}
        </div>
    </div>

    </>
  );
};

export default Fiction;

