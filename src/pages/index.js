"use client";
import { Helmet } from "react-helmet";
import Lines from "../common/Lines";
import ProgressScroll from "../common/ProgressScroll";
import Cursor from "../common/cusor";
import LoadingScreen from "../common/loader";
import Amazing from "../components/home/Amazing";
import Footer from "../components/home/FooterNew";
import Testimonials from "../components/home/Testimonials";
import Updates from "../components/home/Updates";
import Services from "../components/home/Services";
import Contact from "../components/home/Contact";
import FooterLine from "../components/home/Footer";
import Header from "../components/home/Header";

import Navbar from "../components/home/Navbar";
import Portfolio from "../components/home/Portfolio";
import StartSection from "../components/home/StartSection";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Stenco IT Solutions</title>
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
        <link
          rel="stylesheet"
          type="text/css"
          href="/landing-preview/css/preview-style.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/dark/assets/css/satoshi.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght..200;300;400;500;600;700&display=swap"
        />
        <script src="/dark/assets/js/scripts.js"></script>
        <script src="/dark/assets/js/smoother-script.js"></script>
      </Helmet>
      <body className="sub-bg">
        <LoadingScreen />
        <Cursor />
        <ProgressScroll />
        <Lines />
        <Navbar />

        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main className="sub-bg">
              <Header />
              <Services />
              <Portfolio />
              <Amazing />
              <StartSection/>
              <Updates />
              <Testimonials />
              <Contact />
              <Footer />
              <FooterLine />
            </main>
          </div>
        </div>
      </body>
    </>
  );
}
