import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";

function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".header", { y: 200 }, { y: 0 }, "+=2.5");
    tl.fromTo(
      ".header .container",
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      "-=0"
    );

    // Cleanup function
    return () => tl.kill();
  }, []);
  return (
    <div className=" header land-header sub-bg2">
      <div className="container ontop">
        <div className="caption text-center">
          <h1>

            {/* some <span className="spc-font">text</span> <br/> */}
           
            <img className="logo icon-img-300" src="/dark/assets/imgs/logo-light hd O.png" alt="logo" /> <br/>
            <span className="spc-font"> Empower Your Digital Vision with Us </span> <br/>
          </h1>
          <h6 className="sub-title mt-15">
            Create a Professional Website Today!
          </h6>
        </div>
      </div>
      <div className="imgs">
        <div className="curvtop sub-bg2"></div>
        <div className="curvbotm sub-bg2"></div>
        <div className="main-marq o-hidden mt-100">
          <div className="slide-har st1">
            <div className="box">
              <div className="item">
                <div className="img">
                  <img src="/landing-preview/img/header/project1.jpg" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="/landing-preview/img/header/project2.jpg" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="/landing-preview/img/header/project3.jpg" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="/landing-preview/img/header/project4.jpg" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="/landing-preview/img/header/project5.jpg" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="/landing-preview/img/header/s9.jpg" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="/landing-preview/img/header/project7.jpg" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="/landing-preview/img/header/project8.jpg" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="/landing-preview/img/header/s9.jpg" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="/landing-preview/img/header/s2.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="box">
              <div className="item">
                <div className="img">
                  <img src="/landing-preview/img/header/s1.jpg" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="/landing-preview/img/header/s10.jpg" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="/landing-preview/img/header/s3.jpg" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="/landing-preview/img/header/s4.jpg" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="/landing-preview/img/header/s5.jpg" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="/landing-preview/img/header/s6.jpg" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="/landing-preview/img/header/s7.jpg" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="/landing-preview/img/header/s8.jpg" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="/landing-preview/img/header/s9.jpg" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="/landing-preview/img/header/s2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
