import React, { useState } from 'react'

// css files
import '../../src/CSS/Style.css'
import '../../src/index.css'
import '../../src/App.css'

// task images
import logo from '../AllFiles/LOgoNothers/logo.png'
import PImg1 from '../AllFiles/ProjectsImages/P1.jpg'
import News1 from '../AllFiles/News/Seperated Images/N1.png'
import News2 from '../AllFiles/News/Seperated Images/N2.png'
import News3 from '../AllFiles/News/Seperated Images/N3.png'
import DesignWhite from '../AllFiles/LOgoNothers/DesignWhite.png'
import ContactIcon1 from '../AllFiles/ContactIcons/CU1.png'
import ContactIcon2 from '../AllFiles/ContactIcons/CU2.png'
import ContactIcon3 from '../AllFiles/ContactIcons/CU3.png'

import { IconName } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import Modal from './Modal'

function Task() {
    const [showText, setShowText] = React.useState(false);
    const [searchModal, setSearchModal] = useState(false)
    const [opacity, setOpacity] = useState(0.5)

    const onClick = () => setShowText(true);
    const Text = () => <div style={{ display: { showText } }}>You clicked the button!</div>;

    return (
        <div>
            <div>
               
                <div style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
                    <div style={{ backgroundColor: 'black' }}>
                        {/* <Hadder/> */}
                        {/* hadder  */}
                        <div className='topHadder' id='home' >
                            {/* <div className='childHome1'> */}
                            <nav class="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
                                <div class="container-fluid">
                                    <img src={logo} height={30} alt='noLOGo' />

                                    <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul class="navbar-nav ml-auto mb-2 mb-lg-0" style={{ marginLeft: 'auto' }}>
                                            <li class="nav-item">
                                                <a class="nav-link active" style={navLink_style} aria-current="page" id='home' href="#home">Home</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" style={navLink_style} href="#about">About</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" style={navLink_style} href="#news" tabindex="-1" aria-disabled="true">News</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link " style={navLink_style} href="#service" tabindex="-1" aria-disabled="true">Services</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link " style={navLink_style} href="#contactUs" tabindex="-1" aria-disabled="true">Contact</a>
                                            </li>
                                        </ul>
                                        <button class="btn btn-outline-light px-4 "  style={{marginLeft:'10px'}} onClick={() => { setOpacity(1); setSearchModal(true) }}><BsSearch /></button>
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
                                    alignSelf: 'flex-end',
                                    marginLeft: '96%',
                                    marginBottom: '-55px',
                                    border: '1px',
                                    position: 'absolute',
                                    zIndex: 2

                                }}>
                                </span>
                                {/* <div className='div_On_img'> */}
                                <span className='h_line_on_img'></span>
                                <span className='txt_on_img'>Sharp & Beutyfull<br />The Edge Building<pre style={{ fontSize: '10px' }}>media spain</pre>
                                </span>
                                <span className='span_on_img1'>
                                    <span className='img_horizontal_on_img2'></span>
                                    <span className='img_vertical_on_img2'></span>
                                    <img src={PImg1} className='childHome2 ' />
                                </span>

                                {/* </div> */}
                            </span>

                            {/* </span> */}
                            {/* </div> */}
                        </div>

                        {/* About section */}
                        <div className=" DesignWhiteDiv mx-4 ">
                            <h4 id='about' style={about_heading}>About</h4>
                            <div className='about_para'>
                                <span style={{ marginLeft: '40px', tintColor: 'black' }}>
                                    <h1 style={design_white_img}>Design White</h1>
                                    {/* <img src={DesignWhite} className='DesignWhiteImg' /> */}
                                </span>
                                <div className=' about_para' >
                                    <pre class='about_para_txt'>
                                        Architecture is the learned game,correct and magnificant,<br />
                                        of forms assembled in the light .So Keeping this in mind we<br />
                                        started with our work.We are a team of 5 Architects with a<br />
                                        clean and white vision <br />
                                        {/* <Task/>  */}
                                        <button class="read_more_btn_style" onClick={() => { alert('nothing more informaton') }}>
                                            Read More +</button>

                                    </pre>
                                </div>
                            </div>
                        </div>
                        {/* News section */}
                        <div className='news_nav_hadding mx-5 my-4'>
                            <h4 class='news_nav_hadding mx-5 ' id='news' >News</h4>
                            <div className='article_card_head_div' style={{ width: '100vw', marginTop: '60px' }}>

                                <div className='article_card_head'>
                                    <div className='article_card ' >
                                        <span class="card" style={{ width: "200px", height: '250px' ,marginRight: '10px'}}>
                                            <img src={News1} class="card-img-top" alt="..." className='card_image' />
                                        </span>
                                    </div>
                                    <div className='article_magazine'>
                                        White Architectures work was mentioned as best in
                                        one of the specious interior as well clean
                                        design in UNI-COS Magazine  of the year 2020<br />
                                        <p className='article_magazine_date'>----23 Jan 2020</p>
                                    </div>
                                </div>
                                <div className='article_card_head'>
                                    <div className='article_card' >
                                        <span class="card" style={{ width: "200px", height: '250px', marginRight: '10px' }}>
                                            <img src={News2} class="card-img-top" alt="..." className='card_image' />
                                        </span>
                                    </div>
                                    <div className='article_magazine'>
                                        White Architectures work was mentioned as best in
                                        one of the specious interior as well clean
                                        design in UNI-COS Magazine  of the year 2020<br />

                                        <p className='article_magazine_date'>----23 Jan 2020</p>
                                    </div>
                                </div>

                                <div className='article_card_head'>
                                    <div className='article_card '>
                                        <span class="card" style={{ width: "200px", height: '250px', marginRight: '10px' }}>
                                            <img src={News3} class="card-img-top" alt="..." className='card_image' />
                                        </span>
                                    </div>
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

                    {/* services section  */}
                    <div >
                        <div className='service_head  '>
                            <div>
                                <h5 className='service_head_text mx-4' id='service'>Services</h5>
                                <p className='mx-4' style={{ fontSize: "35px", lineHeight: '40px', color: 'rgba(0,0,0,0.7)' }}>
                                    Design <br />
                                    Direction <br />
                                    Guide</p>
                            </div>
                            {/* <button className='mx-4' style={{ backgroundColor: 'white', marginTop: '-100px', border: '0px', fontWeight: 'lighter' }}>
                            Read More <span style={{ tintColor: 'black', fontSize: '18px' }}>+</span>
                        </button> */}
                            <button class="read_more_btn_style mx-4" style={{ backgroundColor: 'white', color: 'black', marginTop: '-100px' }} onClick={() => { alert('nothing more informaton') }}>
                                Read More +
                            </button>
                        </div>

                        {/* contact section */}
                        <div className='service_head my-5'>
                            <h5 className='service_head_text mx-4' id='contactUs'>Contact Us</h5>
                            <div class='xyz'>
                                <div className='contact_icons_head_dead '
                                // style={{ marginLeft: '250px', flexDirection: 'row', alignItems: '' }}
                                >
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
                    </div>

                    {/* footer section */}
                    <div className='footer_top'>
                        <div class='footer_white_arch_text'>
                            <p
                                style={{
                                    color: 'white',
                                    fontSize: '10vw',
                                    marginLeft: '100px',
                                    fontFamiy: 'cursive',
                                    fontWeight: 'lighter',
                                    textShadow: "rgba(255, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                                }}
                            >
                                White Architecture</p>
                        </div>
                        <span className='top_footer_links'
                        // style={{ marginTop: '150px', display: 'flex', marginLeft: '300px' }}
                        >
                            <span class="insta_link">
                                <a href='https:www.instagram.com/' className='footer_links'
                                    style={{ color: 'rgba(255,255,255,0.7)' }}><FaInstagram /> instagram </a>
                            </span>
                            <span class='twiter_link' >
                                <a href='https:www.twitter.com/' className='footer_links'
                                    style={{ color: 'rgba(255,255,255,0.7)' }}> <FaTwitter /> twitter </a>
                            </span>
                        </span>
                        <div style={{ display: 'flex' }}>
                            <span className='footer_horizontal_line'></span>
                            <span className='footer_vertical_line'
                                style={{
                                    width: '1px',
                                    backgroundColor: 'white',
                                    height: '110px',
                                    /* margin-top: 30px; */
                                    alignSelf: 'flex-end',
                                    marginLeft: '96%',
                                    marginBottom: '-55px',
                                    border: '1px',
                                    position: 'absolute'
                                }}
                            >
                            </span>
                        </div>
                        <div>
                            <span class='footer_txt'
                            // style={{ display: 'flex', flexDirection: 'row', marginTop: '50px' }}
                            >
                                <p class='footer_company_name'
                                // style={{
                                //     color: 'rgba(255,255,255,0.5)',
                                //     marginLeft: '100px'
                                // }}
                                >
                                    whiteArchitecture
                                </p>
                                <p class='footer_position_name'
                                // style={{
                                //     color: 'rgba(255,255,255,0.5)',
                                //     marginLeft: '150px'
                                // }}
                                >
                                <a class="nav-link" style={navLink_style} href="#top">Top </a></p>
                                <a href='mailto:whitearchtech@gmail.com'
                                    class='footer_mail_link'
                                // style={{
                                //     color: 'rgba(255,255,255,0.5)',
                                //     textDecoration: 'none',
                                //     marginLeft: '230px'
                                // }}
                                >whitearchtech@gmail.com</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            
                {searchModal ?<div class='modal_wrap'> <Modal searchModal={setSearchModal} className='modal_css' />  </div>: ' '}
           
           


            {/* </div> */}
        </div>
    )
}
export default Task;
// style as object form react 
const design_white_img = {
    color: 'white',
    fontSize: '10vw',
    filter: 'drop-shadow(0 5px 1px gray)',
    fontFamily: 'cursive'
};
const about_heading = {
    //  marginBottom: '40px',
    marginTop: '30px',
    marginLeft: '75px',
    color: 'rgba(255,255,255,0.2)',
}
const navLink_style = {
    color: 'rgba(255,255,255,0.5)',
    marginRight: '10px', fontFamily:
        'revert-layer',
    marginLeft: '10px',
    fontWeight: 'lighter'
}