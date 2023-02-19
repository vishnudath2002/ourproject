import React from 'react'
import { useState,useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { db  } from "../Firebase/firebaseconfig";
import { collection,getDocs } from 'firebase/firestore';


function Dogho() {
  
    const [doghost,setDoghost] = useState([]);
  const userCollectionRef = collection(db,"doghosts");

   
  useEffect(()=>{
    const getUser = async () => {
      const data = await getDocs(userCollectionRef);
      setDoghost(data.docs.map((doc) =>({...doc.data(),id:doc.id})));
    }
    getUser();
  }, [])
  return (
    <div className="p-3 mb-2 bg-success text-black ">
    <div>
      {
        doghost.map((doghosts)=>{return <Card>
          <p>{doghosts.name}</p>
          <p>{doghosts.contact}</p>
          <p>{doghosts.location}</p>
          <p>{doghosts.availability?<p>Available</p>:<p>Not Available</p>}</p>
          <a href={`tel: ${doghosts.contact}`}>call</a><a href={`sms:${doghosts.contact}`}>message</a>
          </Card>})
      }
      </div>

    </div>
  )
}

export default Dogho