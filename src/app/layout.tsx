import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Oswald } from 'next/font/google';
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import WorkoutsProvider from "@/context/WorkoutsContext";


const oswald = Oswald({
  subsets: ['latin'],
  weight: ['200', '400', '700'], 
  display: 'swap',       
});

export const metadata: Metadata = {
  title: "FitLog - Workout Library",
  description: "Workout library page with all listed various types of workout or exercise",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${oswald.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
      
       <WorkoutsProvider>

        <Navbar />
         {children}
        <Footer />

       </WorkoutsProvider>


        <ToastContainer 
        newestOnTop/>
      
      </body>
    </html>
  );
}
