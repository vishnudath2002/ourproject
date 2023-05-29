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
    <div style={{paddingTop:100}}>
    <div style={{backgroundColor:"#00b075",
    borderRadius:30}}>
     
         <div className=" d-flex justify-content-center">
         <h1 style={{color:"#ffffff",paddingTop:20}}>SignUp</h1>
        
        </div>
      

    <MDBContainer className="my-5 d-flex justify-content-center">
<img
   src="assets/img/hand2.jpg"
        className="rounded-circle"
        style={{height:"198px",width:"198px"}}
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
  </div>
  )
}

export default Handsignup
