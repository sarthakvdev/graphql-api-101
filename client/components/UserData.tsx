import React, { FC } from "react";
import { gql, useQuery } from "@apollo/client";

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

const UserData: FC = () => {
  const { data, loading } = useQuery(QUERY_ALL_USERS);

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
    </>
  );
};

export default UserData;
