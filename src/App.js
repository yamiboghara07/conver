import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Carousel } from 'react-bootstrap';
// import Carousel from 'react-bootstrap/Carousel';
import { FaSearch, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaMapLocationDot, FaFacebook } from "react-icons/fa6";
import { GoCommentDiscussion } from "react-icons/go";
// import { TiPlus } from "react-icons/ti";
import { IoIosMenu, IoMdContacts } from "react-icons/io";
import { TbPhoneCall } from "react-icons/tb";
import { GiRibbonMedal, GiExpense } from "react-icons/gi";
import { TfiAgenda } from "react-icons/tfi";
import { CiMoneyCheck1 } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import { HiArrowLongRight, HiOutlineRocketLaunch } from "react-icons/hi2";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLayersOutline } from "react-icons/io5";
import { PiPencilLineLight } from "react-icons/pi";
import { LiaToolsSolid } from "react-icons/lia";
import { RiTeamLine } from "react-icons/ri";
import { TbTools } from "react-icons/tb";
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Option = {
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
      dots: false,
      nav: false,
    }
  }
}

function App() {
  return (
    <header>

      {/* -----------------------------------------------------------------------------
                                    ** header **
      ---------------------------------------------------------------------------------*/}

      <div className='bgblue'>
        <Container>
          <div className="top_header">
            <div className="main_header flex space-between">
              <div className='top_header'>
                <ul className='top_items flex'>
                  <li className='flex'>
                    <p>Website :</p>
                    <spn>www.example.com</spn>
                  </li>
                  <li className='flex'>
                    <p>Email :</p>
                    <spn>example@example.com</spn>
                  </li>
                  <li className='d-xl-flex d-none  '>
                    <p>Open Time :</p>
                    <spn>8:00 AM - 10:00 PM</spn>
                  </li>
                </ul>
              </div>
              <div className='search  d-xl-block  d-none'>
                <div className='input_search'>
                  <input type='search' placeholder='search'></input>
                  <i><FaSearch></FaSearch></i>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>


      <div className='bgorange w-100'>
        <div className='container'>

          <Navbar expand="lg" className="bg-inherit">
            <div>
              <img src={require('./image/logo.png')}></img>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className='w-100 justify-content-end ' >
                <Nav.Link href="#home">Home</Nav.Link>
                <NavDropdown id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Home one</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Home two</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Home three</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Home four</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">Services</Nav.Link>
                <NavDropdown id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Architecture Service</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Bridge Construction</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Industry Construction</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Consulting Planning</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Service Consult</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Best Engineering</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Connector Line</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Advanced Analytic</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">Pages</Nav.Link>
                <NavDropdown id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Top Services</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Our Team</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Best Pricing</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Our Gallery</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Our Project</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">FAQs</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">Blog</Nav.Link>
                <NavDropdown id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Blog Left</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Blog right</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Blog two column</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Blog three column</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Blog three column</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Blog list view</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Blog list view two</NavDropdown.Item>


                </NavDropdown>
                <Nav.Link href="#link">Contact Up</Nav.Link>
                <NavDropdown id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Contact One</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Contact Two</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Contact Three</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>

      </div>

      {/* -----------------------------------------------------------------------------
                                        ** slider **
      ---------------------------------------------------------------------------------*/}

      <Carousel className='sliders'>
        <Carousel.Item className='image'>
          <img src={require('./image/s1.jpg')}></img>
          <Carousel.Caption className='slider_txt'>
            <div className='img_txt'>
              <h3>Best Solution in 2022</h3>
              <p>Free online courses from the world’s leading experts.Join 17 million </p>
            </div>
            <div className='s_btn'>
              <div className='slider_btn'>
                <a href='#'>Read More</a>
              </div>
            </div>
          </Carousel.Caption>
          
        </Carousel.Item>
        <Carousel.Item  className='image'>
          <img src={require('./image/s2.webp')}></img>
          <Carousel.Caption className='slider_txt'>
            <div className='img_txt'>
              <h3>We Are Best Builders.</h3>
              <p>Free online courses from the world’s leading experts.Join 17 million </p>
            </div>
            <div className='s_btn'>
              <div className='slider_btn'>
                <a href='#'>Read More</a>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* -----------------------------------------------------------------------------
                                    ** choose us **
      ---------------------------------------------------------------------------------*/}

      <section>
        <Container>
          <div className='choose_us'>
            <div className='choose_heading'>
              <div className='heading_box'>
                <span>We strive</span>
                <h2>Why choose us</h2>
              </div>
            </div>
            <div className='choose_item'>
              <Row>
                <Col sm={12} md={6} lg={3} >
                  <div className='choose1'>
                    <div className='icon_desc'>
                      <div className='c_icon'>
                        <i><GiRibbonMedal></GiRibbonMedal></i>
                      </div>
                      <div className='choose_desc'>
                        <h5> 15 Years in Business</h5>
                        <p>
                          We’ve been a strategy thought leader for nearly five decades and we bring unrivaled
                        </p>
                      </div>
                      <div className='choode_btn'>
                        <a href='#'>Read More</a>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3} >
                  <div className='choose1'>
                    <div className='icon_desc'>
                      <div className='c_icon'>
                        <i><TfiAgenda></TfiAgenda></i>
                      </div>
                      <div className='choose_desc'>
                        <h5> Licensed & Insured</h5>
                        <p>
                          We’ve been a strategy thought leader for nearly five decades and we bring unrivaled
                        </p>
                      </div>
                      <div className='choode_btn'>
                        <a href='#'>
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3}>
                  <div className='choose1'>
                    <div className='icon_desc'>
                      <div className='c_icon'>
                        <i><CiMoneyCheck1></CiMoneyCheck1></i>
                      </div>
                      <div className='choose_desc'>
                        <h5>No Hidden Charges</h5>
                        <p>
                          We’ve been a strategy thought leader for nearly five decades and we bring unrivaled
                        </p>
                      </div>
                      <div className='choode_btn'>
                        <a href='#'>
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3} >
                  <div className='choose1'>
                    <div className='icon_desc'>
                      <div className='c_icon'>
                        <i><GiExpense></GiExpense></i>
                      </div>
                      <div className='choose_desc'>
                        <h5>On-Time & On-Budget</h5>
                        <p>
                          We’ve been a strategy thought leader for nearly five decades and we bring unrivaled
                        </p>
                      </div>
                      <div className='choode_btn'>
                        <a href='#'>
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </section>

      {/* -----------------------------------------------------------------------------
                                    ** world **
      ---------------------------------------------------------------------------------*/}

      <section className='bglightgray'>
        <Container>
          <div className='world'>
            <Row>
              <Col md={6} sm={12}>
                <div className='const_img'>
                  <img src={require('./image/world.jpg')}></img>
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className='world_desc'>
                  <div className='w_heading'>
                    <h5 className='pb-1'>Who We Are</h5>
                    <h2 className='fw-semibold pb-4'>World’s largest and trusted construction company</h2>
                  </div>
                  <div className='w_contain'>
                    <p className='pb-4 m-0 '>
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.
                    </p>
                  </div>
                  <div className='w_icon'>
                    <ul className='ww_icons p-0 pb-3'>
                      <li className='flex'>
                        <i className='pe-2'><FaCheck></FaCheck></i>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </li>
                      <li className='flex '>
                        <i className='pe-2'><FaCheck></FaCheck></i>
                        <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
                      </li>
                      <li className='flex'>
                        <i className='pe-2'><FaCheck></FaCheck></i>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                      </li>
                    </ul>
                  </div>
                  <div className='ww_btn'>
                    <a href='#'>
                      <span>Discover More</span>
                      <i><HiArrowLongRight></HiArrowLongRight></i>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* -----------------------------------------------------------------------------
                                    ** creatively **
      ---------------------------------------------------------------------------------*/}
      <section>
        <Container>
          <div className='creative'>
            <div className='cre_heading'>
              <div className='work_txt'>
                <span>Our Services</span>
                <h2>We work creatively.</h2>
              </div>
            </div>
            <div className='service'>
              <Row className=''>
                <Col lg={4} md={6} sm={12}>
                  <div className='service_item'>
                    <div className='service_inner'>
                      <div className='ser_icon'>
                        <i><HiOutlineRocketLaunch></HiOutlineRocketLaunch></i>
                      </div>
                      <div className='ser_desc'>
                        <h3>Bridge Construction</h3>
                        <p className='pt-2'>
                          Explore new skills, deep existing pass and get lost in crevity. What you find just might surprise and nspiretec you With so much to explore,
                        </p>
                      </div>
                      <div className='ser_btn'>
                        <a href='#'>Read More</a>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <div className='service_item'>
                    <div className='service_inner'>
                      <div className='ser_icon'>
                        <i><IoLayersOutline></IoLayersOutline></i>
                      </div>
                      <div className='ser_desc'>
                        <h3>Consulting Planning</h3>
                        <p className='pt-2'>
                          Explore new skills, deep existing pass and get lost in crevity. What you find just might surprise and nspiretec you With so much to explore,
                        </p>
                      </div>
                      <div className='ser_btn'>
                        <a href='#'>Read More</a>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={12} className=''>
                  <div className='service_item'>
                    <div className='service_inner'>
                      <div className='ser_icon'>
                        <i><PiPencilLineLight></PiPencilLineLight></i>
                      </div>
                      <div className='ser_desc'>
                        <h3>Industry Construc</h3>
                        <p className='pt-2'>
                          Explore new skills, deep existing pass and get lost in crevity. What you find just might surprise and nspiretec you With so much to explore,
                        </p>
                      </div>
                      <div className='ser_btn'>
                        <a href='#'>Read More</a>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col lg={4} md={6} sm={12}>
                  <div className='service_item'>
                    <div className='service_inner'>
                      <div className='ser_icon'>
                        <i><LiaToolsSolid></LiaToolsSolid></i>
                      </div>
                      <div className='ser_desc'>
                        <h3>Modern Machines</h3>
                        <p className='pt-2'>
                          Explore new skills, deep existing pass and get lost in crevity. What you find just might surprise and nspiretec you With so much to explore,
                        </p>
                      </div>
                      <div className='ser_btn'>
                        <a href='#'>Read More</a>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={4} sm={12} className='d-none d-lg-block'>
                  <div className='service_item'>
                    <div className='service_inner'>
                      <div className='ser_icon'>
                        <i><RiTeamLine></RiTeamLine></i>
                      </div>
                      <div className='ser_desc'>
                        <h3>Best Engineering</h3>
                        <p className='pt-2'>
                          Explore new skills, deep existing pass and get lost in crevity. What you find just might surprise and nspiretec you With so much to explore,
                        </p>
                      </div>
                      <div className='ser_btn'>
                        <a href='#'>Read More</a>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={4} sm={12} className='d-none d-lg-block'>
                  <div className='service_item'>
                    <div className='service_inner'>
                      <div className='ser_icon'>
                        <i><TbTools></TbTools></i>
                      </div>
                      <div className='ser_desc'>
                        <h3>Architecture Service</h3>
                        <p className='pt-2'>
                          Explore new skills, deep existing pass and get lost in crevity. What you find just might surprise and nspiretec you With so much to explore,
                        </p>
                      </div>
                      <div className='ser_btn'>
                        <a href='#'>Read More</a>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </section>

      {/* -----------------------------------------------------------------------------
                                    ** solution **
      ---------------------------------------------------------------------------------*/}

      <section className='bgblue s_bussiness'>
        <Container>
          <div className='solution'>
            <div className='bussiness flex space-between'>
              <div className='sol_img' sm={12}>
                <img src={require('./image/solution.png')}></img>
              </div>
              <div className='sol_text' sm={12}>
                <div className='solution_txt'>
                  <h2>Solution For Business!</h2>
                  <p>Appropriate for your specific business, making it easy for you to have quality IT services. </p>
                </div>
              </div>
              <div className='sol_btn d-block d-xl-block d-lg-none d-md-none d-sm-none'>
                <div className='apply'><a href='#'>apply now</a></div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* -----------------------------------------------------------------------------
                                    ** quality **
      ---------------------------------------------------------------------------------*/}

      <section>
        <div className='quality'>
          <Container>
            <div className='bglightgray'>
              <Row>
                <Col md={6} sm={12}>
                  <div className='q_text'>
                    <div className='q_inner'>
                      <div className='q_heading'>
                        <h2>High Quality Construction Solutions For You.</h2>
                      </div>
                      <div className='q_desc'>
                        <p>
                          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly.
                        </p>
                      </div>
                      <div className='q_btn'>
                        <a href='#'>discover more</a>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={6} sm={12}>
                  <div className='q_img'>
                    <div className='q_image'>
                      <img src={require('./image/qulity.jpg')}></img>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </section>

      {/* -----------------------------------------------------------------------------
                                    ** our client **
      ---------------------------------------------------------------------------------*/}

      <div className='owl'>
        <Container>
          <div className='owl_heading'>
            <div className='client'>
              <p>our clients</p>
              <h2>We work for our clients</h2>
            </div>
          </div>
          <OwlCarousel className='owl-theme' {...Option} autoplay={1000} loop margin={10} nav>
            <div class='item'>
              <img src={require('./image/o1.png')}></img>
            </div>
            <div class='item'>
              <img src={require('./image/o2.png')}></img>
            </div>
            <div class='item'>
              <img src={require('./image/o3.png')}></img>
            </div>
            <div class='item'>
              <img src={require('./image/o1.png')}></img>

            </div>
            <div class='item'>
              <img src={require('./image/o2.png')}></img>

            </div>
            <div class='item'>
              <img src={require('./image/o3.png')}></img>

            </div>
            <div class='item'>
              <img src={require('./image/o1.png')}></img>

            </div>
            <div class='item'>
              <img src={require('./image/o2.png')}></img>
            </div>
            <div class='item'>
              <img src={require('./image/o3.png')}></img>
            </div>
            <div class='item'>
              <img src={require('./image/o1.png')}></img>
            </div>
            <div class='item'>
              <img src={require('./image/o2.png')}></img>
            </div>
            <div class='item'>
              <img src={require('./image/o3.png')}></img>
            </div>
          </OwlCarousel>
        </Container>
      </div>

      {/* -----------------------------------------------------------------------------
                                    ** form **
      ---------------------------------------------------------------------------------*/}

      <section>
        <Container>
          <div className='bg_color'>
            <div className='form_inner'>
              <div className='f_form'>
                <div className='form_details d-flex flex-column flex-lg-row'>
                  <div className='form w-100'>
                    <form>
                      <Row >
                        <Col>
                          <div className='form_type'>
                            <input type='text' placeholder='Your Name'></input>
                          </div>
                        </Col>
                        <Col>
                          <div className='form_type'>
                            <input type='email' placeholder='Your Email'></input>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <div className='form_type'>
                            <input type='text' placeholder='Your Phone'></input>
                          </div>
                        </Col>
                        <Col>
                          <div className='form_type'>
                            <input type='text' placeholder='Subject'></input>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <div className='form_add'>
                            <textarea placeholder='Your Message'></textarea>
                          </div>
                        </Col>
                      </Row>
                      <div className='submite'>
                        <input type='submite' placeholder='Submit Now'></input>
                      </div>
                    </form>
                  </div>
                  <div className='form_desc w-100'>
                    <div className='form_text'>
                      <div className='form_heading'>
                        <p>Our Services</p>
                        <h2>We work creatively and specially for you.</h2>
                      </div>
                      <div className='company'>
                        <div className='f_com flex'>
                          <i><FaMapLocationDot></FaMapLocationDot></i>
                          <div className='company'>
                            <h3>Company Address</h3>
                            <p>510/20 sorini Asut, Melbord Austria.</p>
                          </div>
                        </div>
                        <div className='f_com flex'>
                          <i><HiOutlineMailOpen></HiOutlineMailOpen></i>
                          <div className='company'>
                            <h3>E-mail Us</h3>
                            <p>demo@example.com,</p>
                          </div>
                        </div>
                        <div className='f_com flex'>
                          <i><TbPhoneCall></TbPhoneCall></i>
                          <div className='company'>
                            <h3>Contact Us</h3>
                            <p>+242332545676523</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* -----------------------------------------------------------------------------
                                    ** news&blog **
      --------------------------------------------------------------------------------*/}

      <section>
        <Container>
          <div className='news_blog'>
            <div className='n_head'>
              <div className='nb_head'>
                <span>Our Blog</span>
                <h2>Our Latest News & Blog</h2>
              </div>
            </div>
            <Row className='flex'>
              <Col lg={4} md={6} sm={12}>
                <div className='News'>
                  <div className='Blog'>
                    <div className='nb_image'>
                      <img src={require('./image/nb1.jpg')}></img>
                    </div>
                    <div className='blog_new'>
                      <div className='blog_top'>
                        <ul className='flex nb_icon'>
                          <li className='conve'>
                            <a href='#'>
                              <i><IoMdContacts></IoMdContacts></i>
                              <span>Conve</span>
                            </a>
                          </li>
                          <li className='cal'>
                            <a href='#'>
                              <i><SlCalender></SlCalender></i>
                              <span>December 15, 2021</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className='blog_text'>
                        <h2>Aviation Construction Reaching New Heights</h2>
                      </div>
                      <div className='bolg_desc'>
                        <p>Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels…</p>
                      </div>
                      <div className='flex space-between'>
                        <div className='b_left'>
                          <a href='#'>Read More                                        </a>
                        </div>
                        <div className='b_right'>
                          <i><GoCommentDiscussion></GoCommentDiscussion></i>
                          <span>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6} sm={12}>
                <div className='News'>
                  <div className='Blog'>
                    <div className='nb_image'>
                      <img src={require('./image/nb2.jpg')}></img>
                    </div>
                    <div className='blog_new'>
                      <div className='blog_top'>
                        <ul className='flex nb_icon'>
                          <li className='conve'>
                            <a href='#'>
                              <i><IoMdContacts></IoMdContacts></i>
                              <span>Conve</span>
                            </a>
                          </li>
                          <li className='cal'>
                            <a href='#'>
                              <i><SlCalender></SlCalender></i>
                              <span>December 15, 2021</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className='blog_text'>
                        <h2>The Next Big Challenge For Marketer</h2>
                      </div>
                      <div className='bolg_desc'>
                        <p>Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels…</p>
                      </div>
                      <div className='flex space-between'>
                        <div className='b_left'>
                          <a href='#'>Read More                                        </a>
                        </div>
                        <div className='b_right'>
                          <i><GoCommentDiscussion></GoCommentDiscussion></i>
                          <span>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6} sm={12}>
                <div className='News'>
                  <div className='Blog'>
                    <div className='nb_image'>
                      <img src={require('./image/nb3.jpg')}></img>
                    </div>
                    <div className='blog_new'>
                      <div className='blog_top'>
                        <ul className='flex nb_icon'>
                          <li className='conve'>
                            <a href='#'>
                              <i><IoMdContacts></IoMdContacts></i>
                              <span>Conve</span>
                            </a>
                          </li>
                          <li className='cal'>
                            <a href='#'>
                              <i><SlCalender></SlCalender></i>
                              <span>December 15, 2021</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className='blog_text'>
                        <h2>Modern Prodigy Electronics Disassembling</h2>
                      </div>
                      <div className='bolg_desc'>
                        <p>Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels…</p>
                      </div>
                      <div className='flex space-between'>
                        <div className='b_left'>
                          <a href='#'>Read More                                        </a>
                        </div>
                        <div className='b_right'>
                          <i><GoCommentDiscussion></GoCommentDiscussion></i>
                          <span>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* -------------------------------------------------------------------------------
                                    ** footer **
      --------------------------------------------------------------------------------*/}

      <section className='bgblue'>
        <Container>
          <Row>
            <div className='footer_inner  d-flex flex-column flex-lg-row'>
              <Col>
                <div className='logo_footer'>
                  <div className='f_logoo'>
                    <img src={require('./image/logo.png')}></img>
                  </div>
                  <div className='f_desc'>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, </p>
                  </div>
                  <div className='f_icon'>
                    <a href='#'><i><FaInstagram></FaInstagram></i></a>
                    <a href='#'><i><FaFacebook></FaFacebook></i></a>
                    <a href='#'><i><FaTwitter></FaTwitter></i></a>
                    <a href='#'><i><FaYoutube></FaYoutube></i></a>
                  </div>
                </div>
              </Col>
              <Col>
                <div className='links'>
                  <div className='link_hed'>
                    <h2>Quick Links</h2>
                  </div>
                  <div className='quick'>
                    <ul className='f_list'>
                      <li>
                        <a href='#'>+ Different Types</a>
                      </li>
                      <li>
                        <a href='#'>+ Creative font</a>
                      </li>
                      <li>
                        <a href='#'>+ Audio Available</a>
                      </li>
                      <li>
                        <a href='#'>+ Quote Available</a>
                      </li>
                      <li>
                        <a href='#'>+ Visit Category</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col>
                <div className='location'>
                  <div className='loc'>
                    <img src={require('./image/location.png')}></img>
                  </div>
                </div>
              </Col>
            </div>
          </Row>
        </Container>
      </section>

    </header >

  )
}
export default App