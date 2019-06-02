import React from "react";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <footer className="bck_red">
      <Fade delay={500}>
        <div className="font_righteous footer_logo_venue">wmg react-meeting</div>
        <div className="footer_copyright">
          The venue 2019. © All rights reserved.
          <br />
          Made by Kolesnikov Yaroslav
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
