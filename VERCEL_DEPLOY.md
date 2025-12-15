# Deploying to Vercel

This project is configured to deploy on Vercel. Follow these steps:

## Prerequisites

1. Create a [Vercel account](https://vercel.com/signup) if you don't have one
2. Install Vercel CLI (optional, for local testing):
   ```bash
   npm i -g vercel
   ```

## Deployment Methods

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your Git repository
4. Vercel will auto-detect the settings:

   - **Framework Preset**: Other (or Create React App)
   - **Build Command**: `NODE_OPTIONS=--openssl-legacy-provider npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install --legacy-peer-deps`
   - **Node.js Version**: 16.x (specified in `package.json`)

5. Click "Deploy"

### Method 2: Deploy via Vercel CLI

1. Install Vercel CLI:

   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:

   ```bash
   vercel login
   ```

3. Deploy:

   ```bash
   vercel
   ```

4. For production deployment:
   ```bash
   vercel --prod
   ```

## Configuration

The project includes a `vercel.json` file with the following settings:

- **Build Command**: Uses `NODE_OPTIONS=--openssl-legacy-provider` for OpenSSL compatibility
- **Install Command**: Uses `--legacy-peer-deps` to handle peer dependency conflicts
- **Output Directory**: `build` (standard Create React App output)
- **Rewrites**: All routes redirect to `/index.html` for React Router support

## Environment Variables

If you need to set environment variables:

1. Go to your project settings on Vercel
2. Navigate to "Environment Variables"
3. Add any required variables (e.g., `REACT_APP_*` variables)

## Node.js Version

The project uses Node.js 16.x (specified in `package.json` engines field and `.nvmrc` file). Vercel will automatically use this version.

## Troubleshooting

### Build Fails with OpenSSL Error

- The `NODE_OPTIONS=--openssl-legacy-provider` flag is already configured in `vercel.json`
- If issues persist, check that Vercel is using Node.js 16.x

### Build Fails with Peer Dependency Errors

- The `--legacy-peer-deps` flag is configured in the install command
- This should resolve most peer dependency conflicts

### Routes Not Working (404 errors)

- The `vercel.json` includes rewrites to redirect all routes to `index.html`
- This ensures React Router works correctly

## After Deployment

Once deployed, you'll get a URL like: `https://your-project.vercel.app`

You can:

- Set up a custom domain in Vercel project settings
- Configure automatic deployments from your Git repository
- Set up preview deployments for pull requests
