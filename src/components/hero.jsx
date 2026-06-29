import "./Hero.css";
import profile from "../assets/images/profile.jpeg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <p className="greeting">👋 Hello, I'm</p>

        <h1 className="hero-name">Varun Soni</h1>

        <h2 className="hero-title">
          AI Engineer
        </h2>

        <p className="hero-subtitle">
          B.E. CSE (AI) • Microsoft Program
        </p>

        <p className="hero-description">
          I build intelligent software, modern web applications,
          and AI-powered solutions. Currently pursuing
          B.E. in Computer Science (Artificial Intelligence)
          with Microsoft's industry-integrated program.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Download Resume
          </button>

          <button className="secondary-btn">
            Contact Me
          </button>
        </div>
      </div>

      <div className="social-links">

        <a href="#">
          GitHub
        </a>

        <a href="#">
          LinkedIn
        </a>

        <a href="#">
          LeetCode
        </a>

      </div>

      <div className="hero-right">
        <img
          src={profile}
          alt="Varun Soni"
          className="profile-image"
        />
      </div>

      <div className="scroll-down">

        ↓ Scroll

      </div>
    </section>
  );
}

export default Hero;