import axios from "axios";
import { useState } from "react";
import style from "../books/book.css";

const FormUsers = () => {
  const [state, setState] = useState({
    fullname: '',
    username: '',
    id: ''
  })

  const HandleState = (x) => {
    x.preventDefault();
    setState({
      ...state,
      [x.target.name] : x.target.value
    })
  };

  const handleInfo = async () => {
    try {
      const response = await axios.post('http://localhost:3001/user/add_user', state)
      return alert("The user was added");
    } catch (err) {
      console.log(err)
    };
  };

  return(
    <div className="container">
      <label>Fullname</label>
      <input type="name" name="fullname" onChange={x => HandleState(x)}/>
      <label>id</label>
      <input type="id" name="id" onChange={x => HandleState(x)}/>
      <label>Username</label>
      <input type="username" name="username" onChange={x => HandleState(x)}/>
      <button onClick={x => handleInfo()}>Submit</button>
    </div>
  );
};
export default FormUsers;