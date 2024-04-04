import { useState } from "react"
import axios from "axios"

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  async function getUsers(){
    const response = await axios.get(import.meta.env.VITE_API_URL + "/users")
    const users = response.data;
    setUsers(data)

  }
  async function createUser() {
    const data = {email, name};
    await axios.post(import.meta.env.VITE_API_URL + "/users", data);
    alert("User created");
  }
  return (
    <>

    <ul>
      {users.map(u => {
        return <li key={u.email}>{u.name} {u.email}</li>
      })}
    </ul>
    <button onClick={getUsers}> Get users </button>
    <button onClick={createUser}> Create user </button>
    <input placeholder="name" onChange={(e) => setName(e.target.value)}/>
    <input placeholder="email" onChange={(e) => setEmail(e.target.value)}/>

    </>
  )
}

export default App