"use client";

import { Briefcase, Users, TrendingUp, Globe } from "lucide-react";
import Card from "@/components/ui/Card";
import { useTheme } from "@/contexts/ThemeContext";

const CareerSection = () => {
  const { isDark } = useTheme();
  const careerBenefits = [
    {
      icon: Briefcase,
      title: "Exciting Projects",
      description:
        "Work on cutting-edge technologies and innovative solutions that make a real impact.",
    },
    {
      icon: Users,
      title: "Collaborative Team",
      description:
        "Join a diverse team of passionate professionals who value creativity and teamwork.",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description:
        "Continuous learning opportunities and clear career progression paths.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description:
        "Contribute to projects that reach users worldwide and drive digital transformation.",
    },
  ];

  const openPositions = [
    {
      title: "Flutter Developer",
      department: "Development",
      location: "BishalNagar, Kathmandu",
      type: "Full-time",
      experience: "Mid-level",
      status: "OPEN",
    },
    {
      title: "MERN Stack Backend Developer",
      department: "Development",
      location: "BishalNagar, Kathmandu",
      type: "Full-time",
      experience: "Mid-level",
      status: "OPEN",
    },
    {
      title: "Frontend Developer",
      department: "Development",
      location: "BishalNagar, Kathmandu",
      type: "Full-time",
      experience: "Mid-level",
      status: "OPEN",
    },
    {
      title: "QA Engineer",
      department: "Quality Assurance",
      location: "BishalNagar, Kathmandu",
      type: "Full-time",
      experience: "Mid-level",
      status: "OPEN",
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "BishalNagar, Kathmandu",
      type: "Full-time",
      experience: "Mid-level",
      status: "OPEN",
    },
    {
      title: "Graphics Designer",
      department: "Design",
      location: "BishalNagar, Kathmandu",
      type: "Full-time",
      experience: "Mid-level",
      status: "OPEN",
    },
    {
      title: "QA Engineer",
      department: "Quality Assurance",
      location: "BishalNagar, Kathmandu",
      type: "Full-time",
      experience: "Mid-level",
      status: "OPEN",
    },
  ];

  return (
    <section
      id="career"
      className={`py-20 transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"
          : "bg-gradient-to-br from-blue-50 via-white to-indigo-50"
      }`}
    >
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Join a Team That Builds
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-300 mb-6">
            Global solutions
          </h3>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            At Shrig Solutions, we don&apos;t just create digital solutions—we
            build careers. Join a team that values innovation, collaboration,
            and personal growth.
          </p>
          <button className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300">
            Explore Open Positions
          </button>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Why Join Shrig Solutions?
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {careerBenefits.map((benefit, index) => (
              <Card
                key={index}
                variant="glass"
                className="text-center p-6 border border-blue-500/20"
              >
                <div className="text-4xl mb-4 flex justify-center">
                  <benefit.icon className="text-blue-400" />
                </div>
                <h4 className="text-lg md:text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h4>
                <p className="text-gray-300">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              CURRENT OPENINGS
            </h3>
            <p className="text-lg md:text-xl text-gray-300">
              We&apos;re hiring!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openPositions.map((position, index) => (
              <Card
                key={index}
                variant="glass"
                className="p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-semibold text-white">
                      {position.title}
                    </h4>
                    <span className="text-sm bg-green-600/20 text-green-300 px-2 py-1 rounded-full font-medium">
                      {position.status}
                    </span>
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-gray-300">
                      <span className="text-sm">📍</span>
                      <span className="text-sm">{position.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <span className="text-sm">⏰</span>
                      <span className="text-sm">{position.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <span className="text-sm">👤</span>
                      <span className="text-sm">{position.experience}</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white px-4 py-2 rounded-full font-medium transition-all duration-300">
                    APPLY NOW
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-blue-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Join Our Team Today!
            </h3>
            <h4 className="text-2xl font-bold text-blue-300 mb-6">
              Be Part of Something Innovative and Impactful
            </h4>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              At Shrig Solutions, we believe in fostering talent and empowering
              individuals to thrive in a collaborative and dynamic environment.
              Join our passionate team and work on cutting-edge projects that
              make a real difference. If you&apos;re driven by innovation and
              eager to grow, we&apos;d love to have you on board.
            </p>
            <button className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300">
              Apply Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
