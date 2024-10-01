

// 'use client';
// import React, { useLayoutEffect } from 'react';
// import { gsap } from 'gsap';
// function Header() {
//   useLayoutEffect(() => {
//     const tl = gsap.timeline();
//     tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
//     tl.fromTo(
//       '.header .container',
//       { opacity: 0, translateY: 40 },
//       { opacity: 1, translateY: 0 },
//       '-=0'
//     );

//     // Cleanup function
//     return () => tl.kill();
//   }, []);
//   return (
//     <div className="header startup-header" data-scroll-index="0">
//       <div
//         className="valign bg-img"
//         data-background="/dark/assets/imgs/background/1.jpg"
//         data-overlay-dark="5"
//       >
//         <div className="container pt-40 slogan">
//           <div className="caption">
//             <div className="lg-text fw-600">
//               <div className="text d-flex align-items-center">
//                 <span>We create</span>
//               </div>
//               <div className="text">impactful</div>
//               <div className="text">digital experiences</div>
//             </div>
//             <p>
//               We combine forward-thinking design with modern technology to tell
//               stories that transform and grow our partners brands.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;


'use client';
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Header() {
  const videoRef = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    // Cleanup function
    return () => tl.kill();
  }, []);

  return (
    <div className="header startup-header" data-scroll-index="0" style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <div className="video-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
            transform: 'translate(-50%, -50%)',
            objectFit: 'cover',
          }}
        >
          <source src="/dark/assets/imgs/background/bgvid3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // This creates the overlay effect
          }}
        />
      </div>
      <div className="valign" style={{ position: 'relative', zIndex: 1, height: '100%' }}>
        <div className="container pt-40 slogan">
          <div className="caption">
            <div className="lg-text fw-600">
              <div className="text d-flex align-items-center">
                <span>We create</span>
              </div>
              <div className="text">impactful</div>
              <div className="text">digital experiences</div>
            </div>
            <p>
              We combine forward-thinking design with modern technology to tell
              stories that transform and grow our partners brands.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
