// 7)


// rafce

import React, { useEffect, useState } from 'react'

// 1.import row and col instead of flex and other properties
import { Col, Row } from 'react-bootstrap'

// 3. import videocard component for display cards
import VideoCard from './VideoCard'




// 5.import getllvideo function from all api
import { getAllVideoApi } from '../services/allAPI'

import { updateCategoryAPI } from '../services/allAPI'
import { saveVideoApi } from '../services/allAPI'




const View = ({addReaposeFromHome,deleteResponseFromCtegory,setDeleteResponseFromCtegory}) => {

  // 9.statelifting for delete video from card
  const [deleteVideoResponseFromVideocard, setDeleteVideoResponseFromVideoCard]=useState("")

  // 8.create a state for print details

  const [allVideos, setAllVideos]=useState([])

  // 7.create useEffect to done the getAllVideoAPI at the time of website loads

  useEffect(()=>{
    getAllVideo()
  },[addReaposeFromHome,deleteResponseFromCtegory,deleteVideoResponseFromVideocard])

console.log(allVideos);


  // 6.to get the function create another function
  const getAllVideo  =async ()=>{
    try {
      const result = await getAllVideoApi()
      console.log(result);
      if(result.status>=200 && result.status<300){
      setAllVideos(result.data)
        
      }
      
      
    } catch (error) {
      console.log(error);
      
      
    }
  }



  // prevent extra event during drop from category to all videos

  const dragOverView=(e)=>{
    e.preventDefault()
  }

  // 

  const categoryVideoDragOverView =async (e)=>{
         console.log("inside categoryVideoDragOverView");
         const {video,categorydetails}=JSON.parse(e.dataTransfer.getData("dragData "))
         console.log(video,categorydetails);

        //  a.updating the category by delete video from category
        const updatedCategoryVideoList =categorydetails?.allVideos?.filter(item=>item.id!=video?.id)

          // update category by remo
          const updateCategory = {...categorydetails,allVideos:updatedCategoryVideoList}
          console.log(updateCategory);
          const result = await updateCategoryAPI(updateCategory)

        //  b.use state lifting to communicate data transfer from view component to category component. state create in home
        setDeleteResponseFromCtegory(result)
        //  c.use api to upload video 
        await saveVideoApi(video)
      

        // d.call getAllVideos function to show the video in all videos
        getAllVideo()
         
         
  }


  return (
   <>

   {/* 2. use row and col for correct alignment */}
   <Row droppable="true" onDragOver={dragOverView} onDrop={e=>categoryVideoDragOverView(e)}>
        {
        
        allVideos?.length>0?
            allVideos.map(video=>(
               
                //  5.make responsive for all screens using sm, md and lg */}
                <Col key={video?.id}  sm={12} md={6} lg={4} className='mb-2'>

                     {/* 4. use videocard */}

                     {/* pass the original data through props */}
                     <VideoCard setDeleteVideoResponseFromVideoCard={setDeleteVideoResponseFromVideoCard} displayData={video}/>

                </Col>

            )) :
            <div className='text-danger fw-bolder fd-5'>No videos are uploaded</div>
        
        
        

          } 
   </Row>
   </>
  
  )
}

export default View