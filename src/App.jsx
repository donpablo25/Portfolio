import { useState } from 'react'
import './App.css'
import emailjs from '@emailjs/browser'

emailjs.init('6An2UBxqycs2IpnmT')


import soundflowImg from './assets/img/soundflow_screenshot.png'
import mongramImg from './assets/img/mongram.png'

//icons skills

//FRONT-END
import javascriptIcon from './assets/skills/javascript.svg'
import reactIcon from './assets/skills/reactjs.webp'
import htmlIcon from './assets/skills/html.svg'
import cssIcon from './assets/skills/css.svg'
import flutterIcon from './assets/skills/flutter.svg'
import kotlinIcon from './assets/skills/kotlin.svg'
import bulmaIcon from './assets/skills/bulma.svg'
import TailwindIcon from './assets/skills/tailwind.svg'

//BACK-END
import firebaseIcon from './assets/skills/firebase.svg'
import mongodbIcon from './assets/skills/mongodb.svg'
import mssqlIcon from './assets/skills/microsoft-sql-server.svg'
import sqliteIcon from './assets/skills/sqlite.svg'
import mysql from './assets/skills/mysql.svg'
import nodejsIcon from './assets/skills/nodejs.svg'
import openAI from './assets/skills/chatgpt.svg'
import phpIcon from './assets/skills/php.svg'

//PROGRAMMATION SYSTÈME
import cppIcon from './assets/skills/cpp.webp'
import javaIcon from './assets/skills/java.webp'
import pythonIcon from './assets/skills/python.webp'

//ENVIRONNEMENT
import postmanIcon from './assets/skills/postman.svg'
import gitIcon from './assets/skills/git.webp'
import githubIcon from './assets/skills/github.svg'
import viteIcon from './assets/skills/vite.webp'
import androidIcon from './assets/skills/android.webp'
import vmwareIcon from './assets/skills/vmware.webp'
import linuxIcon from './assets/skills/linux.webp'
import vscodeIcon from './assets/skills/vscode.webp'
import wordpressIcon from './assets/skills/wordpress.webp'
import xamppIcon from './assets/skills/xampp.svg'



const translations = {
  fr: {
    siteTitle: 'Le Portfolio Juan Pablo Villarreal Rivera',
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
      p1: "Je suis un étudiant en développement d’applications, curieux et motivé, je cherche à acquérir de nouvelles compétences techniques et professionnelles dans le domaine de l’informatique, tout en contribuant activement aux projets de l’équipe.",
      p2: "J'aime créer des applications qui résolvent des problèmes réels et améliorent l'expérience utilisateur.",
      p3: "Spécialisé en React, Node.js et les technologies modernes du web, je m'efforce toujours d'apprendre de nouvelles technologies.",

    },
    skills: {
      title: 'Mes Compétences',
      frontend: 'Développement Web & Mobile',
      backend: 'Backend & Bases de données',
      logiciel: 'Programmation Système',
      tools: 'Outils & Environnement',
    },
    projects: {
      title: 'Mes Projets',
      soundflow: 'Soundflow',
      soundflowTech: 'React et Firebase',
      soundflowDesc: 'SoundFlow est une plateforme de streaming musical pour les artistes indépendants et les auditeurs qui souhaitent écouter de la musique gratuitement.',
      mongram: 'MonGram',
      mongramTech: 'React, Firebase et OpenAI',
      mongramDesc: "Une plateforme sociale inspirée d'Instagram permettant le partage de photos en temps réel, avec des fonctionnalités d'interaction et une touche d'intelligence artificielle pour générer cinq tags pertinents basés sur la description.",
      dashboard: 'SmartGate',
      dashboardTech: 'C++, Python et ALIVEcode',
      dashboardDesc: "Système de contrôle d'accès intelligent : l'ouverture est autorisée uniquement après détection d'un masque chirurgical et validation d'un code de sécurité.",
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
      p1: 'I am a computer science student in Montreal, curious and motivated, looking to acquire new technical and professional skills in the field of IT, while actively contributing to team projects.',
      p2: 'I enjoy creating applications that solve real problems and improve user experience.',
      p3: 'Specialized in React, Node.js and modern web technologies, I always strive to learn new technologies.',
      cv: 'Download CV',
      github: 'GitHub',
    },
    skills: {
      title: 'My Skills',
      frontend: 'Web & Mobile Development',
      backend: 'Backend & Databases',
      logiciel: 'System Programming',
      tools: 'Tools & Environment',
    },
    projects: {
      title: 'My Projects',
      soundflow: 'Soundflow',
      soundflowTech: 'React and Firebase',
      soundflowDesc: 'SoundFlow is a music streaming platform for independent artists and listeners who want to listen to music for free.',
      mongram: 'MonGram',
      mongramTech: 'React, Firebase and OpenAI',
      mongramDesc: 'A social platform inspired by Instagram for real-time photo sharing, with interaction features and an AI touch to generate five relevant tags based on the description.',
      dashboard: 'SmartGate',
      dashboardTech: 'C++, Python and ALIVEcode',
      dashboardDesc: 'Smart access control system: opening is only allowed after surgical mask detection and security code validation.',
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
                className={lang === 'fr' ? 'button is-link' : 'button is-light'}
                onClick={() => setLang('fr')}
              >
                FR
              </button>
              <button
                type="button"
                className={lang === 'en' ? 'button is-link' : 'button is-light'}
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

      <section id="about" className="section has-background-dark">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-8-desktop is-10-tablet">
              
  
              <div className="card has-background-black-ter has-text-white" style={{ borderRadius: '12px' }}>
                <div className="card-content">
                  
                  <div className="has-text-centered mb-5">
                    <h2 className="title is-2 has-text-white">{t.about.title}</h2>
                    <hr style={{ width: '50px', margin: '0 auto', backgroundColor: '#4f7bff', height: '3px' }} />
                  </div>

                  <div className="content is-size-5 has-text-justified-mobile">
                    <p className="mb-4">{t.about.p1}</p>
                    <p className="mb-4">{t.about.p2}</p>
                    <p className="mb-4">{t.about.p3}</p>
                  </div>
                </div>
              </div>
              {/* Fin de la carte */}

            </div>
          </div>
        </div>
      </section>

<section id='parcours' className='section has-background-dark'>
  <div className='container'>
    <div className="columns is-centered">
      <div className="column is-10-desktop is-12-tablet">
        
        {/* Voici le grand conteneur sombre */}
        <div className="card has-background-black-ter has-text-white" style={{ borderRadius: '20px', padding: '3rem 2rem' }}>
          <div className="card-content">
            
            <h2 className='title is-2 has-text-centered has-text-white mb-6'>
              Parcours Académique
            </h2>

            <div className='timeline'>
              {/* Étape 1 */}
              <div className='timeline-row mb-6'>
                <div className='timeline-card'>
                  <div className="is-flex is-justify-content-space-between is-align-items-center mb-2">
                    <h3 className='title is-5 has-text-white mb-0'>DEC in Computer Science Technology</h3>
                    <span className='progress'>En cours</span>
                  </div>
                  <p className='has-text-grey-light'>📍 Montréal, Quebec — Collège de Maisonneuve</p>
                  <p className='is-size-7 has-text-grey'>2022 - 2026</p>
                  <div className="content mt-4">
                    <p><strong>Spécialisation :</strong> Web and Mobile Development</p>
                    <p className="is-size-6">Comprehensive training in computer science with a focus on practical application.</p>
                  </div>
                </div>
              </div>

              {/* Étape 2 */}
              <div className='timeline-row'>
                <div className='timeline-card'>
                  <div className="is-flex is-justify-content-space-between is-align-items-center mb-2">
                    <h3 className='title is-5 has-text-white mb-0'>Front-End Developer Intern</h3>
                    <span className='progress'>En cours</span>
                  </div>
                  <p className='has-text-grey-light'>🏢 Proximity Agency</p>
                  <p className='is-size-7 has-text-grey'>Mars 2026 - Mai 2026</p>
                  <p className="mt-4">Development of an innovative AI-powered artistic creation platform.</p>
                </div>
              </div>

            </div> {/* Fin Timeline */}
          </div>
        </div> {/* Fin de la grande Card */}

      </div>
    </div>
  </div>
</section>

      <section id="skills" className="section has-background is-flex is-align-items-center" style={{ minHeight: '100vh', padding: '100px 0' }}>        
        <div className="container" style={{ maxWidth: '1600px' }}>
          <h2 className="title is-1 has-text-centered mb-6">{t.skills.title}</h2>
          <div className="columns is-multiline">
            
            {/* Web & Mobile */}
            <div className="column is-6 is-flex">
              <div className="card" style={{ height: '100%', flex: '1', padding: '40px 20px' }}>
                <div className="card-content has-text-centered ">
                  <span className="icon is-large has-text-primary">
                    <i className="fas fa-mobile-alt" style={{ fontSize: '48px' }}></i>
                  </span>
                  <h3 className="title is-3">{t.skills.frontend}</h3>
                  
                  {/* Logos Web & Mobile */}
                  <div className="is-flex is-flex-wrap-wrap is-justify-content-center mt-5" style={{ gap: '25px' }}>
                    <div className="has-text-centered" style={{ width: '80px' }}>
                      <img src={javascriptIcon} alt="JavaScript" style={{ width: '48px', height: '48px' }} />
                      <p className="is-size-6 mt-2">JS</p>
                    </div>
                    <div className="has-text-centered" style={{ width: '80px' }}>
                      <img src={reactIcon} alt="React" style={{ width: '48px', height: '48px' }} />
                      <p className="is-size-6 mt-2">React</p>
                    </div>
                    <div className="has-text-centered" style={{ width: '80px' }}>
                      <img src={htmlIcon} alt="HTML" style={{ width: '48px', height: '48px' }} />
                      <p className="is-size-6 mt-2">HTML</p>
                    </div>
                    <div className="has-text-centered" style={{ width: '80px' }}>
                      <img src={cssIcon} alt="CSS" style={{ width: '48px', height: '48px' }} />
                      <p className="is-size-6 mt-2">CSS</p>
                    </div>
                    <div className="has-text-centered" style={{ width: '80px' }}>
                      <img src={flutterIcon} alt="Flutter" style={{ width: '48px', height: '48px' }} />
                      <p className="is-size-6 mt-2">Flutter</p>
                    </div>
                    <div className="has-text-centered" style={{ width: '80px' }}>
                      <img src={kotlinIcon} alt="Kotlin" style={{ width: '48px', height: '48px' }} />
                      <p className="is-size-6 mt-2">Kotlin</p>
                    </div>
                    <div className="has-text-centered" style={{ width: '80px' }}>
                      <img src={bulmaIcon} alt="bulma" style={{ width: '48px', height: '48px' }} />
                      <p className="is-size-6 mt-2">Bulma</p>
                    </div>
                    <div className="has-text-centered" style={{ width: '80px' }}>
                      <img src={TailwindIcon} alt="Tailwind" style={{ width: '48px', height: '48px' }} />
                      <p className="is-size-6 mt-2">Tailwind</p>
                    </div>                    
                  </div>
                </div>
              </div>
            </div>

            {/* Backend & DB */}
            <div className="column is-6 is-flex">
              <div className="card" style={{ height: '100%', flex: '1', padding: '40px 20px' }}>
                <div className="card-content has-text-centered">
                  <span className="icon is-large has-text-info">
                    <i className="fas fa-database" style={{ fontSize: '48px' }}></i>
                  </span>
                  <h3 className="title is-3">{t.skills.backend}</h3>
                  
                  {/* Logos Backend & DB */}
                  <div className="is-flex is-flex-wrap-wrap is-justify-content-center mt-5" style={{ gap: '25px' }}>
                    <div className="has-text-centered" style={{ width: '80px' }}>
                      <img src={firebaseIcon} alt="Firebase" style={{ width: '48px', height: '48px' }} />
                      <p className="is-size-6 mt-2">Firebase</p>
                    </div>
                    <div className="has-text-centered" style={{ width: '80px' }}>
                      <img src={mongodbIcon} alt="MongoDB" style={{ width: '48px', height: '48px' }} />
                      <p className="is-size-6 mt-2">MongoDB</p>
                    </div>
                    <div className="has-text-centered" style={{ width: '80px' }}>
                      <img src={mssqlIcon} alt="MSSQL" style={{ width: '48px', height: '48px' }} />
                      <p className="is-size-6 mt-2">MSSQL</p>
                    </div>
                    <div className="has-text-centered" style={{ width: '80px' }}>
                      <img src={sqliteIcon} alt="SQLite" style={{ width: '48px', height: '48px' }} />
                      <p className="is-size-6 mt-2">SQLite</p>
                    </div>
                    <div className="has-text-centered" style={{ width: '80px' }}>
                      <img src={mysql} alt="mysql" style={{ width: '48px', height: '48px' }} />
                      <p className="is-size-6 mt-2">MySql</p>
                    </div>
                    <div className="has-text-centered" style={{ width: '80px' }}>
                      <img src={openAI} alt="OpenAI" style={{ width: '48px', height: '48px' }} />
                      <p className="is-size-6 mt-2">Open AI API</p>
                    </div>
                    <div className="has-text-centered" style={{ width: '80px' }}>
                      <img src={nodejsIcon} alt="Node.js" style={{ width: '48px', height: '48px' }} />
                      <p className="is-size-6 mt-2">Node.js</p>
                    </div>
                    <div className="has-text-centered" style={{ width: '80px' }}>
                      <img src={phpIcon} alt="Node.js" style={{ width: '48px', height: '48px' }} />
                      <p className="is-size-6 mt-2">PHP</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Programmation Système */}
            <div className="column is-6 is-flex">
              <div className="card" style={{ height: '100%', flex: '1', padding: '40px 20px' }}>
                <div className="card-content has-text-centered">
                  <span className="icon is-large has-text-danger">
                    <i className="fas fa-terminal" style={{ fontSize: '48px' }}></i>
                  </span>
                  <h3 className="title is-3">{t.skills.logiciel}</h3>
                  
                  {/* Logos Programmation */}
                  <div className="is-flex is-flex-wrap-wrap is-justify-content-center mt-5" style={{ gap: '25px' }}>
                    <div className="has-text-centered" style={{ width: '80px' }}>
                      <img src={cppIcon} alt="C++" style={{ width: '48px', height: '48px' }} />
                      <p className="is-size-6 mt-2">C++</p>
                    </div>
                    <div className="has-text-centered" style={{ width: '80px' }}>
                      <img src={javaIcon} alt="Java" style={{ width: '48px', height: '48px' }} />
                      <p className="is-size-6 mt-2">Java</p>
                    </div>
                    <div className="has-text-centered" style={{ width: '80px' }}>
                      <img src={pythonIcon} alt="Python" style={{ width: '48px', height: '48px' }} />
                      <p className="is-size-6 mt-2">Python</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Outils */}
            <div className="column is-6 is-flex">
              <div className="card" style={{ height: '100%', width: '100px' , flex: '1', padding: '40px 20px' }}>
                <div className="card-content has-text-centered">
                  <span className="icon is-large has-text-success">
                    <i className="fas fa-tools" style={{ fontSize: '48px' }}></i>
                  </span>
                  <h3 className="title is-3">{t.skills.tools}</h3>
                  
                  {/* Logos des outils */}
                  <div className="is-flex is-flex-wrap-wrap is-justify-content-center mt-5" style={{ gap: '25px' }}>
                    <div className="has-text-centered" style={{ width: '80px' }}>
                      <img src={postmanIcon} alt="Postman" style={{ width: '48px', height: '48px' }} />
                      <p className="is-size-6 mt-2">Postman</p>
                    </div>
                    <div className="has-text-centered" style={{ width: '80px' }}>
                      <img src={gitIcon} alt="Git" style={{ width: '48px', height: '48px' }} />
                      <p className="is-size-6 mt-2">Git</p>
                    </div>
                    <div className="has-text-centered" style={{ width: '80px' }}>
                      <img src={githubIcon} alt="GitHub" style={{ width: '48px', height: '48px' }} />
                      <p className="is-size-6 mt-2">GitHub</p>
                    </div>
                    <div className="has-text-centered" style={{ width: '80px' }}>
                      <img src={viteIcon} alt="Vite" style={{ width: '48px', height: '48px' }} />
                      <p className="is-size-6 mt-2">Vite</p>
                    </div>
                    <div className="has-text-centered" style={{ width: '80px' }}>
                      <img src={androidIcon} alt="Android" style={{ width: '48px', height: '48px' }} />
                      <p className="is-size-6 mt-2">Android</p>
                    </div>
                    <div className="has-text-centered" style={{ width: '80px' }}>
                      <img src={vmwareIcon} alt="VMware" style={{ width: '48px', height: '48px' }} />
                      <p className="is-size-6 mt-2">VMware</p>
                    </div>
                    <div className="has-text-centered" style={{ width: '80px' }}>
                      <img src={linuxIcon} alt="Linux" style={{ width: '48px', height: '48px' }} />
                      <p className="is-size-6 mt-2">Linux</p>
                    </div>
                    <div className="has-text-centered" style={{ width: '80px' }}>
                      <img src={vscodeIcon} alt="VS Code" style={{ width: '48px', height: '48px' }} />
                      <p className="is-size-6 mt-2">VS Code</p>
                    </div>
                    <div className="has-text-centered" style={{ width: '80px' }}>
                      <img src={wordpressIcon} alt="WordPress" style={{ width: '48px', height: '48px' }} />
                      <p className="is-size-6 mt-2">WordPress</p>
                    </div>
                    <div className="has-text-centered" style={{ width: '80px' }}>
                      <img src={xamppIcon} alt="XAMPP" style={{ width: '48px', height: '48px' }} />
                      <p className="is-size-6 mt-2">XAMPP</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      <section id="projects" className="section has-background-dark">
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
                    <img src={mongramImg} alt="Hora Pro Web" />
                  </figure>
                </div>
                <div className="card-content">
                  <h3 className="title is-4">{t.projects.mongram}</h3>
                  <p className="subtitle is-6">{t.projects.mongramTech}</p>
                  <p>{t.projects.mongramDesc}</p>
                  <div className="buttons mt-3">
                    <a href="https://github.com/donpablo25/MonGram" target="_blank" rel="noreferrer" className="button is-link">{t.projects.sourceCode}</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-6">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3" style={{ background: '#181818' }}>
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{ 
                        objectFit: 'cover', 
                        width: '100%', 
                        height: '100%', 
                        display: 'block' // Assure-toi que la vidéo n'est pas en display: inline
                      }}
                    >
                      <source src="smartgate.mp4" type="video/mp4" />
                      Votre navigateur ne supporte pas la vidéo.
                    </video>
                  </figure>
                </div>
                <div className="card-content">
                  <h3 className="title is-4">{t.projects.dashboard}</h3>
                  <p className="subtitle is-6">{t.projects.dashboardTech}</p>
                  <p>{t.projects.dashboardDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section has-background has-text-white">
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
                    <button className="button is-link is-fullwidth" type="submit">
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

