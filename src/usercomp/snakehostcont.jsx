import React from 'react'
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { collection ,getDocs} from 'firebase/firestore';
import { db } from "../Firebase/firebaseconfig";
//import { Card } from 'react-bootstrap';
import CallIcon from '@mui/icons-material/Call';
import MessageIcon from '@mui/icons-material/Message';
import {
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader
} from 'mdb-react-ui-kit';

function Snakehostcont () {
  const [snakehost,setSnakehost] = useState([])
  const userCollectionRef = collection(db,"snakehosts");

  useEffect(()=>{
    const getUser = async () => {
      const data = await getDocs(userCollectionRef);
      setSnakehost(data.docs.map((doc) =>({...doc.data(),id:doc.id})));
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
        snakehost.map((snakehosts)=>{return <MDBCard background='light' className='text-black mb-3'>
        <MDBCardHeader>{snakehosts.name}</MDBCardHeader>
        <MDBCardBody>
          
          <MDBCardText>
          {snakehosts.contact}
          </MDBCardText>
          <MDBCardText>
          {snakehosts.location}
          </MDBCardText>
          <MDBCardText>
          {snakehosts.availability?'Treatment Available':'Treatment Not Available'}
          </MDBCardText>
          
          <a href={`tel: ${snakehosts.contact}`}><CallIcon></CallIcon></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href={`sms:${snakehosts.contact}`}><MessageIcon></MessageIcon></a>
        </MDBCardBody>
      </MDBCard>
        })
      }
      </div>
    </div>
  )
}

export default Snakehostcont