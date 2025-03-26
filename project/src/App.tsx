import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import BinaryRain from './components/BinaryRain';
import ProfileHeader from './components/ProfileHeader';

function App() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GSAP'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL'] },
    { category: 'DevOps', items: ['Docker', 'AWS', 'CI/CD', 'Kubernetes', 'Terraform'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Figma', 'Postman', 'Linux'] },
  ];

  return (
    <div className="min-h-screen bg-[#0a0c10] text-[#8892b0]">
      <BinaryRain />
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-6 py-24 text-center z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <ProfileHeader
              name="Nishant Raj Khadka"
              title="Full Stack Developer"
              imageUrl="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80"
            />
            <div className="flex justify-center gap-6 mb-12">
              <motion.a
                href="https://github.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-[#00ff00] hover:text-[#00ff00]/80"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-[#00ff00] hover:text-[#00ff00]/80"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:contact@example.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-[#00ff00] hover:text-[#00ff00]/80"
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20" ref={ref}>
        <motion.div
          className="container mx-auto px-6"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <h2 className="section-heading">About Me</h2>
          <div className="terminal mt-8">
            <p className="mb-4">
              <span className="text-[#00ff00]">$</span> whoami
            </p>
            <p className="mb-4">
              A passionate Full Stack Developer with expertise in modern web technologies.
              I specialize in creating robust and scalable applications using React, Node.js,
              and cutting-edge tools.
            </p>
            <p className="mb-4">
              <span className="text-[#00ff00]">$</span> cat skills.txt
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'].map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-[#0a192f]">
        <motion.div
          className="container mx-auto px-6"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <h2 className="section-heading">Skills</h2>
          <div className="terminal mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((category) => (
              <motion.div
                key={category.category}
                className="p-6 border border-[#00ff00]/20 rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-bold mb-4 text-[#00ff00]">
                  <span className="text-[#00ff00]">$</span> ls {category.category}/
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill) => (
                    <motion.span
                      key={skill}
                      className="skill-badge"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="section-heading">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio items will be added here */}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#0a192f]">
        <div className="container mx-auto px-6">
          <h2 className="section-heading">Projects</h2>
          <div className="space-y-12">
            {/* Project case studies will be added here */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="section-heading">Contact</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#ccd6f6]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full bg-[#0a0c10] border border-[#00ff00]/20 rounded-md shadow-sm focus:border-[#00ff00] focus:ring focus:ring-[#00ff00]/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#ccd6f6]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full bg-[#0a0c10] border border-[#00ff00]/20 rounded-md shadow-sm focus:border-[#00ff00] focus:ring focus:ring-[#00ff00]/20"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#ccd6f6]">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full bg-[#0a0c10] border border-[#00ff00]/20 rounded-md shadow-sm focus:border-[#00ff00] focus:ring focus:ring-[#00ff00]/20"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#00ff00]/10 text-[#00ff00] border border-[#00ff00] py-3 px-6 rounded-md hover:bg-[#00ff00]/20 transition-colors transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0c10] text-[#8892b0] py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Nishant Raj Khadka. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;