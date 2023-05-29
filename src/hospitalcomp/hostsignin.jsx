import {auth} from '../Firebase/firebaseconfig'
import { signInWithEmailAndPassword } from 'firebase/auth';
import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { Form,Button } from 'react-bootstrap';
import { MDBContainer } from "mdb-react-ui-kit";


//import {useNavigate} from 'react-router-dom'

function Hostsignin() {
    const[email,setEmail]=useState(""); 
	  const[password,setPassword]=useState("");

const signin = (e)=>{
  e.preventDefault();
  if(email&&password){
	signInWithEmailAndPassword(auth,email,password)
	.then((userCredential)=>{
		console.log(userCredential);
	})
	.catch((error)=>console.error(error))
}
}
  return (
    <div style={{paddingTop:100}}>
    <div style={{backgroundColor:"#00b075",
    borderRadius:30}}>
    
         <div className=" d-flex justify-content-center">
         <h1 style={{color:"#ffffff",paddingTop:20}}>Login</h1>
         
         

       
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
		 <Form onSubmit={signin}>
        <Form.Group>
          
          <Form.Control type="text" required value={email} placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group><br />
        <Form.Group>
          
          <Form.Control type="password" required value={password} placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/>
        </Form.Group>
        <br />
        
        <Form.Group>
          <Link to="/Doghostupdate"> <Button variant='primary' type="submit">For Dog</Button></Link>
          <Link to="/Snakehostupdate"> <Button variant='primary' type="submit">For Snake</Button></Link>
        </Form.Group>
       
        <br />
        
         <div className=" d-flex justify-content-center">
         <Link to="/Hostsignup">SignUp</Link>
         
         </div>

       
        
        
        
      </Form>
     </div>
	 </div>
  </div>
  )
}

export default Hostsignin