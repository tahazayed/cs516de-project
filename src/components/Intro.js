import React from 'react';
import profilePic from '../img/profile-pic.7166ad3e1f012bca6bd7.jpg';

function Intro() {
  return (
<div className="profile-page">
  <div className="wrapper">
    <div className="page-header page-header-small" filter-color="green">
      <div className="page-header-image" data-parallax="true" style={{backgroundImage: "url('images/cc-bg-1.jpg')"}}></div>
      <div className="container">
        <div className="content-center">
          <div className="cc-profile-image"><a href="#"><img src="images/taha.jpg" alt="Image"/></a></div>
          <div className="h2 title">Taha Elsayed</div>
          <p className="category text-white">Technical Architect</p><a className="btn btn-primary smooth-scroll mr-2" href="#contact" data-aos="zoom-in" data-aos-anchor="data-aos-anchor">Hire Me</a><a className="btn btn-primary" href="Taha_Elsayed.pdf" data-aos="zoom-in" data-aos-anchor="data-aos-anchor">Download CV</a>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="button-container"><a className="btn btn-default btn-round btn-lg btn-icon" href="https://www.linkedin.com/in/tahaelsayed04/" rel="tooltip" title="Follow me on LinkedIn"><i className="fa fa-linkedin"></i></a><a className="btn btn-default btn-round btn-lg btn-icon" href="https://twitter.com/tahaamin" rel="tooltip" title="Follow me on Twitter"><i className="fa fa-twitter"></i></a></div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default Intro;
