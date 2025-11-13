import { Helmet } from "react-helmet";
import Footer from "../components/home/FooterNew";
import LoadingScreen from "../common/loader";
import Cursor from "../common/cusor";
import ProgressScroll from "../common/ProgressScroll";
import Lines from "../common/Lines";
import Navbar from "../components/home/Navbar";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Stenco IT Solutions</title>
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
                    <h1 className="fz-70 fw-600">Contact Us</h1>
                    <p className="fz-18 mt-20">Let's discuss your next project</p>
                  </div>
                </div>
              </div>
            </header>

            {/* Contact Section */}
            <section className="section-padding">
              <div className="container">
                <div className="row">
                  {/* Contact Info */}
                  <div className="col-lg-5 mb-50">
                    <div className="cont-info">
                      <h3 className="fz-40 fw-600 mb-50">Get In Touch</h3>
                      
                      <div className="item mb-40">
                        <h6 className="mb-15">Address</h6>
                        <p className="fz-15">
                          No: 357, Kandy Road<br />
                          Peliyagoda, Sri Lanka
                        </p>
                      </div>

                      <div className="item mb-40">
                        <h6 className="mb-15">Email</h6>
                        <p className="fz-15">
                          <a href="mailto:info@stencoitsolutions.com">info@stencoitsolutions.com</a>
                        </p>
                      </div>

                      <div className="item mb-40">
                        <h6 className="mb-15">Phone</h6>
                        <p className="fz-15">
                          <a href="tel:+94779976585">+94 77 997 6585</a>
                        </p>
                      </div>

                      <div className="item">
                        <h6 className="mb-15">Follow Us</h6>
                        <div className="social-icons">
                          <a href="#" className="icon" target="_blank" rel="noreferrer">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="#" className="icon ml-2" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"></i>
                          </a>
                          <a href="#" className="icon ml-2" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                          <a href="#" className="icon ml-2" target="_blank" rel="noreferrer">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <div className="col-lg-6 offset-lg-1">
                    <div className="contact-form">
                      <h3 className="fz-40 fw-600 mb-50">Send Us A Message</h3>
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-md-6 mb-30">
                            <input
                              type="text"
                              name="name"
                              placeholder="Your Name *"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 mb-30">
                            <input
                              type="email"
                              name="email"
                              placeholder="Your Email *"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 mb-30">
                            <input
                              type="tel"
                              name="phone"
                              placeholder="Your Phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 mb-30">
                            <input
                              type="text"
                              name="subject"
                              placeholder="Subject *"
                              required
                              value={formData.subject}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-12 mb-30">
                            <textarea
                              name="message"
                              placeholder="Your Message *"
                              required
                              rows="6"
                              value={formData.message}
                              onChange={handleChange}
                              className="form-control"
                            ></textarea>
                          </div>
                          <div className="col-12">
                            <button type="submit" className="butn butn-md butn-bord radius-30 mt-30">
                              <span>Send Message</span>
                            </button>
                          </div>
                        </div>
                      </form>
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
