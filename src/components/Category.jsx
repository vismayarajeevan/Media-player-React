// 9)

// rafce

// 3.import usestate, modal,button, floatinglabel and form
import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Modal, Form } from 'react-bootstrap';

import { removeVideoAPI, saveCategoryAPI } from '../services/allAPI';

import { getAllCtegoryAPI } from '../services/allAPI';

import { deleteCategoryAPI } from '../services/allAPI';

import { updateCategoryAPI } from '../services/allAPI';
import VideoCard from './VideoCard';



const Category = ({setDeleteResponseFromCtegory,deleteResponseFromView}) => {

  // 11.state to show categories
  const [allCategories, setAllCategories]= useState([])

  //9. add categories, need a state to hold categories
  const [CategoryName, setCategoryName]=useState("")

  // 2. import state and function from moals

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // 13
  useEffect(()=>{
    getAllCategories()
  },[deleteResponseFromView])

  // 11.to save category

  const handleSaveCategory =async()=>{
    if(CategoryName){
          // initialize an object
          const categorydetails ={CategoryName,allVideos:[]}
          try {
            const result =await saveCategoryAPI(categorydetails)
            alert("Category created")
            // to show category
            getAllCategories()
            handleClose()

          } catch (error) {
            console.log(error);
            
          }
    }else{
      alert("Please provide category name!!!!")
    }
  }

  // 12. 

  const getAllCategories=async ()=>{
    try {
      const result =await getAllCtegoryAPI()
      if(result.status>=200 && result.status<300){
        setAllCategories(result.data)
      }
    } catch (error) {
      console.log(error);
      
    }
  }
  console.log(allCategories);
  

  // 13.function to remove category through delete button
  const removeCategory = async(id)=>{
    try {
      await deleteCategoryAPI(id)
      getAllCategories()
    } catch (error) {
      console.log(error);
      
    }
  }

  // 14. drag and add 

  const dragOverCategory=(e)=>{
    e.preventDefault()
  }

  
  const videoCardDropOverCategory= async(e,categorydetails)=>{
      console.log("Inside videocardDropOverCategory");
     console.log(categorydetails);

    //  to transfer data
    const videoDetails=JSON.parse(e.dataTransfer.getData("videoDetails"))
    console.log(videoDetails);

    // update category by add video to its allVideos
     categorydetails.allVideos.push(videoDetails)
     console.log(categorydetails);

    //  api call to update the category
    await updateCategoryAPI(categorydetails)
     getAllCategories()
    //  remove card from videocard
    const result= await removeVideoAPI(videoDetails?.id)
    setDeleteResponseFromCtegory(result)
     
     
  }

// 15. define drag function for category to all videos
const categoryVideoDragStarted=(e,dragVideoDetails,categorydetails)=>{
  console.log("Inside categoryVideoDragStarted");
  let dragData={video:dragVideoDetails,categorydetails}
  e.dataTransfer.setData("dragData",JSON.stringify(dragData))
  
}

  return (
<>
  
      {/*  1.create heading and button */}
      <div className='d-flex justify-content-between align-items-center'>
  
        <h3>All Categories</h3>
        <button onClick={handleShow} className='btn btn-info mb-5 rounded-circle fs-5 fw-bolder'>+</button>    
      </div>

      {/* 5. to display all categories */}

      <div className='container-fluid mb-3'>
        {/* single categoryview */}
       

        {
          allCategories?.length>0?

          allCategories?.map(categorydetails=>(

            <div droppable="true" onDragOver={dragOverCategory} onDrop={e=>videoCardDropOverCategory(e,categorydetails)} key={categorydetails?.id} className='border rounded p-3 mb-3'>

            <div className="d-flex justify-content-between">
              <h5>{categorydetails?.CategoryName}</h5>
              <button className='btn' onClick={()=>removeCategory(categorydetails?.id)}><i class="fa-solid fa-trash text-danger"></i></button>
            </div>
  
            {/* 6.display video cards */}
  
             {/* use grid */}
            <div className='row mt-2'>

               {
                categorydetails?.allVideos?.length>0 &&
                categorydetails?.allVideos?.map(video=>(
                  <div draggable={true} onDragStart={e=>categoryVideoDragStarted(e,video,categorydetails)} key={video?.id} className='col-lg-4'>
                    {/* video cards display */}

                     {/* to remove delete button use props  */}
                    <VideoCard insideCategory={true} displayData={video}/>
                
                   </div>
                ))
               }
             
            </div>
  
          </div>
          ))
          :<div className='fw-bolder text-danger '>No categories are added yet</div>
        }

      </div>
  
      {/* *******************4.modal********************* */}
      <Modal show={show}  onHide={handleClose} backdrop="static" keyboard={false} >
          <Modal.Header closeButton>
            <Modal.Title>Add Categories Details!!!</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          {/* 5.form from flaoting label */}
         <FloatingLabel controlId="floatingCategoryName" label="Category Name">
          {/* 10. add event */}
           <Form.Control onChange={e=>setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
         </FloatingLabel>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="primary" onClick={handleSaveCategory}>Add</Button>
          </Modal.Footer>
        </Modal>
</>

  )
}

export default Category