# CI/CD Setup for Vercel Deployment

This repository includes GitHub Actions workflows for automated deployment to Vercel.

## Workflows

### 1. `vercel-deploy.yml` - Production Deployment

This workflow:
- Runs on pushes and pull requests to the `main` branch
- Lints the codebase using ESLint
- Builds the project to catch build errors early
- Deploys to Vercel production only on pushes to `main` branch

### 2. `vercel-preview.yml` - Preview Deployment

This workflow:
- Runs on pull requests to the `main` branch
- Runs lint and build checks
- Creates a preview deployment on Vercel
- Comments on the PR with the preview deployment URL

## Required GitHub Secrets

To enable deployment, you need to add the following secrets to your GitHub repository:

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Add the following secrets:

### `VERCEL_TOKEN`
- Get your Vercel token from: https://vercel.com/account/tokens
- Create a new token with appropriate permissions
- Copy and paste it as the `VERCEL_TOKEN` secret

### `VERCEL_ORG_ID`
- Find your Vercel Organization ID in your Vercel dashboard
- Or run: `vercel whoami` after installing Vercel CLI
- Or check: `vercel org ls` to see your organization details

### `VERCEL_PROJECT_ID`
- Find your Project ID in your Vercel project settings
- Or run: `vercel inspect` in your project directory

## Alternative: Finding IDs via Vercel CLI

```bash
# Install Vercel CLI globally
pnpm add -g vercel

# Login to Vercel
vercel login

# In your project directory
vercel link

# This will create/update .vercel/project.json
# Check that file for your ORG_ID and PROJECT_ID
```

## Workflow Behavior

- **Pull Requests**: 
  - `vercel-deploy.yml`: Runs lint and build checks only
  - `vercel-preview.yml`: Creates a preview deployment and comments on PR
- **Push to main**: 
  - `vercel-deploy.yml`: Runs lint and build checks, then deploys to Vercel production
  - `vercel-preview.yml`: Does not run on direct pushes

## Manual Deployment

If you need to deploy manually:
```bash
vercel --prod
```

