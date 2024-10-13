# SpaceX Explorer

A web application built with Nuxt 3, Vue 3, Pinia, and shadcn for the frontend, and Express, Node.js, and Mongoose for the backend. The app fetches and displays SpaceX launch data and allows users to save launches for later viewing.

## Features

- **Frontend**:

  - Built with Nuxt 3 and Vue 3 for a modern and performant UI.
  - State management using Pinia.
  - Clean, responsive UI built with **shadcn** components.
  - Displays SpaceX launch data in a table format with detailed information.
  - Allows users to save launches and view them later.
  - Confirmation dialogs before deleting saved launches.

- **Backend**:
  - API developed with Express and Node.js.
  - MongoDB for storing saved launch data using Mongoose ORM.
  - RESTful architecture with endpoints to manage saved launches.

## Tech Stack

### Frontend:

- **Nuxt 3**: Framework for server-side rendering and static site generation using Vue 3.
- **Vue 3**: Reactive, component-driven JavaScript framework.
- **Pinia**: State management library for Vue.js.
- **shadcn**: For UI components and design consistency.

### Backend:

- **Express.js**: Minimalist Node.js web application framework.
- **Node.js**: JavaScript runtime for backend services.
- **Mongoose**: MongoDB object modeling for Node.js.

## Getting Started

### Prerequisites

- Node.js (v14 or above)
- MongoDB (local or cloud instance)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Arslaan0124/spacex-app.git
   cd spacex-app

   ```

2. **Install dependencies for both frontend and backend:**

   ```bash
   # Install frontend dependencies
   cd frontend
   npm install

   # Install backend dependencies
   cd ../backend
   npm install

   ```

3. **Configure environment variables:**
   Create an `.env` file in the `backend` directory with the following:

   ```bash
   DATABASE_URL=<your-mongodb-uri>
   PORT=3000

   ```

4. **Run the backend:**

   ```bash
    cd backend
    npm run dev
   ```

5. **Run the frontend:**
   ```bash
    cd backend
    npm run dev
   ```
