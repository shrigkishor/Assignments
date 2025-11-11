const fs = require('fs');
const path = require('path');

const teamMembers = [
  { name: "Kishor Bhandari", initials: "KB", team: "Leadership" },
  { name: "Suman Dhakal", initials: "SD", team: "Technology" },
  { name: "Ashlesh Pandey", initials: "AP", team: "Mobile" },
  { name: "Dipesh Thapa Magar", initials: "DT", team: "Design" },
  { name: "Arjun Karki", initials: "AK", team: "Design" },
  { name: "Subba Saheb Chaudhary", initials: "SC", team: "Infrastructure" },
  { name: "Utsav Shrestha", initials: "US", team: "Mobile" },
  { name: "Suraj Paudel", initials: "SP", team: "Mobile" },
  { name: "Aman Rajbanshi", initials: "AR", team: "Quality Assurance" },
  { name: "Raman Karki", initials: "RK", team: "Web Development" },
  { name: "Atisha Thapa", initials: "AT", team: "Web Development" }
];

const teamColors = {
  "Leadership": "#4A90E2",
  "Technology": "#7C3AED",
  "Mobile": "#F59E0B",
  "Design": "#10B981",
  "Infrastructure": "#EF4444",
  "Quality Assurance": "#8B5CF6",
  "Web Development": "#06B6D4"
};

// Create SVG placeholder for each team member
teamMembers.forEach(member => {
  const color = teamColors[member.team] || "#4A90E2";
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <defs>
    <linearGradient id="gradient-${member.initials}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${color}"/>
      <stop offset="100%" stop-color="${color}CC"/>
    </linearGradient>
  </defs>
  <rect width="400" height="400" fill="url(#gradient-${member.initials})"/>
  <text x="200" y="200" font-family="Arial, sans-serif" font-size="120" font-weight="bold" text-anchor="middle" fill="white" dy="40">
    ${member.initials}
  </text>
  <text x="200" y="320" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="white">
    ${member.name}
  </text>
  <text x="200" y="350" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="white" opacity="0.8">
    ${member.team}
  </text>
</svg>`;

  const fileName = member.name.toLowerCase().replace(/\s+/g, '-') + '.svg';
  const filePath = path.join(__dirname, '../public/images/team', fileName);
  
  fs.writeFileSync(filePath, svg);
  console.log(`Created placeholder for ${member.name}: ${fileName}`);
});

console.log('\nTeam member placeholders created successfully!');
console.log('Replace these with actual photos from https://shrigsolutions.com/team/');
