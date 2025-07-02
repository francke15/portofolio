import React, { useEffect, useState } from 'react';
import photoProfile from './src/assets/images/photo.JPG'
import { 
  Code, 
  Database, 
  Globe, 
  Gamepad2, 
  Phone, 
  Mail, 
  MapPin, 
  GraduationCap,
  Cpu,
  Layers,
  Zap,
  Coffee,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  ExternalLink
} from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const skills = {
    web: {
      title: "Développement Web",
      icon: <Globe className="w-6 h-6" />,
      items: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "PHP", level: 75 }
      ],
      color: "from-blue-500 to-blue-600",
      barColor: "bg-gradient-to-r from-blue-400 to-blue-500"
    },
    desktop: {
      title: "Développement Desktop",
      icon: <Cpu className="w-6 h-6" />,
      items: [
        { name: "Java", level: 78 }
      ],
      color: "from-green-500 to-green-600",
      barColor: "bg-gradient-to-r from-green-400 to-green-500"
    },
    frameworks: {
      title: "Frameworks & Librairies",
      icon: <Layers className="w-6 h-6" />,
      items: [
        { name: "Node.js", level: 82 },
        { name: "Express.js", level: 80 },
        { name: "Laravel", level: 70 },
        { name: "Bootstrap", level: 88 },
        { name: "jQuery", level: 75 }
      ],
      color: "from-purple-500 to-purple-600",
      barColor: "bg-gradient-to-r from-purple-400 to-purple-500"
    },
    gaming: {
      title: "Développement de Jeux",
      icon: <Gamepad2 className="w-6 h-6" />,
      items: [
        { name: "Unreal Engine 5", level: 40 },
        { name: "Unity", level: 45 },
        { name: "Blender", level: 53 },
        { name: "C", level: 75 },
        { name: "C#", level: 78 },
        { name: "C++", level: 72 },
        { name: "Blueprint", level: 48 }
      ],
      color: "from-orange-500 to-orange-600",
      barColor: "bg-gradient-to-r from-orange-400 to-orange-500"
    },
    modeling: {
      title: "Modélisation",
      icon: <Database className="w-6 h-6" />,
      items: [
        { name: "MERISE", level: 85 },
        { name: "UML", level: 82 }
      ],
      color: "from-red-500 to-red-600",
      barColor: "bg-gradient-to-r from-red-400 to-red-500"
    }
  };

  const contactInfo = [
    { icon: <Phone className="w-5 h-5" />, label: "WhatsApp", value: "+237 695 743 343", link: "https://wa.me/237695743343" },
    { icon: <Mail className="w-5 h-5" />, label: "Email", value: "francklowe2000@gmail.com", link: "mailto:francklowe2000@gmail.com" },
    { icon: <MapPin className="w-5 h-5" />, label: "Localisation", value: "Dschang, Cameroun", link: null }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/francke15",
      color: "hover:bg-gray-800",
      description: "Mes projets et contributions"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://linkedin.com/in/franck-lowe-0627a8325",
      color: "hover:bg-blue-600",
      description: "Profil professionnel"
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-6 h-6" />,
      url: "https://twitter.com/lowe_franck14",
      color: "hover:bg-sky-500",
      description: "Actualités tech"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      url: "https://instagram.com/franck.lowe.14",
      color: "hover:bg-pink-600",
      description: "Projets créatifs"
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-6 h-6" />,
      url: "https://facebook.com/franck.lowe.14",
      color: "hover:bg-blue-700",
      description: "Réseau personnel"
    }
  ];

  const ProgressBar = ({ skill, barColor, isVisible, delay = 0 }) => (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
        <span className="text-sm font-bold text-gray-600">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
        <div 
          className={`h-full ${barColor} rounded-full transition-all duration-1000 ease-out shadow-sm relative overflow-hidden`}
          style={{ 
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${delay}ms`
          }}
        >
          {/* Effet de brillance animé */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              {/* Photo de profil - remplacez l'URL par votre photo */}
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 group hover:scale-105 transition-transform duration-300">
                <img 
                  src="./src/assets/images/photo.JPG"
                  alt="Tchatche Lowe Franck - Développeur Junior"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-4 border-white animate-pulse"></div>
            </div>
            
            <div className="text-center md:text-left flex-1">
              <h1 className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                TCHATCHE LOWE FRANCK
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-4">Développeur Junior Passionné</p>
              <p className="text-lg text-blue-200 max-w-2xl mb-6">
                Étudiant en informatique de 23 ans à l'Université de Dschang, spécialisé dans le développement web, 
                desktop et jeux vidéo. Toujours prêt à relever de nouveaux défis technologiques !
              </p>
              
              {/* Social Links in Header */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg group`}
                    title={social.name}
                  >
                    {social.icon}
                    <ExternalLink className="w-3 h-3 absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-yellow-300/30 rounded-full animate-spin"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-orange-300/30 rounded-full animate-bounce"></div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* About Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Formation & Profil</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">🎓 Formation Actuelle</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Université de Dschang(UDs), Cameroun</strong><br />
                  Étudiant en Informatique<br />
                  <span className="text-blue-600 font-medium">23 ans • Promotion 2022</span>
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">💡 Objectifs</h3>
                <p className="text-gray-600">
                  Développeur junior motivé cherchant à contribuer à des projets innovants 
                  tout en continuant à apprendre et à maîtriser les dernières technologies 
                  du développement logiciel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section with Progress Bars */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Mes Compétences</h2>
            <p className="text-xl text-gray-600">Niveau de maîtrise des technologies</p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            {Object.entries(skills).map(([key, skill], categoryIndex) => (
              <div key={key} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl p-8 border border-gray-100 h-full transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      {skill.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{skill.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {skill.items.map((item, index) => (
                      <ProgressBar 
                        key={index}
                        skill={item}
                        barColor={skill.barColor}
                        isVisible={isVisible}
                        delay={categoryIndex * 200 + index * 100}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Projects Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Projets Réalisés</h2>
            <p className="text-xl text-gray-600">Quelques exemples de mes réalisations</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Exemple de projet 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">Portfolio Personnel</h3>
              <p className="text-gray-600 mb-4">
                Site web responsive présentant mon parcours, mes compétences et mes contacts réalisés avec React et Node.js.
              </p>
              <a
                href="https://github.com/francke15/mon-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              >
                
              </a>
            </div>
            {/* Exemple de projet 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">yan's resto et traiteur</h3>
              <p className="text-gray-600 mb-4">
                Application web pour recevoir des commandes, organiser des événements, réalisée avec HTML, CSS, JavaScript et Laravel.
              </p>
              <a
                href="https://github.com/francke15/todo-app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              
              >
              </a>
            </div>
            {/* Exemple de projet 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">Chamloc</h3>
              <p className="text-gray-600 mb-4">
                application de gestion des chambres et studios dans la ville de Dschang, réalisée avec HTML, CSS, JavaScript et Laravel.
              </p>
              <a
                href="https://github.com/francke15/unity-mini-game"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              >
              
              </a>
            </div>
          </div>
        </section>

// ...existing code...

        {/* Social Media Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Suivez-moi</h2>
              <p className="text-xl text-gray-600">Connectons-nous sur les réseaux sociaux</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{social.name}</h3>
                  <p className="text-gray-600 text-sm">{social.description}</p>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* External link icon */}
                  <ExternalLink className="w-4 h-4 absolute top-3 right-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600">
                💡 <strong>Astuce :</strong> Suivez-moi pour découvrir mes derniers projets et partager des discussions techniques !
              </p>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">Points Forts</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center group">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Polyvalent</h3>
                <p className="text-white/90">Maîtrise de multiples technologies et domaines de développement</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Coffee className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Passionné</h3>
                <p className="text-white/90">Toujours en quête d'apprentissage et d'amélioration continue</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Créatif</h3>
                <p className="text-white/90">Approche innovante pour résoudre les défis techniques</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Contactez-moi</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {contactInfo.map((contact, index) => (
                <div key={index} className="text-center group">
                  {contact.link ? (
                    <a 
                      href={contact.link} 
                      className="block p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        {contact.icon}
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2">{contact.label}</h3>
                      <p className="text-gray-600 text-sm">{contact.value}</p>
                    </a>
                  ) : (
                    <div className="p-6 rounded-xl border border-gray-200 group-hover:border-blue-300 group-hover:shadow-lg transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                        {contact.icon}
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2">{contact.label}</h3>
                      <p className="text-gray-600 text-sm">{contact.value}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 mb-6">
                Prêt à collaborer sur votre prochain projet ? N'hésitez pas à me contacter !
              </p>
              <div className="flex justify-center gap-4">
                <a 
                  href="https://wa.me/237695743343" 
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
                <a 
                  href="mailto:francklowe2000@gmail.com" 
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-4 mb-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-600 transition-all duration-300"
                title={social.name}
              >
                {React.cloneElement(social.icon, { className: "w-4 h-4" })}
              </a>
            ))}
          </div>
          <p className="text-gray-400">
            © 2024 Tchatche Lowe Franck - Développeur Junior Passionné
          </p>
          <p className="text-gray-500 mt-2">
            "Code with passion, create with purpose" 💻✨
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;