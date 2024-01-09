"use client";
import { useEffect, useState } from "react";
import Tarjeta from "./Component/Usuario/Tarjeta";

export default function Home() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Maria Magdalena",
      email: "maria@hotmail.com",
      phone: "829-603-1536",
    },
  ]);

  useEffect(() => {
    async function getUser() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();

      setUsers(data);
      console.table(users);
    }
    getUser();
  }, []);

  return (
    <div style={{backgroundColor: "#FFF"}}>
      <h1
        style={{
          border: " 1px black",
          textAlign: "center",
          color: "#000",
        }}
      >
        Users Card
      </h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {users.map((user) => (
          <Tarjeta key={user.id} info={user} />
        ))}
      </div>
    </div>
  );
}
