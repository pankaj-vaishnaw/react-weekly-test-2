import React from 'react'
import ProgressBar from "react-bootstrap/ProgressBar";

const Content = () => {
  return (
    <>
     <p className="primary-content">Programming Languages</p>
            <div className="programmimg-section">
                <div>
                    <label>Java Script 80%</label>
                    <ProgressBar
                        className="progress"
                        striped
                        variant="warning"
                        now={80}
                    />
                    <label>CSS 60%</label>
                    <ProgressBar variant="warning" now={60} />
                    <label>Java 60%</label>
                    <ProgressBar striped variant="warning" now={60} />
                    <label>HTML 100%</label>
                    <ProgressBar striped variant="warning" now={100} />
                    
                </div>
            </div>
            {/* Human Language section */}
            <p className="primary-content">Human Languages</p>
            <div className="programmimg-section">
                <div>
                    <label>Hindi 100%</label>
                    <ProgressBar
                        className="progress"
                        striped
                        variant="warning"
                        now={100}
                    />
                    <label>English 80%</label>
                    <ProgressBar striped variant="warning" now={80} />
                    <label>Kannada 30%</label>
                    <ProgressBar striped variant="warning" now={30} />
                    
                </div>
            </div>
            {/* development skills */}
            <p className="primary-content">Development Skills</p>
            <div className="development-section">
                <div>
                    <div class="marquee">
                        <div className="scrolla-bar">
                            <img src="https://oktayshakirov.com/assets/images/npm.png" alt='hello'></img>
                            <img src="https://oktayshakirov.com/assets/images/git.png" alt='hello'></img>
                            <img src="https://oktayshakirov.com/assets/images/html.png" alt='hello'></img>
                            <img src="https://oktayshakirov.com/assets/images/css.png" alt='hello'></img>
                            <img src="https://oktayshakirov.com/assets/images/react.png" alt='hello'></img>
                            <img src="https://oktayshakirov.com/assets/images/npm.png" alt='hello'></img>
                            <img src="https://oktayshakirov.com/assets/images/git.png" alt='hello'></img>
                            <img src="https://oktayshakirov.com/assets/images/html.png" alt='hello'></img>
                            <img src="https://oktayshakirov.com/assets/images/css.png" alt='hello'></img>
                            <img src="https://oktayshakirov.com/assets/images/react.png" alt='hello'></img>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Content