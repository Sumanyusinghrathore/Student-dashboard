  import React from 'react';
  import Navbar from '../Navbar/Navbar';
  import Slider from "react-slick";
  import "./Home.css";
  import { BrowserRouter as Router, Link } from "react-router-dom";
  import banner from '../../assets/icon/Banner.png'
  import online  from '../../assets/icon/online-course.png'
  import vector from '../../assets/icon/Vector.svg'
  import wordpress from '../../assets/wordpress.webp'
  import angular from '../../assets/Angular.jpeg'
  import java from '../../assets/java.png'
  import python from '../../assets/python.png'
  import instructors from '../../assets/instructors.svg'
  import courses from '../../assets/courses.svg'
  import cloud  from '../../assets/cloud.svg'
  import career from '../../assets/career.png'
  import devid from '../../assets/David_Lee.png'
  import Whites from '../../assets/Whites.png'
  import Mendoza from '../../assets/Mendoza.png'
  import Daziy_Millar from '../../assets/Daziy_Millar.png'
  import google from '../../assets/google.png'
  import colruyt from '../../assets/colruyt.png'
  import oxford from '../../assets/oxford.png'
  import dixie from '../../assets/dixie.png'
  import pasitech from '../../assets/pasitech.png'
  import spike from '../../assets/spike.png'
  import Instructor from '../../assets/Instructor.png'
  import coursess from '../../assets/courses.png'
  import SURPASS_ACADEMY_LOGO from '../../assets/icon/SURPASS_ACADEMY_LOGO.png'
  import address from '../../assets/icon/address.svg'
  import website from '../../assets/icon/website.svg'
  import email from '../../assets/icon/email.svg'
  import phone from '../../assets/icon/phone.svg'
function Home() {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  var instructor = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1, 
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  var logo = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 1000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 1000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true, 
          autoplay: true, 
          autoplaySpeed: 1000, 
          arrows: false,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div className="container-flud">
        <Navbar/>
      <div className="container-fluid px-0">
        <img
          src={banner}
          style={{ width: "100%" }}
          alt="Banner"
        />
      </div>
      <div className="container mt-5">
      <Slider {...settings}>
        <div className="px-3">
          <div className="card d-flex flex-row align-items-center card-fixed-height">
            <img className="card-img-left" src={online} alt="Online Course" loading="lazy" />
            <div className="card-body">
              <p className="card-text font-24-16 text-black">
                <b>Completed Courses</b>
              </p>
              <img src={vector} alt="Vector Icon" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="px-3">
          <div className="card d-flex flex-row align-items-center card-fixed-height">
            <img className="card-img-left" src={online} alt="Online Course" loading="lazy" />
            <div className="card-body">
              <p className="card-text font-24-16 text-black">
                <b>Rewards</b>
              </p>
              <img src={vector} alt="Vector Icon" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="px-3">
          <div className="card d-flex flex-row align-items-center card-fixed-height">
            <img className="card-img-left" src={online} alt="Online Course" loading="lazy" />
            <div className="card-body">
              <p className="card-text font-24-16 text-black">
                <b>Challenges</b>
              </p>
              <img src={vector} alt="Vector Icon" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="px-3">
          <div className="card d-flex flex-row align-items-center card-fixed-height">
            <img className="card-img-left" src={online} alt="Online Course" loading="lazy" />
            <div className="card-body">
              <p className="card-text font-24-16 text-black">
                <b>Live Classes</b>
              </p>
              <img src={vector} alt="Vector Icon" loading="lazy" />
            </div>
          </div>
        </div>
      </Slider>
      </div>
      <div className="container py-5">
        <h3 className="py-3 font-34-19 ">Recently Enrolled Courses</h3>
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col-lg-4 col-12 mb-4" data-aos="zoom-in">
            <div className="card card_border" >
              <img src={wordpress} className="card-img-top courses_img" alt='wordpress' />
              <div className="card-body">
                <h5 className="card-title font-24-16 fw-500">Wordpress for Beginners Master Wordpress Quickly</h5>
                <p className="card-text font-22-16">
                  12+ Lesson
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 mb-4" data-aos="zoom-in">
            <div className="card card_border">
              <img src={wordpress} className="card-img-top courses_img" alt='wordpress' />
              <div className="card-body">
                <h5 className="card-title font-24-16 fw-500">Sketch from A to Z (2022): Become an app designer</h5>
                <p className="card-text font-22-16">
                  10+ Lesson
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 mb-4" data-aos="zoom-in">
            <div className="card card_border">
              <img src={angular} alt='angular' className="card-img-top courses_img"/>
              <div className="card-body">
                <h5 className="card-title font-24-16 fw-500">Learn Angular Fundamentals From beginning to advance....</h5>
                <p className="card-text font-22-16">
                  15+ Lesson
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 mb-4" data-aos="zoom-in">
            <div className="card card_border">
            <img src={angular} alt='angular' className="card-img-top courses_img"/>
              <div className="card-body">
                <h5 className="card-title font-24-16 fw-500">Buld Responsive Real World Websites with Crash Course</h5>
                <p className="card-text font-22-16">
                  12+ Lesson
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 mb-4" data-aos="zoom-in">
            <div className="card card_border">
              <img src={java} alt='java' className="card-img-top courses_img" />
              <div className="card-body">
                <h5 className="card-title font-24-16 fw-500">Learn JavaScript and Express to become a Expert</h5>
                <p className="card-text font-22-16">
                  15+ Lesson
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 mb-4" data-aos="zoom-in">
            <div className="card card_border">
              <img src={python} alt='python' className="card-img-top courses_img" />
              <div className="card-body">
                <h5 className="card-title font-24-16 fw-500">Introduction to Programming Python & Java</h5>
                <p className="card-text font-22-16">
                 10+ Lesson
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-12">
            <p className="para_carrer font-24-16 fw-500"data-aos="fade-up">What’s New</p>
            <h3 className="font-34-19 fw-bolder " data-aos="fade-up">Master the skills to drive your career</h3>
            <p className="font-24-16" data-aos="fade-up">
              Get certified, master modern tech skills, and level up your career
              — whether you’re starting out or a seasoned pro. 95% of eLearning
              learners report our hands-on content directly helped their
              careers.
            </p>
            <div className="row g-4">
              <div className="col-12 col-lg-6">
                <div className="card d-flex flex-row align-items-center card_height m-2 p-3" data-aos="zoom-in">
                  <img
                    className="card-img-left"
                    src={instructors}
                    alt="Instructors"
                  />
                  <div className="card-body">
                    <p className="card-text font-20-16">
                      Stay motivated with engaging instructors
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="card d-flex flex-row align-items-center card_height m-2 p-3" data-aos="zoom-in">
                  <img
                    className="card-img-left"
                    src={cloud}
                    alt="Cloud"
                  />
                  <div className="card-body">
                    <p className="card-text font-20-16">
                      Keep up with the latest in cloud
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="card d-flex flex-row align-items-center card_height m-2 p-3" data-aos="zoom-in">
                  <img
                    className="card-img-left"
                    src={instructors}
                    alt="Instructors"
                  />
                  <div className="card-body">
                    <p className="card-text font-20-16">
                      Get certified with 100+ certification courses
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="card d-flex flex-row align-items-center card_height m-2 p-3" data-aos="zoom-in">
                  <img
                    className="card-img-left"
                    src={courses}
                    alt="Courses"
                  />
                  <div className="card-body">
                    <p className="card-text font-20-16">
                      Build skills your way, from labs to courses
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-12 d-none d-sm-block" style={{marginTop:"auto"}}>
  <img
  className='img-fluid'
    src={career}
    alt="Career"
  />
</div>
        </div>
      </div>
      <div className="container-fluid bg_color my-5 pb-4">
        <div className="container py-5">
          <div className="text-center card_width" data-aos="fade-up">
            <h3 className="font-34-19 fw-bolder">Featured Instructor</h3>
            <p className="font-24-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              aenean accumsan bibendum gravida maecenas augue elementum et
              neque. Suspendisse imperdiet.
            </p>
          </div>
          <Slider {...instructor} className="custom-slider-dots">
            <div className="px-3">
              <div className="card card_height">
                <img className="card_img" src={devid} alt=''/>
                <div className="card-body text-center">
                  <p className="card-text font-24-16 fw-bolder">
                    <b>David Lee</b>
                  </p>
                  <p className="font-22-16">Web Developer</p>
                </div>
              </div>
            </div>
            <div className="px-3">
              <div className="card card_height">
                <img className="card_img" src={Daziy_Millar} alt='' />
                <div className="card-body text-center">
                  <p className="card-text font-24-16 fw-bolder">
                    <b>Daziy Millar</b>
                  </p>
                  <p className="font-22-16">PHP Expert</p>
                </div>
              </div>
            </div>
            <div className="px-3">
              <div className="card card_height">
                <img className="card_img" src={Mendoza} alt='' />
                <div className="card-body text-center">
                  <p className="card-text font-24-16 fw-bolder">
                    <b>Patricia Mendoza</b>
                  </p>
                  <p className="font-22-16">Web Developer</p>
                </div>
              </div>
            </div>
            <div className="px-3">
              <div className="card card_height">
                <img className="card_img" src={Whites} alt='' />
                <div className="card-body text-center">
                  <p className="card-text font-24-16 fw-bolder">
                    <b>Skyler Whites</b>
                  </p>
                  <p className="font-22-16">UI Designer</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="container-fluid my-5 pb-4">
        <div className="py-5">
          <div className="text-center card_width" data-aos="fade-up">
            <h3 className="para_carrer font-24-16 fw-bolder">Trusted By</h3>
            <p className="font-28-20">500+ Leading Universities And Companies</p>
            <Slider {...logo}>
              <div className="logo-container" data-aos="fade-right">
                <img
                  className="logo-width" 
                  src={google}
                  alt="Google Logo"
                />
              </div>
              <div className="logo-container" data-aos="fade-right">
                <img
                  className="logo-width"
                  src={colruyt}
                  alt="Google Logo"
                />
              </div>
              <div className="logo-container" data-aos="fade-right">
                <img
                  className="logo-width"
                  src={oxford}
                  alt="Google Logo"
                />
              </div>
              <div className="logo-container" data-aos="fade-right">
                <img
                  className="logo-width"
                  src={dixie}
                  alt="Google Logo"
                />
              </div>
              <div className="logo-container" data-aos="fade-right">
                <img
                  className="logo-width"
                  src={pasitech}
                  alt="Google Logo"
                />
              </div>
              <div className="logo-container" data-aos="fade-right">
                <img
                  className="logo-width"
                  src={spike}
                  alt="Google Logo"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div className="container-fluid py-6">
        <div className="container my-5">
        <div className="row g-4">
  <div className="col-12 col-lg-6">
    <div
      className="card d-flex flex-column flex-lg-row align-items-center card_height m-2 p-3"
      style={{ background: "#ffdeda" }} data-aos="zoom-in"
    >
      <div className="card-body">
      <div className="text_decor font-24-16 fw-700">
        <p>EXAM PREP COURSES</p>
        </div>
        <p className="card-text companies_text font-28-20 ">Become An Instructor</p>
        <p className="card-text font-24-16">
          Top instructors from around the world teach millions of
          students on Mentoring
        </p>
          <div>
            <nav>
              {/* Links for navigation */}
              <Link to="https://surpass.academy/courses-categories/">
                <button className="custom-button mt-2">
                  Click Here
                </button>
              </Link>
            </nav>
          </div>
      </div>
      <img
        className="card_course img-fluid"
        src={Instructor}
        alt="Instructors"
      />
    </div>
  </div>
  <div className="col-12 col-lg-6">
    <div
      className="card d-flex flex-column flex-lg-row align-items-center card_height m-2 p-3"
      style={{ background: "#ffe88f" }} data-aos="zoom-in"
    >
        
      <div className="card-body">
      <div className="text_decor font-24-16 fw-700">
        <p>OFFLINE COURSES</p>
        </div>
        <p className="card-text companies_text font-28-20 ">Transform Access To Education</p>
        <p className="card-text font-24-16">
          Create an account to receive our newsletter, course
          recommendations and promotions
        </p>
          <div>
            <nav>
              {/* Links for navigation */}
              <Link to="https://surpass.academy/specially-curated-masters-bundle/#">
                <button className="custom-button mt-2">
                  Click Here
                </button>
              </Link>
            </nav>
          </div>
      </div>
      <img
        className="card_course img-fluid"
        src={coursess}
        alt="Courses"
      />
    </div>
  </div>
</div>

        </div>
      </div>
      <div className="container-fluid" style={{ background: "#F0F7FF" }}>
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-12 col-lg-3">
              <div>
                <img src={SURPASS_ACADEMY_LOGO} alt=''></img>
                <p className="font-20-16 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  consequat mauris Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div>
                <h3>Quick Links</h3>
                  <ul style={{ listStyle: "none", padding: "0px" }}>
                    <li className="footer_padding">
                      <Link className="custom-link font-20-16 ">Courses</Link>
                    </li>
                    <li className="footer_padding">
                      <Link className="custom-link font-20-16 ">Instructors</Link>
                    </li>
                    <li className="footer_padding">
                      <Link className="custom-link font-20-16 ">Placements</Link>
                    </li>
                    <li className="footer_padding">
                      <Link className="custom-link font-20-16 ">FAQ</Link>
                    </li>
                    <li className="footer_padding">
                      <Link className="custom-link font-20-16 ">Contact Us</Link>
                    </li>
                  </ul>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div>
                <h3>For Student</h3>
                  <ul style={{ listStyle: "none", padding: "0px" }}>
                    <li className="footer_padding">
                      <Link href='/admin' className="custom-link font-20-16 ">Dashboard</Link>
                    </li>
                    <li className="footer_padding">
                      <Link className="custom-link font-20-16 ">Profile</Link>
                    </li>
                    <li className="footer_padding">
                      <Link className="custom-link font-20-16 ">Question & Answers</Link>
                    </li>
                    <li className="footer_padding">
                      <Link className="custom-link font-20-16 ">Live Chat</Link>
                    </li>
                    <li className="footer_padding">
                      <Link className="custom-link font-20-16 ">Order History</Link>
                    </li>
                  </ul>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div>
                <h3>Contact Us</h3>
                  <ul style={{ listStyle: "none", padding: "0px" }}>
                    <li className="footer_padding">
                      <span className="d-flex font-20-16 ">
                        <img
                          className="footer_icon"
                          src={address}
                          alt=''
                        ></img>
                        421-425 S.M. Lodha Complex, Udaipur-313001 (Raj.)
                      </span>
                    </li>
                    <li className="footer_padding">
                      <Link className="custom-link font-20-16 d-flex">
                        <img
                          className="footer_icon"
                          src={website}
                          alt=''
                        ></img>
                        https://surpass.academy/
                      </Link>
                    </li>
                    <li className="footer_padding">
                      <Link className="custom-link font-20-16 ">
                        <img
                          className="footer_icon"
                          src={email}
                          alt=''
                        ></img>
                        learn@surpass.co.in
                      </Link>
                    </li>
                    <li className="footer_padding">
                      <Link className="custom-link">
                        <span className="d-flex align-items-center">
                          <img
                            className="footer_icon"
                            src={phone}
                            alt="Phone Icon"
                          />
                          <div className="phone-numbers font-20-16 ">
                            <a href="tel:+919636043246">+91-9636043246</a>
                            <br />
                            <a href="tel:+919636212273">+91-9636212273</a>
                          </div>
                        </span>
                      </Link>
                    </li>
                  </ul>
              </div>
            </div>
          </div>
          <hr className="underline" />
          <footer className="text-white text-center text-lg-start">
            <div className="text-center p-3 d-flex gap-2">
                <Link className="custom-link" href="#!">
                Terms
                </Link>
                <span className="text-black"> | </span>
                <Link className="custom-link" href="#!">
                Privacy
                </Link>
              <div className="ms-auto">
                <p className="text-black">Copyright © 2024 Surpass Prowess India Pvt. Ltd. All Rights Reserved.</p>
            </div>
            </div>
            
          </footer>
        </div>
      </div>
    </div>

  );
 
};


export default Home;
