# Personal Portfolio - Kishor Bhandari

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional dark theme with smooth animations
- **Responsive Layout**: Works perfectly on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Component-Based**: Modular React components for maintainability

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS, Custom CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **Package Manager**: pnpm

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd personal-portfolio

# Install dependencies
pnpm install

# Start development server
pnpm start
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**:

   - Push your code to GitHub
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect it's a React app and configure the build settings

2. **Manual Deployment**:

   ```bash
   # Install Vercel CLI
   npm i -g vercel

   # Deploy
   vercel --prod
   ```

3. **Environment Variables** (if needed):
   - Add any environment variables in Vercel dashboard
   - Prefix with `REACT_APP_` for client-side variables

### GitHub Actions CI/CD

The repository includes a GitHub Actions workflow that automatically deploys to Vercel on push to main branch.

**Required Secrets** (add in GitHub repository settings):

- `VERCEL_TOKEN`: Your Vercel API token
- `VERCEL_ORG_ID`: Your Vercel organization ID
- `VERCEL_PROJECT_ID`: Your Vercel project ID

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills section
│   ├── Projects.tsx    # Projects showcase
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── App.tsx             # Main app component
├── index.css           # Global styles
└── index.tsx           # App entry point
```

## 🎨 Customization

### Colors

Update the color palette in `tailwind.config.js`:

```javascript
colors: {
  'primary': '#6366f1',
  'secondary': '#8b5cf6',
  'dark': '#0f172a',
  // ... other colors
}
```

### Content

- **Personal Info**: Update `Hero.tsx` with your information
- **Skills**: Modify `Skills.tsx` with your technical skills
- **Projects**: Update `Projects.tsx` with your portfolio projects
- **Contact**: Update contact information in `Contact.tsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Available Scripts

```bash
pnpm start          # Start development server
pnpm build          # Build for production
pnpm test           # Run tests
pnpm eject          # Eject from Create React App
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

**Kishor Bhandari**

- Email: kishor@example.com
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

---

⭐ Star this repository if you found it helpful!
