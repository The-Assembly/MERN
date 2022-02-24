import UserList from "./UserList";
import axios from 'axios';
import Stripe from 'react-stripe-checkout';

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

  const handleToken = (totalAmount, token) => {
    axios.post('/stripe/pay', {token: token.id, amount:totalAmount})
    .then((response) => {alert("Payment Done");})

  }

  const tokenHandler = (token)=>{
    handleToken(100, token);
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
        <div>
          <Stripe stripeKey="##Stripe public key goes here" token={tokenHandler} />
        </div>
    </div>
  );
}

export default App;
