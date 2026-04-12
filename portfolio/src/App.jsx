import './App.css'

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="#home">
            <strong>Mon Portfolio</strong>
          </a>
        </div>

        <div className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item" href="#about">À propos</a>
            <a className="navbar-item" href="#skills">Compétences</a>
            <a className="navbar-item" href="#projects">Projets</a>
            <a className="navbar-item" href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero is-primary is-large">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-1">
              Bonjour, je suis Juan Pablo Villarreal Rivera
            </h1>
            <h2 className="subtitle is-3">
              Développeur Web Full Stack
            </h2>
            <p className="is-size-5">
              Passionné par la création d'expériences web innovantes et intuitives
            </p>
            <div className="buttons is-centered mt-5">
              <a href="#projects" className="button is-white is-large">
                Voir mes projets
              </a>
              <a href="#contact" className="button is-light is-large">
                Me contacter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-6">
              <h2 className="title is-2">À propos de moi</h2>
              <p className="is-size-5 mb-4">
                Je suis un développeur passionné avec plus de X années d'expérience
                dans le développement web. J'aime créer des applications qui résolvent
                des problèmes réels et améliorent l'expérience utilisateur.
              </p>
              <p className="mb-4">
                Spécialisé en React, Node.js, et les technologies modernes du web,
                je m'efforce toujours d'apprendre de nouvelles technologies et de
                rester à jour avec les dernières tendances du développement.
              </p>
              <div className="buttons">
                <a href="/cv.pdf" className="button is-primary">Télécharger CV</a>
                <a href="https://github.com/votre-github" className="button is-link">GitHub</a>
              </div>
            </div>
            <div className="column is-6 has-text-centered">
              <figure className="image is-256x256 is-inline-block">
                <img className="is-rounded" src="/profile.jpg" alt="Photo de profil" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section has-background-light">
        <div className="container">
          <h2 className="title is-2 has-text-centered mb-6">Mes Compétences</h2>
          <div className="columns is-multiline">
            <div className="column is-4">
              <div className="card">
                <div className="card-content has-text-centered">
                  <span className="icon is-large has-text-primary">
                    <i className="fas fa-code fa-2x"></i>
                  </span>
                  <h3 className="title is-4">Frontend</h3>
                  <p>React, Vue.js, HTML5, CSS3, JavaScript, TypeScript</p>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="card">
                <div className="card-content has-text-centered">
                  <span className="icon is-large has-text-info">
                    <i className="fas fa-server fa-2x"></i>
                  </span>
                  <h3 className="title is-4">Backend</h3>
                  <p>Node.js, Express, Python, Django, PostgreSQL, MongoDB</p>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="card">
                <div className="card-content has-text-centered">
                  <span className="icon is-large has-text-success">
                    <i className="fas fa-tools fa-2x"></i>
                  </span>
                  <h3 className="title is-4">Outils</h3>
                  <p>Git, Docker, AWS, CI/CD, Jest, Webpack</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="title is-2 has-text-centered mb-6">Mes Projets</h2>
          <div className="columns is-multiline">
            <div className="column is-6">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="/project1.jpg" alt="Projet 1" />
                  </figure>
                </div>
                <div className="card-content">
                  <h3 className="title is-4">Application E-commerce</h3>
                  <p className="subtitle is-6">React, Node.js, Stripe</p>
                  <p>
                    Une plateforme e-commerce complète avec paiement intégré,
                    gestion des stocks et interface administrateur.
                  </p>
                  <div className="buttons mt-3">
                    <a href="#" className="button is-primary">Voir le projet</a>
                    <a href="#" className="button is-link">Code source</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-6">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="/project2.jpg" alt="Projet 2" />
                  </figure>
                </div>
                <div className="card-content">
                  <h3 className="title is-4">Dashboard Analytics</h3>
                  <p className="subtitle is-6">Vue.js, D3.js, Firebase</p>
                  <p>
                    Un tableau de bord interactif pour visualiser les données
                    en temps réel avec des graphiques personnalisés.
                  </p>
                  <div className="buttons mt-3">
                    <a href="#" className="button is-primary">Voir le projet</a>
                    <a href="#" className="button is-link">Code source</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section has-background-primary has-text-white">
        <div className="container">
          <h2 className="title is-2 has-text-centered mb-6">Contactez-moi</h2>
          <div className="columns is-centered">
            <div className="column is-8">
              <form>
                <div className="field">
                  <label className="label has-text-white">Nom</label>
                  <div className="control">
                    <input className="input" type="text" placeholder="Votre nom" />
                  </div>
                </div>
                <div className="field">
                  <label className="label has-text-white">Email</label>
                  <div className="control">
                    <input className="input" type="email" placeholder="votre@email.com" />
                  </div>
                </div>
                <div className="field">
                  <label className="label has-text-white">Message</label>
                  <div className="control">
                    <textarea className="textarea" placeholder="Votre message"></textarea>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <button className="button is-white is-fullwidth">Envoyer</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="has-text-centered mt-6">
            <p className="is-size-5">Ou contactez-moi directement :</p>
            <div className="buttons is-centered mt-3">
              <a href="mailto:votre@email.com" className="button is-white">
                <span className="icon">
                  <i className="fas fa-envelope"></i>
                </span>
                <span>Email</span>
              </a>
              <a href="https://linkedin.com/in/votre-profil" className="button is-white">
                <span className="icon">
                  <i className="fas fa-linkedin"></i>
                </span>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/votre-github" className="button is-white">
                <span className="icon">
                  <i className="fas fa-github"></i>
                </span>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Mon Portfolio</strong> - Créé avec ❤️ et React
          </p>
          <p>© 2024 - Tous droits réservés</p>
        </div>
      </footer>
    </div>
  )
}

export default App
