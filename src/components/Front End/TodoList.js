import React from 'react'
import { useNavigate } from 'react-router-dom';

function TodoList() {
  let navigate = useNavigate();
  let existingTodos = JSON.parse(localStorage.getItem("Todos list")) || [];

  const todoButton = () => {
    navigate("/todo");
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <button className="btn btn-primary" onClick={todoButton}>Add Todo</button>
          </div>

          <table class="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Location</th>
                <th scope="col">Description</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
                <th scope="col">Date_Created</th>
                <th scope="col">User_Id</th>
              </tr>
            </thead>

            <tbody>
              {existingTodos.map((todo, i) => {
               return(
                  <tr>
                  <th scope="row">{i + 1}</th>
                  <td colspan="1">{ todo.title}</td>
                  <td colspan="1">{ todo.location}</td>
                  <td colspan="1">{ todo.description}</td>
                  <td colspan="1">{ todo.date}</td>
                  <td colspan="1">{ todo.Status}</td>
                  <td colspan="1">{ todo.dateCreated}</td>
                  <td colspan="1">{ todo.user_id}</td>
              </tr>)
             })}
            
            </tbody>

          </table>

        </div>
      </div>
    </>
  )
}

export default TodoList