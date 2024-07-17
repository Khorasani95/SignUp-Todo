import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {

  let navigate = useNavigate();

  const register = () => {
    navigate("/registeredUser")
  }
  const todo = () => {
    navigate("/todo")
  }

  return (
    
    <>
      <div className="container">
        <div className="row">
          <div className="col" >
            <div className="card " onClick={register}>
              <h1 className='text-center'>Registered Users</h1>

            </div>
            
          </div>
          <div className="col">
            <div className="card" onClick={todo}>
              <h1 className='text-center'>Todo List</h1>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}
