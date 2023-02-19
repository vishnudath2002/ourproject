import React,{ useState ,useEffect } from 'react'
import { collection , where, query,  getDocs , updateDoc ,doc } from 'firebase/firestore'
import { db , auth } from "../Firebase/firebaseconfig";
import { useAuthState } from "react-firebase-hooks/auth"
import {  Button, Col, Form, Row } from 'react-bootstrap';
//import { onAuthStateChanged } from 'firebase/auth';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Snakehostupdate() {
  const [snakeHostName,setSnakeHostName] = useState("")
  const [place,setPlace] = useState("")
  const [phone,setPhone] = useState("")
  const [avail,setAvail] = useState(false)
  const [user]  = useAuthState(auth);
  const uuid = user.uid; 
  const [snakehost,setSnakehost] = useState([])
  //const userCollectionRef = collection(db,"Snakehosts");
  const data = doc(db,"snakehosts",uuid) 
  const getUpdate = (e) =>{ 
    e.preventDefault();
   
  const snakeHostUpdate = async () =>{
   
    
    
    
    await updateDoc(data,{name:snakeHostName,
      contact:phone,
      location:place,
     availability:avail})
     .then(()=>{
      alert('Data updated');
       
       })
       .catch((err)=> {
    alert(err)
   })

  };
  snakeHostUpdate();
  getDogHostData();

}

const getDogHostData = async () => {
  try {
    const q = query(collection(db,"snakehosts"), where("userId", "==", uuid));
    const data = await getDocs(q);
    
    setSnakehost(data.docs.map((doc) =>({...doc.data(),id:doc.id})));
  } catch (err) {
    console.log(err);
    alert("An error occured while fetching user data");
  }
}
  useEffect(() => {
  
    getDogHostData();
  
  }, []);


  return (
    <div>
    
      
      <Container className='h-auto d-inline-block'>
       <Row>
       <Col >
      <Navbar  bg="primary">
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
        </Container>
      </Navbar>
      </Col>
      </Row>
    </Container>
      
        <div>
      {
        snakehost.map((snakehosts,index)=>{return <div>
          <Form onSubmit={getUpdate}>
          <Form.Group className="mb-3">
          <Form.Control  type="text" key={index} placeholder={snakehosts.name}  value={snakeHostName} onChange={(e)=>setSnakeHostName(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3">
          <Form.Control  type="number" key={index} placeholder={snakehosts.contact}  value={phone} onChange={(e)=>setPhone(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3">
          <Form.Control  type="text" key={index} placeholder={snakehosts.location}  value={place} onChange={(e)=>setPlace(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3">
          <Form.Check 
        type="switch"  key={index} id="custom-switch" onClick={()=>setAvail(!avail)} label={snakehosts.availability?'Available':'Not Available'}
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

export default Snakehostupdate