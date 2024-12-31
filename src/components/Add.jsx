// 6)

// rafce:- function based component

// 3.import usestate
import React, { useState } from 'react'

// 4.import button and modal, form and floationg label 
import { Button, FloatingLabel, Modal, Form } from 'react-bootstrap';


// 10.import savevideo from services

import { saveVideoApi } from '../services/allAPI';



// 11.
const Add = ({setAddResponseFromHome}) => {

  // 5.state for upload video

  const [videDetails, setVideoDetails] = useState({
    caption:"", imgUrl:"", youtubeLink:""
  })
  console.log(videDetails);

  // 9.state for invalid message for youtube link

  const [invalidYoutubeLink, setInvalidYoutubeLink]= useState(false)
  
  
  
  // 2.copy modal state and function
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // 8.function to extract embedded code from youtubelink

  const extractEmbeddedLinkFromYoutubeLink = (userInputYoutubeLink)=>{
    
    // a) validate link 

    if(userInputYoutubeLink.includes("https://www.youtube.com/watch?v=")){

              console.log(userInputYoutubeLink.split("v=")[1].slice(0,11));

              // set embedded code for youtube link with last 11 digits
              const videoId =userInputYoutubeLink.split("v=")[1].slice(0,11)
              setInvalidYoutubeLink(false)
              setVideoDetails({...videDetails, youtubeLink:`https://www.youtube.com/embed/${videoId}`})
              
    }else{
  
      // if it is incorrect show message
      setInvalidYoutubeLink(true)
      setVideoDetails({...videDetails, youtubeLink:""})
    }
  }


  // 9. function for add video

  
  const handleUploadVideo= async ()=>{

    // access all keys from the object in modal like caption, img url and youtube.
  // use destructuring

  const {caption, imgUrl, youtubeLink} =videDetails
  console.log(caption)
  console.log(imgUrl);
  console.log(youtubeLink);
  
  
  

  // check all fields are filled or not
  if(caption && imgUrl && youtubeLink){
          // 10 a. call save video
            //  it contains error, so put it inside try catch block

            try {

              // call api
              const result = await  saveVideoApi(videDetails)
              console.log(result);

              // close modal

              if(result.status>=200 && result.status<300){
                alert("Video uploaded sucessfully!!")
                handleClose()
                // 12.call view function pass through props inside home
                setAddResponseFromHome(result)
              }
              
              
            } catch (error) {
                console.log(error);
                
            }

            


  }else{
    alert("Please fill the Form!!!!!")
  }

  }

  return (

  
    <>
     {/* 1.create button for modal  */}
      <div className='d-flex align-items-center'>
          <h5>Upload New Video</h5>
          {/* 6. add fuction call for shoe modal */}
          <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fs-5 fw-bolder'>+</button>
      </div>

      {/* *******5.modal************ */}

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Uploading Video Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>

         {/* div for hold forms */}

         <div className='border rounded p-3'>
         <FloatingLabel controlId="floatingCaption" label="Video Caption">

          {/* 6. change video details, to solve object problems to add all keys is rest operator */}
           <Form.Control onChange={e=>setVideoDetails({...videDetails,caption:e.target.value})} type="text" placeholder="Video Caption" />
         </FloatingLabel>

         <FloatingLabel className='mt-2' controlId="floatingUrl" label="Video Image Url">
           <Form.Control onChange={e=>setVideoDetails({...videDetails,imgUrl:e.target.value})} type="text" placeholder="Video Image Url" />
         </FloatingLabel>
          
         <FloatingLabel className='mt-2' controlId="floatingLink" label="Video yotube Link">

          {/* 7.  */}
           <Form.Control onChange={e=>extractEmbeddedLinkFromYoutubeLink(e.target.value)} type="text" placeholder="Video yotube Link" />
         </FloatingLabel>

         {/* in */}
         {
          invalidYoutubeLink &&
          <div className='text-danger fw-bolder mt-3'>Invalid youtubelink....</div>
         }

         </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUploadVideo}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add