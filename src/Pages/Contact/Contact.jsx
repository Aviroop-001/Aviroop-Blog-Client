import React from 'react'
import './Contact.scss';
import { Email,LinkedIn, Facebook, GitHub, Twitter } from '@material-ui/icons';
import {IconButton} from '@material-ui/core';

const Contact = () => {
  return (
    <div className="Contact">
        <p>Contact &nbsp; <span>Aviroop</span></p>
        <ul className="container">
          <li><Email/>&nbsp; banerjeeaviroop01@gmail.com</li>
          <li><LinkedIn/>&nbsp; Aviroop Banerjee</li>
          <li><Facebook/>&nbsp; Aviroop Banerjee</li>
          <li><GitHub/> &nbsp; Aviroop-001</li>
          <li><Twitter/>&nbsp; Aviroop Banerjee</li>
        </ul>
    </div>
  )
}

export default Contact