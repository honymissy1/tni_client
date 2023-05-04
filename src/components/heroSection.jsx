import { Button } from "antd"

const HeroSection = () => {

    return (
      <>
       <div className="hero-section">
        <div className="overlay">
          <div className="content">
            <h1>TNI Project Gallery</h1>
            <p>where we showcase our ongoing projects and the progress we have made towards achieving our goals.</p>
             <a href="#project"><Button className="explore">Explore</Button></a>
          </div>
        </div>
       </div>
      </>
    )
  }
  
  export default HeroSection