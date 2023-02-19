import React from 'react'
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { db  } from "../Firebase/firebaseconfig";
import { collection,getDocs } from 'firebase/firestore';
import CallIcon from '@mui/icons-material/Call';
import MessageIcon from '@mui/icons-material/Message';
import {
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader
} from 'mdb-react-ui-kit';

function Doghostcont() {
    const [doghost,setDoghost] = useState([])
  const userCollectionRef = collection(db,"doghosts");

   
  useEffect(()=>{
    const getUser = async () => {
      const data = await getDocs(userCollectionRef);
      setDoghost(data.docs.map((doc) =>({...doc.data(),id:doc.id})));
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
        doghost.map((doghosts)=>{return <MDBCard background='light' className='text-black mb-3'>
        <MDBCardHeader key={doghosts.name}>{doghosts.name}</MDBCardHeader>
        <MDBCardBody>
          
          <MDBCardText key={doghosts.contact}>
          {doghosts.contact}
          </MDBCardText>
          <MDBCardText key={doghosts.location}>
          {doghosts.location}
          </MDBCardText>
          <MDBCardText key={doghosts.availability}>
          {doghosts.availability?'Treatment Available':'Treatment Not Available'}
          </MDBCardText>
          
          <a  href={`tel: ${doghosts.contact}`}><CallIcon></CallIcon></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a  href={`sms:${doghosts.contact}`}><MessageIcon></MessageIcon></a>
        </MDBCardBody>
      </MDBCard>})
      }
      </div>

    </div>
  )
}

export default Doghostcont