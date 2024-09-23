import { Helmet } from "react-helmet";
import Header from "../components/portfolio/Header";
import Challenge from "../components/portfolio/Challenge";
import Wroks from "../components/portfolio/Wroks";
import Solution from "../components/portfolio/Solution";
import Footer from "../components/home/FooterNew";
import LoadingScreen from "../common/loader";
import Cursor from "../common/cusor";
import ProgressScroll from "../common/ProgressScroll";
import Lines from "../common/Lines";
import { useParams } from "react-router-dom";
import { projectsList } from "../data/portfolios/projects";
import { useState, useEffect } from "react";
import Navbar from "../components/home/Navbar";

export default function Portfolio() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Find the project from the projectsList based on the slug
    const foundProject = projectsList.find((proj) => proj.slug === slug);

    if (foundProject) {
      setProject(foundProject);
    } else {
      // Handle the case where the project is not found
      console.warn(`Project with slug '${slug}' not found.`);
      setProject(null);
    }
  }, [slug]);

  if (!project) {
    return <div>Project not found</div>; // Or show a loading spinner, error message, etc.
  }

  return (
    <>
      <Helmet>
        <title>{project.title || "infolio"}</title>
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
        <script src="/dark/assets/js/scripts.js"></script>
        <script src="/dark/assets/js/smoother-script.js"></script>
      </Helmet>
      <body>
        <LoadingScreen />
        <Cursor />
        <ProgressScroll />
        <Lines />
        <div id="smooth-wrapper">
          <Navbar />
          <div id="smooth-content">
            <main className="main-bg">
              <Header project={project} />
              <Challenge project={project} />
              <Wroks project={project} />
              <Solution project={project} />
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}
