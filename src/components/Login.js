import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const history = useHistory();

    const handleSubmit = (evt) => {
      evt.preventDefault();
      if(name === "abc@gmail.com" && pass === "abc") {
        history.push("/pagination");
      }
    }

    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label" >Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            value={name} onChange={e=>setName(e.target.value)}/>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label" >Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1"
            value={pass} onChange={e=>setPass(e.target.value)}/>
          </div>
    
          <button type="submit" class="btn btn-primary">Login</button>
  </form>
  </div>
     
    );
  }

export default Login;
