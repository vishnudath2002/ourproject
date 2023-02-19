import React from 'react'
import { Card } from 'react-bootstrap';
import { db } from "../Firebase/firebaseconfig";
import { collection, getDocs} from 'firebase/firestore'
import { useEffect ,useState} from 'react';
import { Link } from 'react-router-dom';
import CallIcon from '@mui/icons-material/Call';
import MessageIcon from '@mui/icons-material/Message';
import {
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader
} from 'mdb-react-ui-kit';

function Handcontact() {
  const [handler,setHandler] = useState([])
  const userCollectionRef = collection(db,"handlers");

  useEffect(()=>{
    const getUser = async () => {
      const data = await getDocs(userCollectionRef);
      setHandler(data.docs.map((doc) =>({...doc.data(),id:doc.id})));
    }
    getUser();
  }, [])
  return (
     <div style={{backgroundColor:"#00b075",
     backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")'}}>
     <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          
          
            
     <Link to='/Mainpage'> <p className='text-white'>Home</p></Link> 

          
    
     </div>
     <div>
     
     {
          handler.map((handlers)=>{return <MDBCard background='light' className='text-black mb-3'>
        <MDBCardHeader>{handlers.name}</MDBCardHeader>
        <MDBCardBody>
          
          <MDBCardText>
          {handlers.contact}
          </MDBCardText>
          <MDBCardText>
          {handlers.location}
          </MDBCardText>
          <MDBCardText>
          {handlers.availability?'Available':'Not Available'}
          </MDBCardText>
          
          <a href={`tel: ${handlers.contact}`}><CallIcon></CallIcon></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href={`sms:${handlers.contact}`}><MessageIcon></MessageIcon></a>
        </MDBCardBody>
      </MDBCard>})
        
        }
     
        <br />
        </div>
     </div>
  );
}

export default Handcontact