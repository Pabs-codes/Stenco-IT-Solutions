import { Helmet } from "react-helmet";
import LoadingScreen from "../common/loader";
import Marquee from "../components/home/Marquee";

export default function HomeMain() {
  return (
    <>
      <Helmet>
        <title>Webpage not found</title>
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
      </Helmet>
      <body>
        <LoadingScreen />

        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main className="main-bg o-hidden mt-140">
              <Marquee />
            </main>
          </div>
        </div>
      </body>
    </>
  );
}
