import photo1 from '../../assets/img/homepage/works/photo1.png';
import photo2 from '../../assets/img/homepage/works/photo2.png';
import photo3 from '../../assets/img/homepage/works/photo3.png';

function HowSection() {
  return (
    <section className="section-how">
      <div className="container">
        <span className="subheading">نحوه کار</span>
        <h2 className="heading-secondary">همه کار فقط در سه مرحله</h2>
      </div>

      <div className="container grid grid--2-cols grid--center-v">
        <div className="step-text-box">
          <p className="step-number">۰۱</p>
          <h3 className="heading-tertiary">امتحان</h3>
          <p className="step-description">
            باتوجه به سوالات متداول دانش آموزان و والدین، راهنمای دریافت کارنامه
            دانش آموزی با کد ملی در این مقاله بیان شده است.
          </p>
        </div>
        <div className="step-img-box">
          <img src={photo1} className="step-img" alt="" />
        </div>
        <div className="step-img-box">
          <img src={photo2} className="step-img" alt="" />
        </div>
        <div className="step-text-box">
          <p className="step-number">۰۲</p>
          <h3 className="heading-tertiary">نمره</h3>
          <p className="step-description">
            دانش آموزان می توانند با درج کد ملی و رمز عبور خود، کارنامه تحصیلی
            خود را مشاهده و دریافت نمایند.
          </p>
        </div>
        <div className="step-text-box">
          <p className="step-number">۰۳</p>
          <h3 className="heading-tertiary">تصحیح</h3>
          <p className="step-description">
            به منظور آشنایی بیشتر دانش آموزان، راهنمای تصویری دریافت کارنامه با
            کد ملی از طریق سامانه سیدا و سامانه پادا ، در این مقاله ارائه داده
            شده است. با ما همراه باشید.
          </p>
        </div>
        <div className="step-img-box">
          <img src={photo3} className="step-img" alt="" />
        </div>
      </div>
    </section>
  );
}

export default HowSection;
