import Navbar from "../components/Navbar";
import type { ReactNode } from "react";
import Footer from '../components/Footer.tsx';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-[#415b4e]">
      <Navbar />
      
      <div className="pt-20">
        {children}
      </div>
      <Footer />
    </div>
  );
}
