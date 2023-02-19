import React ,{useEffect}from 'react'
import { Link } from 'react-router-dom';
//import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth"
import { auth , db} from "../Firebase/firebaseconfig";
import {  setDoc,doc,updateDoc } from 'firebase/firestore'  
import { Form ,Button} from 'react-bootstrap';

function Mainpage() {
  
  const [review,setReview] = useState("")
  
  const [user]  = useAuthState(auth); 

  const go = (e) =>{
    e.preventDefault();
    const createReview = async () => {
      try {
        const uuid = user.uid; 
  const userCollectionRef = doc(db,"users",uuid);
  await updateDoc(userCollectionRef,{Review:review})
        alert("review sended")
      } catch (err) {
        alert(err);
        console.log(err);
      }
    };
    createReview();
  }
  
  return (
    <><div>
     

      <><header id="header" className="header d-flex align-items-center">

        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <div  className="logo d-flex align-items-center">

            <h1>Rescuera<span>.</span></h1>
          </div>
          <nav id="navbar" className="navbar">
            <ul>
              <li>Home</li>
              
             
              <li>Blog</li>
              
            </ul>
          </nav>

          

         </div>
          </header><section id="hero" className="hero"/>{/*section onil closi*/}
          <div className="container position-relative">
            <div className="row gy-5" data-aos="fade-in">
              <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
                <h2>Welcome to <span>Rescuera</span></h2>
                <p>We are creating a  new revolution in helping peoples in pathetic situation.</p>
                <div className="d-flex justify-content-center justify-content-lg-start">
                  
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <img src="assets/img/hero-img.svg" className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100" />
              </div>
            </div>
          </div>

          <div className="icon-boxes position-relative">
            <div className="container position-relative">
              <div className="row gy-4 mt-5">

                <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
                  <div className="icon-box">
                    <div className="icon"><i className="bi bi-command"></i></div>
                    <h4 className="title"><Link to="/Snakeaid">First Aid For Snake Bite</Link></h4>
                  </div>
                </div>
                
               
                <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
                  <div className="icon-box">
                    <div className="icon"><i className="bi bi-command"></i></div>
                    <h4 className="title"><Link to="/Snakehostcont">Snake Bite Treatment</Link></h4>
                  </div>
                </div>


                <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
                  <div className="icon-box">
                    <div className="icon"><i className="bi bi-command"></i></div>
                    <h4 className="title"><Link to="/Taxicontact">Emergency Vehicle</Link></h4>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
                  <div className="icon-box">
                    <div className="icon"><i className="bi bi-command"></i></div>
                    <h4 className="title"><Link to="/Doghostcont">Dog Bite Treatment</Link></h4>
                  </div>
                </div>


                <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="500">
                  <div className="icon-box">
                    <div className="icon"><i className="bi bi-command"></i></div>
                    <h4 className="title"><Link to="/Handcontact">Snake Handler</Link></h4>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="500">
                  <div className="icon-box">
                    <div className="icon"><i className="bi bi-command"></i></div>
                    <h4 className="title"><Link to="">Health Insurance</Link></h4>
                  </div>
                </div>


              </div>
            </div>
          </div>

        </>
    <main id="main">


        


        

        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">

            <h2>Reviews</h2>

              </div>
             
              <div className="col-lg-8">
                <Form onSubmit={go}>
                  <div className="row">
                    
                    
                  </div>
                  
                  <div className="form-group mt-3">
                    <textarea className="form-control"  rows="7" placeholder="write Review"  value={review} onChange={(e)=>setReview(e.target.value)}></textarea>
                  </div>
                  <br />
                  <div className="text-center"><Button type="submit" className="p-3 mb-2 bg-success text-white">Send Review</Button></div>
                </Form>
              </div>
              

          
        </section>

      </main><footer id="footer" className="footer">

        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <div className="logo d-flex align-items-center">
                <span>Rescuera</span>
              </div>
              
              
            </div>

           

            


          </div>
        </div>


      </footer>
      
    </div></>
  )
}

export default Mainpage