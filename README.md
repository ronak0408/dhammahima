# DhamMahima 🛕🕉️

A comprehensive spiritual and cultural web platform dedicated to India's rich heritage, sacred Dhams, ancient scriptures, and pilgrimage routes.

## 🌟 Overview

DhamMahima is a modern web application built with React, offering users an immersive experience into the spiritual essence of India. It serves as a centralized hub for exploring sacred Dhams, reading ancient texts (Vedas, Upanishads, Puranas), planning spiritual trips, checking festival calendars, and discovering trekking paths to remote shrines.

## 🚀 Key Features

- **Sacred Dhams & Temples:** Detailed guides and information on various temples, sacred Dhams, and holy cities (e.g., Varanasi).
- **Spiritual Library:** Read and explore the Vedas, Upanishads, Puranas, Smritis, Granths, Itihasas, and Yoga Sutras. Includes dedicated mantra pages.
- **Trip Planner & Trekking:** Plan your pilgrimage and discover trekking routes to spiritual destinations like Himachal Pradesh.
- **Festival Calendar:** Stay updated with a comprehensive calendar for important Hindu festivals.
- **Multilingual Support:** Seamlessly integrated internationalization (i18n) for multiple languages.
- **Modern UI/UX:** Fully responsive, clean, and intuitive interface powered by Tailwind CSS.
- **Blogs:** Engaging articles and blog posts on spirituality, culture, and travel.
- **Voice Support:** Includes speech recognition features for an accessible experience.

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS v4
- **Routing:** React Router DOM v7
- **Icons:** FontAwesome, Lucide React, React Icons
- **Additional Tools:** React Speech Recognition, ESLint

## 📦 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory:**
   ```bash
   cd mahima-master
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Application

To start the development server with Fast Refresh:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

### Building for Production

To create an optimized production build:
```bash
npm run build
```
You can preview the built app locally using:
```bash
npm run preview
```

## 📁 Project Structure

The project is organized efficiently to separate concerns and improve maintainability:

```
src/
├── assets/        # Static assets (images, fonts, etc.)
├── Components/    # Reusable UI components (Temples, Auth, Navbar, Calendar, etc.)
├── data/ & Json/  # Local JSON data files for scriptures, dhams, and other static content
├── i18n/          # Internationalization configurations and locales
├── Pages/         # Main page views (Home, About, Dhams, Books, Trekking, Trip Planner, etc.)
├── App.jsx        # Main App component
├── main.jsx       # Application entry point & Routing configuration
└── index.css      # Global styles and Tailwind directives
```

## 📜 Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Bundles the app into static files for production.
- `npm run preview`: Previews the generated production build locally.
- `npm run lint`: Runs ESLint to check for code quality and errors.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.

## 📄 License

This project is licensed under the MIT License.
