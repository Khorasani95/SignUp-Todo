import React from 'react';
import { useNavigate } from 'react-router-dom';

function RegisteredUsers() {

  let navigate = useNavigate();
  const addUserButton = () => {
    navigate("/register");
   
 }
    let existingUsers = JSON.parse(localStorage.getItem("users"))|| [];
  console.log('users from locals :>> ', existingUsers);
  


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <button className="btn btn-primary" onClick={addUserButton}>Add User</button>
          </div>
        </div>
    </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
              {  existingUsers.map((user, i) => {
                return (
                      <tr>
                        <th >{i  + 1 }</th>
                          <td >{user.fullName}</td>
                          <td>{user.email}</td>
                      </tr> 
                )
              })}
        </tbody>
      </table>
    </>
  );
};

export default RegisteredUsers;
         