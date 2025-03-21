import React from "react";
import "./api.css";
import BooksLayout from "../components/books-layout";
const Horror = () => {
  const horror = [
    {
      id: 101,
      title: "The Shining",
      author: "Stephen King",
      genre: "Horror",
      subtitle: "A family's terrifying stay in an isolated hotel",
      isbn13: "9780307743657",
      price: "2,200",
      published_date: "1977-01-28",
      image:
        "https://m.media-amazon.com/images/I/51iytv+IivL._SY445_SX342_.jpg",
    },
    {
      id: 102,
      title: "Dracula",
      author: "Bram Stoker",
      genre: "Horror",
      subtitle: "The legendary tale of Count Dracula",
      isbn13: "9780486411095",
      price: "1,500",
      published_date: "1897-05-26",
      image:
        "https://m.media-amazon.com/images/I/51bYoK0WIOL._SX342_SY445_.jpg",
    },
    {
      id: 103,
      title: "Frankenstein",
      author: "Mary Shelley",
      genre: "Horror",
      subtitle: "A scientist's obsession creates a monster",
      isbn13: "9780486282114",
      price: "1,400",
      published_date: "1818-01-01",
      image:
        "https://m.media-amazon.com/images/I/41yAqkd0tLL._SY445_SX342_.jpg",
    },
    {
      id: 104,
      title: "IT",
      author: "Stephen King",
      genre: "Horror",
      subtitle: "A terrifying entity haunts a small town",
      isbn13: "9781501142970",
      price: "2,500",
      published_date: "1986-09-15",
      image:
        "https://m.media-amazon.com/images/I/41uUJtoRe3L._SY445_SX342_.jpg",
    },
    {
      id: 105,
      title: "The Exorcist",
      author: "William Peter Blatty",
      genre: "Horror",
      subtitle: "A chilling tale of demonic possession",
      isbn13: "9780061007224",
      price: "2,100",
      published_date: "1971-06-01",
      image:
        "https://m.media-amazon.com/images/I/41G6Xwc2V2L._SY445_SX342_.jpg",
    },
    {
      id: 106,
      title: "House of Leaves",
      author: "Mark Z. Danielewski",
      genre: "Horror",
      subtitle: "A labyrinthine novel of terror and madness",
      isbn13: "9780375703768",
      price: "2,800",
      published_date: "2000-03-07",
      image:
        "https://m.media-amazon.com/images/I/31SHXXFMGaL._SY445_SX342_.jpg",
    },
    {
      id: 107,
      title: "Pet Sematary",
      author: "Stephen King",
      genre: "Horror",
      subtitle: "Sometimes, dead is better...",
      isbn13: "9781501156700",
      price: "2,300",
      published_date: "1983-11-14",
      image:
        "https://m.media-amazon.com/images/I/51F9EUlVL1L._SY445_SX342_.jpg",
    },
    {
      id: 108,
      title: "The Silence of the Lambs",
      author: "Thomas Harris",
      genre: "Horror",
      subtitle:
        "An FBI trainee hunts a serial killer with help from a cannibal",
      isbn13: "9780312924584",
      price: "2,400",
      published_date: "1988-05-19",
      image: "https://m.media-amazon.com/images/I/71wytopNhPL._SL1500_.jpg",
    },
    {
      id: 109,
      title: "Bird Box",
      author: "Josh Malerman",
      genre: "Horror",
      subtitle: "A terrifying force drives people to madness",
      isbn13: "9780062259660",
      price: "2,000",
      published_date: "2014-05-13",
      image: "https://m.media-amazon.com/images/I/91jBfwPCeKL._SY425_.jpg",
    },
    {
      id: 110,
      title: "The Haunting of Hill House",
      author: "Shirley Jackson",
      genre: "Horror",
      subtitle: "A chilling tale of a haunted mansion",
      isbn13: "9780143039983",
      price: "1,700",
      published_date: "1959-10-16",
      image:
        "https://m.media-amazon.com/images/I/41dO5N9cCyL._SY445_SX342_.jpg",
    },
    {
      id: 111,
      title: "Salem's Lot",
      author: "Stephen King",
      genre: "Horror",
      subtitle: "A town falls prey to a sinister vampire",
      isbn13: "9780307743671",
      price: "2,200",
      published_date: "1975-10-17",
      image:
        "https://m.media-amazon.com/images/I/51Ky8izRf3L._SY445_SX342_.jpg",
    },
    {
      id: 112,
      title: "The Amityville Horror",
      author: "Jay Anson",
      genre: "Horror",
      subtitle: "A chilling true story of a haunted house",
      isbn13: "9781416507697",
      price: "1,900",
      published_date: "1977-09-13",
      image:
        "https://m.media-amazon.com/images/I/51JGWSQoIWL._SY445_SX342_.jpg",
    },
    {
      id: 113,
      title: "The Woman in Black",
      author: "Susan Hill",
      genre: "Horror",
      subtitle: "A ghostly tale of terror and suspense",
      isbn13: "9780307950918",
      price: "1,800",
      published_date: "1983-10-10",
      image:
        "https://m.media-amazon.com/images/I/61uUhDjhZBL._SY445_SX342_.jpg",
    },
    {
      id: 114,
      title: "Hell House",
      author: "Richard Matheson",
      genre: "Horror",
      subtitle: "A haunted house story that will keep you awake",
      isbn13: "9780312865047",
      price: "2,100",
      published_date: "1971-10-01",
      image:
        "https://m.media-amazon.com/images/I/41Z5Z6bxENL._SY445_SX342_.jpg",
    },
    {
      id: 115,
      title: "Mexican Gothic",
      author: "Silvia Moreno-Garcia",
      genre: "Horror",
      subtitle: "A dark, eerie tale set in 1950s Mexico",
      isbn13: "9780525620808",
      price: "2,300",
      published_date: "2020-06-30",
      image:
        "https://m.media-amazon.com/images/I/41TFxqs8jcL._SY445_SX342_.jpg",
    },
    {
      id: 116,
      title: "Clive Barker's Books of Blood",
      author: "Clive Barker",
      genre: "Horror",
      subtitle: "A chilling collection of horror stories",
      isbn13: "9780425165584",
      price: "2,400",
      published_date: "1984-10-01",
      image:
        "https://m.media-amazon.com/images/I/5107WEL1wWL._SY445_SX342_.jpg",
    },
    {
      id: 117,
      title: "The Troop",
      author: "Nick Cutter",
      genre: "Horror",
      subtitle: "A terrifying survival horror story",
      isbn13: "9781476717722",
      price: "2,000",
      published_date: "2014-02-25",
      image:
        "https://m.media-amazon.com/images/I/41LHzW1yhPL._SY445_SX342_.jpg",
    },
    {
      id: 118,
      title: "The Only Good Indians",
      author: "Stephen Graham Jones",
      genre: "Horror",
      subtitle: "A supernatural horror story rooted in Native American culture",
      isbn13: "9781982136451",
      price: "2,100",
      published_date: "2020-07-14",
      image: "https://m.media-amazon.com/images/I/71h3Z19bBUL._SL1500_.jpg",
    },
    {
      id: 119,
      title: "The Ruins",
      author: "Scott Smith",
      genre: "Horror",
      subtitle: "A chilling survival horror set in the jungle",
      isbn13: "9780307390271",
      price: "2,200",
      published_date: "2006-07-18",
      image: "https://m.media-amazon.com/images/I/81oNmUkGJuL._SL1500_.jpg",
    },
    {
      id: 120,
      title: "The Last House on Needless Street",
      author: "Catriona Ward",
      genre: "Horror",
      subtitle: "A mind-bending horror thriller full of secrets",
      isbn13: "9781250812629",
      price: "2,300",
      published_date: "2021-09-28",
      image:
        "https://m.media-amazon.com/images/I/51j+ob2jDpL._SY445_SX342_.jpg",
    },
  ];
  return <BooksLayout title="Horror Books" items={horror} />;
};

export default Horror;
