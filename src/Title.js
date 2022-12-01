import "./Title.css";
import { React, useEffect, useState } from "react";
import { throttle } from "lodash";
import $ from "jquery";
import classnames from 'classnames';

function Title () {
  return (

    <header className="header">
      <div className="inner">
        <div className="title">
          <div className="title_1">- 이요한 -</div>
          <div className="title_2">웹 개발자 포트폴리오</div>
          <div className="title_2-1">웹 개발자</div>
          <div className="title_2-2">포트폴리오</div>
          <div className="title_box1"></div>
          <div className="title_3">안녕하세요</div>
          <div className="title_4">공부가 취미인 웹 개발자입니다.</div>
          <div className="title_box2" onClick={()=>{
            let location_Aboutme = $('#Aboutme').offset().top - 120
            window.scroll({top: location_Aboutme, behavior:'smooth'})
            }}>
            <div><span>더 알아보기 ↓</span></div>
          </div>
        </div>  

    </div>
  </header>

  )
}

export default Title;
