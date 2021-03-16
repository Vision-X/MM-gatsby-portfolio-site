import React, { Component } from 'react';

const Banner = React.forwardRef(({ siteTitle }, ref) => (
  <section ref={ref} id="banner">
    <div className="inner">
      <div className="logo">
        <span className="icon fa-rebel" />
      </div>
      <h2>{siteTitle}</h2>
      <p>
        I am a Web Developer based in Atlanta, GA. I love solving problems
        with code.
      </p>
    </div>
  </section>
));

export default Banner;
