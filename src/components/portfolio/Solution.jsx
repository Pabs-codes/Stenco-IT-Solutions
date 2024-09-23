import React from "react";

function Solution({ project }) {
  return (
    <section className="section-padding bord-thin-top">
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-lg-7">
            <div className="text">
              <h2 className="mb-50">The Solution</h2>
              <h5 className="mb-30 fw-400">{project.solutionHeader}</h5>
              <p className="fz-18">{project.solutionContent}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solution;
