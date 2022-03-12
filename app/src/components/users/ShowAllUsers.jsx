import axios from "axios";
import { useEffect, useState } from "react";
import CardUser from "../users/user";
import styles from "./user.css";

const ShowUsers = () => {
  const [users, setUsers] = useState([]);
  const handleUsers = () => {
    axios.get('http://localhost:3001/user')
    .then(response => {
      console.log(response);
      setUsers(response.data.allUsers);
    })
    .catch(err => {
      console.log(err);

    })
  };
  useEffect(x => {
    handleUsers();
  }, [])


  return(
    <div className="space">
      {
        users.length ? users.map(user => {
          return <CardUser key={user.id} user={user}/>
        }) :
        <span>Don´t have users yet</span>
      }
    </div>
  );
};

export default ShowUsers;