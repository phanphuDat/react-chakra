import React, { useEffect, useState } from "react";
import axios from "axios";

const CallApi = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
    return () => console.log("clear");
  }, []);

  return (
    <div>
      <hr />
      {users.map((user) => (
        <div key={user.id}>
          <p>userName: {user.name}</p>
          <p>email: {user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default CallApi;
