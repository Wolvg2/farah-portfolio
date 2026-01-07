
function About() {
    return (
       <div className="min-h-screen w-full flex flex-col justify-between px-4 md:px-10 py-10">
            <div className="max-w-[92%] w-full mx-auto bg-[url('/Assets/paper-texture.jpg')] bg-repeat bg-[#e8e8e8] bg-blend-multiply shadow-2xl p-6 md:p-12 lg:p-16 ">
                {/* Tu contenido aquí */}
                <div className="bg-center bg-no-repeat bg-[url('/Assets/base-titulos.png')] bg-size-[auto_800%]">
                    <h1 className="font-title text-2xl md:text-3xl lg:text-5xl text-center text-[#2f1d1a] mb-8 pt-2 pb-6 font-semibold tracking-widest">
                        About Me
                    </h1>
                </div>
                <div className="font-custom text-lg md:text-xl lg:text-2xl text-[#2f1d1a] leading-relaxed">
                    <p className="mb-6">
                        Hello! I'm Farah Crisostomo Monsivais, a passionate Concept Artist and 3D Character Artist. My journey in the world of art began at a young age, and over the years, I've honed my skills and developed a unique style that blends creativity with technical expertise.
                    </p>
                    <p className="mb-6">
                        As a Concept Artist, I specialize in creating compelling visual narratives that bring ideas to life. Whether it's designing characters, environments, or props, I strive to infuse each piece with emotion and storytelling elements that captivate the viewer.
                    </p>
                    <p className="mb-6">
                        In addition to my 2D work, I am also skilled in 3D character modeling and texturing. I enjoy the challenge of translating 2D concepts into fully realized 3D models, paying close attention to detail and ensuring that each character is both visually appealing and functional for animation or game development.
                    </p>
                    <p className="mb-6">
                        My portfolio showcases a diverse range of projects, from fantasy worlds to realistic characters. I am always eager to take on new challenges and collaborate with others in the creative industry. Thank you for visiting my portfolio, and I look forward to connecting with you!
                    </p>
                    
                </div>
                <img
                        src="/Assets/ojo-farahdise.png"
                        className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 items-center"
                        alt="Ojo Farahdise"
                    />
            </div>
        </div>
    )
}
export default About