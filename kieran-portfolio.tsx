import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, GraduationCap, Award, ChevronDown, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    'Java', 'Python', 'C#', 'OCaml', 'JavaScript', 'HTML/CSS', 'React', 
    'SQL', 'Excel', 'Microsoft SQL Server', 'Machine Learning', 'AI'
  ];

  const experiences = [
    {
      title: 'Investment Banking Intern',
      company: 'City of London Investment Management Company Limited',
      location: 'West Chester, PA',
      period: 'June 2024 – Aug 2024',
      highlights: [
        'Interned for team specializing in closed-end fund (CEF) research, trading, and performance analysis',
        'Provided daily Net Asset Value (NAV) and discount assessment reports of CEF investments',
        'Created 2 comprehensive annual portfolio evaluations of major CEF investments',
        'Served as project lead with Research Team to incorporate A.I. into scraping and sorting buybacks and NAVs from London Stock Exchange'
      ]
    },
    {
      title: 'Program Teaching Assistant',
      company: 'University of Pennsylvania Summer Science Initiative (PSSI)',
      location: 'Philadelphia, PA',
      period: 'July 2023 – Aug 2024',
      highlights: [
        'Supervised/Taught 14 high-achieving high school students in college-level Materials Science and Engineering',
        'Developed hands-on activities and presentations for scanning electron microscopy, optical microscopy, thermal analysis',
        'Facilitated workshops on mechanical testing and x-ray diffraction'
      ]
    }
  ];

  const activities = [
    {
      title: 'Quant Global Macro Team Analyst',
      org: 'Wharton Asia Exchange (WAX)',
      period: 'Oct 2024 - Present',
      description: 'Weekly quantitative mathematics/models and macro-economic analysis of U.S. and Asian markets'
    },
    {
      title: 'Project Team Analyst',
      org: 'Consult A.I.',
      period: 'Oct 2024 - Present',
      description: 'AI-driven investment and consulting strategies for Vinvinea wine e-label company'
    },
    {
      title: 'Quantitative Finance Team Analyst',
      org: 'Wharton Undergraduate Finance Club',
      period: 'Feb 2024 - Present',
      description: 'Quantitative analysis and financial modeling projects'
    }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              KC
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'education', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors hover:text-blue-400 ${
                    activeSection === item ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 bg-slate-800/95 rounded-lg">
              {['home', 'about', 'experience', 'education', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 capitalize hover:bg-slate-700/50 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>
        <div className="text-center z-10 px-6">
          <div className="mb-8 animate-pulse">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-4xl font-bold">
              KC
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Kieran Chetty
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            AI Engineer & Investment Banking Professional crafting intelligent solutions at the intersection of finance and technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('experience')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105 shadow-lg"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-blue-400 rounded-full hover:bg-blue-400 hover:text-slate-900 transition-all transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
          <ChevronDown 
            className="mx-auto animate-bounce cursor-pointer" 
            size={32}
            onClick={() => scrollToSection('about')}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Currently pursuing a BSE in Artificial Intelligence at the University of Pennsylvania, 
                I'm passionate about leveraging cutting-edge AI technologies to solve complex problems 
                in finance and beyond.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                My experience spans from investment banking and quantitative analysis to teaching 
                and AI research, giving me a unique perspective on how technology can transform 
                traditional industries.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/kieranchetty" target="_blank" rel="noopener noreferrer" 
                   className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/kieran-chetty" target="_blank" rel="noopener noreferrer"
                   className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:chettyk@seas.upenn.edu"
                   className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm hover:bg-slate-800/70 transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-400 mb-2">{exp.title}</h3>
                    <p className="text-xl text-gray-300">{exp.company}</p>
                    <p className="text-gray-400">{exp.location}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-sm">
                      {exp.period}
                    </span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-gray-300 leading-relaxed flex items-start">
                      <span className="text-blue-400 mr-3 mt-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Education & Activities
          </h2>
          
          <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm mb-8">
            <div className="flex items-center mb-4">
              <GraduationCap className="text-blue-400 mr-3" size={28} />
              <div>
                <h3 className="text-2xl font-semibold text-blue-400">University of Pennsylvania</h3>
                <p className="text-gray-300">BSE in Artificial Intelligence</p>
                <p className="text-gray-400">Aug 2024 - Present</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm mb-8">
            <div className="flex items-center mb-4">
              <Award className="text-blue-400 mr-3" size={28} />
              <div>
                <h3 className="text-2xl font-semibold text-blue-400">Conestoga High School</h3>
                <p className="text-gray-300">Unweighted GPA: 4.0/4.0 | Cumulative GPA: 5.09/5.20</p>
                <p className="text-gray-400">Aug 2020 - June 2024</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-6 text-center">Current Activities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm hover:bg-slate-800/70 transition-all">
                <h4 className="text-lg font-semibold text-blue-400 mb-2">{activity.title}</h4>
                <p className="text-gray-300 font-medium mb-2">{activity.org}</p>
                <p className="text-sm text-gray-400 mb-3">{activity.period}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Project
          </h2>
          
          <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <Code className="text-blue-400 mr-3" size={28} />
              <h3 className="text-2xl font-semibold text-blue-400">Photography Website</h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Developed a comprehensive family photography website featuring travel documentation, 
              public galleries, and secure private galleries with password authentication.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {['HTML', 'CSS', 'JavaScript', 'JSON'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <a 
              href="https://github.com/kchett1/DJPhoto" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105"
            >
              View on GitHub
              <ExternalLink className="ml-2" size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, AI innovations, 
            or potential collaborations in fintech and beyond.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a 
              href="mailto:chettyk@seas.upenn.edu"
              className="p-8 bg-slate-800/50 rounded-xl backdrop-blur-sm hover:bg-slate-800/70 transition-all transform hover:scale-105"
            >
              <Mail className="mx-auto mb-4 text-blue-400" size={32} />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300">chettyk@seas.upenn.edu</p>
            </a>
            
            <a 
              href="https://linkedin.com/in/kieran-chetty" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-8 bg-slate-800/50 rounded-xl backdrop-blur-sm hover:bg-slate-800/70 transition-all transform hover:scale-105"
            >
              <Linkedin className="mx-auto mb-4 text-blue-400" size={32} />
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-300">Connect with me</p>
            </a>
            
            <a 
              href="https://github.com/kieranchetty" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-8 bg-slate-800/50 rounded-xl backdrop-blur-sm hover:bg-slate-800/70 transition-all transform hover:scale-105"
            >
              <Github className="mx-auto mb-4 text-blue-400" size={32} />
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-gray-300">View my projects</p>
            </a>
          </div>
          
          <p className="text-gray-400">
            📍 Currently based in Philadelphia, PA
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900/50 border-t border-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Kieran Chetty. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}