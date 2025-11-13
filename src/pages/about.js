import { Helmet } from "react-helmet";
import Footer from "../components/home/FooterNew";
import LoadingScreen from "../common/loader";
import Cursor from "../common/cusor";
import ProgressScroll from "../common/ProgressScroll";
import Lines from "../common/Lines";
import Navbar from "../components/home/Navbar";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us - Stenco IT Solutions</title>
        <link rel="icon" href="/dark/imgs/favicon.ico" />
        <link rel="shortcut icon" href="/dark/imgs/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/dark/assets/css/plugins.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/dark/assets/css/style.css"
        />
      </Helmet>
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Lines />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="main-bg o-hidden">
            <Navbar />
            
            {/* Page Header */}
            <header className="page-header section-padding pt-80 pb-80 sub-bg2">
              <div className="container mt-80">
                <div className="row">
                  <div className="col-12 text-center">
                    <h1 className="fz-70 fw-600">About Us</h1>
                    <p className="fz-18 mt-20">Transforming Ideas Into Digital Reality</p>
                  </div>
                </div>
              </div>
            </header>

            {/* About Content */}
            <section className="section-padding">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="text-center mb-80">
                      <h2 className="fz-50 fw-600 mb-30">Who We Are</h2>
                      <p className="fz-18 line-height-2">
                        Stenco IT Solutions is a leading technology company specializing in web development, 
                        mobile applications, custom software solutions, and digital marketing. We are passionate 
                        about delivering innovative solutions that drive business growth and digital transformation.
                      </p>
                    </div>

                    <div className="row mt-80">
                      <div className="col-md-6 mb-50">
                        <div className="item">
                          <div className="icon-img-60 mb-20">
                            <img src="/dark/assets/imgs/serv-icons/1.png" alt="" />
                          </div>
                          <h4 className="mb-15">Our Mission</h4>
                          <p className="fz-15">
                            To empower businesses with cutting-edge technology solutions that enhance 
                            efficiency, drive innovation, and create lasting value for our clients.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6 mb-50">
                        <div className="item">
                          <div className="icon-img-60 mb-20">
                            <img src="/dark/assets/imgs/serv-icons/2.png" alt="" />
                          </div>
                          <h4 className="mb-15">Our Vision</h4>
                          <p className="fz-15">
                            To be the most trusted technology partner for businesses worldwide, recognized 
                            for our excellence, innovation, and commitment to client success.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="row mt-50">
                      <div className="col-md-4 mb-30 text-center">
                        <h2 className="fz-60 fw-700 main-color">15+</h2>
                        <p className="fz-16">Years Experience</p>
                      </div>
                      <div className="col-md-4 mb-30 text-center">
                        <h2 className="fz-60 fw-700 main-color">200+</h2>
                        <p className="fz-16">Projects Completed</p>
                      </div>
                      <div className="col-md-4 mb-30 text-center">
                        <h2 className="fz-60 fw-700 main-color">50+</h2>
                        <p className="fz-16">Happy Clients</p>
                      </div>
                    </div>

                    <div className="mt-80">
                      <h3 className="fz-40 fw-600 mb-30 text-center">Our Core Values</h3>
                      <div className="row">
                        <div className="col-md-6 mb-30">
                          <div className="item">
                            <h5 className="mb-10">✓ Innovation</h5>
                            <p className="fz-14">We stay ahead with the latest technologies and creative solutions.</p>
                          </div>
                        </div>
                        <div className="col-md-6 mb-30">
                          <div className="item">
                            <h5 className="mb-10">✓ Quality</h5>
                            <p className="fz-14">We deliver excellence in every project, big or small.</p>
                          </div>
                        </div>
                        <div className="col-md-6 mb-30">
                          <div className="item">
                            <h5 className="mb-10">✓ Integrity</h5>
                            <p className="fz-14">We build trust through transparency and honest communication.</p>
                          </div>
                        </div>
                        <div className="col-md-6 mb-30">
                          <div className="item">
                            <h5 className="mb-10">✓ Client-Centric</h5>
                            <p className="fz-14">Your success is our priority. We listen, understand, and deliver.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}
