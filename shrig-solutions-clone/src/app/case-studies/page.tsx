"use client";

import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Card from "@/components/ui/Card";

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: "AquaBuildr",
      description:
        "Aquabuildr is your ultimate tool for aquarium management, designed for enthusiasts of all levels",
      image: "/images/media/aquabuildr.svg",
      category: "Web Application",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Saro",
      description:
        "Fast and Fun way to share the moment with your friends and family.",
      image: "/images/media/saro.svg",
      category: "Mobile App",
      technologies: ["React Native", "Firebase", "AWS"],
    },
    {
      title: "Jerry Crush",
      description: "A matchmaking game made in Unity",
      image: "/images/media/jerry-crush.svg",
      category: "Game Development",
      technologies: ["Unity", "C#", "Blender"],
    },
    {
      title: "FlyCar Fantasy",
      description: "3D Game",
      image: "/images/media/flycar-fantasy.svg",
      category: "3D Game",
      technologies: ["Unity", "C#", "3D Modeling"],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <Navigation />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Case studies
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8">
            Our Success Stories
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover real-world examples of our innovative solutions driving
            results. From transforming business processes to delivering
            exceptional digital experiences, our case studies showcase the
            impact of our work across diverse industries.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              variant="glass"
              className="group overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="relative">
                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg mb-6 flex items-center justify-center">
                  <Image
                    src={study.image}
                    alt={study.title}
                    width={96}
                    height={96}
                    className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="hidden text-6xl opacity-60 group-hover:opacity-80 transition-opacity duration-300">
                    {study.title === "AquaBuildr" && "🐠"}
                    {study.title === "Saro" && "📱"}
                    {study.title === "Jerry Crush" && "🎮"}
                    {study.title === "FlyCar Fantasy" && "🚗"}
                  </div>
                </div>

                {/* Project Info */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-blue-400 font-medium">
                      {study.category}
                    </span>
                    <div className="flex space-x-2">
                      {study.technologies.slice(0, 2).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-blue-600/20 text-blue-300 px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {study.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed mb-4">
                    {study.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      {study.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-gray-700/50 text-gray-400 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button className="text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors duration-300">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-blue-500/30">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help bring your vision to life with
              innovative solutions and proven results.
            </p>
            <button className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default CaseStudiesPage;
