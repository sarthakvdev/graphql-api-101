import React, { FC, useEffect, useState } from "react";
import { gql, useQuery, useLazyQuery } from "@apollo/client";

const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      name
      username
      age
    }
  }
`;

const QUERY_ALL_MOVIES = gql`
  query GetAllMovies {
    movies {
      id
      name
      yearOfRelease
      isInTheaters
    }
  }
`;

const GET_MOVIE_BY_NAME = gql`
  query getMovieByName($name: String!) {
    movie(name: $name) {
      name
      yearOfRelease
    }
  }
`;

const UserData: FC = () => {
  const { data, loading } = useQuery(QUERY_ALL_USERS);
  const { data: movieData } = useQuery(QUERY_ALL_MOVIES);
  const [fetchMovie, { data: movieSearchedData, error: movieSearchedError }] =
    useLazyQuery(GET_MOVIE_BY_NAME);

  const [movieSearched, setMovieSearched] = useState("");

  useEffect(() => {
    console.log("movies", movieData);
  }, [movieData]);

  useEffect(() => {
    console.log("moviessearched", movieSearchedData);
  }, [movieSearchedData]);

  return (
    <>
      <p className="text-5xl mb-5">Users</p>
      {loading && <p>Loading data...</p>}
      {data && (
        <div className="flex flex-col gap-y-4">
          {data.users.map((user: any) => (
            <div key={user.id} className="text-left p-3 border rounded-lg">
              <p>Name: {user.name}</p>
              <p>Username: {user.username}</p>
              <p>Age: {user.age}</p>
            </div>
          ))}
        </div>
      )}
      {movieData && (
        <div className="flex flex-col gap-y-4 mt-5">
          <p className="text-5xl">Movies list</p>
          {movieData.movies.map((movie: any) => (
            <div key={movie.id} className="text-left p-3 border rounded-lg">
              <p>Name: {movie.name}</p>
              <p>Release Year: {movie.yearOfRelease}</p>
            </div>
          ))}
        </div>
      )}
      <div className="mt-5 flex gap-x-3">
        <input
          type="text"
          className="ring-1 ring-gray-200 active:ring-blue-100 border-none rounded-lg px-4"
          placeholder="The Dark Knight..."
          onChange={(event) => setMovieSearched(event.target.value)}
        />
        <button
          className="rounded-lg px-4 py-2 bg-blue-300 active:bg-blue-400 text-white font-medium"
          onClick={() => {
            fetchMovie({
              variables: {
                name: movieSearched,
              },
            });
          }}
        >
          Search Movie
        </button>
      </div>
      {movieSearchedData && (
        <div className="text-left py-3 px-6 border rounded-lg mt-3 ">
          <p>Name: {movieSearchedData.movie.name}</p>
          <p>Release Year: {movieSearchedData.movie.yearOfRelease}</p>
        </div>
      )}
    </>
  );
};

export default UserData;
