import React from 'react'
import { useState,useEffect } from 'react';
import { collection ,getDocs} from 'firebase/firestore';
import { db } from "../Firebase/firebaseconfig";
import { Card } from 'react-bootstrap';


function Snakeho() {
  
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
    <div className="p-3 mb-2 bg-success text-black">
      <div>
      {
        snakehost.map((snakehosts)=>{return <Card>
          <p>{snakehosts.name}</p>
          <p>{snakehosts.contact}</p>
          <p>{snakehosts.location}</p>
          <p>{snakehosts.availability?<p>Available</p>:<p>Not Available</p>}</p>
          <a href={`tel: ${snakehosts.contact}`}>call</a><a href={`sms:${snakehosts.contact}`}>message</a>
        </Card>})
      }
      </div>
    </div>
  )
}

export default Snakeho