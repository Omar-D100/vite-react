import './style.css';
import imggithubastoboy from '../../assets/Octocat-Astroboy.webp';

export default function AboutMe() {
  return (
    <div>
      <section className="about-me">
        <h2 className="title">ABOUT ME</h2>
        <div className="about-container">
          <div className="images-astroboy">
            <img src={imggithubastoboy} alt="Astroboy" />
          </div>
          <div className="about-text">
            <p>
              Hi, I’m <strong>Omar Derouich</strong>! I’m a Front-end Developer passionate about creating{" "}
              <span className="highlight">modern & accessible web experiences.</span>
            </p>
            <p>
              My love for UI/UX & web development started early. I’ve always been fascinated
              by how design and code come together to create interactive experiences.
            </p>
            <p>
              I spend my free time building personal projects, exploring new technologies, and continuously learning to improve my craft.
            </p>
            <p className="bold-highlight">
              I’ve been a web developer my entire life — I just didn’t know it.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
