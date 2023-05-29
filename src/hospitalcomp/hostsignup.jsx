import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Firebase/firebaseconfig";
import { MDBContainer } from "mdb-react-ui-kit";
import { Form,Button } from "react-bootstrap";
import { Link }  from 'react-router-dom';

function Hostsignup() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

  const signUp = (e) => {
    e.preventDefault();
    if(email&&password){
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
       
        console.log(userCredential);
        alert("Successfully logined");
        
      })
      .catch((error) => {
        console.log(error);
      });
    }
     
  };
  return (
    <div style={{paddingTop:100}}>
    <div style={{backgroundColor:"#00b075",borderRadius:30,height:650}}>
    
         <div className=" d-flex justify-content-center">
         <h1 style={{color:"#ffffff",paddingTop:20}}>SignUp</h1>
         
         </div>
          
    <MDBContainer className="my-5 d-flex justify-content-center">
      <img
        src="assets/img/hoslogi.jpg"
        className="rounded-circle"
        style={{height:"198px",width:"198px"}}
        alt="Avatar"
      />
    </MDBContainer>
    <div className='color-overlay d-flex justify-content-center 
    align-items-center border-color-black'>
      <Form onSubmit={signUp}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="email" required placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>
         
        <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control type="password" placeholder="Enter Password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </Form.Group>
    
        
        
       <div>
       <Link to="/Snakedatapage"><Button variant="primary" type="submit">For Snake</Button></Link><Link to="/Dogdatapage"> <Button variant="primary" type="submit">For Dog</Button></Link>
       </div>
       
      </Form>
     </div> 
    </div>
    </div>
  )
}

export default Hostsignup
