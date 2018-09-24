import React, { Component } from 'react';

const Banner = React.forwardRef(({ siteTitle }, ref) => (
  <section ref={ref} id="banner">
    <div className="inner">
      <div className="logo">
        <span className="icon fa-diamond" />
      </div>
      <h2>{siteTitle}</h2>
      <p>
        I am a Web Developer based in Denver, CO. I love React
        and the future potential of XR.
      </p>
    </div>
  </section>
));

export default Banner;
