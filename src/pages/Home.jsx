// 4)

import React, { useState } from 'react'


// import add
import Add from '../components/Add'
import { Link } from 'react-router-dom'

// import view
import View from '../components/View'

// import category
import Category from '../components/Category'







const Home = () => {

  // /state for statelifting to update category

  const[deleteResponseFromCtegory, setDeleteResponseFromCtegory] =useState("")

  // state for remove video from category in drag and drop, pass stste in category

  const [deleteResponseFromView, setDeleteResponseFromView] =useState("")

  // state to show details on view
  const [addReaposeFromHome, setAddResponseFromHome]=useState("")
  return (

    <div style={{padding:"100px"}}>
      {/* *******************first row************************  */}
      <div className='d-flex justify-content-between container mb-5'>
   
      {/* pass the function to view details as props inside add */}
      <Add setAddResponseFromHome={setAddResponseFromHome}/>

      {/* Watchnhistory  */}
      <Link to={'/history'}>Watch History</Link>

      </div>

{/* ************second row**************** */}
      <div className="container-fluid my-5 row">

        {/* All videos */}
        <div className="col-lg-6">
          <h3>All Videos</h3>
          {/* view videos */}
          <View setDeleteResponseFromView={setDeleteResponseFromView}  deleteResponseFromCtegory={deleteResponseFromCtegory} addReaposeFromHome={addReaposeFromHome}/>
        </div>

        {/* categories */}
        <div className="col-lg-6">
          <Category  deleteResponseFromView={deleteResponseFromView} setDeleteResponseFromCtegory={setDeleteResponseFromCtegory}/>
        </div>
      </div>
      
    </div>
  )
}

export default Home