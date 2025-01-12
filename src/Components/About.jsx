import { useState } from "react";
import "../Styles/Pages/_about.scss";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleBadgeClick = () => {
    // Redirection vers la vidéo YouTube
    window.open("https://youtu.be/JrO46CJd9ns?si=MBUnr6l18fnIydOk", "_blank");
  };

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
        <a
          href="/Portfolio/images/Tchomba_Luc_CV2024.pdf (1).pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="download-cv"
        >
          <span>Voir mon CV</span>
          <div className="arrow-icon">↓</div>
        </a>
      </div>
      <div className="about-image">
        <img
          src="/Portfolio/photo proffessionel.jpg"
          alt="Luc Christian"
          className="profile-picture"
        />
        <div
          className={`badge ${isHovered ? "hovered" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleBadgeClick}
        >
          <div className="text-circle">now playing · now playing · now playing ·</div>
          {isHovered ? (
            <p className="song-title">" WIN WIN WIN : "</p>
          ) : (
            <img
              src="/Portfolio/image musique.jpg"
              alt="Album Cover"
              className="album-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
