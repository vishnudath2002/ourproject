import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Firebase/firebaseconfig";
import { useNavigate } from "react-router-dom";
import { Form,Button } from "react-bootstrap";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   const navigate = useNavigate();

   const signUp = (e) => {
    e.preventDefault();
    const authing = async () =>{
    try{
      createUserWithEmailAndPassword(auth, email, password)
      
      alert("Successfully logined");
      navigate('/Select');
    }catch(error){
      console.log(error);
      alert(error);
    }
    
  }
   authing();

     
  };

  return (
    <div>
    <div className="row mb-4">
         <div className="col-md-6 d-flex justify-content-center">
         <h1>SignUp</h1>
         
         </div>

       
        </div>
      <div className='color-overlay d-flex justify-content-center 
    align-items-center border-color-black'>
    <Form onSubmit={signUp} className="rounded p-4 p-sm-3 border-color-black">
        <Form.Group className='mb-3'>
        
          <Form.Control type="text" placeholder="Enter Email" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group><br />
        <Form.Group className='mb-3'>
          
          <Form.Control type="password" placeholder="Enter Password" value={password}  onChange={(e)=>setPassword(e.target.value)}/>
        </Form.Group>
        <br />
        <Form.Group className='mb-3'>
          <Button variant='primary' type="submit">Submit</Button>
        </Form.Group>
        <br />
       
      </Form>

      </div>
      </div>
  )
}

export default Signup