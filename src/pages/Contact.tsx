import { Instagram, X, Facebook, Linkedin, TypeOutline } from 'lucide-react';

function Contact() {
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
        <div className="min-h-screen w-full flex flex-col justify-between px-4 md:px-10 py-10">
            <div className="max-w-[92%] w-full mx-auto bg-[url('/Assets/paper-texture.jpg')] bg-repeat bg-[#e8e8e8] bg-blend-multiply shadow-2xl p-6 md:p-12 lg:p-16 ">
                {/* Tu contenido aquí */}
                <div className="bg-center bg-no-repeat bg-[url('/Assets/base-titulos.png')] bg-size-[auto_800%]">
                    <h1 className="font-title text-2xl md:text-3xl lg:text-5xl text-center text-[#2f1d1a] mb-8 pt-2 pb-6 font-semibold tracking-widest">
                        Contactame
                    </h1>
                </div>
                <h3 className="font-custom text-lg md:text-xl lg:text-3xl text-[#2f1d1a] leading-relaxed text-center mb-8 font-bold">
                    farah.cm@outlook.com
                </h3>
                <div className="flex space-x-6 items-center justify-center mb-8 ">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.name}
                            className="hover:text-gray-400 "
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>

                <form className="font-custom text-lg md:text-xl lg:text-2xl text-[#2f1d1a] leading-relaxed max-w-3xl mx-auto " action="https://formspree.io/f/xojjqvwj"
                    method="POST">
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 font-semibold">Name:</label>
                        <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a3c293] bg-[#e3cba4]" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 font-semibold">Email:</label>
                        <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a3c293] bg-[#e3cba4]" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="subject" className="block mb-2 font-semibold">Subject:</label>
                        <textarea id="subject" name="subject" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a3c293] bg-[#e3cba4]" required></textarea>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block mb-2 font-semibold">Message:</label>
                        <textarea id="message" name="message" rows={5} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a3c293] bg-[#e3cba4]" required></textarea>
                    </div>
                    <button type="submit" className="btn-entrar inline-block px-9 py-5 text-[#2f1d1a] text-lg md:text-2xl font-custom rounded-xl transition-all duration-300  font-bold ">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}
export default Contact