import "./Notice.css";

function Notice () {
  return (

    <div className="notice_wrap">
      <div className="notice_item">
        <div className="notice_item_wrap">
          <div className="box1"><span className="material-symbols-outlined">person</span></div>
          <div className="box2">
            <div className="title">이름</div>
            <div className="text">이요한</div>
          </div>
        </div>
      </div>
      <div className="notice_item">
        <div className="notice_item_wrap">
          <div className="box1"><span className="material-symbols-outlined">calendar_month</span></div>
          <div className="box2">
            <div className="title">생년월일</div>
            <div className="text">1984.11.05</div>
          </div>
        </div>
      </div>
      <div className="notice_item">
        <div className="notice_item_wrap">
          <div className="box1"><span className="material-symbols-outlined">location_on</span></div>
          <div className="box2">
            <div className="title">주소</div>
            <div className="text">대구광역시 동구</div>
          </div>
        </div>
      </div>
      <div className="notice_item">
        <div className="notice_item_wrap">
          <div className="box1"><span className="material-symbols-outlined">phone_in_talk</span></div>
          <div className="box2">
            <div className="title">연락처</div>
            <div className="text">010-9584-5948</div>
          </div>
        </div>
      </div>
      <div className="notice_item">
        <div className="notice_item_wrap">
          <div className="box1"><span className="material-symbols-outlined">mail</span></div>
          <div className="box2">
            <div className="title">이메일</div>
            <div className="text">johnlovesyou@naver.com</div>
          </div>
        </div>
      </div>
      <div className="notice_item">
        <div className="notice_item_wrap">
          <div className="box1"><span className="material-symbols-outlined">school</span></div>
          <div className="box2">
            <div className="title">학력</div>
            <div className="text">경북대학교</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Notice;
