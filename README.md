# ✍️ React Blog Website

A modern, responsive, and dynamic Blog Web Application built using React.js. It features a clean user interface, seamless pagination, and robust state management powered by the React Context API.

## ✨ Features

- **Dynamic Blog Listing:** Fetches and displays blog posts from an external API.
- **Robust Pagination:** Easily navigate through multiple pages of blog posts.
- **Global State Management:** Uses the React Context API (`AppContext`) to efficiently manage data like loading states, current page, and blog posts across the entire application without prop drilling.
- **Data Formatting:** On-the-fly data modification to keep dates and content relevant.
- **Modern UI/UX:** Styled beautifully using Tailwind CSS for a fully responsive and clean layout.
- **Loading Indicators:** Custom spinner animations to provide feedback while fetching data.

## 🛠️ Tech Stack

- **Frontend Framework:** [React.js](https://reactjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **State Management:** React Context API
- **Routing:** React Router DOM
- **Notifications:** React Hot Toast

## 📂 Folder Structure

```text
src/
├── components/
│   ├── Blogs.jsx         # Renders the list of blog cards
│   ├── Card.jsx          # Individual blog post UI
│   ├── Header.jsx        # Navigation header
│   ├── Pagination.jsx    # Controls for navigating pages
│   ├── spinner.jsx       # Custom loading animation component
│   └── spinner.css       # Styles for the loading spinner
├── context/
│   └── AppContext.js     # Global state provider & API fetching logic
├── App.js                # Main application component
├── baseUrl.js            # API Endpoint configuration
├── index.js              # Application entry point
└── index.css             # Tailwind CSS imports
```

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/udbhavshrivastava3-cyber/PROJECT-2-BLOG-WEBSITE.git
   cd PROJECT-2-BLOG-WEBSITE
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure the Base URL**
   Ensure that `src/baseUrl.js` exports the correct API endpoint for fetching blog posts.

4. **Run the development server**
   ```bash
   npm start
   ```

5. **Open the app**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 💡 How It Works

- **App Initialization:** On initial load, `App.js` triggers `fetchBlogs` from `AppContext`.
- **Fetching Data:** `fetchBlogs` makes an API call to the provided `baseUrl`. It manages the `loading` state so the user sees a spinner while data is being retrieved.
- **Pagination:** The `Pagination.jsx` component uses the `handlePageChange` function from Context to fetch specific pages and update the global `page` state.
- **Rendering:** The `Blogs.jsx` component maps over the `posts` array and renders individual `Card.jsx` components for each blog.

## 🤝 Contributing

Contributions are always welcome! Feel free to open an issue or submit a Pull Request if you'd like to improve the app.

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## 📝 License

This project is open-source and available under the MIT License.
