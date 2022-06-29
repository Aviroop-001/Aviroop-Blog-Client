import React from 'react'
import './About.scss';

const About = () => {
  return (
    <div className='About'>
        <div className="aboutApp">
          <div className="title">MERN stack Blog App</div>
          <div className="description">
            <span>Blogetra</span> is a Full stack Blogging App for Blog writers. Its free for all and the developer encourages FREE SPEECH FOR ALL. This website ensures privacy, dynamic components and easy-to-use interface.
          </div>
          <div className="features">
            <h2>Salient Features</h2>
            <ul>
              <li>Multi-User Portal</li>
              <li>Fail-safe Authentication</li>
              <li>Ensured Privacy with encripted passwords</li>
              <li>Attractive UI</li>
              <li>Filter by categories- See what you like</li>
            </ul>
          </div>
          <div className="aboutMe">
            Developed by <span>&#169;AVIROOP BANERJEE</span>
            <p>Undergraduate Student, B.Tech- 2020-2024 <br/>
             Backend Developer</p>
          </div>
        </div>
    </div>
  )
}

export default About