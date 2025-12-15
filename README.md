# NFT Based - Portfolio Project

> **Portfolio Template:** This is a template copy of a closed project. All API services are mocked and authentication accepts any credentials for demonstration purposes.

A full-stack React application for NFT-based musical intellectual property management, featuring user authentication, token management, and a comprehensive marketplace interface.

## 🎯 Key Features

- **Multi-step user registration** with form validation
- **Token management dashboard** with real-time charts (ApexCharts)
- **Responsive design** with separate mobile/desktop layouts
- **Internationalization** (i18n) support
- **Redux state management** with TypeScript
- **Protected routes** and authentication flow
- **Modern UI/UX** with Material-UI components

## 🛠️ Tech Stack

**Frontend:**

- React 17 + TypeScript
- Redux for state management
- React Router for navigation
- Material-UI, SASS for styling
- React Hook Form + Yup validation
- ApexCharts for data visualization

**Build & Tools:**

- Create React App
- ESLint + Prettier
- TypeScript 4.3

## 🚀 Quick Start

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm start
# Runs on http://localhost:1337
```

## 📦 Project Structure

```
src/
├── api/              # API services (mocked for demo)
├── components/       # Reusable UI components
├── screens/          # Page components (Home, Login, Account, etc.)
├── store/            # Redux store configuration
├── hooks/            # Custom React hooks
├── router/           # Route configuration
└── translations/     # i18n files
```

## 🌐 Deployment

Deployed on Vercel with automatic CI/CD from Git repository.

**Configuration:**

- Node.js 24.x
- Build: `NODE_OPTIONS=--openssl-legacy-provider npm run build`
- Output: `build/` directory

## 💡 Technical Highlights

- **TypeScript** throughout for type safety
- **Component architecture** with separation of concerns
- **Responsive design** patterns for mobile/desktop
- **Form validation** with React Hook Form and Yup schemas
- **State management** with Redux for complex application state
- **Code organization** following React best practices

## 📝 Notes

- All API endpoints are mocked (no backend required)
- Authentication works with any credentials for demo purposes
- Original project was closed; this is a template copy for portfolio demonstration

---

**Built with React, TypeScript, and modern web technologies.**
