import React from "react";

function Challenge({ project }) {
  return (
    <section className="section-padding bord-thin-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <h2 className="mb-50">
              The <br /> Challenge
            </h2>
          </div>
          <div className="col-lg-7">
            <div className="text">
              <h5 className="mb-30 fw-400 line-height-40">
                {project.challengeHeader}
              </h5>
              <p className="fz-18">{project.challengeContent}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Challenge;
