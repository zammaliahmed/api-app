import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";
import { UserList } from "./UserList";

function App() {
  const [users, setusers] = useState([]);

  const getUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setusers(res.data))
      .catch((err) => console.error(err));
  };
  useEffect(() => getUsers(), []);
  console.log("hey", users);

  return (
    <div className="App">
      <h1 className="title">Robots Friends</h1>
      <UserList users={users} />
    </div>
  );
}

export default App;
