import axios from "axios";
import { useState } from "react";
import style from "../books/book.css";

const FormBooks = () => {
  const [state, setState] = useState({
    name : '',
    number : '',
    description: '',
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
      const response = await axios.post('http://localhost:3001/book/add_book', state)
      return alert("The book was added")
    } catch (err) {
      console.log(err)
    };
  };

  return(
    <div className="container">
      <label>Name</label>
      <input type="name" name="name" onChange={x => HandleState(x)}/>
      <label>id</label>
      <input type="id" name="id" onChange={x => HandleState(x)}/>
      <label>Description</label>
      <input type="description" name="description" onChange={x => HandleState(x)}/>
      <label>Number</label>
      <input type="number" name="number" onChange={x => HandleState(x)}/>
      <button onClick={x => handleInfo()}>Submit</button>
    </div>
  );
};
export default FormBooks;