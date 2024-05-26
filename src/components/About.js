import React from 'react';

function About() {
  return (
 <div className="section" id="about">
  <div className="container">
    <div className="card" data-aos="fade-up" data-aos-offset="10">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="card-body">
            <div className="h4 mt-0 title">About</div>
            <p>Hello! I am Taha Elsayed. Technical Architect with 20+ years of experience in software development and architecture, specializing in public cloud, .NET, and REST technologies. I have designed and implemented complex and innovative solutions for clients in various industries, such as telecom, healthcare, property taxes, and biotech, using Azure and AWS cloud platforms.</p>
            <p>In my most recent role at Integrant, Inc., I advised on the technologies, architecture, and best practices for digital transformation projects. I led and supported multiple teams to ensure high performance, quality, and alignment with business goals. I have a PMP diploma, an MCAD certification, and a pre-master degree in computer software engineering. I am currently pursuing a master's degree in computer science at Maharishi International University.</p>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="card-body">
            <div className="h4 mt-0 title">Basic Information</div>
            <div className="row">
              <div className="col-sm-4"><strong className="text-uppercase">Age:</strong></div>
              <div className="col-sm-8">42</div>
            </div>
            <div className="row mt-3">
              <div className="col-sm-4"><strong className="text-uppercase">Email:</strong></div>
              <div className="col-sm-8">taha.elsayed04@outlook.com</div>
            </div>
            <div className="row mt-3">
              <div className="col-sm-4"><strong className="text-uppercase">Phone:</strong></div>
              <div className="col-sm-8">+1641-233-9470</div>
            </div>
            <div className="row mt-3">
              <div className="col-sm-4"><strong className="text-uppercase">Address:</strong></div>
              <div className="col-sm-8">Florence, Kentucky, U.S.A</div>
            </div>
            <div className="row mt-3">
              <div className="col-sm-4"><strong className="text-uppercase">Language:</strong></div>
              <div className="col-sm-8">English, Arabic</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default About;
