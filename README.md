# 🐾 PetNest - Pet Management App

🔗 **Client Live:** [https://petnest-client-rho.vercel.app](https://petnest-client-rho.vercel.app)  
🔗 **Server Live:** [https://petnest-server-beige.vercel.app](https://petnest-server-beige.vercel.app)  

---

## Part 1: 📖 Project Overview & Technologies

### Project Overview
**PetNest** is a modern full-stack pet management application that allows users to store, update, and manage pet information efficiently. Users can add pet details like name, breed, age, location, and image, making pet record management simple and organized.

### Technologies Used
- **Next.js** – React framework for server-side rendering and routing  
- **React** – Frontend library for building user interfaces  
- **Tailwind CSS** – Utility-first CSS framework for styling  
- **MongoDB** – NoSQL database for storing pet records  
- **Better Auth** – Authentication library for secure login and registration  

### Dependencies
- `next`
- `react`
- `react-dom`
- `mongodb`
- `better-auth`
- `@heroui/react`
- `react-hot-toast`
- `tailwindcss`
- `lucide-react`
- `react-icons`

---

## Part 2: ✨ Key Features & Purpose

### Key Features

#### 🐶 Pet Management System
Add, update, and manage pet details including name, breed, age, location, and images.

#### 🔐 Authentication System
Secure login and registration using Better Auth.

#### 🔔 Real-Time Feedback
Toast notifications for user actions like add, update, and delete.

#### 📱 Responsive UI
Fully responsive design using Tailwind CSS and HeroUI components.

#### 🔄 Dynamic Routing
Individual pet update pages using Next.js routing.

### Purpose
PetNest is built to simplify pet data management with authentication, dynamic routing, and a clean modern UI experience.

---

## Part 3: ⚙️ How to Run Locally & Setup

### Prerequisites
- Node.js (v14 or later)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation Steps

```bash
# 1. Clone the repository
git clone https://github.com/your-username/petnest.git

# 2. Navigate into the project directory
cd petnest

# 3. Install dependencies
npm install

# 4. Set up environment variables
# Create a .env.local file in the root directory and add:
# MONGODB_URI=your_mongodb_connection_string
# BETTER_AUTH_SECRET=your_auth_secret

# 5. Run the development server
npm run dev
