import React, { Component } from 'react';

const Banner = React.forwardRef(({ siteTitle }, ref) => (
  <section ref={ref} id="banner">
    <div className="inner">
      <div className="logo">
        <span className="icon fa-rebel" />
      </div>
      <h2>{siteTitle}</h2>
      <p>
        I am a Web Developer based in Denver, CO. I love React
        and the future of VR/AR/XR.
      </p>
    </div>
  </section>
));

export default Banner;
