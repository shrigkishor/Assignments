import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Eye, Calendar, ArrowRight, Code } from "lucide-react";

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");

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

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with modern UI, payment integration, and admin dashboard.",
      image: "/api/placeholder/400/300",
      category: "Web Development",
      year: "2024",
      status: "completed",
      featured: true,
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team features.",
      image: "/api/placeholder/400/300",
      category: "Web Development",
      year: "2024",
      status: "completed",
      featured: true,
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description:
        "A secure mobile banking application with biometric authentication and transaction management.",
      image: "/api/placeholder/400/300",
      category: "Mobile Development",
      year: "2023",
      status: "completed",
      featured: false,
      technologies: ["React Native", "Node.js", "MySQL", "JWT"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 4,
      title: "AI Chatbot Platform",
      description:
        "An intelligent chatbot platform with natural language processing and machine learning capabilities.",
      image: "/api/placeholder/400/300",
      category: "AI/ML",
      year: "2023",
      status: "completed",
      featured: false,
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 5,
      title: "Real Estate Portal",
      description:
        "A comprehensive real estate platform with property listings, virtual tours, and agent management.",
      image: "/api/placeholder/400/300",
      category: "Web Development",
      year: "2022",
      status: "completed",
      featured: true,
      technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 6,
      title: "IoT Dashboard",
      description:
        "A real-time IoT monitoring dashboard for smart home devices and sensor data visualization.",
      image: "/api/placeholder/400/300",
      category: "IoT",
      year: "2024",
      status: "in-progress",
      featured: false,
      technologies: ["React", "MQTT", "Chart.js", "Raspberry Pi"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ];

  const categories = [
    "all",
    "Web Development",
    "Mobile Development",
    "AI/ML",
    "IoT",
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-success/10 text-success border-success/20";
      case "in-progress":
        return "bg-warning/10 text-warning border-warning/20";
      case "planned":
        return "bg-primary/10 text-primary border-primary/20";
      default:
        return "bg-gray-100 text-gray-600 border-gray-200";
    }
  };

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="max-w-7xl mx-auto"
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
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A showcase of my best work and innovative projects that
              demonstrate my expertise and creativity.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-16"
          >
            <h3 className="text-2xl font-display font-semibold text-dark mb-8 text-center">
              Featured Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="card card-hover group"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-t-xl h-48 bg-gradient-to-br from-primary/10 to-secondary/10">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                          <Code className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-dark">
                          {project.title}
                        </h4>
                      </div>
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-primary/20 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-primary/30 transition-colors flex items-center justify-center gap-1"
                          >
                            <Eye className="w-4 h-4" />
                            Live
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-secondary/20 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-secondary/30 transition-colors flex items-center justify-center gap-1"
                          >
                            <Github className="w-4 h-4" />
                            Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                          project.status
                        )}`}
                      >
                        {project.status.replace("-", " ")}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-dark group-hover:text-primary transition-colors mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Filter and All Projects */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeFilter === category
                      ? "bg-primary text-white shadow-glow"
                      : "text-gray-600 hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  {category === "all" ? "All Projects" : category}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="card card-hover group"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-t-xl h-48 bg-gradient-to-br from-primary/10 to-secondary/10">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                          <Code className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-dark">
                          {project.title}
                        </h4>
                      </div>
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-primary/20 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-primary/30 transition-colors flex items-center justify-center gap-1"
                          >
                            <Eye className="w-4 h-4" />
                            Live
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-secondary/20 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-secondary/30 transition-colors flex items-center justify-center gap-1"
                          >
                            <Github className="w-4 h-4" />
                            Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                          project.status
                        )}`}
                      >
                        {project.status.replace("-", " ")}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-dark group-hover:text-primary transition-colors mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-16 text-center"
          >
            <div className="card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-display font-semibold text-dark mb-4">
                Have a Project in Mind?
              </h3>
              <p className="text-gray-600 mb-6">
                Let's work together to bring your ideas to life with my
                expertise and creativity.
              </p>
              <button className="btn-primary group">
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
