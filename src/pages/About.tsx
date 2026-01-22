
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
                <div className="flex grid-cols-2 gap-4">
                    <img
                        src="/Assets/yo.png"
                        className="w-28 h-28 md:w-36 md:h-36 lg:w-100 lg:h-100 mb-6"
                        alt="Decoración luna/estrellas"
                    />
                    <div className="font-custom text-lg md:text-xl lg:text-2xl text-[#2f1d1a] leading-relaxed">

                        <p className="mb-6">
                            ¡Hola! Soy Farah Crisostomo Monsivais, una apasionada artista conceptual y artista 3D. Mi trayectoria en el mundo del arte comenzó a temprana edad y, con los años, he ido mejorando mis habilidades y desarrollado un estilo único que combina creatividad y experiencia técnica.
                        </p>
                        <p className="mb-6">
                            Como artista conceptual, me especializo en crear narrativas visuales cautivadoras que dan vida a las ideas. Ya sea diseñando personajes o entornos, me esfuerzo por infundir en cada pieza emoción y elementos narrativos que conecten con el espectador.
                        </p>
                        <p className="mb-6">
                            Además de mi trabajo en 2D, también soy artista en modelado 3D. Disfruto del reto de convertir conceptos 2D en modelos 3D, prestando especial atención al detalle y asegurándome de que cada personaje sea visualmente atractivo y funcional para el desarrollo de animación o videojuegos. Y en adición a esto, de igual forma el 3D me ayuda a complementar mis ilustraciones 2D, modelando una base de lo que será mi ilustración ayudándome en las proporciones y perspectiva.
                        </p>
                        <p className="mb-6">
                            Mientras no estoy haciendo arte puedes encontrarme horneando o cocinando, en un parque con mis perros, leyendo un libro, jugando algún videojuego o experimentando con maquillajes.
                        </p>
                        <p className="mb-6">
                            ¡Gracias por visitar mi portafolio y espero poder conectarme contigo!
                        </p>
                    </div>
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