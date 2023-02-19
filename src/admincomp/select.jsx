import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Select() {
  return (
    <div><Card className="bg-green text-white"  >
    <Card.Body><Link to="/Useview"> Users view</Link></Card.Body>
   </Card><br />
   <Card>
    <Card.Body><Link to="/Handle"> Snake handlers view</Link></Card.Body>
   </Card><br />
 <Card>
   <Card.Body><Link to="/Snakeho">Snake Hospital view</Link></Card.Body>
 </Card><br />
 <Card>
   <Card.Body><Link to="/Dogho">Dog Hospital view</Link></Card.Body>
 </Card><br />
 <Card>
   <Card.Body><Link to="/Vehicle"> Drivers view</Link></Card.Body>
 </Card>
 </div>
  )
}

export default Select