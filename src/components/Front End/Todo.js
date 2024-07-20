import React, { useState } from 'react';
import TodoList from './TodoList';

// import "../../scss"

export default function Todo() {
  let newTodo = JSON.parse(localStorage.getItem("Todos")) || [];
  console.log("New Todo:", newTodo);
  const [todo, setTodo] = useState({
    title: "", location: "", description: "", date: "", status: "", dateCreated: "", user_id: ""
  });
  // let { title, loction, description } = state;

  const handleChange = (e) => {
    const { name, value } = e.target;
    debugger;
    setTodo({
      ...todo,
      [name]: value
    });
  };

  const todoButton = (e) => {
    e.preventDefault();
    // let pushedTodo = ...todos ,{newTodo};
    // console.log("pushedTodo");
    handleChange(e)
    debugger;
    let localTodo = localStorage.setItem("Todos",JSON.stringify(todo))
    console.log(localTodo);
  }
  
  return (
    <>
      <div className="container w-50">
        <div className="row">
          <div className="col">
            <h1 className='text-center'>Todos-list Page</h1>
            <hr />
          </div>
          <form action="" >
            <div className="col">
              <label htmlFor="title"><h5 className=" text-primary my-2">Enter your Title here:</h5></label>
              <input type="text"  name="title" id="title" className='form-control'/>
            </div>

            <div className="col">
              <label htmlFor='location'>
                <h5 className=" text-primary my-2">Enter your Location here:</h5>
              </label>
              <input type="text"  name="location" id='location' className='form-control'/>
            </div>

            <div className="col">
             <label htmlFor="description">
                <h5 className=" text-primary my-2">Enter your Description here:</h5>
             </label>
             <input type="text"  name="description" id='description' className='form-control'/>
            </div>

            <div className="col">
              <label htmlFor="date">
                <h5 className=" text-primary my-2">Enter your Date here:</h5>
              </label>
              <input type="date" name="date" id='date' className='form-control my-2'/>
              <button className='btn btn-primary' onClick={todoButton}>Enter Todo </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
