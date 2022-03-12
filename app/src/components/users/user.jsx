import axios from "axios";
import { useState } from "react";
import styles from "./user.css";


const CardUser = (props) => {
  const { user } = props;
  const [ bookId, setBookId ] = useState();
  const [ bookform, setBookform ] = useState(false);
  const [ sure, setSure ] = useState(false);
  
  // function for add a book to one user
  const handleTookBook = async (x) => {
    x.preventDefault();
    try {
      if (bookId) {
        const response = await axios.put('http://localhost:3001/user/borrow_book', {
          userId: user.id,
          bookId: bookId
        });
        if (response.data.error) {
          response.data.error.cod === 4001 && alert('Don´t have book disable');
        } else {
          alert("Book Borrowed");
        };
      } else {
        return alert('must pass a book-id')
      }
    } catch (err) {
      console.log('error al setear el libro', err)
    };
  };

  // function for returnbooks by ids
  const handleReturnBook = async (x, id) => {
    x.preventDefault();
    let prevent = window.confirm("Are you sure the user returned the book");
    if (prevent === true) {
      try {
        const response = axios.put('http://localhost:3001/user/return_book', {
          userId: user.id,
          bookId: id
        });
        return alert('The book was returned');
      } catch (err) {
        console.log(err);
        alert(err);
      };
    }
  };

  return(
    <div className='border'>
      <div >
        <span>Name: {user.fullname}</span>
      </div>
      <div >
        <span>Username: {user.fullname}</span>
      </div>
      <div >
        <span>Id : {user.id}</span>
      </div>
      <div >
        <span>Books: </span>
        <ul>
          {user.books.map(book => {
            return (
              <div key={book.id} className="space">
                <li>{book.name}</li>
                <button onClick={x => handleReturnBook(x, book.id)}>Retornar Libro</button>
              </div>
            )
          })}
        </ul>
      </div>
      <button onClick={x => setBookform(true)}>Llevar Libro</button>
      {
        // Little form for set a book to an user
        bookform && (
          <form action="" onSubmit={x => handleTookBook(x)}>
            <label htmlFor="bookId">Book Id</label>
            <input type="text" name="bookId" onChange={x => {
              x.preventDefault();
              setBookId(x.target.value);
            }}/>
          </form>
        )
      }
    </div>
  )
};

export default CardUser;