import "./App.css";
import { useEffect, useState } from "react";
import User from "./components/user/User";

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const response = await fetch(url).then((res) => res.json());
    setUsers(response);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      {users.map((user) => (
        <div key={user.id} className="card">
          <User user={user} />
        </div>
      ))}
    </div>
  );
}

export default App;
