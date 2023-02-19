import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Firebase/firebaseconfig";
import { useNavigate } from "react-router-dom";
import { Form,Button } from "react-bootstrap";
import { Link }  from 'react-router-dom';
import { MDBContainer } from "mdb-react-ui-kit";
function Handsignup() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   const navigate = useNavigate();
    
  

  const signUp = (e) => {
    e.preventDefault();
    if(email&&password){
    const authing = async () =>{
    try{
      createUserWithEmailAndPassword(auth, email, password)
      
      alert("Successfully logined");
      navigate('/Formpage');
    }catch(error){
      console.log(error);
      alert(error);
    }
    
  }
   authing();
  }
     
  };
  return (
    <div style={{backgroundColor:"#00b075",
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")',borderRadius:30}}>
     
         <div className=" d-flex justify-content-center">
         <h1>SignUp</h1>
        
        </div>
      

    <MDBContainer className="my-5 d-flex justify-content-center">
<img
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmPMqmhCs3WJiUvLOkJnw_Ol4RYS2kV3YTjQ&usqp=CAU"
  className="rounded-circle"
  alt="Avatar"
/>
</MDBContainer>
<div className='color-overlay d-flex justify-content-center 
    align-items-center border-color-black'>
    
    <Form onSubmit={signUp} className="rounded p-4 p-sm-3 border-color-black">
        <Form.Group className='mb-3'>
        
          <Form.Control type="text" placeholder="Enter Email" required value={email}  onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className='mb-3'>
          
          <Form.Control type="password" placeholder="Enter Password" required value={password}  onChange={(e)=>setPassword(e.target.value)}/>
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

export default Handsignup
