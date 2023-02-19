
import React,{ useState ,useEffect } from 'react'
import { collection , where, query,  getDocs , updateDoc ,doc } from 'firebase/firestore'
import {db ,auth}   from "../Firebase/firebaseconfig";
import { useAuthState } from "react-firebase-hooks/auth"
import { Button, Form } from 'react-bootstrap';
//import { onAuthStateChanged } from 'firebase/auth';

function Taxiupdate() {
    const [taxiname,setTaxiName] = useState([])
  const [place,setPlace] = useState([])
  const [phone,setPhone] = useState([])
  const [avail,setAvail] = useState(false)
  const [user]  = useAuthState(auth);
  const uuid = user.uid; 
  const [taxi,setTaxi] = useState([])
  const userCollectionRef = doc(db,"taxis",  uuid);
   
  const getUpdate = (e) =>{
    e.preventDefault();
    
  const taxiUpdate = async () =>{
   try{
    
    await updateDoc(userCollectionRef,{name:taxiname,
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
  taxiUpdate();

  getTaxiData();
}

useEffect(() => {
    
    const getTaxiData = async () => {
      try {
        const q = query(collection(db,"taxis"), where("userId", "==", uuid));
        const data = await getDocs(q);
        
        setTaxi(data.docs.map((doc) =>({...doc.data(),id:doc.id})));
      } catch (err) {
        console.log(err);
        alert("An error occured while fetching user data");
      }
      
    };
    getTaxiData();
    
  }, []);

 

  return (
    <div>
        <div>
      {
          taxi.map((taxis)=>{return <div>
          <Form onSubmit={getUpdate}>
          <Form.Group className="mb-3">
          <Form.Control type="text"  placeholder={taxis.name}  value={taxiname} onChange={(e)=>setTaxiName(e.target.value)}/></Form.Group>
          <Form.Group className="mb-3">
          <Form.Control type="number"  placeholder={taxis.contact} value={phone} onChange={(e)=>setPhone(e.target.value)}/></Form.Group>
          <Form.Group className="mb-3">
          <Form.Control type="text"  placeholder={taxis.location} value={place} onChange={(e)=>setPlace(e.target.value)}/></Form.Group>
          <Form.Group className="mb-3">
          <Form.Check 
        type="switch" id="custom-switch" onClick={()=>setAvail(!avail)} label={taxis.availability?'Available':'Not Available'}
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

export default Taxiupdate