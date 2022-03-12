import axios from "axios";
import { useEffect, useState } from "react";
import CardBook from "./book";
import styles from "./book.css";

const ShowBooks = () => {
  const [ books, setBooks ] = useState();
  useEffect(() => {
    axios.get('http://localhost:3001/book')
    .then(response => {
      console.log(response);
      setBooks(response.data)
    })
  }, [])
  // Function for add all cards
  const handleBooks = () => {
    return books.map(book => {
      return (
        <div key={book.id} className="margin">
          <CardBook book={book}/>
        </div>
      )
    })
  };
  return(
    <div>
      {books && handleBooks()}
    </div>
  )
};

export default ShowBooks;