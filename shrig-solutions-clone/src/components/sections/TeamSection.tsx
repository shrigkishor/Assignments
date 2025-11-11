"use client";

import Image from "next/image";
import {
  Linkedin,
  Github,
  Users,
  ArrowRight,
  Sparkles,
  Mail,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { TEAM_MEMBERS } from "@/constants/team";

const TeamSection = () => {
  const { isDark } = useTheme();

  // Team gradient mapping
  const teamGradients: Record<string, string> = {
    Leadership: "from-blue-600 to-cyan-500",
    Technology: "from-purple-600 to-pink-500",
    Mobile: "from-orange-600 to-red-500",
    Design: "from-green-600 to-emerald-500",
    Infrastructure: "from-indigo-600 to-blue-500",
    "Quality Assurance": "from-pink-600 to-rose-500",
    "Web Development": "from-teal-600 to-cyan-500",
  };

  const teamMembers = TEAM_MEMBERS.map((member) => ({
    ...member,
    gradient: teamGradients[member.team] || "from-blue-600 to-cyan-500",
  }));

  return (
    <section id="team" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Team Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/team/team-background.jpg')",
            opacity: isDark ? 0.05 : 0.02,
          }}
        ></div>

        {/* Subtle animated elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-30"></div>
          <div
            className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-20"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse opacity-25"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-8">
            <Users className="w-4 h-4" />
            Our Team
          </div>

          <h2
            className={`text-5xl md:text-6xl font-bold font-poppins mb-8 transition-all duration-500 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Meet Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Amazing Team
            </span>
          </h2>
          <p
            className={`text-xl max-w-4xl mx-auto font-inter leading-relaxed transition-all duration-500 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            The brilliant minds behind our innovative solutions and exceptional
            results
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member) => (
            <div key={member.name} className="group">
              <div
                className={`relative rounded-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                  isDark
                    ? "bg-gradient-to-br from-gray-800/80 via-gray-700/80 to-gray-800/80 border border-gray-700/50 backdrop-blur-sm"
                    : "bg-gradient-to-br from-white/90 via-gray-50/90 to-white/90 border border-gray-200/50 backdrop-blur-sm"
                } shadow-lg hover:shadow-xl`}
              >
                {/* Background Image */}
                <div className="relative w-full h-48">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-4xl font-bold hidden`}
                  >
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>

                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Team Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium transition-all duration-500 ${
                        isDark
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                          : "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700"
                      } shadow-lg`}
                    >
                      {member.team}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Info */}
                  <div className="text-center mb-4">
                    <h3
                      className={`text-lg font-bold font-poppins mb-2 transition-all duration-500 ${
                        isDark
                          ? "text-white group-hover:text-blue-400"
                          : "text-gray-900 group-hover:text-blue-600"
                      }`}
                    >
                      {member.name}
                    </h3>
                    <p
                      className={`font-inter text-sm font-medium transition-all duration-500 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {member.role}
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.skills.slice(0, 2).map((skill) => (
                        <span
                          key={skill}
                          className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-500 ${
                            isDark
                              ? "bg-gray-700/50 text-gray-300"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                      {member.skills.length > 2 && (
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-500 ${
                            isDark
                              ? "bg-blue-600/20 text-blue-400"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          +{member.skills.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 transform hover:scale-110 ${
                        isDark
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25"
                          : "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 hover:shadow-lg hover:shadow-blue-500/25"
                      }`}
                    >
                      <Linkedin size={16} />
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 transform hover:scale-110 ${
                        isDark
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25"
                          : "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 hover:shadow-lg hover:shadow-blue-500/25"
                      }`}
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={`mailto:${member.name
                        .toLowerCase()
                        .replace(" ", ".")}@shrigsolutions.com`}
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 transform hover:scale-110 ${
                        isDark
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25"
                          : "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 hover:shadow-lg hover:shadow-blue-500/25"
                      }`}
                    >
                      <Mail size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "12", label: "Team Members", icon: Users },
              { number: "7", label: "Expertise Areas", icon: Sparkles },
              { number: "50+", label: "Years Combined", icon: ArrowRight },
              { number: "100%", label: "Dedication", icon: Users },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-500 ${
                    isDark
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600"
                  }`}
                >
                  <stat.icon className="w-8 h-8" />
                </div>
                <div
                  className={`text-3xl md:text-4xl font-bold font-poppins mb-2 transition-all duration-500 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {stat.number}
                </div>
                <div
                  className={`text-sm font-medium transition-all duration-500 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="relative rounded-2xl p-12 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>

            {/* Animated background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full opacity-10 animate-pulse"></div>
              <div
                className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full opacity-10 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>

            <div className="relative z-10 text-white">
              <h3 className="text-3xl font-bold font-poppins mb-4">
                Ready to Join Our Team?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Be part of something extraordinary and help us shape the future
              </p>
              <button className="group bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white px-10 py-4 rounded-full text-lg font-bold transition-all duration-500 transform hover:scale-105 flex items-center gap-3 mx-auto shadow-2xl">
                <span>Apply Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
