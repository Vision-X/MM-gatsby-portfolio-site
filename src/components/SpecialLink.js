import React from 'react';
// import Link from 'gatsby-link';

// TODO: use proptypes and set a default for to
const SpecialLink = ({ children, href }) => (
  <a target="_blank" href={href || '/'} className="special">
    {children}
  </a>
);

export default SpecialLink;
