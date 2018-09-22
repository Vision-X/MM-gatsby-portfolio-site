import React, { Component } from 'react';

const Banner = React.forwardRef(({ siteTitle }, ref) => (
  <section ref={ref} id="banner">
    <div className="inner">
      <div className="logo">
        <span className="icon fa-diamond" />
      </div>
      <h2>{siteTitle}</h2>
      <p>
        Full Stack Web Developer based in Denver, CO.
      </p>
    </div>
  </section>
));

export default Banner;
