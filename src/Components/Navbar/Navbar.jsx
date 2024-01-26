import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { RiCloseLine } from 'react-icons/ri';
import { HiOutlineMenu } from 'react-icons/hi';
import { Link } from "react-scroll";
import "./Navbar.css";

import Pdf from "../../Images/Resume - MA HAN CHYUAN.pdf";

function Navbar() {

  const [showMobileNav,setShowMobileNav] = useState(false)
  const navbarRef = useRef(null)

  const onResumeClick = () => {
    window.open(Pdf);
  };

  const toggleShowMobileNav = () => {
    setShowMobileNav(!showMobileNav)
  }

  useEffect(()=>{
    const closeNavbarOnOutsideClick= (e) => {
      if(navbarRef.current && !navbarRef.current.contains(e.target)){
        setShowMobileNav(false);
      }
    }

    document.addEventListener("mousedown", closeNavbarOnOutsideClick);

    return () => {
      document.removeEventListener("mousedown", closeNavbarOnOutsideClick);
    };
  },[showMobileNav])

  return (
    <nav id="navbar" >
      <div className={`navbar ${showMobileNav ? "mobile-nav-show" : ""}`} ref={navbarRef}>
        <ul className="nav-links">
          <div>
            <a href="https://github.com/chyuanhan" target="_blank" className="icons" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>

          <div className="navigation">
            <Link to="Home" smooth={true} duration={500} offset={-220}>
            <li>Home</li>
            </Link>
            <Link to="About" smooth={true} duration={500} offset={-80}>
              <li>About</li>
            </Link>
            <Link to="Projects" smooth={true} duration={500} offset={-80}>
              <li>Projects</li>
            </Link>
            <Link to="Contact" smooth={true} duration={500}>
              <li>Contact</li>
            </Link>
          </div>

          <div className="container">
            <a  className="Resume" onClick={onResumeClick}>
              My Resume
            </a>
          </div>
        </ul>
      </div>

      <div className="icon-show">
        {showMobileNav ? (
          <RiCloseLine
            className="icon"
            onClick={() => toggleShowMobileNav(false)}
          />
        ): (
          <HiOutlineMenu
            className="icon"
            onClick={() => toggleShowMobileNav(true)}
          />
        )}
      </div>
      
    </nav>
  );
}

export default Navbar;