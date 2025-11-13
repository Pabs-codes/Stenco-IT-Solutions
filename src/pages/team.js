import { Helmet } from "react-helmet";
import Footer from "../components/home/FooterNew";
import LoadingScreen from "../common/loader";
import Cursor from "../common/cusor";
import ProgressScroll from "../common/ProgressScroll";
import Lines from "../common/Lines";
import Navbar from "../components/home/Navbar";

export default function Team() {
  const teamMembers = [
    {
      name: "John Doe",
      position: "CEO & Founder",
      image: "/dark/assets/imgs/team/1.jpg",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Jane Smith",
      position: "CTO",
      image: "/dark/assets/imgs/team/2.jpg",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Mike Johnson",
      position: "Lead Developer",
      image: "/dark/assets/imgs/team/3.jpg",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Sarah Williams",
      position: "UI/UX Designer",
      image: "/dark/assets/imgs/team/4.jpg",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "David Brown",
      position: "Project Manager",
      image: "/dark/assets/imgs/team/1.jpg",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Emily Davis",
      position: "Marketing Director",
      image: "/dark/assets/imgs/team/2.jpg",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Team - Stenco IT Solutions</title>
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
                    <h1 className="fz-70 fw-600">Our Team</h1>
                    <p className="fz-18 mt-20">Meet the talented people behind Stenco IT Solutions</p>
                  </div>
                </div>
              </div>
            </header>

            {/* Team Section */}
            <section className="section-padding">
              <div className="container">
                <div className="row justify-content-center mb-80">
                  <div className="col-lg-8 text-center">
                    <h2 className="fz-50 fw-600 mb-30">Experts Who Care</h2>
                    <p className="fz-18">
                      Our team consists of passionate professionals dedicated to delivering 
                      exceptional results. Together, we combine creativity, technical expertise, 
                      and industry knowledge to bring your vision to life.
                    </p>
                  </div>
                </div>

                <div className="row">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="col-lg-4 col-md-6 mb-50">
                      <div className="item text-center">
                        <div className="img mb-30" style={{
                          background: '#f5f5f5',
                          height: '350px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: '10px'
                        }}>
                          <div>
                            <i className="fas fa-user-circle" style={{fontSize: '80px', color: '#ccc', marginBottom: '20px'}}></i>
                            <p style={{color: '#999', fontSize: '16px'}}>Photo Coming Soon</p>
                          </div>
                        </div>
                        <div className="info">
                          <h5 className="mb-10" style={{color: '#999'}}>Team Member</h5>
                          <p className="fz-14 main-color mb-15">{member.position}</p>
                          <div className="social-icons" style={{opacity: 0.5, pointerEvents: 'none'}}>
                            <a href={member.social.linkedin} className="icon" target="_blank" rel="noreferrer">
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href={member.social.twitter} className="icon ml-2" target="_blank" rel="noreferrer">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
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
