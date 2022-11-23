import "./App.css";

function App() {
  return (
    <div className="App">

      {/* https://cdg-portfolio.com/ */}
      

      {/* header */}
      <header className="header">
        <div className="inner">
          
          <div className="menu">
            <div className="menu_1">
              <a href="/">John's Portfolio</a>
            </div>
            <div className="menu_2"></div>
            <div className="menu_3">
              <div><a href="/">About me</a></div>
              <div><a href="/">Skills</a></div>
              <div><a href="/">Projects</a></div>
              <div><a href="/">Career</a></div>
            </div>
          </div>
          <div className="title">
            <div className="title_1">- 이요한 -</div>
            <div className="title_2">웹 개발자 포트폴리오</div>
            <div className="title_box1"></div>
            <div className="title_3">안녕하세요</div>
            <div className="title_4">공부가 취미인 웹 개발자입니다.</div>
            <div className="title_box2">
              <div><a href="/">더 알아보기 ↓</a></div>
            </div>
          </div>
    
        </div>
      </header>

      {/* About me */}
      <section className="Aboutme">
        <div className="inner">
          <div className="notice_main">
            <div className="box1"><span class="material-symbols-outlined">link</span></div>
            <div className="box2">ABOUT ME</div>
            <div className="box3"></div>
          </div>
          <div className="notice_second">
            <div className="notice notice1">
              <div className="box1"><span class="material-symbols-outlined">person</span></div>
              <div className="box2">이름</div>
              <div className="box3">이요한</div>
            </div>
            <div className="notice notice2">
              <div className="box1"><span class="material-symbols-outlined">calendar_month</span></div>
              <div className="box2">생년월일</div>
              <div className="box3">1984.11.05</div>
            </div>
            <div className="notice notice3">
              <div className="box1"><span class="material-symbols-outlined">location_on</span></div>
              <div className="box2">주소</div>
              <div className="box3">대구광역시 동구</div>
            </div>
          </div>
          <div className="notice_third">
            <div className="notice notice4">
              <div className="box1"><span class="material-symbols-outlined">phone_in_talk</span></div>
              <div className="box2">연락처</div>
              <div className="box3">010-9584-5948</div>
            </div>
            <div className="notice notice5">
              <div className="box1"><span class="material-symbols-outlined">mail</span></div>
              <div className="box2">이메일</div>
              <div className="box3">johnlovesyou@naver.com</div>
            </div>
            <div className="notice notice6">
              <div className="box1"><span class="material-symbols-outlined">school</span></div>
              <div className="box2">학력</div>
              <div className="box3">경북대학교</div>
            </div>
          </div>
        </div>
      </section>

      {/* skills */}
      <section className="skills">
        <div className="inner">
          <div className="notice_main">
            <div className="box1"><span class="material-symbols-outlined">link</span></div>
            <div className="box2">SKILLS</div>
            <div className="box3"></div>
          </div>


        </div>
      </section>
      

    </div>
  );
}

export default App;
