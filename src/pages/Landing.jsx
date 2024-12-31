// 3)


import React from 'react'
import { Link } from 'react-router-dom'

// import image

import landingimg from '../assets/music.gif'

import feature1 from '../assets/feature1.jpg'
import feature2 from '../assets/feature2.avif'
import feature3 from '../assets/feature3.jpg'

// import card and button
import { Button, Card } from 'react-bootstrap'




const Landing = () => {
  return (
    <div style={{paddingTop:"100px"}} className='container'>

      {/* **********************landing****************** */}
      <div className='row align-items-center'>

        {/* div for heading and contents */}
        <div className='col-lg-5'>
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:"justify"}}>Media Player App will allow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, let starts exploring our site!!!</p>

          {/* button to redirect page, use link for direct to same page */}
       <Link to={'/home'} className='btn btn-info'>Get Started</Link>
        </div>


        {/* space between image and content */}
        <div className='col'></div>

        {/* landing image */}
        <div className='col-lg-6'>
         <img src={landingimg} alt="" className='img-fluid' />
        </div>

      </div>


      {/* **********************landing****************** */}

      <div className='my-5'>
        <h3 className='text-center'>Features</h3>
        {/* *************************cards *****************************/}

        {/* card1 */}
        <div className='row mt-5'>
          <div className='col-lg-4'>
          <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" height={'250px'} src={feature1} />
          <Card.Body>
          <Card.Title>Managing videos</Card.Title>
          <Card.Text>
          Users can upload, view and remove videos.
          </Card.Text>
       
        </Card.Body>
        </Card>

          </div>

              {/* card2 */}
          <div className='col-lg-4'>
          <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" height={'250px'} src={feature2} />
          <Card.Body>
          <Card.Title>Categories videos</Card.Title>
          <Card.Text>
         Users can categories the videos by drag and drop features.
          </Card.Text>
       
          </Card.Body>
          </Card>

          </div>

              {/* card3 */}
          <div className='col-lg-4'>
          <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" height={'250px'} src={feature3} />
          <Card.Body>
          <Card.Title>Categories videos</Card.Title>
          <Card.Text>
          Users can categories the videos by drag and drop features.
          </Card.Text>
       
        </Card.Body>
        </Card>

          </div>

        </div>
      </div>


  {/* *************************last *****************************/}

  <div className='my-5 row align-items-center border rounded p-5'>

    <div className="col-lg-5">
      <h3 className='text-warning'>Simple Fast and Powerful</h3>
      <p style={{textAlign:"justify"}}><span className='fs-5 fw-bolder'>Play Everything: </span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex deleniti rem officiis. </p>

      <p style={{textAlign:"justify"}}><span className='fs-5 fw-bolder'>Categorize Videos: </span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex deleniti rem officiis. </p>

      <p style={{textAlign:"justify"}}><span className='fs-5 fw-bolder'>Managing History: </span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex deleniti rem officiis. </p>
    </div>


    <div className="col"></div>


    <div className="col-lg-6">
    {/* youtube video */}
  
    <iframe width="100%" height="360" src="https://www.youtube.com/embed/MoN9ql6Yymw" title="David Kushner - Daylight (Official Music Video)"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>

  </div>



    </div>
  )
}

export default Landing