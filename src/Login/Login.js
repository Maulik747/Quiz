import React from "react";
import  "../Login/login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()

  function gottoQuiz(){
    navigate('/quiz')

  }

  return (
    <div className="maincontainer">
      <div className='header'>
        <h1>Working Sample</h1>
        <p>This is a working sample. This is a working sample.This is a working sample.This is a working sample.This is a working sample.  </p>
        <span>This is a working sample.</span>

      </div>
      <form>
        <div className="log">
          <div className="left-details">
            <div className="inputgroup">
              <label for="firstname">Firstname*</label>
              <input id="firstname" type="text" name="first" />
            </div>

            <div className="inputgroup">
              <label for="lastname">Lastname*</label>
              <input id="lastname" type="text" name="first" />
            </div>

            <div className="inputgroup">
              <label for="gender">Gender*</label>
              <select id="gender">
              <option>Please Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div className="line"></div>

          <div className="right-details">
            <div className="inputgroup">
              <label for="streetno">Street and No*</label>
              <input id="streetno" type="text" name="street" />
            </div>

            <div className="inputgroup">
              <label for="postal">Postal Code and City*</label>
              <input id="postal" type="text" name="first" />
            </div>

            <div className="inputgroup">
              <label for="email">Email*</label>
              <input id="email" type="email" name="email" />
            </div>

            <div className="inputgroup">
              <label for="number">Phone*</label>
              <input id="number" type="text" name="first" />
            </div>

            <div className="inputgroup">
              <div style={{display:'flex'}}>

            <input type="checkbox" id="conditions" name="conditions"/>
            <p style={{display:'inline'}}> Please provide your consent to our < span className="data" >Data-Privacy Guidelines</span> and <span className="data">Terms of Service</span></p>
            </div>

            </div>
          </div>
        </div>

      </form>
      <button onClick={()=>gottoQuiz()}>NEXT STEP</button>

    </div>
  );
};

export default Login;
