import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WorkoutProvider from "./context/WorkoutContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "FitLog",
  description: "Workout Library and Daily Workout Planner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Oswald:wght@200..700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        <WorkoutProvider>
          <Navbar />

          {children}

          <Footer />

          <ToastContainer theme="dark" />
        </WorkoutProvider>
      </body>
    </html>
  );
}