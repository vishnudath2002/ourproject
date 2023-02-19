import React from 'react'
import { Link } from 'react-router-dom'
function Snakeaid() {
  return (
    <div className="p-3 mb-2 bg-light text-dark">
    <div className="container-fluid container-xl d-flex align-items-center bg-success justify-content-between">
          
          
            
         <Link to='/Mainpage'> <p className='text-white'>Home</p></Link> 
          
    
     </div>
        <h1>Snakebite Treatment</h1>
        <br />
        <h3>1. Note the Snake's Appearance</h3>
<ul>
<li>Be ready to describe the snake to emergency staff.</li>
</ul>
<h3>2. Protect the Person</h3>
<p>While waiting for medical help:</p>
<ul>
<li>Move the person beyond striking distance of the snake.</li>
<li>Have the person lie down with wound below the heart.</li>
<li>Keep the person calm and at rest, remaining as still as possible to keep venom from spreading.</li>
<li>Cover the wound with loose, sterile bandage.</li>
<li>Remove any jewelry from the area that was bitten.</li>
<li>Remove shoes if the leg or foot was bitten.</li>
</ul>
<h3>Do not:</h3>

<ul>

<li>Cut a bite wound</li>
<li>Attempt to suck out venom</li>
<li>Apply tourniquet, ice, or water</li>
<li>Give the person alcohol or caffeinated drinks or any other medications</li>
</ul>
<h3>3. Follow Up</h3>
<p>If you treat the bite at home:</p>
<ul>
  <li>Contact a healthcare provider. The person may need a tetanus shot. Tetanus boosters should be given every 10 years.</li>
 
</ul>

<p>At the hospital, treatment will depend on the type of snake.</p>
<ul>
<li>If the snake was venomous, the person will be given anti-venom treatment.</li>
  <li>A tetanus shot may be given, depending on the date of the last injection.
</li> 
</ul>

<Link to="/Firstaid">Firstaid for dog bite</Link>

    </div>
  )
}

export default Snakeaid