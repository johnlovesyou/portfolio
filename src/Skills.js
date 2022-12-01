import "./Skills.css";

function Skills () {
  return (
    
    <div className="skills_content">
      <div className="skills_box">
        <div className="skills_contentbox contentbox1">
          <div className="name">Frontend</div>
          <div className="bar"></div>
          <div className="image image1"></div>
        </div>
      </div>
      <div className="skills_box">
        <div className="skills_contentbox contentbox2">
          <div className="name">Backend</div>
          <div className="bar"></div>
          <div className="image image2"></div>
        </div>
        <div className="skills_contentbox contentbox3">
          <div className="name">Version Control</div>
          <div className="bar"></div>
          <div className="image image3"></div>
        </div>
      </div>
      <div className="skills_box">
        <div className="skills_contentbox contentbox4">
          <div className="name">Deployment</div>
          <div className="bar"></div>
          <div className="image image4"></div>
        </div>
      </div>

    </div>
  )
}

export default Skills;
