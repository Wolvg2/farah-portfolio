
import { Link } from "react-router-dom"

function Home() {
    const galleryImages = [
        // Array of image URLs or import statements
        { id: 1, title: 'Character Design', image: '/Personajes-2D/niño-con-peces-2.jpg', url: '/character-design', tapeRotation: '-rotate-3', cardRotation: '-rotate-2' },
        { id: 2, title: 'Background Design', image: '/Escenarios-2D/Takoyakis.jpg', url: '/background-design', tapeRotation: 'rotate-2', cardRotation: 'rotate-1' },
        { id: 3, title: '3D Character', image: '/Personajes-3D/Boy-image.jpg', url: '/d-character', tapeRotation: '-rotate-1', cardRotation: '-rotate-1' },
        { id: 4, title: '3D Environment', image: '/Assets/coming-soon.png', url: '/d-environment', tapeRotation: 'rotate-2', cardRotation: 'rotate-3'},
    ];

    return (
        <div className="min-h-screen w-full flex flex-col justify-between px-4 md:px-10 py-10">
            <div className="max-w-[92%] w-full mx-auto bg-[url('/Assets/paper-texture.jpg')] bg-repeat bg-[#e8e8e8] bg-blend-multiply shadow-2xl p-6 md:p-12 lg:p-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
                    {galleryImages.map((item) => (
                        <Link
                            key={item.id}
                            to={item.url}
                            className={`group relative ${item.cardRotation} hover:rotate-0 hover:scale-105 transition-all duration-300 hover:z-10`}
                        >
                            {/* Cinta adhesiva amarilla */}
                            <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-60 h-8 ${item.tapeRotation} z-10`}>
                                <img
                                    src="Assets/pngwing.com.png"
                                    alt="Tape"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="transition-shadow duration-300">
                                <div className="aspect-square bg-gray-200 mb-4 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h3 className="text-white font-custom text-2xl md:text-3xl text-center px-4">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    ))}

                </div>
                {/* Botón Back to Top */}
                <div className="flex justify-center mt-40">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="w-50 h-50 hover:scale-110 transition-transform"
                        style={{
                            backgroundImage: "url('/Assets/back-top.png')",
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            border: 'none',
                            backgroundColor: 'transparent'
                        }}
                        aria-label="Volver al inicio"
                    />
                </div>

            </div>
            <div className="grow"></div>
        </div>
    )
}
export default Home