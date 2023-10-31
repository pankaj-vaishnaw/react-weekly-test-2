import React from 'react'

import "./about.css"
import RightSidebar from './RightSidebar';
import Navbar from './Navbar';
import Primaryfocus from './Primaryfocus';
import Exploringcreativity1 from './Exploringcreativity1';
import Content from './Content';
import Exploringcreativity2 from './Exploringcreativity2';

const About = () => {
  return (
    <>
    <div className="main">
        <RightSidebar/>
        <div className="right-part">
            {/* navbar */}
            <Navbar/>
            {/* next about us */}
           <Primaryfocus/>
            {/* exporer creativiti section */}
           <Exploringcreativity1/>
            {/* programmimg section */}
           <Content/>
            {/* favorite activity */}

           <Exploringcreativity2/>
        </div>

    </div>
</>
  )
}

export default About