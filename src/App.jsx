import { useState } from 'react'
import './App.css'
import emailjs from '@emailjs/browser'

emailjs.init('6An2UBxqycs2IpnmT')


import soundflowImg from './assets/img/soundflow_screenshot.png'

const translations = {
  fr: {
    siteTitle: 'Mon Portfolio',
    nav: {
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      contact: 'Contact',
    },
    hero: {
      name: 'Bonjour, je suis Juan Pablo Villarreal Rivera',
      role: 'Développeur Web Full Stack',
      description: 'Passionné par la création d’expériences web innovantes et intuitives.',
      projectButton: 'Voir mes projets',
      contactButton: 'Me contacter',
    },
    about: {
      title: 'À propos de moi',
      p1: "Je suis un développeur passionné avec plus de X années d'expérience dans le développement web.",
      p2: "J'aime créer des applications qui résolvent des problèmes réels et améliorent l'expérience utilisateur.",
      p3: "Spécialisé en React, Node.js et les technologies modernes du web, je m'efforce toujours d'apprendre de nouvelles technologies.",
      cv: 'Télécharger CV',
      github: 'GitHub',
    },
    skills: {
      title: 'Mes Compétences',
      frontend: 'Développement Web & Mobile',
      frontendList: 'JavaScript (React), HTML5, CSS3, Flutter, Kotlin',
      backend: 'Backend & Bases de données',
      backendList: 'Firebase, MongoDB, MSSQL, SQLite, Node.js, MongoDB',
      logiciel: 'Programmation Système',
      logicielList: 'C++, Java, Python',
      tools: 'Outils & Environnement',
      toolsList: 'Git, GitHub, Vite, Android Studio, VMware, Linux (Kali), VS Code',
    },
    projects: {
      title: 'Mes Projets',
      soundflow: 'Soundflow',
      soundflowTech: 'React et Firebase',
      soundflowDesc: 'SoundFlow est une plateforme de streaming musical pour les artistes indépendants et les auditeurs qui souhaitent d\'écouter de la musique gratuitement.',
      dashboard: 'Dashboard Analytics',
      dashboardTech: 'Vue.js, D3.js, Firebase',
      dashboardDesc: 'Un tableau de bord interactif pour visualiser les données en temps réel.',
      viewProject: 'Voir le projet',
      sourceCode: 'Code source',
    },
    contact: {
      title: 'Contactez-moi',
      name: 'Nom',
      email: 'Email',
      message: 'Message',
      send: 'Envoyer',
      directContact: 'Ou contactez-moi directement :',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    footer: {
      message: 'Créé avec ❤️ et React',
      copyright: '© 2026 Juan Pablo Villarreal Rivera - Tous droits réservés',
    },
  },
  en: {
    siteTitle: 'My Portfolio',
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      name: 'Hello, I am Juan Pablo Villarreal Rivera',
      role: 'Full Stack Web Developer',
      description: 'Passionate about building innovative and intuitive web experiences.',
      projectButton: 'See my projects',
      contactButton: 'Contact me',
    },
    about: {
      title: 'About Me',
      p1: 'I am a passionate developer with more than X years of experience in web development.',
      p2: 'I enjoy building applications that solve real problems and improve user experience.',
      p3: 'Specialized in React, Node.js and modern web technologies, I always stay up to date with the latest trends.',
      cv: 'Download CV',
      github: 'GitHub',
    },
    skills: {
      title: 'My Skills',
      frontend: 'Web & Mobile Development',
      frontendList: 'JavaScript (React), HTML5, CSS3, Flutter, Kotlin',
      backend: 'Backend & Databases',
      backendList: 'Firebase, MongoDB, MSSQL, SQLite, Node.js, MongoDB',
      logiciel: 'System Programming',
      logicielList: 'C++, Java, Python',
      tools: 'Tools & Environment',
      toolsList: 'Git, GitHub, Vite, Android Studio, VMware, Linux (Kali), VS Code',
    },
    projects: {
      title: 'My Projects',
      soundflow: 'Soundflow',
      soundflowTech: 'React and Firebase',
      soundflowDesc: 'SoundFlow is a music streaming platform for independent artists and listeners that want to listens to music free.',
      dashboard: 'Dashboard Analytics',
      dashboardTech: 'Vue.js, D3.js, Firebase',
      dashboardDesc: 'An interactive dashboard to visualize real-time data.',
      viewProject: 'View project',
      sourceCode: 'Source code',
    },
    contact: {
      title: 'Contact Me',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      directContact: 'Or contact me directly:',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    footer: {
      message: 'Built with ❤️ and React',
      copyright: '© 2026 Juan Pablo Villarreal Rivera - All rights reserved',
    },
  },
}

export default function App() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    emailjs.send('service_d1z3mfv','template_rnp269i', formData)
      .then(()=>{
        alert('Message envoyé! ✅')
        setFormData({
          name: '',
          email: '',
          message: '',
        })
      })
      .catch((error) => {
        alert('Erreur! Vérifiez vos clés EmailJS')
        console.log(error)
      })
  }


  const [lang, setLang] = useState('fr')
  const t = translations[lang]

  return (
    <div className="app">
      <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="#home">
            <strong>{t.siteTitle}</strong>
          </a>
        </div>

        <div className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item" href="#about">{t.nav.about}</a>
            <a className="navbar-item" href="#skills">{t.nav.skills}</a>
            <a className="navbar-item" href="#projects">{t.nav.projects}</a>
            <a className="navbar-item" href="#contact">{t.nav.contact}</a>

            <div className="buttons language-switcher">
              <button
                type="button"
                className={lang === 'fr' ? 'button is-primary' : 'button is-light'}
                onClick={() => setLang('fr')}
              >
                FR
              </button>
              <button
                type="button"
                className={lang === 'en' ? 'button is-primary' : 'button is-light'}
                onClick={() => setLang('en')}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="hero is-primary is-large">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-1">{t.hero.name}</h1>
            <h2 className="subtitle is-3">{t.hero.role}</h2>
            <p className="is-size-5">{t.hero.description}</p>
            <div className="buttons is-centered mt-5">
              <a href="#projects" className="button is-white is-large">{t.hero.projectButton}</a>
              <a href="#contact" className="button is-light is-large">{t.hero.contactButton}</a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-6">
              <h2 className="title is-2">{t.about.title}</h2>
              <p className="texte is-size-5 mb-4">{t.about.p1}</p>
              <p className="texte mb-4">{t.about.p2}</p>
              <p className="texte mb-4">{t.about.p3}</p>
              <div className="buttons">
                <a href="/cv.pdf" className="button is-primary">{t.about.cv}</a>
                <a href="https://github.com/donpablo25" className="button is-link">{t.about.github}</a>
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

      <section id="skills" className="section has-background-light">
        <div className="container">
          <h2 className="title is-2 has-text-centered mb-6">{t.skills.title}</h2>
          <div className="columns is-multiline">
            
            {/* Web & Mobile */}
            <div className="column is-3">
              <div className="card" style={{ height: '100%' }}>
                <div className="card-content has-text-centered">
                  <span className="icon is-large has-text-primary">
                    <i className="fas fa-mobile-alt fa-2x"></i>
                  </span>
                  <h3 className="title is-4">{t.skills.frontend}</h3>
                  <p>{t.skills.frontendList}</p>
                </div>
              </div>
            </div>

            {/* Backend & DB */}
            <div className="column is-3">
              <div className="card" style={{ height: '100%' }}>
                <div className="card-content has-text-centered">
                  <span className="icon is-large has-text-info">
                    <i className="fas fa-database fa-2x"></i>
                  </span>
                  <h3 className="title is-4">{t.skills.backend}</h3>
                  <p>{t.skills.backendList}</p>
                </div>
              </div>
            </div>

            {/* Programmation Système */}
            <div className="column is-3">
              <div className="card" style={{ height: '100%' }}>
                <div className="card-content has-text-centered">
                  <span className="icon is-large has-text-danger">
                    <i className="fas fa-terminal fa-2x"></i>
                  </span>
                  <h3 className="title is-4">{t.skills.logiciel}</h3>
                  <p>{t.skills.logicielList}</p>
                </div>
              </div>
            </div>

            {/* Outils */}
            <div className="column is-3">
              <div className="card" style={{ height: '100%' }}>
                <div className="card-content has-text-centered">
                  <span className="icon is-large has-text-success">
                    <i className="fas fa-tools fa-2x"></i>
                  </span>
                  <h3 className="title is-4">{t.skills.tools}</h3>
                  <p>{t.skills.toolsList}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <h2 className="title is-2 has-text-centered mb-6">{t.projects.title}</h2>
          <div className="columns is-multiline">
            <div className="column is-6">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={soundflowImg} alt="Projet SoundFlow" />
                  </figure>
                </div>
                <div className="card-content">
                  <h3 className="title is-4">{t.projects.soundflow}</h3>
                  <p className="subtitle is-6">{t.projects.soundflowTech}</p>
                  <p>{t.projects.soundflowDesc}</p>
                  <div className="buttons mt-3">
                    <a href="https://soundflow-41966.web.app/" target="_blank" rel="noreferrer" className="button is-primary">{t.projects.viewProject}</a>
                    <a href="https://github.com/donpablo25/soundflow" target="_blank" rel="noreferrer" className="button is-link">{t.projects.sourceCode}</a>
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
                  <h3 className="title is-4">{t.projects.dashboard}</h3>
                  <p className="subtitle is-6">{t.projects.dashboardTech}</p>
                  <p>{t.projects.dashboardDesc}</p>
                  <div className="buttons mt-3">
                    <a href="#" className="button is-primary">{t.projects.viewProject}</a>
                    <a href="#" className="button is-link">{t.projects.sourceCode}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section has-background-primary has-text-white">
        <div className="container">
          <h2 className="title is-2 has-text-centered mb-6">{t.contact.title}</h2>
          <div className="columns is-centered">
            <div className="column is-8">
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label className="label has-text-white">{t.contact.name}</label>
                  <div className="control">
                    <input 
                      className="input" 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.contact.name} 
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label has-text-white">{t.contact.email}</label>
                  <div className="control">
                    <input 
                      className="input" 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com" 
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label has-text-white">{t.contact.message}</label>
                  <div className="control">
                    <textarea 
                      className="textarea" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.contact.message}
                    ></textarea>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <button className="button is-white is-fullwidth" type="submit">
                      {t.contact.send}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="has-text-centered mt-6">
            <p className="is-size-5">{t.contact.directContact}</p>
            <div className="buttons is-centered mt-3">
              <a href="mailto:villajupa@hotmail.com" className="button is-white">
                <span className="icon">
                  <i className="fas fa-envelope"></i>
                </span>
                <span>{t.contact.email}</span>
              </a>
              <a href="https://www.linkedin.com/in/juanpablo-villarrealrivera/" className="button is-white">
                <span className="icon">
                  <i className="fab fa-linkedin"></i>
                </span>
                <span>{t.contact.linkedin}</span>
              </a>
              <a href="https://github.com/donpablo25" className="button is-white">
                <span className="icon">
                  <i className="fab fa-github"></i>
                </span>
                <span>{t.contact.github}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>{t.siteTitle}</strong> - {t.footer.message}
          </p>
          <p>{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  )
}

