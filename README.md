## BaatCheet - Real-Time Chat Application

BaatCheet is a modern real-time chat application built with React, Node.js, and Socket.IO <cite/>. It features user authentication, real-time messaging, image sharing, and online status tracking.

### Features

- **Real-time messaging** with Socket.IO integration 
- **User authentication** and profile management 
- **Image sharing** with media gallery 
- **Online/offline status** indicators
- **Responsive design** with mobile support 
- **Unseen message notifications**

### Tech Stack

**Frontend:**
- React 19.1.0 with Vite
- Tailwind CSS for styling 
- React Router for navigation 
- Axios for HTTP requests
- Socket.IO client for real-time communication
- 
**Backend:**
- Node.js with Express
- MongoDB for data storage
- Socket.IO for real-time features
- Cloudinary for image storage

## Installation & Setup for Contributors

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB database
- Cloudinary account (for image uploads)

### 1. Clone the Repository

```bash
git clone https://github.com/Anirudhehe/baatcheet.git
cd baatcheet
```

### 2. Client Setup

```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Start development server
npm run dev
```

The client development server will run on `http://localhost:5173` using Vite

### 3. Server Setup

```bash
# Navigate to server directory (from project root)
cd server

# Install dependencies
npm install

# Create .env file with required variables
.env
```

Configure your `.env` file with:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
PORT=5000
```

```bash
# Start development server
npm run server
```

### 4. Development Workflow

**Client Development:**
- Run `npm run dev` for hot-reload development 
- Run `npm run build` to create production build 
- Run `npm run lint` for code linting 

**Code Structure:**
- Components are located in `client/src/components/`
- Pages are in `client/src/pages/` 
- Context providers manage global state 

### 5. Contributing Guidelines

1. **Fork the repository** and create a feature branch
2. **Follow the existing code style** - the project uses ESLint 
3. **Test your changes** thoroughly across different screen sizes
4. **Update documentation** if you add new features
5. **Submit a pull request** with a clear description

## Notes

The application uses a three-panel responsive layout managed by the `HomePage` component  , with conditional grid layouts that adapt based on screen size and user selection state. The real-time features are powered by Socket.IO integration throughout the component hierarchy .
