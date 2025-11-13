import React, { useEffect, useLayoutEffect } from 'react';
import initIsotope from '../../common/initIsotope';

function StartDemos() {
  useLayoutEffect(() => {
    initIsotope('gallery');
  }, []);
  return (
    <section
      className="demos section-padding pt-80 sub-bg2"
      data-scroll-index="0"
    >
      <div className="container">
        <div className="sec-head mb-10 text-center ">
          <h6 className="sub-title main-color mb-25 fz-30">Our Portfolio</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            
            <div className="ml-auto">
              <div className="filtering">
                <div className="filter">
                  <span dataFilter="*" className="active">
                    All
                  </span>
                  <span dataFilter=".dark">Web</span>
                 
                  <span dataFilter=".software">Custom Softwares</span>

                  <span dataFilter=".smm">Social Media Marketing</span>
                  <span dataFilter=".content">Content Creating</span>
                  <span dataFilter=".video">Video Editing</span>
                  <span dataFilter=".mobile">Mobile App</span>
                   {/* <span dataFilter=".design">Designs</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery row md-marg">
          {/* Web Development Projects */}
       
        

          {/* Additional Web Projects (Screenshots) */}
          <div className="col-lg-3 col-md-6 items dark">
            <div className="item text-center">
              <a href="/portfolio/web-project-1" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/header/project1.jpg" alt="Project 1" />
                </div>
                <h6 className="mt-15">Company Portfolio</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items dark">
            <div className="item text-center">
              <a href="/portfolio/web-project-2" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/header/project2.jpg" alt="Project 2" />
                </div>
                <h6 className="mt-15">Company Portfolio</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items dark">
            <div className="item text-center">
              <a href="/portfolio/web-project-3" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/header/project3.jpg" alt="Project 3" />
                </div>
                <h6 className="mt-15">Company Portfolio</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items dark">
            <div className="item text-center">
              <a href="/portfolio/web-project-4" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/header/project4.jpg" alt="Project 4" />
                </div>
                <h6 className="mt-15">Company Portfolio</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items dark">
            <div className="item text-center">
              <a href="/portfolio/web-project-5" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/header/project5.jpg" alt="Project 5" />
                </div>
                <h6 className="mt-15">E - Commerce</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items dark">
            <div className="item text-center">
              <a href="/portfolio/web-project-7" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/header/project7.jpg" alt="Project 7" />
                </div>
                <h6 className="mt-15">Company Portfolio</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items dark">
            <div className="item text-center">
              <a href="/portfolio/web-project-8" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/header/project8.jpg" alt="Project 8" />
                </div>
                <h6 className="mt-15">E - Commerce</h6>
              </a>
            </div>
          </div>

          {/* "s" Series Screenshots */}
          
        
          <div className="col-lg-3 col-md-6 items dark">
            <div className="item text-center">
              <a href="/portfolio/web-s10" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/header/s10.jpg" alt="Screenshot s10" />
                </div>
                <h6 className="mt-15">Designer Portfolio</h6>
              </a>
            </div>
          </div>

            <div className="col-lg-3 col-md-6 items dark">
            <div className="item text-center">
              <a href="/portfolio/real-estate-portal" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/04.jpg" alt="" />
                </div>
                <h6 className="mt-15">Real Estate Portal</h6>
              </a>
            </div>
          </div>

          {/* Design Projects */}
          <div className="col-lg-3 col-md-6 items design">
            <div className="item text-center">
              <a href="/portfolio/brand-identity" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/1.jpg" alt="" />
                </div>
                <h6 className="mt-15">Brand Identity Design</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items design">
            <div className="item text-center">
              <a href="/portfolio/ui-ux-design" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/2.jpg" alt="" />
                </div>
                <h6 className="mt-15">UI/UX Design Portfolio</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items design">
           
          </div>
          <div className="col-lg-3 col-md-6 items design">
            <div className="item text-center">
              <a href="/portfolio/social-media-graphics" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/4.jpg" alt="" />
                </div>
                <h6 className="mt-15">Social Media Graphics</h6>
              </a>
            </div>
          </div>

          {/* Custom Software */}
          <div className="col-lg-3 col-md-6 items software">
            <div className="item text-center">
              <a href="https://crystalbiz.stencoitsolutions.com" target="_blank" rel="noreferrer">
                <div className="img">
                  <img src="/landing-preview/img/demos/All in One Sales & Inventory Platform.png" alt="" />
                </div>
                <h6 className="mt-15">All in One Sales & Inventory Platform</h6>
                {/* <p className="text-sm mt-2" style={{fontSize: '12px', color: '#888'}}>Try Demo Now!</p> */}
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items software">
            <div className="item text-center">
              <a href="/portfolio/inventory-system" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/Inventory Management System.png" alt="" />
                </div>
                <h6 className="mt-15">Inventory Management System</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items software">
            <div className="item text-center">
              <a href="/portfolio/pos-system" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/Cloud POS System.png" alt="" />
                </div>
                <h6 className="mt-15">Cloud POS System</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items software">
            <div className="item text-center">
              <a href="/portfolio/crm-software" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/CRM Software Solution.png" alt="" />
                </div>
                <h6 className="mt-15">CRM Software Solution</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items software">
            <div className="item text-center">
              <a href="/portfolio/booking-system" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/Online Booking Platform.png" alt="" />
                </div>
                <h6 className="mt-15">Online Booking Platform</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items software">
            <div className="item text-center">
              <a href="/portfolio/erp-system" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/Enterprise Resource Planning.png" alt="" />
                </div>
                <h6 className="mt-15">Enterprise Resource Planning</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items software">
            <div className="item text-center">
              <a href="/portfolio/warehouse-management" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/Warehouse Management System.png" alt="" />
                </div>
                <h6 className="mt-15">Warehouse Management System</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items software">
            <div className="item text-center">
              <a href="/portfolio/hr-management" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/HR Management Software.png" alt="" />
                </div>
                <h6 className="mt-15">HR Management Software</h6>
              </a>
            </div>
          </div>

          {/* Social Media Marketing */}
          <div className="col-lg-3 col-md-6 items smm">
            <div className="item text-center">
              <div className="img">
                <img src="/landing-preview/img/SMM/9.png" alt="Content 1" />
              </div>
              <h6 className="mt-15">Stenco Machinery - FB Post</h6>
              <p className="text-sm" style={{fontSize: '11px', color: '#fdfafa', marginTop: '8px'}}>
                <a href="https://www.facebook.com/stencomachinery/" target="_blank" rel="noreferrer" style={{color: '#666'}}>
                  Click here to view Page
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items smm">
            <div className="item text-center">
              <div className="img">
                <img src="/landing-preview/img/SMM/10.png" alt="Content 2" />
              </div>
              <h6 className="mt-15">CMI Roofing</h6>
              <p className="text-sm" style={{fontSize: '11px', color: '#666', marginTop: '8px'}}>
                <a href="https://www.facebook.com/profile.php?id=61576609232717" target="_blank" rel="noreferrer" style={{color: '#666'}}>
                  Click here to view Page
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items smm">
            <div className="item text-center">
              <div className="img">
                <img src="/landing-preview/img/SMM/11.png" alt="Content 3" />
              </div>
              <h6 className="mt-15">CMI Roofing</h6>
              <p className="text-sm" style={{fontSize: '11px', color: '#666', marginTop: '8px'}}>
                <a href="https://www.facebook.com/stencoitc/posts/pfbid0vxKHB68VWvSxhLbcPLCzaW3iZpphXKTQSd5VrRBRXrUBD7rgaC7iD2Bnx654dAp8l" target="_blank" rel="noreferrer" style={{color: '#666'}}>
                  Click here to view Page
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items smm">
            <div className="item text-center">
              <div className="img">
                <img src="/landing-preview/img/SMM/12.png" alt="Content 4" />
              </div>
              <h6 className="mt-15">Esstee Singapore </h6>
              <p className="text-sm" style={{fontSize: '11px', color: '#666', marginTop: '8px'}}>
                <a href="https://www.facebook.com/stencoitc/posts/pfbid02SzDYue9o1ic3tNUt49HJdYgmD9rMh89uEomyjd22oPtozD6KML9Ngqjk8gi8dS68l" target="_blank" rel="noreferrer" style={{color: '#666'}}>
                  Click here to view Page
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items smm">
            <div className="item text-center">
              <div className="img">
                <img src="/landing-preview/img/SMM/13.png" alt="Content 5" />
              </div>
              <h6 className="mt-15">Holiday Wishes</h6>
              <p className="text-sm" style={{fontSize: '11px', color: '#666', marginTop: '8px'}}>
                <a href="https://www.facebook.com/stencomachinery/videos/1843171793289846/" target="_blank" rel="noreferrer" style={{color: '#666'}}>
                  Industrial Machinery - Video
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items smm">
            <div className="item text-center">
              <div className="img">
                <img src="/landing-preview/img/SMM/14.png" alt="Content 6" />
              </div>
              <h6 className="mt-15">Platinum Collections </h6>
              <p className="text-sm" style={{fontSize: '11px', color: '#666', marginTop: '8px'}}>
                <a href="https://www.facebook.com/stencomachinery/posts/pfbid02Lhg4YNVBxJcaB6A3XDNnMPjDgfDUByZ3Woib998Er3Bxm4HjqAssrZEje6CxFMgel" target="_blank" rel="noreferrer" style={{color: '#666'}}>
                  Click here to view Page
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items smm">
            <div className="item text-center">
              <div className="img">
                <img src="/landing-preview/img/SMM/15.png" alt="Content 7" />
              </div>
              <h6 className="mt-15">Content 7</h6>
              <p className="text-sm" style={{fontSize: '11px', color: '#666', marginTop: '8px'}}>
                <a href="https://www.facebook.com/lotusluxurystays/videos/718140117781459/" target="_blank" rel="noreferrer" style={{color: '#666'}}>
                  Click here to view Page
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items smm">
            <div className="item text-center">
              <div className="img">
                <img src="/landing-preview/img/SMM/16.png" alt="Content 8" />
              </div>
              <h6 className="mt-15">Content 8</h6>
              <p className="text-sm" style={{fontSize: '11px', color: '#666', marginTop: '8px'}}>
                <a href="https://www.facebook.com/lotusluxurystays/posts/pfbid0QNrTFCdRZhpRMjJckTX1NSK8g8PCqLaEXeAtUA6VJXxN1dzXEyzbDBfhnx7CWELdl" target="_blank" rel="noreferrer" style={{color: '#666'}}>
                  Click here to view Page
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items smm">
            <div className="item text-center">
              <div className="img">
                <img src="/landing-preview/img/SMM/17.png" alt="Content 9" />
              </div>
              <h6 className="mt-15">Content 9</h6>
              <p className="text-sm" style={{fontSize: '11px', color: '#666', marginTop: '8px'}}>
                <a href="https://www.facebook.com/essteesingapore/posts/pfbid02feDcjmj4aqWMxysjQgk9o8wh5Qxyw5FFuqJkziCxVSesvimJkWF4QWbiSCjUDnoul" target="_blank" rel="noreferrer" style={{color: '#666'}}>
                  Click here to view Page
                </a>
              </p>
            </div>
          </div>
          
      

          {/* Content Creating */}
          <div className="col-lg-3 col-md-6 items content">
            <div className="item text-center">
              <a href="/portfolio/ai-content-writing" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/010.jpg" alt="" />
                </div>
                <h6 className="mt-15">AI-Powered Content Writing</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items content">
            <div className="item text-center">
              <a href="/portfolio/blog-content" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/1.jpg" alt="" />
                </div>
                <h6 className="mt-15">Blog Content Writing</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items content">
            <div className="item text-center">
              <a href="/portfolio/copywriting" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/2.jpg" alt="" />
                </div>
                <h6 className="mt-15">Copywriting Services</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items content">
            <div className="item text-center">
              <a href="/portfolio/seo-content" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/3.jpg" alt="" />
                </div>
                <h6 className="mt-15">SEO Content Optimization</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items content">
            <div className="item text-center">
              <a href="/portfolio/ai-social-captions" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/4.jpg" alt="" />
                </div>
                <h6 className="mt-15">AI Social Media Captions</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items content">
            <div className="item text-center">
              <a href="/portfolio/product-descriptions" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/5.jpg" alt="" />
                </div>
                <h6 className="mt-15">Product Descriptions</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items content">
            <div className="item text-center">
              <a href="/portfolio/email-marketing-copy" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/6.jpg" alt="" />
                </div>
                <h6 className="mt-15">Email Marketing Copy</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items content">
            <div className="item text-center">
              <a href="/portfolio/ai-article-generation" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/7.jpg" alt="" />
                </div>
                <h6 className="mt-15">AI Article Generation</h6>
              </a>
            </div>
          </div>

          {/* Video Editing */}
          <div className="col-lg-3 col-md-6 items video">
            <div className="item text-center">
              <a href="/portfolio/promo-video" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/8.jpg" alt="" />
                </div>
                <h6 className="mt-15">Promotional Video Editing</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items video">
            <div className="item text-center">
              <a href="/portfolio/youtube-content" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/9.jpg" alt="" />
                </div>
                <h6 className="mt-15">YouTube Content Editing</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items video">
            <div className="item text-center">
              <a href="/portfolio/commercial-ads" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/10.jpg" alt="" />
                </div>
                <h6 className="mt-15">Commercial Ad Production</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items video">
            <div className="item text-center">
              <a href="/portfolio/explainer-videos" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/01.jpg" alt="" />
                </div>
                <h6 className="mt-15">Explainer Videos</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items video">
            <div className="item text-center">
              <a href="/portfolio/social-video-ads" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/02.jpg" alt="" />
                </div>
                <h6 className="mt-15">Social Media Video Ads</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items video">
            <div className="item text-center">
              <a href="/portfolio/corporate-videos" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/03.jpg" alt="" />
                </div>
                <h6 className="mt-15">Corporate Videos</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items video">
            <div className="item text-center">
              <a href="/portfolio/product-demos" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/04.jpg" alt="" />
                </div>
                <h6 className="mt-15">Product Demo Videos</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items video">
            <div className="item text-center">
              <a href="/portfolio/animation-videos" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/05.jpg" alt="" />
                </div>
                <h6 className="mt-15">Animation & Motion Graphics</h6>
              </a>
            </div>
          </div>

          {/* Mobile App */}
          <div className="col-lg-3 col-md-6 items mobile">
            <div className="item text-center">
              <a href="/portfolio/delivery-app" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/06.jpg" alt="" />
                </div>
                <h6 className="mt-15">Food Delivery App</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items mobile">
            <div className="item text-center">
              <a href="/portfolio/fitness-app" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/07.jpg" alt="" />
                </div>
                <h6 className="mt-15">Fitness Tracking App</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items mobile">
            <div className="item text-center">
              <a href="/portfolio/ecommerce-app" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/08.jpg" alt="" />
                </div>
                <h6 className="mt-15">E-Commerce Mobile App</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items mobile">
            <div className="item text-center">
              <a href="/portfolio/banking-app" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/09.jpg" alt="" />
                </div>
                <h6 className="mt-15">Banking & Finance App</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items mobile">
            <div className="item text-center">
              <a href="/portfolio/education-app" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/010.jpg" alt="" />
                </div>
                <h6 className="mt-15">Education Learning App</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items mobile">
            <div className="item text-center">
              <a href="/portfolio/social-networking-app" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/1.jpg" alt="" />
                </div>
                <h6 className="mt-15">Social Networking App</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items mobile">
            <div className="item text-center">
              <a href="/portfolio/ride-booking-app" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/2.jpg" alt="" />
                </div>
                <h6 className="mt-15">Ride Booking App</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items mobile">
            <div className="item text-center">
              <a href="/portfolio/healthcare-app" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/3.jpg" alt="" />
                </div>
                <h6 className="mt-15">Healthcare & Telemedicine App</h6>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StartDemos;
