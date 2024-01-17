import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from "react";

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
      window.addEventListener("scroll", () => {
          if (window.scrollY > 400) {
              setShowTopBtn(true);
          } else {
              setShowTopBtn(false);
          }
      });
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
      <Container fluid style={{alignItems:"center"}}>
        <div className="copyright">&copy; 2022 HARIDI. All Right Reserved.</div>
        <div className="socials">
          <ul>
            <li><a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>
        {
          showTopBtn && (
            <div className="go-top" onClick={goTop}></div>
          )
        }
      </Container>
  )
}

export default Footer
