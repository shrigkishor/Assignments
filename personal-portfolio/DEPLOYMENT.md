# Environment Variables for Vercel Deployment

## Required Environment Variables

Create a `.env.local` file in your project root for local development:

```bash
# Vercel Configuration (for CI/CD)
VERCEL_TOKEN=your_vercel_token_here
VERCEL_ORG_ID=your_org_id_here
VERCEL_PROJECT_ID=your_project_id_here

# React App Environment Variables (if needed)
REACT_APP_SITE_URL=https://your-portfolio.vercel.app
REACT_APP_CONTACT_EMAIL=kishor@example.com
```

## Getting Vercel Credentials

### 1. Vercel Token

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on your profile → Settings
3. Go to "Tokens" tab
4. Create a new token with appropriate permissions

### 2. Organization ID

1. Go to your Vercel team settings
2. Copy the Organization ID from the URL or settings

### 3. Project ID

1. Create a new project in Vercel
2. Go to project settings
3. Copy the Project ID

## GitHub Secrets Setup

Add these secrets to your GitHub repository:

1. Go to your GitHub repository
2. Settings → Secrets and variables → Actions
3. Add the following secrets:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`

## Deployment Commands

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Build Commands

```bash
# Install dependencies
pnpm install

# Build for production
pnpm build

# Preview build locally
pnpm serve
```
