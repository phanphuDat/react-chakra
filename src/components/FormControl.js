import React, { useState } from "react";

function FormControl() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })

const onChangeInput = (e)=> {
  const { name, value } = e.target;

  setFormData({...formData, [name]: value})
}

  const onSubmitForm = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  const { name, email } = formData

  return (
    <div>
      <div className="form-container">
        <div className="form-group">
          <form onSubmit={onSubmitForm}>
            <div className="form-control">
              <label>User Name</label>
              <input
                type="text"
                name="name"
                value={name}
                placeholder="enter your name"
                onChange={onChangeInput}
              />
            </div>

            <div className="form-control">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={onChangeInput}
              />
            </div>

            <div className="form-control">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormControl;
