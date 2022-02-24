import UserList from "./UserList";
import axios from 'axios';
import {useState} from 'react';

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");

  const createUser = () => {
    axios
      .post('/users/add', {name, age, email})
      .then((response) => {alert("User Created");})
  }

  return (
    <div className="App">
        <UserList />
        <div>
          <h1>Insert User</h1>
          <input type="text" placeholder="Name" onChange={(event) => {
            setName(event.target.value);
          }}></input>
          <input type="number" placeholder="Age" onChange={(event) => {
            setAge(event.target.value);
          }}></input>
          <input type="text" placeholder="Email" onChange={(event) => {
            setEmail(event.target.value);
          }}></input>
          <button onClick={createUser}>Create</button>
        </div>
    </div>
  );
}

export default App;
