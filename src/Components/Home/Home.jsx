import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";
import { Link } from "react-scroll";

import "./Home.css";

function Home() {

  const typewriterRef = useRef(null);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      strings: [
        "I am a Front-end developer",
        "I like coding",
        "I enjoy watching shows",
        "Keep scrolling!",
      ],
      autoStart: true,
      loop: true,
      typeSpeed: 30,
      deleteSpeed: 50,
    });

    typewriterRef.current.style.display = "flex";
    typewriterRef.current.style.flexWrap = "wrap";

    return () => {
      typewriter.stop();
    };
  }, []);
  return (
    <section id="Home">
      <div className="Introduction">
        <h1>Hey, I'm</h1>
        <h1>Ma Han Chyuan</h1>
        <h2>
          <span ref={typewriterRef}></span>
        </h2>
        <p>
          I'm a self-taught enthusiast in front-end development seeking many ways to improve my skills through problem-solving and creating various projects! Scroll down to learn more about me.
        </p>
        <Link to="Contact"  smooth={true} duration={900}>
          <button>Contact Me</button>
        </Link>
      </div>
    </section>
    
  )
}

export default Home