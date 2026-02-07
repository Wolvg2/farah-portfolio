import { Instagram, X, Facebook, Linkedin, TypeOutline } from 'lucide-react';


export default function Footer() {
    const socialLinks = [
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/_farahdise.nightmares_/',
            icon: <Instagram size={30} />
        },
        {
            name: 'TypeOutline',
            url: 'https://www.tiktok.com/@_farahdise.nightmares_',
            icon: <TypeOutline size={30} />
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/farah-crisostomo-b6a130293/',
            icon: <Linkedin size={30} />
        }
    ];
    return (
        <footer className="text-[#2f1d1a] font-custom py-9 px-5 pt-2 top-0 left-0 right-0 z-60 flex justify-center font-extrabold font tracking-widest text-5x mt-15">
            <div className="max-w-[91%] w-full bg-[url('/Assets/paper-texture.jpg')] bg-cover bg-center shadow-xl px-4 md:px-10 py-3 flex items-center justify-between " >
                <img src="/Assets/ojo-farahdise.png" alt="Logo" className="mb-4 md:mb-0 w-40 h-40" />
                <p className="text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Farah Crisostomo Monsivais. All rights reserved.</p>

                <div className="flex space-x-4">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.name}
                            className="hover:text-gray-400"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>

            </div>
        </footer>
    );
}