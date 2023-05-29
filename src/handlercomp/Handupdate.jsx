import React,{ useState ,useEffect } from 'react'
import { collection , where, query,  getDocs , updateDoc ,doc } from 'firebase/firestore'
import { db , auth } from "../Firebase/firebaseconfig";
import { useAuthState } from "react-firebase-hooks/auth"
import { Button, Form } from 'react-bootstrap';
//import { onAuthStateChanged } from 'firebase/auth';
import { Link } from 'react-router-dom';


function Handupdate() {
  const [handlername,setHandlerName] = useState([])
  const [place,setPlace] = useState([])
  const [phone,setPhone] = useState([])
  const [avail,setAvail] = useState(false)
  const [user]  = useAuthState(auth);
  const uuid = user.uid; 
  const [handler,setHandler] = useState([])
  const userCollectionRef = doc(db,"handlers",uuid);
     
  const getUpdate = (e) =>{
    e.preventDefault();
    
  const handlerUpdate = async () => {
        try {
        
          await updateDoc(userCollectionRef, {
            name: handlername,
            contact: phone,
            location: place,
            availability: avail
          });
          alert("Data updated");
        }
        catch (err) {
          console.log(err);
          alert("An error occured while updating  data");

        }

      }
  handlerUpdate();

}

  useEffect(() => {
    
    const getHandlerData = async () => {
      try {
        const uuid = user.uid; 
        const q = query(collection(db,"handlers"), where("userId", "==", uuid));
        const data = await getDocs(q);
        
        setHandler(data.docs.map((doc) =>({...doc.data(),id:doc.id})));
      } catch (err) {
        console.log(err);
        alert("An error occured while fetching user data");
      }
      
    };
    getHandlerData();
    
  }, []);

  

  return (
    <div>
        <div>
      {
          handler.map((handlers)=>{return <div>
          <Form onSubmit={getUpdate}>
          <Form.Group className="mb-3">
          <Form.Control type="text"  placeholder={handlers.name}  value={handlername} onChange={(e)=>setHandlerName(e.target.value)}/></Form.Group>
          <Form.Group className="mb-3">
          <Form.Control type="number"  placeholder={handlers.contact} value={phone} onChange={(e)=>setPhone(e.target.value)}/></Form.Group>
          <Form.Group className="mb-3">
          <Form.Control type="text"  placeholder={handlers.location} value={place} onChange={(e)=>setPlace(e.target.value)}/></Form.Group>
          <Form.Group className="mb-3">
          <Form.Check 
        type="switch" id="custom-switch" onClick={()=>setAvail(!avail)} label={handlers.availability?'Available':'Not Available'}
           />
           </Form.Group>
          <Button variant="primary" type="submit" >Update</Button>
          </Form>
        </div>})
      }
      </div>
      </div>
  )
}

export default Handupdate