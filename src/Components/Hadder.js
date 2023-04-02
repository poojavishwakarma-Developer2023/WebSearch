import React from 'react'

import logo from '../AllFiles/LOgoNothers/logo.png'

function Hadder() {
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <div class="container-fluid">
                {/* <a class="navbar-brand">navBar</a> */}
                {/* <ul> */}
                {/* <li style={{listStyleType:'none'}}> */}
                   <img src={logo}  height={30} alt ='noLOGo'/>    
                {/* </li> */}
                {/* </ul> */}
                <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto mb-2 mb-lg-0" style={{marginLeft:'auto'}}>
                        <li class="nav-item">
                            <a class="nav-link active"  style={{color:'white',marginLeft:'10px'}} aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" style={{color:'white',marginLeft:'10px'}}  href="#">Link</a>
                        </li>


                        <li class="nav-item">
                            <a class="nav-link disabled "   style={{color:'white' ,marginLeft:'10px'}}  href="#" tabindex="-1" aria-disabled="true">Name</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled"  style={{color:'white',marginLeft:'10px' }}  href="#" tabindex="-1" aria-disabled="true">Services</a>
                        </li>
                          <li class="nav-item">
                            <a class="nav-link disabled"  style={{color:'white',marginLeft:'10px'}}  href="#tel" tabindex="-1" aria-disabled="true">Contact</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
      


</>
    )
}

export default Hadder