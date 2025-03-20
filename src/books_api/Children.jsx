import React from "react";
import "./api.css";
import BooksLayout from "../components/books-layout";

const Children = () => {
  const childrens = [
    {
      id: 41,
      title: "Harry Potter series",
      author: "J.K. Rowling",
      genre: "Children's",
      subtitle: "The magical journey of a young wizard, Harry Potter",
      isbn13: "9780545162074",
      price: "5,200",
      published_date: "1997-06-26",
      image:
        "https://m.media-amazon.com/images/I/41C3OItzggL._SX342_SY445_.jpg",
    },
    {
      id: 42,
      title: "The Chronicles of Narnia",
      author: "C.S. Lewis",
      genre: "Children's",
      subtitle: "A magical world discovered through a wardrobe",
      isbn13: "9780066238509",
      price: "5,300",
      published_date: "1950-10-16",
      image: "https://m.media-amazon.com/images/I/91KBQUqU3DL._SL1500_.jpg",
    },
    {
      id: 43,
      title: "Charlotte's Web",
      author: "E.B. White",
      genre: "Children's",
      subtitle: "A touching story of friendship between a pig and a spider",
      isbn13: "9780064400557",
      price: "5,400",
      published_date: "1952-10-15",
      image: "https://m.media-amazon.com/images/I/813AS1xuZiL._SL1500_.jpg",
    },
    {
      id: 44,
      title: "Matilda",
      author: "Roald Dahl",
      genre: "Children's",
      subtitle: "The story of a gifted girl with telekinetic powers",
      isbn13: "9780142410370",
      price: "5,500",
      published_date: "1988-10-01",
      image: "https://m.media-amazon.com/images/I/81N9eGv-5ML._SL1500_.jpg",
    },
    {
      id: 45,
      title: "The Tale of Peter Rabbit",
      author: "Beatrix Potter",
      genre: "Children's",
      subtitle: "A mischievous rabbit's adventure in Mr. McGregor's garden",
      isbn13: "9780723247708",
      price: "5,600",
      published_date: "1902-10-02",
      image:
        "https://m.media-amazon.com/images/I/41+2d5oWbsL._SX342_SY445_.jpg",
    },
    {
      id: 46,
      title: "The Secret Garden",
      author: "Frances Hodgson Burnett",
      genre: "Children's",
      subtitle: "A story of discovery, healing, and a hidden garden",
      isbn13: "9780064401882",
      price: "5,700",
      published_date: "1911-08-01",
      image: "https://m.media-amazon.com/images/I/91TOLdRc2rL._SL1500_.jpg",
    },
    {
      id: 47,
      title: "Where the Wild Things Are",
      author: "Maurice Sendak",
      genre: "Children's",
      subtitle: "A boy's adventure to a world of wild creatures",
      isbn13: "9780064431780",
      price: "5,800",
      published_date: "1963-04-09",
      image:
        "https://m.media-amazon.com/images/I/611Z5sqkl0L._SX342_SY445_.jpg",
    },
    {
      id: 48,
      title: "Alice's Adventures in Wonderland",
      author: "Lewis Carroll",
      genre: "Children's",
      subtitle: "A girl's whimsical journey through Wonderland",
      isbn13: "9781503250215",
      price: "5,900",
      published_date: "1865-11-26",
      image: "https://m.media-amazon.com/images/I/81D0cL4qmkL._SL1500_.jpg",
    },
    {
      id: 49,
      title: "The Gruffalo",
      author: "Julia Donaldson",
      genre: "Children's",
      subtitle: "A clever mouse's adventure in the woods",
      isbn13: "9780333710937",
      price: "6,000",
      published_date: "1999-03-23",
      image: "https://m.media-amazon.com/images/I/914+Mu5Uy9L._SL1500_.jpg",
    },
    {
      id: 50,
      title: "Percy Jackson & the Olympians",
      author: "Rick Riordan",
      genre: "Children's",
      subtitle:
        "A modern take on Greek mythology through the eyes of a demigod",
      isbn13: "9780786838653",
      price: "6,100",
      published_date: "2005-06-28",
      image:
        "https://m.media-amazon.com/images/I/514SCuBwxpL._SY445_SX342_.jpg",
    },
    {
      id: 51,
      title: "Anne of Green Gables",
      author: "L.M. Montgomery",
      genre: "Children's",
      subtitle: "The adventures of Anne Shirley in Avonlea",
      isbn13: "9780553213133",
      price: "6,200",
      published_date: "1908-06-13",
      image: "https://m.media-amazon.com/images/I/81NDwdjGwSL._SL1500_.jpg",
    },
    {
      id: 52,
      title: "The Little Prince",
      author: "Antoine de Saint-Exupéry",
      genre: "Children's",
      subtitle: "A philosophical tale of a young prince exploring the universe",
      isbn13: "9780156012195",
      price: "6,300",
      published_date: "1943-04-06",
      image: "https://m.media-amazon.com/images/I/81yLt8OG7zL._SL1500_.jpg",
    },
    {
      id: 53,
      title: "The Cat in the Hat",
      author: "Dr. Seuss",
      genre: "Children's",
      subtitle: "A mischievous cat brings chaos and fun",
      isbn13: "9780394800011",
      price: "6,400",
      published_date: "1957-03-12",
      image:
        "https://m.media-amazon.com/images/I/51jk4uYz8JL._SY445_SX342_.jpg",
    },
    {
      id: 54,
      title: "Winnie-the-Pooh",
      author: "A.A. Milne",
      genre: "Children's",
      subtitle:
        "The adventures of Winnie-the-Pooh and friends in Hundred Acre Wood",
      isbn13: "9780140361216",
      price: "6,500",
      published_date: "1926-10-14",
      image:
        "https://m.media-amazon.com/images/I/41roax34siL._SY445_SX342_.jpg",
    },
    {
      id: 55,
      title: "Coraline",
      author: "Neil Gaiman",
      genre: "Children's",
      subtitle:
        "A young girl discovers a parallel world that's not what it seems",
      isbn13: "9780380807345",
      price: "6,600",
      published_date: "2002-08-04",
      image:
        "https://m.media-amazon.com/images/I/51kCS+QBGiL._SY445_SX342_.jpg",
    },
    {
      id: 56,
      title: "James and the Giant Peach",
      author: "Roald Dahl",
      genre: "Children's",
      subtitle: "A magical journey aboard a giant peach",
      isbn13: "9780142410363",
      price: "6,700",
      published_date: "1961-07-17",
      image:
        "https://m.media-amazon.com/images/I/51GovRoB1nL._SY445_SX342_.jpg",
    },
    {
      id: 57,
      title: "The BFG",
      author: "Roald Dahl",
      genre: "Children's",
      subtitle: "A big friendly giant and a little girl's adventure",
      isbn13: "9780141365428",
      price: "6,800",
      published_date: "1982-10-01",
      image:
        "https://m.media-amazon.com/images/I/41nql9lodEL._SY445_SX342_.jpg",
    },
    {
      id: 58,
      title: "The Boxcar Children",
      author: "Gertrude Chandler Warner",
      genre: "Children's",
      subtitle: "Four orphans create a home in an abandoned boxcar",
      isbn13: "9780807508527",
      price: "6,900",
      published_date: "1924-01-01",
      image:
        "https://m.media-amazon.com/images/I/51gX-Mi9AeL._SY445_SX342_.jpg",
    },
    {
      id: 59,
      title: "Diary of a Wimpy Kid",
      author: "Jeff Kinney",
      genre: "Children's",
      subtitle: "The hilarious diary of a middle schooler, Greg Heffley",
      isbn13: "9780810993136",
      price: "7,000",
      published_date: "2007-04-01",
      image:
        "https://m.media-amazon.com/images/I/51+ny7zH1-L._SY445_SX342_.jpg",
    },
    {
      id: 60,
      title: "A Wrinkle in Time",
      author: "Madeleine L'Engle",
      genre: "Children's",
      subtitle: "A cosmic adventure to save Meg's father",
      isbn13: "9780312367541",
      price: "7,100",
      published_date: "1962-01-01",
      image:
        "https://m.media-amazon.com/images/I/41vyKV6EshL._SX342_SY445_.jpg",
    },
  ];
  return (
    <>
      <BooksLayout title="Children's Books" items={childrens} />
    </>
  );
};

export default Children;
