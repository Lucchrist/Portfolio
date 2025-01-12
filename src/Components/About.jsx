import "../Styles/Pages/_about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h1>À PROPOS</h1>
        <p>
          Bonjour, je m'appelle <span>Luc Christian</span>, et je suis un
          développeur spécialisé dans le développement web, mobile, et les
          solutions d'intelligence artificielle. J'aime explorer des concepts
          créatifs et techniques pour repousser les limites de ce qui est
          possible.
        </p>
        <p>
          Toujours passionné par les nouvelles technologies, je suis curieux et
          enthousiaste à l'idée d'apprendre et de partager mes connaissances.
        </p>
        <a href="/path-to-your-cv.pdf" download className="download-cv">
          <span>Télécharger mon CV</span>
          <div className="arrow-icon">↓</div>
        </a>
      </div>
      <div className="about-image">
        <img
          src="/path-to-your-image.jpg"
          alt="Luc Christian"
          className="profile-picture"
        />
        <div className="badge">
          <p>ARCHANGE</p>
          <p>Olly Alexander</p>
        </div>
      </div>
    </div>
  );
};

export default About;
