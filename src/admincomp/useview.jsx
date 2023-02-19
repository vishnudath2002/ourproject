import React from 'react'
import { useState,useEffect } from 'react';
import { collection ,getDocs} from 'firebase/firestore';
import { db } from "../Firebase/firebaseconfig";
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Useview() {
    const [user,setUser] = useState([])
    const userCollectionRef = collection(db,"users");
  
    useEffect(()=>{
      const getUser = async () => {
        const data = await getDocs(userCollectionRef);
        setUser(data.docs.map((doc) =>({...doc.data(),id:doc.id})));
      }
      getUser();
    }, [])
    return (
      <div className="p-3 mb-2 bg-success text-black">
      <div>
        <p><Link to="/Adblog">Add Blog</Link></p>
      </div>
       <div>
        {
            user.map((users)=>{return <Card>
            <p>{users.name}</p>
            <p>{users.contact}</p>
            <p>{users.Review}</p>
            <a href={`tel: ${users.contact}`}>call</a><a href={`sms:${users.contact}`}>message</a>
          </Card>})
        }
        </div> 
      </div>
  )
}

export default Useview