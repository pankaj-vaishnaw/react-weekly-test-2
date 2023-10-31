import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className="navBar-container">
                <div className="navBar-left-part">
                    <p>About me</p>
                </div>
                <div className="navBar-right-part">
                    <a href="./About.js" style={{ color: "rgb(225, 198, 24)" }}>About</a>
                    <a href="./">Certificate</a>
                    <a href="./Projects.js">Projects</a>
                    <a href="./">Contacts</a>
                </div>
            </div>
    </>
  )
}

export default Navbar