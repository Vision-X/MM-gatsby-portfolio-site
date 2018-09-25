import React from 'react';

const ContactInfo = () => (
  <ul className="contact">
    {/*<li className="fa-home">
      Untitled Inc
      <br />
      1234 Somewhere Road Suite #2894
      <br />
      Nashville, TN 00000-0000
    </li>*/}
    {/*<li className="fa-phone">(000) 000-0000</li>*/}
    <li className="fa-envelope">
      <a href="mailto:michael.s.marlow@gmail.com">michael.s.marlow@gmail.com</a>
    </li>
    <li className="fa-twitter">
      <a href="https://twitter.com/marlowcodes" target="_blank">twitter.com/marlowcodes</a>
    </li>
    <li className="fa-github">
      <a href="https://github.com/Vision-X" target="_blank">github.com/Vision-X</a>
    </li>
    <li className="fa-instagram">
      <a href="https://instagram.com/mikemarlow" target="_blank">instagram.com/mikemarlow</a>
    </li>
  </ul>
);

export default ContactInfo;
