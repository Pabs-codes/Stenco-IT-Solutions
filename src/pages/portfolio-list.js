import { Helmet } from "react-helmet";
import Footer from "../components/home/FooterNew";
import LoadingScreen from "../common/loader";
import Cursor from "../common/cusor";
import ProgressScroll from "../common/ProgressScroll";
import Lines from "../common/Lines";
import Navbar from "../components/home/Navbar";
import StartDemos from "../components/home/StartDemos";

export default function PortfolioList() {
  return (
    <>
      <Helmet>
        <title>Our Portfolio - Stenco IT Solutions</title>
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
            <header className="page-header section-padding pt-0 pb-80 sub-bg2">
              <div className="container mt-0">
                <div className="row">
               
                </div>
              </div>
            </header>

            {/* Portfolio Gallery */}
            <StartDemos />

            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}
