import React from 'react';

const Copyright = ({ children }) => (
  <ul className="copyright">
    <li>&copy; {new Date().getFullYear()} MarlowCodes. All rights reserved.</li>
    <li>
      Design Help From: <a href="http://html5up.net">HTML5 UP</a>
    </li>
  </ul>
);

export default Copyright;
