import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

let existingUsers = JSON.parse(localStorage.getItem('users')) || [];
let user = { email: "" };

function Forget() {
  const navigate = useNavigate();
  const [state, setState] = useState(user);
  let { email } = state;
  
  const forgotButton = (e) => {
    e.preventDefault()
    let findingForgot = existingUsers.find((user) => user.email === email);
    console.log(findingForgot);
    if (findingForgot) {
      alert('Your Email is found.');
      navigate("/update");
      // navigate("./update");

    } else {
      alert("Email not found")
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    })
    )
  }
  
  return (
    <>
      <div className="container w-25 my-5">
        <div className="row">
          <div className="col">
            <div className="card ">

              <div className="col">
                <h4 className='text-center'>Reset Password</h4>
              </div>
              
              <div className="container">
                <form >
                  {/* <div className="row my-3">
                    <div className="col">
                      <input type="Email"   className="form-control" placeholder ="Enter Your Email" name="email" />
                    </div>
                  </div> */}

                  <div className="row py-2">
                    <div className="col">
                      <input type="Email" onChange={handleChange} className="form-control " placeholder="Enter Your Email" name="email" />
                      <button className='w-50 text-white bg-primary ms-5  my-2 justify-content-center' onClick={forgotButton}>Register Again</button>
                    </div>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forget;