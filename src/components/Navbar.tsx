import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-5 z-50 flex justify-center px-4 ">
      <div
        className="
          relative
          max-w-[90%] w-full
          bg-[url('/Assets/paper-texture.jpg')] bg-cover bg-center
          shadow-xl 
          px-4 md:px-10 py-3
          flex items-center justify-between
        "
      >
        {/* LOGO */}
        <a href="/home">
          <img
            src="/Assets/farah-Crisostomo-logo.png"
            alt="Logo Farah Monsivais"
            className="h-25 w-auto"
          />
        </a>

        {/* BOTÓN HAMBURGUESA (solo móvil) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-black w-10 h-10 flex items-center justify-center"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* LINKS (DESKTOP) */}
        <ul className="hidden md:flex gap-10 lg:gap-20 xl:gap-30">
          <li><Link to="/character-design" className="nav-link">Character Design</Link></li>
          <li><Link to="/background-design" className="nav-link">Background Design</Link></li>
          <li><Link to="/d-character" className="nav-link">3D Character</Link></li>
          <li><Link to="/d-environment" className="nav-link">3D Environment</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>

        {/* MENU MÓVIL */}
        {open && (
          <div
            className="
              absolute left-0 top-full mt-2 w-full
              bg-[url('/Assets/paper-texture.jpg')] bg-cover bg-center
              rounded-xl shadow-xl
              p-5 flex flex-col gap-4 md:hidden
              z-50
            "
          >
            <Link to="/character-design" className="nav-link" onClick={() => setOpen(false)}>Character Design</Link>
            <Link to="/background-design" className="nav-link" onClick={() => setOpen(false)}>Background Design</Link>
            <Link to="/d-character" className="nav-link" onClick={() => setOpen(false)}>3D Character</Link>
            <Link to="/d-environment" className="nav-link" onClick={() => setOpen(false)}>3D Environment</Link>
            <Link to="/about" className="nav-link" onClick={() => setOpen(false)}>About</Link>
            <Link to="/contact" className="nav-link" onClick={() => setOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
