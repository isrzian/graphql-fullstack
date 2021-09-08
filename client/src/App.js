import React, {useEffect, useState} from "react";
import {useMutation, useQuery} from "@apollo/client";
import {GET_ALL_USERS} from "./query/user";
import {CREATE_USER} from "./mutations/user";
import './App.css';

function App() {
  const {data, loading} = useQuery(GET_ALL_USERS)
  const [newUser] = useMutation(CREATE_USER)

  const [users, setUsers] = useState([])
  const [username, setUsername] = useState('')
  const [age, setAge] = useState(0)

  useEffect(() => {
    if (!loading)
      setUsers(data.getAllUsers)
  }, [data, loading])

  const addUser = event => {
    event.preventDefault()
	  newUser({
      variables: {
        input: {
          username, age
        }
      }
    }).then(({data}) => {
      console.log(data)
    })
  }

  if (loading)
    return <h1>Loading...</h1>

  return (
    <div className="App">
      <form>
        <input value={username} onChange={event => setUsername(event.target.value)} type="text"/>
        <input value={age} onChange={event => setAge(event.target.value)} type="number"/>
        <div className="btns">
          <button onClick={addUser}>Создать</button>
          <button>Получить</button>
        </div>
        <div>
          {
            users.map((user, index) => <div key={index} className="user">{user.id}. {user.username} {user.age}</div>)
          }
        </div>
      </form>
    </div>
  );
}

export default App;
