import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Bienvenue sur mon Portfolio</h1>
        <nav>
          <a href="#home">Accueil</a>
          <a href="#projects">Projets</a>
          <a href="#about">À propos</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <section id="home">
          <h2>Salut, je suis Luc!</h2>
          <p>Développeur passionné par les projets créatifs et fonctionnels.</p>
        </section>
        <section id="projects">
          <h2>Mes Projets</h2>
          <div>
            <h3>Projet 1</h3>
            <p>Description ici...</p>
          </div>
        </section>
        <section id="about">
          <h2>À propos de moi</h2>
          <p>Développeur web avec une passion pour...</p>
        </section>
        <section id="contact">
          <h2>Contactez-moi</h2>
          <form>
            <input type="text" placeholder="Votre nom" />
            <input type="email" placeholder="Votre email" />
            <textarea placeholder="Votre message"></textarea>
            <button type="submit">Envoyer</button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 Luc</p>
      </footer>
    </div>
  );
}

export default App;
