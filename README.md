# NFT Based - Portfolio Template

> **Note:** This is a portfolio template copy of a closed project. All API services are mocked and authentication works with any credentials for demonstration purposes.

A modern, responsive web application for NFT-based musical intellectual property management. Built with React, TypeScript, and Redux, featuring a comprehensive user interface for token management, user authentication, and NFT marketplace functionality.

## 🎯 Features

- **User Authentication & Registration**

  - Multi-step registration process
  - Login/Register with form validation
  - Mock authentication (accepts any credentials for demo)

- **Token Management**

  - Token dashboard with real-time charts
  - Token purchase and trading interface
  - Portfolio tracking

- **NFT Marketplace**

  - Browse and explore NFT collections
  - Purchase plans and subscriptions
  - Roadmap and project information

- **Responsive Design**

  - Mobile-first approach
  - Desktop and mobile layouts
  - Adaptive UI components

- **Internationalization**

  - Multi-language support (English, French)
  - Translation system

- **User Dashboard**
  - Account management
  - Settings and profile
  - Support system

## 🛠️ Tech Stack

### Core

- **React** 17.0.2 - UI library
- **TypeScript** 4.3.2 - Type safety
- **Redux** 4.1.0 - State management
- **React Router** 5.2.0 - Routing

### UI & Styling

- **Material-UI** 4.12.3 - Component library
- **SASS** 1.39.0 - CSS preprocessing
- **ApexCharts** 3.27.1 - Data visualization
- **React Hook Form** 7.9.0 - Form management

### Build Tools

- **Create React App** 4.0.3 - Build tooling
- **Webpack** (via CRA)
- **Babel** (via CRA)

### Additional Libraries

- **Axios** 0.21.1 - HTTP client (mocked)
- **React Toastify** 7.0.4 - Notifications
- **Formik** 2.2.9 - Form handling
- **Yup** 0.32.9 - Schema validation

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 16.x (required - specified in `package.json`)
- **npm** 7.x or higher
- **Git** (for cloning the repository)

## 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd nftbased-master
   ```

2. **Install dependencies**

   ```bash
   npm install --legacy-peer-deps
   ```

   > **Note:** The `--legacy-peer-deps` flag is required due to peer dependency conflicts in the project dependencies.

3. **Start the development server**

   ```bash
   npm start
   ```

   The application will open at [http://localhost:1337](http://localhost:1337)

## 📜 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode with OpenSSL legacy provider support.

- Opens at [http://localhost:1337](http://localhost:1337)
- Hot reload enabled
- Uses `NODE_OPTIONS=--openssl-legacy-provider` for Node.js compatibility

### `npm run build`

Builds the app for production to the `build` folder.

- Optimized production build
- Minified and bundled
- Ready for deployment

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run lint`

Runs ESLint to check code quality and style.

### `npm run format`

Formats code using Prettier.

## 📁 Project Structure

```
nftbased-master/
├── public/                 # Static assets
│   ├── index.html         # HTML template
│   ├── favicon.png        # App icon
│   └── ...
├── src/
│   ├── api/              # API services (all mocked)
│   │   ├── auth.service.ts
│   │   ├── currency.service.ts
│   │   └── ...
│   ├── assets/           # Images, fonts, animations
│   ├── components/       # Reusable React components
│   │   ├── FormInput/
│   │   ├── Menu/
│   │   └── ...
│   ├── constants/        # Constants and configuration
│   ├── hooks/            # Custom React hooks
│   ├── interfaces/       # TypeScript interfaces
│   ├── router/           # Route configuration
│   ├── screens/          # Page components
│   │   ├── Home/
│   │   ├── Login/
│   │   ├── Register/
│   │   ├── Account/
│   │   └── ...
│   ├── store/            # Redux store configuration
│   ├── styles/           # Global styles
│   ├── translations/     # i18n translation files
│   ├── utils/            # Utility functions
│   ├── index.tsx         # Application entry point
│   └── index.scss        # Global styles
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vercel.json           # Vercel deployment config
└── README.md             # This file
```

## 🌐 Deployment

### Deploy to Vercel

This project is configured for easy deployment on Vercel:

1. **Push your code to a Git repository** (GitHub, GitLab, or Bitbucket)

2. **Import to Vercel**

   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your Git repository
   - Vercel will auto-detect settings from `vercel.json`

3. **Deploy**
   - Click "Deploy"
   - Your app will be live at `https://your-project.vercel.app`

The `vercel.json` file includes:

- Build command with OpenSSL legacy provider
- Output directory configuration
- React Router rewrites for SPA routing
- Install command with legacy peer deps

For detailed deployment instructions, see [VERCEL_DEPLOY.md](./VERCEL_DEPLOY.md)

### Manual Build

To build for production manually:

```bash
npm run build
```

The `build` folder contains the optimized production build ready for deployment to any static hosting service.

## 🔐 Demo Mode

**Important:** This is a portfolio template with all API services mocked:

- **Authentication:** Login and registration work with any credentials
- **API Calls:** All network requests are disabled and return mock responses
- **No Backend:** No actual server connection is made
- **Local Storage:** User data is stored locally in the browser

This allows the application to function as a complete UI/UX demonstration without requiring backend infrastructure.

## 🎨 Key Features Explained

### Authentication Flow

- Users can register with a multi-step form
- Login accepts any email/password combination
- Session is managed via Redux and local storage
- Protected routes redirect to login when unauthenticated

### Token Management

- Interactive charts showing token value over time
- Token purchase interface
- Portfolio tracking and management

### Responsive Design

- Separate mobile and desktop layouts
- Adaptive components that adjust to screen size
- Touch-friendly mobile interface

## 🔧 Configuration

### Environment Variables

The project uses environment variables for configuration (currently all mocked):

- `REACT_APP_BASE_URL` - API base URL (not used, mocked)
- `REACT_APP_NUMERIFY_API_KEY` - Phone validation API key (not used, mocked)

### Node.js Version

The project requires **Node.js 16.x** as specified in:

- `package.json` engines field
- `.nvmrc` file

## 🐛 Troubleshooting

### Build Errors

**OpenSSL Error:**

```
Error: error:0308010C:digital envelope routines::unsupported
```

- Solution: The build scripts already include `NODE_OPTIONS=--openssl-legacy-provider`

**Peer Dependency Warnings:**

- Solution: Use `npm install --legacy-peer-deps` as shown in installation

### Port Already in Use

If port 1337 is already in use:

- Change the port in `package.json` start script
- Or set `PORT` environment variable

### Module Not Found

If you encounter module errors:

```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

## 📝 Development Notes

- All API services are mocked in `src/api/` directory
- Firebase is disabled (commented out in `src/index.tsx`)
- No actual network requests are made
- Authentication is simulated with local storage

## 🤝 Contributing

This is a portfolio template project. If you'd like to use it as a base for your own project:

1. Fork the repository
2. Remove the portfolio notices from login/register forms
3. Implement real API endpoints
4. Configure your own Firebase/backend services

## 📄 License

This project is a template copy of a closed project, provided for portfolio demonstration purposes.

## 👤 Author

Portfolio template - Original project was closed. This is a template copy for demonstration purposes.

---

**Built with ❤️ using React, TypeScript, and modern web technologies.**
