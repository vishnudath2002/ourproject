import {auth} from '../Firebase/firebaseconfig'
import { signInWithEmailAndPassword } from 'firebase/auth';
import React,{useState} from 'react'
import  { Form ,Button} from "react-bootstrap";
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';
import { MDBContainer } from "mdb-react-ui-kit";

function Usersignin() {
    const[email,setEmail]=useState(""); 
	  const[password,setPassword]=useState("");
    const navigate=useNavigate()
const signin = (e)=>{
  e.preventDefault();
  if(email&&password){
	signInWithEmailAndPassword(auth,email,password)
	.then((userCredential)=>{
		console.log(userCredential);
    alert("successfully logined")
    navigate('/Mainpage');
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
        src="/assets/img/uselog.jpg"
  className="rounded-circle"
  style={{height:"198px",width:"198px"}}
  alt="Avatar"
      />
    </MDBContainer>

    <div className='color-overlay d-flex justify-content-center 
    align-items-center border-color-black'> 
    
		<Form onSubmit={signin} className="rounded p-4 p-sm-3 border-color-black">
    <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="email"  placeholder="Enter Email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>
         
        <Form.Group className='mb-3' controlId="formBasicPassword">
        
        <Form.Control type="password" placeholder="Enter Password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
        Submit
      </Button>
       <br />
       <br />
       <br />
         <div className=" d-flex justify-content-center">
         <Link to="/Usersignup">SignUp</Link>
         
         </div>

       
        
      </Form>
      </div>
      </div>
	</div>
  )
}

export default Usersignin