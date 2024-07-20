import React from 'react'
import { useNavigate } from 'react-router-dom';

function TodoList() {
  let navigate = useNavigate();
  let existingTodos = JSON.parse(localStorage.getItem("Todos"));

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col d-flex justify-content-end mb-3">
            <button className="btn btn-primary" onClick={() => navigate("/todoList")}>Add Todo</button>
          </div>
        </div>
      </div>

      <div className="container mt-3">
        {existingTodos && existingTodos.length > 0 ? (
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Sr#</th>
                <th scope="col">Title</th>
                <th scope="col">Status</th>
                <th scope="col">Description</th>
                <th scope="col">Location</th>
                <th scope="col">Date</th>
                <th scope="col">Date_Created</th>
                <th scope="col">User_Id</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>

            <tbody>
              {existingTodos.map((todo, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td colspan="1">{todo.title}</td>
                    <td colspan="1">{todo.status}</td>
                    <td colspan="1">{todo.description}</td>
                    <td colspan="1">{todo.location}</td>
                    <td colspan="1">{todo.date}</td>
                    <td colspan="1">{todo.dateCreated}</td>
                    <td colspan="1">{todo.user_id}</td>
                    <td colspan="1"></td>
                  </tr>
                )
              })}
            </tbody>
          </table>) : <h3 className="text-primary">You don't have any todos right now</h3>
        }
      </div>
    </>
  );
}

export default TodoList