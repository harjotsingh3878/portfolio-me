# Portfolio MFE (Micro Frontend)

A production-ready micro frontend architecture demonstrating advanced React patterns, Module Federation, and modern web development best practices.

## 🎯 Project Overview

This project showcases a scalable micro frontend architecture with:
* **Overview Dashboard** - Real-time balance tracking and recent transaction summary
* **Transaction History Micro-Frontend** - Complete transaction management with filtering and sorting
* **Profile Settings Micro-Frontend** - User profile management and preferences
* **Notifications Micro-Frontend** - Real-time notification system with read/unread states
* **Dark/Light Mode** - Full theme support with persistent preferences

## 🏗 Architecture

### Micro Frontend Setup
* **Shell App (Host)** - Loads remote MFEs dynamically using Webpack Module Federation
* **3 Independent MFEs**:
  * **MFE 1: Transactions** - Manages transaction history and analytics (Port 3001)
  * **MFE 2: User Profile** - Handles user profile settings and preferences (Port 3002)
  * **MFE 3: Notifications** - Real-time notification center (Port 3003)
* **Backend**: Node.js + Express REST API (Port 4000)
* **Database**: PostgreSQL support (optional) - Currently using mock data
* **State Management**: Redux Toolkit with feature flags support
* **API Integration**: React Query for efficient data fetching and caching

### Module Federation Benefits
- Independent deployment of each micro frontend
- Shared dependencies to reduce bundle size
- Runtime integration without rebuilding the shell
- Technology agnostic - each MFE can use different frameworks

## 🚀 Advanced Features & Bonus Skills

### Cloud Deployment
* **GCP Cloud Run** - Containerized deployment ready
* Each MFE can be deployed independently
* Auto-scaling and serverless architecture support

### CI/CD Pipeline
* **GitHub Actions** - Automated CI/CD for each MFE
* Separate build and deploy workflows
* Automated testing and linting
* Preview deployments for pull requests

### Feature Flags
* **Harness/LaunchDarkly** integration ready
* Runtime feature toggling without deployments
* A/B testing capability
* Gradual rollout support

### Additional Capabilities
* **Performance Optimization** - Code splitting and lazy loading
* **Error Boundaries** - Graceful error handling for each MFE
* **Monitoring Ready** - Integration points for Sentry, DataDog
* **Security** - JWT authentication, CORS, secure API communication

## 📁 Project Structure

```
portfolio-mfe/
├── shell/                 # Main shell application (host)
│   ├── src/
│   │   ├── components/    # Shared components (Layout, ProtectedRoute)
│   │   ├── pages/        # Dashboard, Login pages
│   │   ├── store/        # Redux store and slices
│   │   ├── context/      # React Context (ThemeContext)
│   │   └── styles/       # Global and component styles
│   ├── public/           # Static assets
│   └── webpack.config.js # Module Federation configuration
│
├── mfe-transactions/      # Transactions micro frontend (Port 3001)
│   ├── src/
│   │   ├── App.js        # Transaction list and management
│   │   └── styles.css    # Transaction-specific styles
│   └── webpack.config.js # Exposes TransactionsApp
│
├── mfe-profile/          # Profile micro frontend (Port 3002)
│   ├── src/
│   │   ├── App.js        # User profile and settings
│   │   └── styles.css    # Profile-specific styles
│   └── webpack.config.js # Exposes ProfileApp
│
├── mfe-notifications/    # Notifications micro frontend (Port 3003)
│   ├── src/
│   │   ├── App.js        # Notification center
│   │   └── styles.css    # Notification-specific styles
│   └── webpack.config.js # Exposes NotificationsApp
│
├── backend/              # Backend API server (Port 4000)
│   ├── server.js         # Express server with REST endpoints
│   └── package.json      # Backend dependencies
│
└── shared/               # Shared utilities and constants (future)
```

## ✨ Features

### Core Functionality
- **Module Federation**: Seamless integration of micro frontends at runtime
- **Shared Dependencies**: React, React DOM, and Redux shared across all modules
- **Authentication**: JWT-based auth with protected routes
- **Theme Management**: Context-based theme switching with localStorage persistence
- **Responsive Design**: Mobile-first design with breakpoints
- **Redux State Management**: Centralized store with auth, theme, and feature flags

### User Experience
- **Dashboard Analytics**: Real-time balance and transaction overview
- **Transaction Management**: Complete CRUD operations with filtering
- **Profile Customization**: User settings and preference management
- **Notification System**: Mark as read, categorization, real-time updates
- **Dark Mode**: System-wide theme with smooth transitions

## 🛠 Technologies Used

### Frontend
- **React 18.2.0** - UI library with hooks and concurrent features
- **Redux Toolkit 2.0.1** - State management with modern Redux patterns
- **React Router 6.20.0** - Client-side routing
- **React Query (TanStack Query) 5.14.2** - Server state management and caching
- **Axios 1.6.0** - HTTP client for API calls

### Build Tools & Module Federation
- **Webpack 5.89.0** - Module bundler with Module Federation
- **Babel 7.23.6** - JavaScript transpiler
- **Webpack Dev Server 4.15.1** - Development server with HMR

### Backend
- **Node.js** - JavaScript runtime
- **Express 4.18.2** - Web framework
- **JSON Web Tokens (JWT) 9.0.2** - Authentication
- **CORS 2.8.5** - Cross-origin resource sharing

### Styling
- **CSS3** - Custom styling with CSS variables
- **CSS Modules** - Scoped styling
- **Responsive Design** - Mobile-first approach

### DevOps & Deployment (Ready)
- **Docker** - Containerization
- **GCP Cloud Run** - Serverless deployment
- **GitHub Actions** - CI/CD pipelines
- **PostgreSQL** - Database (optional, mock data currently)

### Future Enhancements
- **Harness/LaunchDarkly** - Feature flag management
- **Sentry** - Error tracking and monitoring
- **Jest & React Testing Library** - Unit and integration testing
- **Cypress** - End-to-end testing

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git for version control
- (Optional) Docker for containerized deployment
- (Optional) PostgreSQL for database integration

## 📦 Installation

Install dependencies for all modules:

```bash
# Shell application
cd shell
npm install

# Micro frontends
cd ../mfe-notifications && npm install
cd ../mfe-profile && npm install
cd ../mfe-transactions && npm install

# Backend
cd ../backend && npm install
```

## Development

### Step 1: Install Dependencies

```bash
# Install dependencies for all modules
cd /path/to/portfolio-mfe

# Shell application
cd shell
npm install
cd ..

# Micro frontends
cd mfe-notifications && npm install && cd ..
cd mfe-profile && npm install && cd ..
cd mfe-transactions && npm install && cd ..

# Backend
cd backend && npm install && cd ..
```

### Step 2: Start the Services

You need to start all services in separate terminal windows/tabs. The order matters - start backend first, then the MFEs, and finally the shell.

#### Terminal 1: Start Backend (Port 4000)
```bash
cd backend
npm start
```
Expected output: `Backend running on http://localhost:4000`

#### Terminal 2: Start Transactions MFE (Port 3001)
```bash
cd mfe-transactions
npm start
```
Expected output: Webpack dev server running on `http://localhost:3001`

#### Terminal 3: Start Profile MFE (Port 3002)
```bash
cd mfe-profile
npm start
```
Expected output: Webpack dev server running on `http://localhost:3002`

#### Terminal 4: Start Notifications MFE (Port 3003)
```bash
cd mfe-notifications
npm start
```
Expected output: Webpack dev server running on `http://localhost:3003`

#### Terminal 5: Start Shell Application (Port 3000)
```bash
cd shell
npm start
```
Expected output: Webpack dev server running on `http://localhost:3000`

### Step 3: Access the Application

Open your browser and navigate to: **http://localhost:3000**

### Step 4: Login

Use the demo credentials to login:
- **Email**: `admin@example.com`
- **Password**: `admin123`

Or try:
- **Email**: `user@example.com`
- **Password**: `user123`

### Running All Services at Once (Quick Start)

If you want to run all services with a single command:

```bash
# Terminal 1
cd backend && npm start &

# Terminal 2 (or in parallel)
cd mfe-transactions && npm start &

# Terminal 3 (or in parallel)
cd mfe-profile && npm start &

# Terminal 4 (or in parallel)
cd mfe-notifications && npm start &

# Terminal 5 (or in parallel)
cd shell && npm start
```

### Services Overview

| Service | Port | URL | Status |
|---------|------|-----|--------|
| Shell (Host) | 3000 | http://localhost:3000 | Main application |
| Transactions MFE | 3001 | http://localhost:3001 | Remote module |
| Profile MFE | 3002 | http://localhost:3002 | Remote module |
| Notifications MFE | 3003 | http://localhost:3003 | Remote module |
| Backend API | 4000 | http://localhost:4000 | API server |

## Build

Build all modules for production:

```bash
# Shell
cd shell
npm run build

# Micro frontends
cd ../mfe-notifications && npm run build
cd ../mfe-profile && npm run build
cd ../mfe-transactions && npm run build
```

## Available Routes

- `/` - Dashboard (requires authentication)
- `/login` - Login page
- `/profile` - Profile micro frontend
- `/transactions` - Transactions micro frontend
- `/notifications` - Notifications micro frontend

## Module Federation Configuration

Each module is configured with Module Federation:

- **Shell**: Host application that loads remote modules
- **Micro Frontends**: Expose their App component as `./App` or `./NotificationsApp`

Remote modules are loaded from:
- Transactions: `http://localhost:3001/remoteEntry.js`
- Profile: `http://localhost:3002/remoteEntry.js`
- Notifications: `http://localhost:3003/remoteEntry.js`

## State Management

### Redux Store
Located in `shell/src/store/`:
- `authSlice.js` - Authentication state
- `themeSlice.js` - Theme preferences
- `featureFlagsSlice.js` - Feature flags

### Context API
- `ThemeContext.js` - Theme provider and hook

## Styling

- Global styles: `shell/src/styles/global.css`
- Component styles:
  - `dashboard.css` - Dashboard layout
  - `layout.css` - Main layout
  - `login.css` - Login page

## Environment Variables

Create `.env` files in each application root:

```bash
REACT_APP_API_URL=http://localhost:5000
```

## Troubleshooting

### Port Already in Use

If you get an `EADDRINUSE` error, it means the port is already in use. Kill the process using the port:

**macOS/Linux:**
```bash
# Kill process on specific port
lsof -i :3000  # Check what's using port 3000
kill -9 <PID>  # Kill the process

# Or kill all node processes
killall node
```

**Windows:**
```bash
# Find process using port
netstat -ano | findstr :3000

# Kill the process
taskkill /PID <PID> /F
```

Alternatively, change the port in `webpack.config.js`:
```javascript
devServer: {
  port: 3000,  // Change this to any available port
  historyApiFallback: true,
}
```

### Blank Page or Nothing Loading

1. **Check all services are running**: Open developer console (F12) and check for errors
2. **Hard refresh**: Press `Cmd+Shift+R` (Mac) or `Ctrl+Shift+F5` (Windows/Linux)
3. **Clear cache**: Delete `.webpack` and `node_modules/.cache` folders
4. **Check terminal output**: Look for compilation errors in terminal windows

### Module Sharing Error: "Shared module is not available for eager consumption"

This error is fixed by the async bootstrap pattern. If you still see it:
1. Ensure all `webpack.config.js` files have `eager: false` in shared modules
2. Verify all apps have bootstrap.js files
3. Restart all servers (kill and restart npm start)

### Module Resolution Errors

**Error**: `Can't resolve '@module'`

Solutions:
1. Ensure all micro frontends are running before accessing them from shell
2. Run `npm install` in the module that has the missing dependency
3. Check `shared` section in `webpack.config.js` includes the module

### Login Not Working

1. Ensure backend is running on `http://localhost:4000`
2. Check browser console for error messages
3. Verify credentials:
   - Email: `admin@example.com`, Password: `admin123`
   - Email: `user@example.com`, Password: `user123`

### Network Errors When Accessing Remote Modules

1. Verify all MFEs are running on their assigned ports
2. Check webpack.config.js remotes configuration matches your running services:
   ```javascript
   remotes: {
     transactions: 'transactions@http://localhost:3001/remoteEntry.js',
     profile: 'profile@http://localhost:3002/remoteEntry.js',
     notifications: 'notifications@http://localhost:3003/remoteEntry.js',
   }
   ```
3. Open each port in browser to verify it's accessible (e.g., http://localhost:3001)

### Styles Not Loading

1. Ensure `style-loader` and `css-loader` are installed: `npm install`
2. Check webpack config has CSS rules configured
3. Verify CSS file imports are correct in your components

### Hot Module Replacement (HMR) Not Working

The webpack dev servers support HMR. If changes aren't reflecting:
1. Hard refresh the browser
2. Restart the relevant npm start command
3. Check webpack dev server is running without compilation errors

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| `EADDRINUSE` error | Kill process on port or change port in webpack.config.js |
| Blank page | Hard refresh (Cmd+Shift+R), check console for errors |
| Module not found | Run npm install, ensure MFE is running |
| API calls failing | Verify backend is running on port 4000 |
| Styles not applied | Check CSS files exist, run npm install |
| Login fails | Check credentials, verify backend is running |

## Troubleshooting

## Technologies Used

- React 18.2.0
- Redux Toolkit 2.0.1
- Webpack 5.89.0
- Babel 7.23.6
- React Router 6.20.0
- Module Federation

## 🚢 Deployment

### Docker Deployment

Each micro frontend can be containerized and deployed independently:

```dockerfile
# Example Dockerfile for shell app
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### GCP Cloud Run Deployment

```bash
# Build and deploy shell app
gcloud builds submit --tag gcr.io/PROJECT_ID/shell
gcloud run deploy shell --image gcr.io/PROJECT_ID/shell --platform managed

# Deploy each MFE independently
gcloud run deploy mfe-transactions --image gcr.io/PROJECT_ID/mfe-transactions
gcloud run deploy mfe-profile --image gcr.io/PROJECT_ID/mfe-profile
gcloud run deploy mfe-notifications --image gcr.io/PROJECT_ID/mfe-notifications
```

### CI/CD with GitHub Actions

The project includes a complete CI/CD pipeline with the following workflows:

#### Available Workflows

1. **deploy-shell.yml** - Builds and deploys the shell application
2. **deploy-mfe-transactions.yml** - Builds and deploys the transactions MFE
3. **deploy-mfe-profile.yml** - Builds and deploys the profile MFE
4. **deploy-mfe-notifications.yml** - Builds and deploys the notifications MFE
5. **deploy-backend.yml** - Builds and deploys the backend API
6. **ci.yml** - Runs tests and builds for all services on PRs
7. **preview-deploy.yml** - Creates preview deployments for pull requests

#### GitHub Secrets Setup

To enable GCP deployments, add these secrets to your GitHub repository:

```bash
# Go to: Settings > Secrets and variables > Actions > New repository secret

GCP_SA_KEY          # Google Cloud service account JSON key
GCP_PROJECT_ID      # Your GCP project ID
JWT_SECRET          # Secret key for JWT token generation
API_URL             # Backend API URL (optional)
```

#### Workflow Triggers

Each service has its own workflow that triggers on:
- **Push to main**: Automatically builds and deploys
- **Pull requests**: Runs tests and builds (no deployment)
- **Path filtering**: Only runs when relevant files change

Example workflow excerpt:

```yaml
name: Deploy Shell App
on:
  push:
    branches: [main]
    paths:
      - 'shell/**'
  pull_request:
    branches: [main]
    paths:
      - 'shell/**'

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      # Deploy to GCP Cloud Run
```

#### Local Testing with Docker

Test the complete setup locally:

```bash
# Build and run all services
docker-compose up --build

# Run specific service
docker-compose up shell

# Stop all services
docker-compose down
```

## 🎯 Roadmap & Future Enhancements

### Phase 1: Foundation ✅
- [x] Module Federation setup
- [x] Basic authentication
- [x] Dashboard implementation
- [x] Dark mode support
- [x] CI/CD pipelines (GitHub Actions)
- [x] Docker containerization
- [x] Multi-service orchestration

### Phase 2: Feature Enrichment 🚧
- [ ] Real-time notifications with WebSockets
- [ ] Advanced filtering and search
- [ ] Data visualization with charts
- [ ] Export functionality (CSV, PDF)

### Phase 3: Enterprise Features 📋
- [ ] Feature flag integration (Harness/LaunchDarkly)
- [ ] A/B testing framework
- [ ] Analytics integration (Google Analytics, Mixpanel)
- [ ] Error tracking (Sentry)
- [ ] Performance monitoring (DataDog, New Relic)

### Phase 4: Database & Backend 📋
- [ ] PostgreSQL integration
- [ ] Database migrations
- [ ] Advanced API endpoints
- [ ] Caching layer (Redis)
- [ ] Rate limiting

### Phase 5: Testing & Quality 📋
- [ ] Unit tests (Jest)
- [ ] Integration tests
- [ ] E2E tests (Cypress)
- [ ] Performance testing
- [ ] Accessibility audits (WCAG 2.1)

### Phase 6: DevOps & Production 📋
- [ ] Full CI/CD pipeline
- [ ] Infrastructure as Code (Terraform)
- [ ] Monitoring and alerting
- [ ] Load testing
- [ ] Security scanning

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

MIT

## 👨‍💻 Author

**Harjot Singh**
- GitHub: [@harjotsingh3878](https://github.com/harjotsingh3878)
- Repository: [portfolio-mfe](https://github.com/harjotsingh3878/portfolio-me)

## 🙏 Acknowledgments

- Webpack Module Federation documentation
- React community
- Redux Toolkit team
- All contributors and supporters

---

**Note**: This is a portfolio project showcasing micro frontend architecture patterns. Feel free to use it as a reference or starting point for your own projects!
