// 8)

// rafce

// 4. import use state
import React, { useState } from 'react'

// 1.import card and button, modal
import { Button, Card, Modal } from 'react-bootstrap'
import { saveHistoryAPI } from '../services/allAPI';

import { removeVideoAPI } from '../services/allAPI';



// 5.props taken throungh destructuring as argument of function
const VideoCard = ({displayData,setDeleteVideoResponseFromVideoCard,insideCategory}) => {

// 3. copy state and function from modals in react bootstrap
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  // 6.
  const handleShow = async() => {
    // display modal
    setShow(true);
    // store history in json

    const {caption, youtubeLink}=displayData
    const sysDateTime = new Date()
    console.log(sysDateTime);

    // to change the format of date and time
    console.log(sysDateTime.toLocaleDateString('en-US',{timeZoneName:'short'}));
    
    const timestamp= sysDateTime.toLocaleDateString('en-US',{timeZoneName:'short'})

    // store these 3 details for api call

    const historyDetails ={caption,youtubeLink,timestamp}

    try {
      await saveHistoryAPI(historyDetails)
      
    } catch (error) {
      console.log(error);
      
    }
    
    

  }

  // delete video from card function

  const deleteVideo=async (id)=>{
    try {
      const result= await removeVideoAPI(id)
      // to update page
      setDeleteVideoResponseFromVideoCard(result)
    } catch (error) {
      console.log(error);
      
    }
  }


  // 7. darg the video card to categories

  

  const videoCardDragStarted=(e,dragVideoDetails)=>{
  console.log("inside videocardDragStartedwith videoId: "+ dragVideoDetails?.id);
  
  
  // share data using event drag start
  e.dataTransfer.setData("videoDetails", JSON.stringify(dragVideoDetails))

  
  
}




  return (
    <>
      {/* **********2. card************* */}
      <Card draggable={true} onDragStart={e=>videoCardDragStarted(e,displayData)} style={{ width: '12rem' }}>
        <Card.Img onClick={handleShow} variant="top" height={"180px"} src={displayData?.imgUrl} />
         <Card.Body>
          
           <Card.Text className='d-flex justify-content-between'>
             <p>{displayData?.caption}</p>
             
             {!insideCategory && <button onClick={()=>deleteVideo(displayData?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button>}
           </Card.Text>
        
      </Card.Body>
    </Card>



    {/* *********************5.Modal:- static backdrop************ */}

    {/* a. increase size of modal use size , make the modal center of the screen by using centered */}

    <Modal size='lg' centered show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
           {/* b.heading  */}
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* c.youtube video , make it autoplay by using "?autoplay=1" in src */}
        <iframe width="100%" height="360" src={`${displayData?.youtubeLink}?autoplay=1`} title="David Kushner - Daylight (Official Music Video)"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        </Modal.Body>
        
      </Modal>
    </>
   
  )
}

export default VideoCard