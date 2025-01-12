
import { motion } from "framer-motion";
import "../Styles/Pages/_home.scss";

const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <section className="hero">
        <h1>Bienvenue sur mon Portfolio</h1>
        <p>Je suis un développeur passionné par la création de solutions modernes.</p>
        <button className="cta-button">Voir mes projets</button>
      </section>
    </motion.div>
  );
};

export default Home;
