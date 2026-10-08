import "./globals.css";
import Navbar from "./components/Navbar";

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
        <Navbar />
        {children}
      </body>
    </html>
  );
}