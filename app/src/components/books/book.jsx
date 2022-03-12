import axios from "axios";
import { useState } from "react";

const CardBook = ({ book }) => {
  const {name, number, id, description} = book
  const [ addBook, setAddBook ] = useState(false);
  const [ numberBooks, setNumber ] = useState(0);
  // Request for add new number of books
  const handleAddNumber = async (x) => {
    x.preventDefault();
    try {
      if (numberBooks != 0) {
        const response = await axios.put('http://localhost:3001/book/add_numbers_book', {
          id: id,
          newNumber: numberBooks
        })
        if (response.data.error) {
          response.data.error.cod === 4002 && alert('Dont have books enough')
        } else {
          return alert('Number of books changed');
        }
      } else {
        return alert('Add a diferent number to 0')
      }
    } catch (err) {
      alert(err)
    };
  };
  return(
    <div>
      <div>
        <span>Name: </span>
        <span className="infoS">{name}</span>
      </div>
      <div>
        <span>id: </span>
        <span className="infoS">{id}</span>
      </div>
      <div>
        <span>Number of books disables: </span>
        <span className="infoS">{number}</span>
      </div>
      <div>
        <span>Resume: </span>
        <span className="infoS">{description}</span>
      </div>
      <button onClick={x => {
        x.preventDefault();
        setAddBook(true)
      }}>Add or decrease Books</button>
      {
        addBook && (
          <form action="" onSubmit={x => handleAddNumber(x)}>
            <label htmlFor="addBook">Number of books</label>
            <input type="number" name="addBook" onChange={x => {
              x.preventDefault();
              setNumber(x.target.value)
            }}/>
            <button>Add</button>
          </form>
        )
      }
    </div>
  )
};

export default CardBook;