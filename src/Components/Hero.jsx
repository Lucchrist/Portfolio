import { useState } from "react";
import "../Styles/Components/_hero.scss";
import CustomCursor from "./CustomCursor";
import { Link } from "react-router-dom";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    });
  };

  return (
    <div className="hero" onMouseMove={handleMouseMove}>
      <div
        className="background-effect"
        style={{
          transform: `translate(${mousePos.x * 50}px, ${mousePos.y * 50}px)`,
        }}
      ></div>
      <div className="hero-content">
      <CustomCursor />
        <h1>
          Hé, je suis <span>Luc Christian</span>
          <br /> mais tu peux m'appeler <span>Christian</span>
        </h1>
        <p>Je suis un développeur passionné, spécialisé dans le développement web, mobile et les solutions basées sur l'intelligence artificielle.</p>
        <div className="cta-buttons">
          <a href="#projects" className="btn">Voir mes projets</a>
          <Link className="btn-outline" to="/about">En savoir plus sur moi</Link>
        </div>
        </div>
      </div>
    
  );
};

export default Hero;
