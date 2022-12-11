import React, { useState } from "react";

function FormControl() {
  const [ data, setData ] = useState({
    name: "",
    email: "",
    password: "",
  })

  const [ name, setName ] = useState()
  const [ email, setEmail ] = useState()
  const [ password, setPassword ] = useState()

  const nameControl = (e) => {
    setName(e.target.value)
  }

const emailControl = (e) => {
    setEmail(e.target.value)
  }

  const passwordControl = (e) => {
    setPassword(e.target.value)
  }
  
  
  const clickHandler = ()=> {
    
  }

  return (
    <div>
      <div className="form-container">
        <div className="form-group">
          <div className="form-control">
            <label>User Name</label>
            <input type="text"  value={name} placeholder="enter your name" onChange={nameControl}/>
          </div>

          <div className="form-control">
            <label>Email</label>
            <input type="text" value={email} placeholder="Enter your email" onChange={emailControl}/>
          </div>

          <div className="form-control">
            <label>Password</label>
            <input type="text" value={password} placeholder="enter your password" onChange={passwordControl}/>
          </div>
          
          <div className="form-control">
            <input type="submit" value="Submit" onClick={clickHandler}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormControl;
