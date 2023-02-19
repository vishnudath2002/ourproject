import React from 'react'
import { db , auth,storage } from "../Firebase/firebaseconfig";
import { useAuthState } from "react-firebase-hooks/auth"
import { setDoc  ,doc } from 'firebase/firestore'
import { ref, uploadBytes  } from 'firebase/storage'
import { useState ,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useNavigate } from "react-router-dom";
//import { onAuthStateChanged } from 'firebase/auth';



function Contactpage() {
  const [handlername,setHandlerName] = useState([])
  const [place,setPlace] = useState([])
  const [phone,setPhone] = useState([])
  const [avail,setAvail] = useState(false)
  const [user]  = useAuthState(auth); 
  const uuid = user.uid; 
  const [imageUpload, setImageUpload] = useState(null);
  //const [imageUrls, setImageUrls] = useState([]);

  //const imagesListRef = ref(storage, "images/");
 
  const userCollectionRef = doc(db,"handlers",uuid);
  const navigate = useNavigate();
  
  const getPost = (e) => {
    e.preventDefault();
    if(handlername&&place&&phone&&avail&&imageUpload){

    const uploadFile = () => {
      if (imageUpload == null) return;
      const imageRef = ref(storage, `handimages/${imageUpload.name}`);
      uploadBytes(imageRef, imageUpload).then(() => {
        //getDownloadURL(snapshot.ref).then((url) => {
          //setImageUrls((prev) => [...prev, url]);
        });
    
    };
    uploadFile();
    
    const createHandler = async () =>{
     try{
      await setDoc(userCollectionRef,{name:handlername,contact:phone,location:place,userId:user.uid,availability:avail,email:user.email});
    
      alert("Data added");
      navigate('/Handupdate');
    } catch(err){
      alert("An error occured while adding  data");

    }
    }
    createHandler();
  
  } 
  };

  
  

  
  
  return (
    <div className="justify-content-center align-items-center">
      <Form onSubmit={getPost}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" value={handlername} onChange={(e)=>setHandlerName(e.target.value)}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Place:</Form.Label>
        <Form.Control type="text" placeholder="Enter place" value={place} onChange={(e)=>setPlace(e.target.value)}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mobile No:</Form.Label>
        <Form.Control type="digit" placeholder="Enter Number" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check 
        type="switch"
        id="custom-switch"
        onClick={()=>setAvail(!avail)}
        label="available"
      />
      </Form.Group>
      <Form.Label>Upload licence:</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <input
        type="file"
        label="upload licence"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      </Form.Group>

      <Button variant="primary" type="submit" >
        Submit
      </Button>
      </Form>
     
    </div>
  )
}

export default Contactpage
