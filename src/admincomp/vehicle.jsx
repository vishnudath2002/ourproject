import React from 'react'
import { useState ,useEffect} from 'react';
import { collection,getDocs } from 'firebase/firestore'
import { db  } from "../Firebase/firebaseconfig";
import { Card } from 'react-bootstrap';
function Vehicle() {
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
      <div className="p-3 mb-2 bg-success text-black">
       <div>
        {
            taxi.map((taxis)=>{return <Card>
            <p>{taxis.name}</p>
            <p>{taxis.contact}</p>
            <p>{taxis.location}</p>
            <p>{taxis.availability?<p>Available</p>:<p>Not Available</p>}</p>
            <a href={`tel: ${taxis.contact}`}>call</a><a href={`sms:${taxis.contact}`}>message</a>
          </Card>})
        }
        </div> 
      </div>
  )
}

export default Vehicle