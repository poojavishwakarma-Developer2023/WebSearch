import React from 'react'
import './index.css';
import './CSS/Style.css'

// import { Switch , Route,ReDirect } from  "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from './AllFiles/LOgoNothers/logo.png'
import PImg1 from './AllFiles/ProjectsImages/P1.jpg'
import News1 from './AllFiles/News/Seperated Images/N1.png'
import News2 from './AllFiles/News/Seperated Images/N2.png'
import News3 from './AllFiles/News/Seperated Images/N3.png'
import DesignWhite from './AllFiles/LOgoNothers/DesignWhite.png'
import ContactIcon1 from './AllFiles/ContactIcons/CU1.png'
import ContactIcon2 from './AllFiles/ContactIcons/CU2.png'
import ContactIcon3 from './AllFiles/ContactIcons/CU3.png'

import { IconName } from "react-icons/bs";


function App() {
    return (
        <div>
            <div style={{ backgroundColor: 'black' }}>
                {/* <Hadder/> */}
                {/* hadder  */}
                <div className='topHadder' >
                    {/* <div className='childHome1'> */}
                    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                        <div class="container-fluid">
                            <img src={logo} height={30} alt='noLOGo' />

                            <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ml-auto mb-2 mb-lg-0" style={{ marginLeft: 'auto' }}>
                                    <li class="nav-item">
                                        <a class="nav-link active" style={{ color: 'white', marginLeft: '10px' ,fontFamily:'revert-layer',fontWeight:'lighter'}} aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" style={{ color: 'white', marginLeft: '10px',fontFamily:'revert-layer',fontWeight:'lighter' }} href="#about">About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link  " style={{ color: 'white', marginLeft: '10px',fontFamily:'revert-layer' ,fontWeight:'lighter'}} href="#news" tabindex="-1" aria-disabled="true">News</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link " style={{ color: 'white', marginLeft: '10px',fontFamily:'revert-layer',fontWeight:'lighter' }} href="#service" tabindex="-1" aria-disabled="true">Services</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link " style={{ color: 'white', marginLeft: '10px',fontFamily:'revert-layer' ,fontWeight:'lighter'}} href="#contactUs" tabindex="-1" aria-disabled="true">Contact</a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </nav>
                    {/* </div> */}
                    {/* <div className='childHome2'> */}
                    <img src={PImg1} className='childHome1' />
                    <span>
                    <span className='footer_vertical_line' style={{
                        width: '10px',
                        backgroundColor: 'red',
                        height: '50px',
                        /* margin-top: 30px; */
                        // alignSelf: 'flex-end',
                        // marginLeft: '96%',
                        // marginBottom: '-55px',
                        border: '1px',
                        position: 'absolute',
                        zIndex:2
                        
                    }}>
                    </span>
                    <img src={PImg1} className='childHome2 ' />  
                    </span>
                
                    {/* </span> */}
                    {/* </div> */}
                </div>
                <div className=" DesignWhiteDiv mx-4 ">
                    <h2  id='about' style={about_heading}>About</h2>
                    <span style={{ marginLeft: '40px', tintColor: 'black' }}>
                        <h1 style={design_white_img}>Design White</h1>
                        {/* <img src={DesignWhite} className='DesignWhiteImg' /> */}
                    </span>
                    <span style={{ paddingLeft: '180px', marginTop: '150px' }}>
                        <pre style={{ marginLeft: '400px', marginTop: '50px', color: 'white' }}>
                            Architecture is the learned game,correct and magnificant,<br />
                            of forms assembled in the light .So Keeping this in mind we<br />
                            started with our work.We are a team of 5 Architects with a<br />
                            clean and white vision <br />
                            <button style={{ marginTop: '10px' }}> Read More</button>
                        </pre>
                    </span>
                </div>
                {/* News partion */}
                <div className='news_nav_hadding mx-5 my-4'>
                    <h2 className='news_nav_hadding mx-5 ' id='news' >News</h2>
                    <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '300px', alignContent: 'space-around' }}>
                        <div className='article_card ' style={{ marginRight: '10px' }}>
                            <span class="card" style={{ width: "200px", height: '250px', }}>
                                <img src={News1} class="card-img-top" alt="..." className='card_image' />
                            </span>
                            <div className='article_magazine'>
                                White Architectures work was mentioned as best in
                                one of the specious interior as well clean
                                design in UNI-COS Magazine  of the year 2020<br />
                                <p className='article_magazine_date'>----23 Jan 2020</p>
                            </div>

                        </div>
                        <div className='article_card' >
                            <span class="card" style={{ width: "200px", height: '250px', marginRight: '10px' }}>
                                <img src={News2} class="card-img-top" alt="..." className='card_image' />
                            </span>
                            <div className='article_magazine'>
                                White Architectures work was mentioned as best in
                                one of the specious interior as well clean
                                design in UNI-COS Magazine  of the year 2020<br />

                                <p className='article_magazine_date'>----23 Jan 2020</p>
                            </div>
                        </div>
                        <div className='article_card '>
                            <span class="card" style={{ width: "200px", height: '250px', marginRight: '10px' }}>
                                <img src={News3} class="card-img-top" alt="..." className='card_image' />
                            </span>
                            <div className='article_magazine'>
                                White Architectures work was mentioned as best in
                                one of the specious interior as well clean
                                design in UNI-COS Magazine  of the year 2020<br />
                                <p className='article_magazine_date'>----23 Jan 2020</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* news ends here */}
            {/* services starts  */}
            <div >
                <div className='service_head  '>
                    <div>
                        <h5 className='service_head_text mx-4' id='service'>Services</h5>
                        <p className='mx-4' style={{ fontSize: "35px", lineHeight: '40px', color: 'rgba(0,0,0,0.7)' }}>
                            Design <br />
                            Direction <br />
                            Guide</p>
                    </div>
                    <button className='mx-4' style={{ backgroundColor: 'white', marginTop: '-100px', border: '0px', fontWeight: 'lighter' }}>
                        Read More <span style={{ tintColor: 'black', fontSize: '18px' }}>+</span>
                    </button>
                </div>

                <div className='service_head my-5'>
                    <h5 className='service_head_text mx-4' id='contactUs'>Contact Us</h5>
                    <div className='contact_icons_head_dead my-5' style={{ marginLeft: '250px', flexDirection: 'row', alignItems: '' }}>
                        <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'row' }}>
                            <img src={ContactIcon1} style={{ height: '60px', width: '40px', opacity: 0.1 }} />
                            <p className='address_icon my-4'>
                                White Achitectures 2787 Street,  Fremont <br />
                                California<br />
                                94538
                            </p>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <img src={ContactIcon2} style={{ height: '50px', width: '50px', opacity: 0.1 }} />
                                <span className='mail_icon my-3' >
                                    <a href="mailto: wagetintouch@whitearch.com" className='mail_icon_text'>
                                        wagetintouch@whitearch.com
                                    </a>
                                </span>
                            </div>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <div style={{ marginTop: '40px' }}>
                                <img src={ContactIcon3} style={{ height: '50px', width: '50px', opacity: 0.1 }} />
                                <a href="tel:+510-979-9360" className='mail_icon_text'>510-979-9360</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contacts ends here */}
            {/*    starts  */}


            <div className='footer_top'>
                <h1 className='footer_white_arch_text'
                    style={{
                        color: 'white',
                        fontSize: '10vw',
                        marginLeft: '100px',
                    
                        fontFamiy: 'cursive',
                        fontWeight: 'lighter',
                        textShadow: "rgba(255, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"

                    }}>
                    White Architecture
                </h1>
                <span style={{ marginTop: '150px', display: 'flex', marginLeft: '300px' }}>
                    <span className="mx-5">
                        <a href='https://www.instagram.com/' className='footer_links' style={{ color: 'rgba(255,255,255,0.7)' }}>instagram</a>
                    </span>
                    <span className='mx-4' >
                        <a href='https://www.twitter.com/' className='footer_links' style={{ color: 'rgba(255,255,255,0.7)' }}>twitter</a>
                    </span>
                </span>
                <div style={{ display: 'flex' }}>
                    <span className='footer_horizontal_line'></span>
                    <span className='footer_vertical_line' style={{
                        width: '1px',
                        backgroundColor: 'white',
                        height: '110px',
                        /* margin-top: 30px; */
                        alignSelf: 'flex-end',
                        marginLeft: '96%',
                        marginBottom: '-55px',
                        border: '1px',
                        position: 'absolute'
                    }}>
                    </span>
                </div>
                <div>
                    <span style={{ display: 'flex', flexDirection: 'row', marginTop: '50px' }}>
                        <p style={{
                            color: 'rgba(255,255,255,0.5)',
                            marginLeft:'100px'
                        }}>
                            Apnacompanynameidhrpe
                        </p>
                        <p  style={{
                            color: 'rgba(255,255,255,0.5)',
                            marginLeft:'150px'
                        }}>Top</p>
                        <a href='mailto:apnaemailaaega@gmail.com'
                            style={{
                                color: 'rgba(255,255,255,0.5)',
                                textDecoration: 'none',
                                marginLeft:'230px'
                            }}
                        >apnaemailaaega@gmail.com</a>
                    </span>

                </div>
            </div>


        </div>
    );
}

export default App;

// style as object form react 
const design_white_img={
    color:'white',
    fontSize:'14vw',
    filter: 'drop-shadow(0 5px 1px gray)',
    fontFamily: 'cursive'

};
const about_heading={
    //  marginBottom: '40px',
    marginTop:'30px',
    marginLeft:'75px' ,
      color: 'rgba(255,255,255,0.2)',

}