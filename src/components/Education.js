import React from 'react';

function Education() {
  return (
	<div className="section" id="education">
  <div className="container cc-education">
    <div className="h4 text-center mb-4 title">Education</div>
    <div className="card">
      <div className="row">
        <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
          <div className="card-body cc-education-header">
            <p>2023 - In progress</p>
            <div className="h5">Master's Degree</div>
          </div>
        </div>
        <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
          <div className="card-body">
            <div className="h5">Master of Science in Computer Science</div>
            <p className="category">Maharishi International University</p>
                 <p><strong>Key Courses:</strong> Modern Programming Practices, Web Application Programming, Mobile Device Programming, Enterprise Architecture, Web Applications - Architecture and Frameworks</p>
          </div>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="row">
        <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
          <div className="card-body cc-education-header">
            <p>1999 - 2003</p>
            <div className="h5">Bachelor's Degree</div>
          </div>
        </div>
        <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
          <div className="card-body">
            <div className="h5">Bachelor of Science in Computer Science</div>
            <p className="category">Sohag University</p>
            
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
  );
}

export default Education;
