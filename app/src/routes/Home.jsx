import FormBooks from "../components/book_register/FormBooks";
import FormUsers from "../components/user_register/FormUsers";
import styles from "../components/books/book.css";

function Home() {
  return (
    <div style={{"justify-content": "space-around"}}>
      <div className="container">
        <h1>Users Form</h1>
        <FormUsers/>
      </div>
      <div className="container">
        <h1>Book Form</h1>
        <FormBooks/>
      </div>
    </div>
  );
}

export default Home;