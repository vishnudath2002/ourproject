import React from 'react'
import { Link } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import { collection,getDocs } from 'firebase/firestore'
import { db  } from "../Firebase/firebaseconfig";
//import { Card } from 'react-bootstrap';
import CallIcon from '@mui/icons-material/Call';
import MessageIcon from '@mui/icons-material/Message';
import {
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader
} from 'mdb-react-ui-kit';

function Taxicontact() {
    const [taxi,setTaxi] = useState([])
  const userCollectionRef = collection(db,"taxis");

  useEffect(()=>{
    const getUser = async () => {
      const data = await getDocs(userCollectionRef);
      setTaxi(data.docs.map((doc) =>({...doc.data(),id:doc.id})));
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
          taxi.map((taxis)=>{return <MDBCard background='light' className='text-black mb-3'>
        <MDBCardHeader >{taxis.name}</MDBCardHeader>
        <MDBCardBody>
          
          <MDBCardText>
          {taxis.contact}
          </MDBCardText>
          <MDBCardText>
          {taxis.location}
          </MDBCardText>
          <MDBCardText>
          {taxis.availability?' Available':' Not Available'}
          </MDBCardText>
          
          <a href={`tel: ${taxis.contact}`}><CallIcon></CallIcon></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href={`sms:${taxis.contact}`}><MessageIcon></MessageIcon></a>
        </MDBCardBody>
      </MDBCard>})
      }
      </div> 
    </div>
  )
}

export default Taxicontact