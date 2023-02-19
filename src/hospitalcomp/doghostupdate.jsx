import React,{ useState ,useEffect } from 'react'
import { collection , where, query,  getDocs , updateDoc ,doc } from 'firebase/firestore'
import { db , auth } from "../Firebase/firebaseconfig";
import { useAuthState } from "react-firebase-hooks/auth"
import { Button, Form } from 'react-bootstrap';



function Doghostupdate() {
  const [dogHostName,setdogHostName] = useState([])
  const [place,setPlace] = useState([])
  const [phone,setPhone] = useState([])
  const [avail,setAvail] = useState(false)
  const [user]  = useAuthState(auth);
  const uuid = user.uid; 
  const [doghost,setDoghost] = useState([])
  const userCollectionRef = doc(db,"doghosts",uuid);
     
  const getUpdate = (e) =>{
    e.preventDefault();
 
  const dogHostUpdate = async () =>{
   try{
    
    await updateDoc(userCollectionRef,{name:dogHostName,
      contact:phone,
      location:place,
     availability:avail})
     alert("Data updated");
    
  }
  catch(err) {
    alert(err);
    console.log(err)
   }

  };
  dogHostUpdate();


}

  useEffect(() => {
    
    const getDogHostData = async () => {
      try {
        const q = query(collection(db,"doghosts"), where("userId", "==", uuid));
        const data = await getDocs(q);
        
        setDoghost(data.docs.map((doc) =>({...doc.data(),id:doc.id})));
      } catch (err) {
        console.log(err);
        alert("An error occured while fetching user data");
      }
      
    };
    getDogHostData();
    
  }, []);

  return (
    <div>
        <div>
      {
        doghost.map((doghosts)=>{return <div>
          <Form onSubmit={getUpdate}>
          <Form.Group className="mb-3">
          <Form.Control type="text"  placeholder={doghosts.name}  value={dogHostName} onChange={(e)=>setdogHostName(e.target.value)}/></Form.Group>
          <Form.Group className="mb-3">
          <Form.Control type="number"  placeholder={doghosts.contact} value={phone} onChange={(e)=>setPhone(e.target.value)}/></Form.Group>
          <Form.Group className="mb-3">
          <Form.Control type="text"  placeholder={doghosts.location} value={place} onChange={(e)=>setPlace(e.target.value)}/></Form.Group>
          <Form.Group className="mb-3">
          <Form.Check 
        type="switch" id="custom-switch" onClick={()=>setAvail(!avail)} label={doghosts.availability?'Available':'Not Available'}
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

export default Doghostupdate