import "./globals.css";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import localFonts from "next/font/local";

const Poppins = localFonts({
    src: [ 
        {
            path: "../fonts/poppins-medium-webfont.woff2"
        }
    ],
    variable: "--font-poppins"
})

export const metadata = {
  title: "Gaurav's Portfolio",
  description: "Software Engineer & Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Poppins.variable} flex flex-col min-h-screen bg-gray-50`}>
        <Header/>
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
