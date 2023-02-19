import React from 'react'
import './App.css'


import Handsignin from './handlercomp/Handsignin'
import Handsignup from './handlercomp/Handsignup'
import Formpage from './handlercomp/Formpage'
//import Meshand from './handlercomp/meshand'
import Handupdate from './handlercomp/Handupdate'

import Hostsignin from './hospitalcomp/hostsignin'
import Hostsignup from './hospitalcomp/hostsignup'
import Snakedatapage from './hospitalcomp/snakedatapage'
import Snakehostupdate from './hospitalcomp/snakehostupdate'
import Dogdatapage from './hospitalcomp/dogdatapage'
import Doghostupdate from './hospitalcomp/doghostupdate'

import Taxisignin from './taxicomp/taxisignin'
import Taxisignup from './taxicomp/taxisignup'
import Detailpage from './taxicomp/detailpage'
import Taxiupdate from './taxicomp/taxiupdate'

import Usersignin from './usercomp/usersignin'
import Usersignup from './usercomp/usersignup'
import Doghostcont from './usercomp/doghostcont'
import Taxicontact from './usercomp/taxicontact'
import Snakehostcont from './usercomp/snakehostcont'
import Handcontact from './usercomp/Handcontact'
//import Mesroom from './usercomp/mesroom'
import Firstaid from './usercomp/firstaid'
import Snakeaid from './usercomp/snakeaid'
import Mainpage from './usercomp/Mainpage'

import Dogho from './admincomp/dogho'
import Handle from './admincomp/handle'
import Select from './admincomp/select'
import Snakeho from './admincomp/snakeho'
import Useview from './admincomp/useview'
import Vehicle from './admincomp/vehicle'
import Login from './admincomp/login'
import Signup from './admincomp/signup'

import {BrowserRouter , Routes, Route} from "react-router-dom";
import Firstpage from './startcomp/firstpage'




function App() {
  return (
   
   <BrowserRouter>
    
    <Routes>
     <Route path='Handupdate/*'  element={<Handupdate />}/>
     <Route path='Handsignin/*'  element={<Handsignin />}/>
     <Route path='Handsignup/*'  element={<Handsignup />}/>

     
     <Route  path="Formpage/*" element={<Formpage />} />

     <Route  path="/" element={<Firstpage />} />
     
     <Route  path="Snakedatapage/*" element={<Snakedatapage />} />
     <Route  path="Snakehostupdate/*" element={<Snakehostupdate />} />
     <Route  path="Hostsignin/*" element={<Hostsignin />} />
     <Route  path="Hostsignup/*" element={<Hostsignup />} />
     <Route  path="Dogdatapage/*" element={<Dogdatapage />} />
     <Route  path="Doghostupdate/*" element={<Doghostupdate />} />
      
     <Route path='Taxiupdate/*'  element={<Taxiupdate />}/>
     <Route path='Taxisignin/*'  element={<Taxisignin />}/>
     <Route path='Taxisignup/*'  element={<Taxisignup />}/>
     <Route  path="Detailpage/*" element={<Detailpage />} />
 
     <Route path='Taxicontact/*'  element={<Taxicontact />}/>
     <Route path='Usersignin/*'  element={<Usersignin />}/>
     <Route path='Usersignup/*'  element={<Usersignup />}/>
     
     <Route path='Snakeaid/*'  element={<Snakeaid />}/>
     <Route path='Firstaid/*'  element={<Firstaid />}/>
     <Route path='Handcontact/*'  element={<Handcontact />}/>
     <Route path='Snakehostcont/*'  element={<Snakehostcont />}/>
     <Route path='Doghostcont/*'  element={<Doghostcont />}/>
     <Route path='Mainpage/*'  element={<Mainpage />}/>
     
     <Route path='Dogho/*'  element={<Dogho />}/>
     <Route path='Handle/*'  element={<Handle />}/>
     <Route path='Snakeho/*'  element={<Snakeho />}/>
     <Route path='Useview/*' element={<Useview />}/>
     <Route path='Vehicle/*'  element={<Vehicle />}/>
     <Route path='Select/*'  element={<Select />}/>
     <Route path='Login/*'  element={<Login />}/>
     <Route path='Signup/*'  element={<Signup />}/>

  

     </Routes>     
        
      
    
  </BrowserRouter>
   
  )
}

export default App