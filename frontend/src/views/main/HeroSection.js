import React from 'react';
import heroImg from '../../assets/img/homepage/a.png';
import customerImg1 from '../../assets/img/homepage/customers/user1.png';
import customerImg2 from '../../assets/img/homepage/customers/user2.png';
import customerImg3 from '../../assets/img/homepage/customers/user3.png';
import customerImg4 from '../../assets/img/homepage/customers/user4.png';
import customerImg5 from '../../assets/img/homepage/customers/user5.png';
import customerImg6 from '../../assets/img/homepage/customers/user6.png';

function HeroSection() {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">تولید محتوا مخاطب محور </h1>
          <p className="hero-description">
            ارائه خدمات در موضوعات متفاوت یکی از خدمات برگزیدهارائه خدمات در
            موضوعات متفاوت یکی از خدمات برگزیده
          </p>
          <a href="#" className="btn btn--full margin-left">
            پلی‌کپیتو شروع کن
          </a>
          <a href="#" className="btn btn--outline">
            اطلاعات بیشتر &darr;
          </a>
          <div className="customers">
            <div className="customers-imgs">
              <img src={customerImg1} alt="customer"></img>
              <img src={customerImg2} alt="customer"></img>
              <img src={customerImg3} alt="customer"></img>
              <img src={customerImg4} alt="customer"></img>
              <img src={customerImg5} alt="customer"></img>
              <img src={customerImg6} alt="customer"></img>
            </div>
            <p className="customers-text">
              <span>+۱۰۰۰</span> نمونه سوال و امتحان برای پایه های مختلف
            </p>
          </div>
        </div>
        <div className="hero-img-box">
          <img src={heroImg} className="hero-img" alt="books" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
