import React from "react";
import { motion } from "framer-motion";
import { Code, Cloud, Smartphone, Zap, Palette, Server } from "lucide-react";

const Skills: React.FC = () => {
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

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 95 },
      ],
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "REST APIs", level: 90 },
      ],
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React Native", level: 85 },
        { name: "Flutter", level: 75 },
        { name: "iOS Development", level: 70 },
        { name: "Android Development", level: 70 },
        { name: "Expo", level: 80 },
        { name: "Mobile UI/UX", level: 85 },
      ],
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "AWS", level: 80 },
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 70 },
        { name: "CI/CD", level: 80 },
        { name: "Linux", level: 85 },
        { name: "Git", level: 90 },
      ],
    },
    {
      title: "Design & Tools",
      icon: Palette,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Figma", level: 85 },
        { name: "Adobe Creative Suite", level: 75 },
        { name: "VS Code", level: 95 },
        { name: "GitHub", level: 90 },
        { name: "Postman", level: 85 },
        { name: "Jira", level: 80 },
      ],
    },
    {
      title: "Other Technologies",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "GraphQL", level: 80 },
        { name: "WebSocket", level: 75 },
        { name: "Redis", level: 70 },
        { name: "Elasticsearch", level: 65 },
        { name: "Microservices", level: 75 },
        { name: "Agile/Scrum", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
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
            className="text-center mb-16"
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and the
              technologies I work with.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={categoryIndex}
                  variants={itemVariants}
                  className="card p-6 card-hover"
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-dark">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-dark">
                            {skill.name}
                          </span>
                          <span className="text-xs text-gray-500">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            className={`bg-gradient-to-r ${category.color} h-2 rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: categoryIndex * 0.1 + skillIndex * 0.05,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="card p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-display font-semibold text-dark mb-4">
                Always Learning & Growing
              </h3>
              <p className="text-gray-600 mb-6">
                Technology evolves rapidly, and I'm committed to staying current
                with the latest trends, frameworks, and best practices. I
                regularly participate in online courses, attend conferences, and
                contribute to open-source projects to expand my knowledge.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Continuous Learning",
                  "Problem Solving",
                  "Team Collaboration",
                  "Code Quality",
                  "Performance Optimization",
                ].map((trait, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
