import "./Hero.css";
import profile from "../assets/images/profile.jpeg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <p className="greeting">👋 Hello, I'm</p>

        <h1 className="hero-name">Varun Soni</h1>

        <h2 className="hero-title">
          AI & Software Engineer
        </h2>

        <p className="hero-description">
          Passionate about Artificial Intelligence,
          Full Stack Development and creating modern
          digital experiences.
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

      <div className="hero-right">
        <img
          src={profile}
          alt="Varun Soni"
          className="profile-image"
        />
      </div>
    </section>
  );
}

export default Hero;