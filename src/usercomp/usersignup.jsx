
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth , db} from "../Firebase/firebaseconfig";
import {  setDoc,doc } from 'firebase/firestore'
import { Form,Button } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom";
//import { onAuthStateChanged } from "firebase/auth"
import { MDBContainer } from "mdb-react-ui-kit";
function Usersignup() {
  const [username,setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone,setPhone] = useState("")
  const [user]  = useAuthState(auth); 
    
  let navigate= useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    if(email&&password&&username&&phone){

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        alert("successfully logined");
      })
      .catch((error) => {
        console.log(error);
      });
  
    const createUser = async () => {
      try {
        const uuid = user.uid; 
  const userCollectionRef = doc(db,"users",uuid);
        await setDoc(userCollectionRef, { name: username, contact: phone, userId: uuid ,email:user.email});
        navigate('/Mainpage');
      } catch (err) {
        alert(err);
        console.log(err);
      }
    };
    createUser();
  }
  }


 
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
        <Form.Group className="mb-3" controlId="formBasicName">
        
       
          <Form.Control type="text" placeholder="Enter Name" required value={username} onChange={(e)=>setUserName(e.target.value)}/>
          </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="email" placeholder="Enter Email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Enter Password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicNumber">
         
          <Form.Control type="text" placeholder="Enter Mobile No" required value={phone} onChange={(e)=>setPhone(e.target.value)}/>
          </Form.Group>
        <Form.Group className="mb-3">
        
        </Form.Group>
          
          <Button type="submit">Submit</Button>
        
      </Form>
      
      </div>
    </div>
  )
}

export default Usersignup
