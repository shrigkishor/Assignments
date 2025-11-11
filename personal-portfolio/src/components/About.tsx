import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Code, Database, Globe, Award, Users, Clock } from "lucide-react";

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const stats = [
    { icon: Code, value: "5+", label: "Years Experience" },
    { icon: Database, value: "50+", label: "Projects Completed" },
    { icon: Users, value: "40+", label: "Happy Clients" },
    { icon: Clock, value: "24/7", label: "Support Available" },
  ];

  const skills = [
    { name: "Frontend Development", percentage: 90 },
    { name: "Backend Development", percentage: 85 },
    { name: "Mobile Development", percentage: 80 },
    { name: "DevOps & Cloud", percentage: 75 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillBars = aboutRef.current?.querySelectorAll(".skill-bar");
    skillBars?.forEach((bar) => {
      observer.observe(bar);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={aboutRef}
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get to know more about my journey, experience, and passion for
              creating exceptional digital experiences.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="card p-8">
                <h3 className="text-2xl font-display font-semibold text-dark mb-6">
                  My Story
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    I'm a passionate Full Stack Developer with over 5 years of
                    experience in creating exceptional digital experiences. My
                    journey began with a curiosity for how things work on the
                    web, and it has evolved into a career dedicated to building
                    innovative solutions that solve real-world problems.
                  </p>
                  <p>
                    My approach combines clean code principles with cutting-edge
                    technologies to deliver solutions that not only meet
                    requirements but exceed expectations. I believe in
                    continuous learning and staying up-to-date with the latest
                    industry trends.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new
                    technologies, contributing to open-source projects, or
                    sharing knowledge with the developer community.
                  </p>
                </div>
              </div>

              {/* Skills Progress */}
              <div className="card p-8">
                <h3 className="text-2xl font-display font-semibold text-dark mb-6">
                  My Skills
                </h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-bar">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-dark">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {skill.percentage}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      className="card p-6 text-center card-hover"
                      variants={itemVariants}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-display font-bold text-dark mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Personal Info Card */}
              <div className="card p-8">
                <h3 className="text-2xl font-display font-semibold text-dark mb-6">
                  Personal Info
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Code className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-dark">
                        Full Stack Developer
                      </div>
                      <div className="text-sm text-gray-500">
                        Professional Role
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Globe className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <div className="font-medium text-dark">
                        Kathmandu, Nepal
                      </div>
                      <div className="text-sm text-gray-500">Location</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center">
                      <Award className="w-4 h-4 text-success" />
                    </div>
                    <div>
                      <div className="font-medium text-dark">
                        Available for Work
                      </div>
                      <div className="text-sm text-gray-500">Status</div>
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

export default About;
