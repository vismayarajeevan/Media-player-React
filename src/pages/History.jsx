// 5)

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllHistoryAPI,deleteHistoryAPI } from '../services/allAPI'



const History = () => {
     
  // create a state for view history
  const [allVideoHistory, setAllVideoHistory] =useState([])

  // we need to show the history when we load the page. so use useEffect
  useEffect(()=>{
    getAllHistory()
  },[])

  const getAllHistory = async()=>{
    try {

      const result = await getAllHistoryAPI()

      if(result.status>=200 & result.status<300){
        setAllVideoHistory(result.data)
      }else{
        console.log(result);
        
      }
      
    } catch (error) {
      console.log(error);
      
    }
  }


  // function for delete
  const removeHistory =async(id)=>{

    try {
      await deleteHistoryAPI(id)
      // function to reload and show remaining items
      getAllHistory()
      
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div style={{paddingTop:"100px"}}>
      <div className='d-flex justify-content-between container'>
        <h3>Watch History</h3>
        <Link to={'/home'}>Back to Home</Link>

      </div>

      {/* table for history */}

      <table className='container my-5 table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Link</th>
            <th>TimeStamp</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          {
            allVideoHistory?.length>0?
            allVideoHistory.map((videoDetails,index)=>(
              <tr key={videoDetails?.id}>
              <td>{index+1}</td>
              <td>{videoDetails?.caption}</td>
              <td>{videoDetails?.youtubeLink}</td>
              <td>{videoDetails.timestamp}</td>
              <td><button onClick={()=>removeHistory(videoDetails?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button></td>
             </tr>
            )):
            <div className='fw-bolder text-danger'>You didn't watch any video yet</div>
            
          }
        </tbody>

      </table>
    </div>
  )
}

export default History