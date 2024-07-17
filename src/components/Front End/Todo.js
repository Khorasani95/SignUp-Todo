import React, { useState } from 'react';

// import "../../scss"

export default function Todo() {
  let existingTodos = JSON.parse(localStorage.getItem("Todos list")) || [];
  console.log(existingTodos);
  const [todo, setTodo] = useState({
    title: "", location: "", description: "", date: "", status: "", dateCreated: "", user_id: ""
  });
  // let { title, loction, description } = state;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value
    });
  };

  const todoButton = (e) => {
    e.preventDefault();
    // let pushedTodo = ...todos ,{existingTodos};
    console.log("pushedTodo");
    localStorage.setItem(JSON.stringify(todo))
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
              <input type="text"   name="title"  id= "title"className='form-control'/>
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
              <input type="date"  name="date" id='date' className='form-control my-2'/>
              <button className='justify-content-center' onClick={todoButton}>Enter </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
