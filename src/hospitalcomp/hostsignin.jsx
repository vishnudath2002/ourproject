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
    <div style={{backgroundColor:"#00b075",
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")',borderRadius:30}}>
    <div className="row mb-4">
         <div className="col-md-6 d-flex justify-content-center">
         <h1>Login</h1>
         
         </div>

       
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
        <div className="row mb-4">
         <div className="col-md-6 d-flex justify-content-center">
         <Link to="/Hostsignup">SignUp</Link>
         
         </div>

       
        </div>
        
        
      </Form>
     </div>
	</div>
  )
}

export default Hostsignin