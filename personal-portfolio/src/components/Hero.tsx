import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:kishor@example.com", label: "Email" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center bg-dark pt-16">
      <div className="container-custom">
        <motion.div
          ref={heroRef}
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <motion.div
                variants={itemVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight">
                    Hi, I'm <span className="text-yellow-400">Kishor</span> 👋
                    UPDATED
                  </h1>
                  <h2 className="text-2xl md:text-3xl text-gray-300 font-medium">
                    Full Stack Developer
                  </h2>
                </div>

                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  I'm a passionate full stack developer specializing in React.js
                  and Node.js. I love creating exceptional digital experiences
                  that are fast, accessible, and visually stunning. With over 5
                  years of experience, I bring ideas to life through clean code
                  and innovative solutions.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5" />
                  <span className="text-lg">Kathmandu, Nepal</span>
                </div>
                <div className="flex items-center space-x-3 text-green-400">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-lg">Available for new projects</span>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex space-x-6"
              >
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 border-2 border-gray-600 rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:border-white hover:bg-white/5 transition-all duration-300 group"
                      aria-label={link.label}
                    >
                      <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </a>
                  );
                })}
              </motion.div>
            </div>

            {/* Right Content - Profile Photo */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Background decorative elements */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl"></div>

                {/* Main photo container */}
                <div className="relative z-10">
                  {/* Photo frame with shadow */}
                  <div className="relative bg-white rounded-2xl p-1 shadow-2xl">
                    <div className="w-80 h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden">
                      {/* User photo placeholder - replace with actual photo */}
                      <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                        <div className="text-center text-gray-600">
                          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-4xl font-display font-bold text-white">
                              KB
                            </span>
                          </div>
                          <h3 className="text-2xl font-semibold mb-2">
                            Kishor Bhandari
                          </h3>
                          <p className="text-lg opacity-90">
                            Full Stack Developer
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating stats */}
                  <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-dark">5+</div>
                      <div className="text-xs text-gray-600">Years Exp</div>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-dark">50+</div>
                      <div className="text-xs text-gray-600">Projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
