import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Dropdown } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { MDBContainer } from 'mdb-react-ui-kit';
function Firstpage() {
  return (
    <div style={{backgroundColor:"#00b075",
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")',height:"100%",borderRadius:30}}>
    <br />
    <h1 className=" d-flex justify-content-center">Rescuera</h1>
    <MDBContainer className="my-5 d-flex justify-content-center">
<img
  src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-cute-dog-avatar-with-a-yellow-background-png-image_5205691.jpg"
  className="rounded-circle"
  style={{height:"198px",width:"198px"}}
  alt="Avatar"
/>
</MDBContainer>
<div>
       <h1>Who Are You:</h1>
       </div>
       
       <br />
       
       <div style={{marginTop:60}}>
       <Dropdown title="Select">
                <Dropdown.Item>          
             <Link to="/Usersignin">
            User
             </Link>
                </Dropdown.Item>
  
                <Dropdown.Item >
                <Link to="/Handsignin"> Snake handler</Link>
                </Dropdown.Item>
  
                <Dropdown.Item>
                   <Link to="/Hostsignin"> Hospital Head</Link>
                </Dropdown.Item>

                <Dropdown.Item>
                <Link to="/Taxisignin"> Driver</Link>
                </Dropdown.Item>

                <Dropdown.Item>
                <Card.Body><Link to="/Login"> Admin</Link></Card.Body>
                </Dropdown.Item>
            </Dropdown>
      
     
            </div>
    
    </div>
  )
}

export default Firstpage