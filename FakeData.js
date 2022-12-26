const UserList = [
  {
    id: 1,
    name: "Alice Smith",
    username: "alicesmith123",
    age: 25,
    nationality: "UNITED_STATES",
    friends: [
      {
        id: 2,
        name: "Bob Johnson",
        username: "bobjohnson456",
        age: 32,
        nationality: "CANADA",
      },
      {
        id: 3,
        name: "Eve Williams",
        username: "evewilliams789",
        age: 29,
        nationality: "UNITED_KINGDOM",
      },
    ],
  },
  {
    id: 2,
    name: "Bob Johnson",
    username: "bobjohnson456",
    age: 32,
    nationality: "CANADA",
    friends: [
      {
        id: 2,
        name: "Bob Johnson",
        username: "bobjohnson456",
        age: 32,
        nationality: "CANADA",
      },
      {
        id: 5,
        name: "Jane Smith",
        username: "janesmith222",
        age: 28,
        nationality: "CANADA",
      },
    ],
  },
  {
    id: 3,
    name: "Eve Williams",
    username: "evewilliams789",
    age: 29,
    nationality: "UNITED_KINGDOM",
  },
  {
    id: 4,
    name: "John Doe",
    username: "johndoe111",
    age: 35,
    nationality: "INDIA",
  },
  {
    id: 5,
    name: "Jane Smith",
    username: "janesmith222",
    age: 28,
    nationality: "CANADA",
  },
  {
    id: 6,
    name: "James Johnson",
    username: "jamesjohnson333",
    age: 31,
    nationality: "UNITED_KINGDOM",
    friends: [
      {
        id: 7,
        name: "Emily Williams",
        username: "emilywilliams444",
        age: 26,
        nationality: "UNITED_STATES",
      },
      {
        id: 5,
        name: "Jane Smith",
        username: "janesmith222",
        age: 28,
        nationality: "CANADA",
      },
    ],
  },
  {
    id: 7,
    name: "Emily Williams",
    username: "emilywilliams444",
    age: 26,
    nationality: "UNITED_STATES",
  },
  {
    id: 8,
    name: "David Smith",
    username: "davidsmith555",
    age: 29,
    nationality: "CANADA",
  },
  {
    id: 9,
    name: "Sarah Johnson",
    username: "sarahjohnson666",
    age: 33,
    nationality: "UNITED_KINGDOM",
  },
  {
    id: 10,
    name: "Jessica Williams",
    username: "jessicawilliams777",
    age: 27,
    nationality: "UNITED_STATES",
  },
];

const MoviesList = [
  {
    id: 1,
    name: "The Shawshank Redemption",
    yearOfRelease: 1994,
    isInTheaters: true,
  },
  {
    id: 2,
    name: "The Godfather",
    yearOfRelease: 1972,
    isInTheaters: true,
  },
  {
    id: 3,
    name: "The Godfather: Part II",
    yearOfRelease: 1974,
    isInTheaters: false,
  },
  {
    id: 4,
    name: "The Dark Knight",
    yearOfRelease: 2008,
    isInTheaters: true,
  },
  {
    id: 5,
    name: "12 Angry Men",
    yearOfRelease: 1957,
    isInTheaters: false,
  },
];

module.exports = { UserList, MoviesList };
