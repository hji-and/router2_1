import React from "react";
import "./Contact.css";
import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  //firebase추가
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  //
  const handleSubmit = async (e) => {
    //async, await 비동기작업
    e.preventDefault(); //a태그 클릭 시 써주기
    setIsSubmitting(true); //전송중
    setSubmitStatus(null);

    //try제대로 작동 시, catch뭔가 오류났을 때, finally오류 났든 안 났든
    try {
      // Firebase Firestore에 데이터 저장
      await addDoc(collection(db, "contacts"), {
        //addDo; firestore저장명령어
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: serverTimestamp(), //서버시간 기록
      });

      // 성공 메시지
      setSubmitStatus("success");
      alert("Thank you for your message! Your message has been saved.");
      setFormData({ name: "", email: "", message: "" }); //폼 초기화
    } catch (error) {
      // 에러 처리
      console.error("Error saving contact:", error);
      setSubmitStatus("error");
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      //<input name="email"/> formData.email업데이트하면
      //...formData 기존값 복사해서 가지고 옴
      //e.target.value 키보드 입력한 값
    });
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

          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            전송하기
          </button>
          {submitStatus === "success" && (
            <p style={{ color: "#10b981", textAlign: "center" }}>
              Message sent successfully!
            </p>
          )}
          {submitStatus === "error" && (
            <p style={{ color: "#ef4444", textAlign: "center" }}>
              Failed to send message. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
