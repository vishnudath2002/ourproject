import React from 'react'
import { Card } from 'react-bootstrap';
import { db } from "../Firebase/firebaseconfig";
import { collection, getDocs} from 'firebase/firestore'
import { useEffect ,useState} from 'react';
import { Link } from 'react-router-dom';


function Handle() {
  
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
    <div className="p-3 mb-2 bg-success text-black">
     <div>
     
     {
          handler.map((handlers)=>{return <Card>
          <p>{handlers.name}</p>
          <p>{handlers.contact}</p>
          <p>{handlers.location}</p>
          <p>{handlers.availability?<p>Available</p>:<p>Not Available</p>}</p>
          <a href={`tel: ${handlers.contact}`}>call</a><Link to='/Mesroom'>message</Link> 

        </Card>})
        
        }
     
        <br />
        </div>
     </div>
  )
}

export default Handle