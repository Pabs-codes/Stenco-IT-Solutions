import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

function StartSection() {
  // const [hscroll, setHscroll] = useState
  return (
    <>
      <Helmet>
        <script src="/dark/assets/js/hscroll.js"></script>
      </Helmet>

      <section className="works showcases thecontainer  ontop sub-bg">
        <div className="text">
          <h2 className="text-bg">Showcases</h2>
        </div>

        <div className="panel">
          <div className="item">
            <div className="img">
              <img src="/landing-preview/img/showcase/1.jpg" alt="" />
            </div>
            <div className="text-center">
              <h5>Digital Banners</h5>
            </div>
            <a
              href="/dark/showcase-fullscreen"
              className="plink"
              target="_blank"
            ></a>
          </div>
        </div>

        <div className="panel">
          <div className="item">
            <div className="img">
              <img src="/landing-preview/img/showcase/16.jpg" alt="" />
            </div>
            <div className="text-center">
              <h5>Web Development</h5>
            </div>
            <a
              href="/dark/showcase-fullscreen"
              className="plink"
              target="_blank"
            ></a>
          </div>
        </div>

        <div className="panel">
          <div className="item">
            <div className="img">
              <img src="/landing-preview/img/showcase/17.jpg" alt="" />
            </div>
            <div className="text-center">
              <h5>Mobile Apps</h5>
            </div>
            <a
              href="/dark/showcase-fullscreen"
              className="plink"
              target="_blank"
            ></a>
          </div>
        </div>

        <div className="panel">
          <div className="item">
            <div className="img">
              <img src="/landing-preview/img/showcase/2.jpg" alt="" />
            </div>
            <div className="text-center">
              <h5>Business Cards</h5>
            </div>
            <a
              href="/dark/showcase-carousel"
              className="plink"
              target="_blank"
            ></a>
          </div>
        </div>

        <div className="panel">
          <div className="item">
            <div className="img">
              <img src="/landing-preview/img/showcase/12.jpg" alt="" />
            </div>
            <div className="text-center">
              <h5>Logo Designing </h5>
            </div>
            <a
              href="/dark/showcase-interactive-vertical"
              className="plink"
              target="_blank"
            ></a>
          </div>
        </div>hnk

        <div className="panel">
          <div className="item">
            <div className="img">
              <img src="/landing-preview/img/showcase/3.jpg" alt="" />
            </div>
            <div className="text-center">
              <h5>Customized Thumbnails</h5>
            </div>
            <a
              href="/dark/showcase-half-slider"
              className="plink"
              target="_blank"
            ></a>
          </div>
        </div>

        <div className="panel">
          <div className="item">
            <div className="img">
              <img src="/landing-preview/img/showcase/4.jpg" alt="" />
            </div>
            <div className="text-center">
              <h5>Digital Annoucements</h5>
            </div>
            <a
              href="/dark/showcase-interactive-full"
              className="plink"
              target="_blank"
            ></a>
          </div>
        </div>

        <div className="panel">
          <div className="item">
            <div className="img">
              <img src="/landing-preview/img/showcase/5.jpg" alt="" />
            </div>
            <div className="text-center">
              <h5>Interactive Center</h5>
            </div>
            <a
              href="/dark/showcase-interactive-center"
              className="plink"
              target="_blank"
            ></a>
          </div>
        </div>

        <div className="panel">
          <div className="item">
            <div className="img">
              <img src="/landing-preview/img/showcase/6.jpg" alt="" />
            </div>
            <div className="text-center">
              <h5>Reels </h5>
            </div>
            <a
              href="/dark/showcase-interactive-vertical"
              className="plink"
              target="_blank"
            ></a>
          </div>
        </div>

        <div className="panel">
          <div className="item">
            <div className="img">
              <img src="/landing-preview/img/showcase/7.jpg" alt="" />
            </div>
            <div className="text-center">
              <h5>Find Your Target Audience </h5>
            </div>
            <a
              href="/dark/showcase-interactive-vertical"
              className="plink"
              target="_blank"
            ></a>
          </div>
        </div>

        <div className="panel">
          <div className="item">
            <div className="img">
              <img src="/landing-preview/img/showcase/8.jpg" alt="" />
            </div>
            <div className="text-center">
              <h5>Art & Design </h5>
            </div>
            <a
              href="/dark/showcase-interactive-vertical"
              className="plink"
              target="_blank"
            ></a>
          </div>
        </div>

        <div className="panel">
          <div className="item">
            <div className="img">
              <img src="/landing-preview/img/showcase/9.jpg" alt="" />
            </div>
            <div className="text-center">
              <h5>Intro Videos </h5>
            </div>
            <a
              href="/dark/showcase-interactive-vertical"
              className="plink"
              target="_blank"
            ></a>
          </div>
        </div>

        <div className="panel">
          <div className="item">
            <div className="img">
              <img src="/landing-preview/img/showcase/14.jpg" alt="" />
            </div>
            <div className="text-center">
              <h5>Vlogs </h5>
            </div>
            <a
              href="/dark/showcase-interactive-vertical"
              className="plink"
              target="_blank"
            ></a>
          </div>


        </div>



        <div className="panel">
          <div className="item">
            <div className="img">
              <img src="/landing-preview/img/showcase/13.jpg" alt="" />
            </div>
            <div className="text-center">
              <h5>Video Editing </h5>
            </div>
            <a
              href="/dark/showcase-interactive-vertical"
              className="plink"
              target="_blank"
            ></a>
          </div>
        </div>


      
      </section>
    </>
  );
}

export default StartSection;
