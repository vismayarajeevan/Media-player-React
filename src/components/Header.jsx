// 1)

import React from 'react'
//  1.import navbar and ccontainer
import { Navbar, Container } from 'react-bootstrap'
// 3.import link
import { Link } from 'react-router-dom'



const Header = () => {
  return (
    
    // 2.navbar 
    <Navbar style={{zIndex:1}} className="bg-info position-fixed w-100">
        <Container>

          {/* 4.add link tag to navigate page */}
         
         <Link to={'/'} style={{textDecoration:'none'}}>
            <Navbar.Brand style={{color:"white"}} className='fs-5 fw-bolder'>

              {/* music icon */}
              <i class="fa-solid fa-music me-3"></i>
              
              Media Player
            </Navbar.Brand>
            </Link>
        </Container>
      </Navbar>
  )
}

export default Header







