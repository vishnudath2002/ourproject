import { doc,setDoc } from 'firebase/firestore'
import { db , auth ,storage} from "../Firebase/firebaseconfig";
import React from 'react'
import { useState  } from 'react';
import { useAuthState } from "react-firebase-hooks/auth"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'
//import { onAuthStateChanged } from 'firebase/auth';
import { ref, uploadBytes  } from 'firebase/storage'


function Detailpage() {
    const [taxiname,setTaxiName] = useState([])
    const [place,setPlace] = useState([])
    const [phone,setPhone] = useState([])
    const [avail,setAvail] = useState(false)
  const [imageUpload, setImageUpload] = useState(null);

    const [user]  = useAuthState(auth); 
    const uuid = user.uid; 
    const userCollectionRef = doc(db,"taxis",uuid);
    const navigate = useNavigate();

    const getPost = (e) => {
        e.preventDefault();
        if(taxiname&&place&&phone&&avail&&imageUpload){

        const uploadFile = () => {
          if (imageUpload == null) return;
          const imageRef = ref(storage, `taxiimages/${imageUpload.name}`);
          uploadBytes(imageRef, imageUpload).then(() => {
            //getDownloadURL(snapshot.ref).then((url) => {
              //setImageUrls((prev) => [...prev, url]);
            });
        
        };
        uploadFile();
        
        const createTaxi = async () =>{
          try{
         await setDoc(userCollectionRef,{name:taxiname,contact:phone,location:place,userId:uuid,availability:avail,email:user.email});
         alert("Data added");
         navigate('/Taxiupdate');
        } 
        catch(err){
          alert("An error occured while adding data")
        }
      } 
        createTaxi();
      }
      };
    
    

      
    
  return (
    <div>
      <Form onSubmit={getPost}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" value={taxiname} onChange={(e)=>setTaxiName(e.target.value)}/>
        
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
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Label>Upload licence:</Form.Label>
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

export default Detailpage