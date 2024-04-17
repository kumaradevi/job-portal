import React from 'react'
import job from "../../assets/job.png"
import "./Hero.css"
const Hero = () => {
  return (
      <div>
          <div className="container">
              <div className="content">
                  <h1>Opportunity is <br></br>wherever you are</h1> 
                  <p>we are connecting the best talent with the best companies</p>
              </div>
              <div className="img">
                  <img src={job} alt="" />
              </div>
          </div>
    </div>
  )
}

export default Hero