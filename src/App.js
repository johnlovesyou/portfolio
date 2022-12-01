import "./Reset.css";
import "./App.css";
import Title from "./Title.js";
import Notice from "./Notice.js";
import Skills from "./Skills.js";
import { React, useEffect, useState } from "react";
import { throttle } from "lodash";
import $ from "jquery";
import classnames from 'classnames';


function App() {

  let [whitecount, set_whitecount] = useState('')
  
  useEffect(()=>{
    window.addEventListener('scroll', throttle(function() {
      if (window.scrollY > 150) {
        set_whitecount('show')
      } else if (window.scrollY < 100) {
        set_whitecount('')
      }
    }), 500)
  });

  

  return (
    <div className="App">

      {/* https://cdg-portfolio.com/ */}
      
      {/* header */}

      <header className="header">
        <div id='whitemenu' className={classnames('whitemenu', whitecount)}>
          {/* hamburger_menu */}
          <div className="hamburger_menu" id='hamburger_menu'>
            <div className="hamburger_menulist" onClick={()=>{
              let location_Aboutme = $('#Aboutme').offset().top - 120
              window.scroll({top: location_Aboutme, behavior:'smooth'});
              $('#hamburger_menu').fadeToggle();
              }}>About me</div>
            <div className="hamburger_menulist" onClick={()=>{
              let location_Skills = $('#skills').offset().top - 75
              window.scroll({top: location_Skills, behavior:'smooth'});
              $('#hamburger_menu').fadeToggle();
              }}>Skills</div>
            <div className="hamburger_menulist">Projects</div>
            <div className="hamburger_menulist">Career</div>
          </div>
        </div>

        {/* menu */}
        <div className="menu" id="menu">
          <div className="menu_1">
            <div className="maintitle" onClick={()=>{
              window.scroll({top:0, left:0, behavior:'smooth'})
              }}>John's Portfolio</div>
          </div>
          <div className="menu_2"></div>
          <div className="menu_3">
            <div className="menulist" onClick={()=>{
              let location_Aboutme = $('#Aboutme').offset().top - 120
              window.scroll({top: location_Aboutme, behavior:'smooth'})}}>About me</div>
            <div className="menulist" onClick={()=>{
              let location_Skills = $('#skills').offset().top - 75
              window.scroll({top: location_Skills, behavior:'smooth'})}}>Skills</div>
            <div className="menulist">Projects</div>
            <div className="menulist">Career</div>
          </div>
          <button class="hamburger_button" onClick={()=>{
              $('#hamburger_menu').fadeToggle();
            }}>&#9776;</button>
        </div>

        <Title></Title>

      </header>
    


      {/* About me */}
      <section className="Aboutme" id="Aboutme">
        <div className="inner">
          <div className="notice_name">
            <div className="box1"><span className="material-symbols-outlined">link</span></div>
            <div className="box2">ABOUT ME</div>
            <div className="box3"></div>
          </div>
          <Notice></Notice>
        </div>        
      </section>

      {/* skills */}
      <section className="skills" id='skills'>
        <div className="inner">
          <div className="notice_name">
            <div className="box1"><span className="material-symbols-outlined">link</span></div>
            <div className="box2">SKILLS</div>
            <div className="box3"></div>
          </div>
          <Skills></Skills>
        </div>
      </section>

      {/* project */}
      {/* <section className="project">
        <div className="inner">



        </div>
      </section> */}
    

    </div>
  );
}



export default App;
