import React from "react";
import "./Contact.css";
import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "", //초기화
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      //<input name="email"/> formData.email업데이트하면
      //...formData 기존값 복사해서 가지고 옴
      //e.target.value 키보드 입력한 값
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("메시지가 전송되었습니다.!(데모)");
    setFormData({ name: "", email: "", message: "" }); //전송버튼 누르면 초기화
  };

  return (
    <div className="contact">
      <h1>연락처</h1>

      <div className="contact-container">
        <div className="contact-info">
          <h2>연락 정보</h2>
          <div className="info-item">
            <h3>📧 이메일</h3>
            <p>contact@reactapp.com</p>
          </div>
          <div className="info-item">
            <h3>📞 전화</h3>
            <p>02-1234-5678</p>
          </div>
          <div className="info-item">
            <h3>📍 주소</h3>
            <p>서울시 강남구 테헤란로 123</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>문의하기</h2>
          <div className="form-group">
            <label htmlFor="name">이름</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">메시지</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            전송하기
          </button>
        </form>
      </div>
    </div>
  );
}
