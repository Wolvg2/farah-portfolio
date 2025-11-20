import Navbar from "../components/Navbar";
import type { ReactNode } from "react";
export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-[#415b4e]">
      <Navbar />
      <div className="pt-20">
        {children}
      </div>
    </div>
  );
}
