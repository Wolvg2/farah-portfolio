
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

function CharacterDesign() {
    const galleryImages = [
        { id: 1, title: 'Niño con Peces', image: '/Personajes-2D/niño-con-peces-2.jpg', tapeRotation: '-rotate-3', cardRotation: '-rotate-2' },
        { id: 2, title: 'Piratas', image: '/Personajes-2D/piratas.jpg', tapeRotation: '-rotate-2', cardRotation: '-rotate-3' },
        { id: 3, title: 'Chica Punk', image: '/Personajes-2D/chica-punk.jpg', tapeRotation: 'rotate-2', cardRotation: 'rotate-1' },
        { id: 4, title: 'Flama', image: '/Personajes-2D/flama.jpg', tapeRotation: '-rotate-1', cardRotation: '-rotate-1' },
        { id: 5, title: 'Pajaro Papel', image: '/Personajes-2D/pajaron-papel.jpg', tapeRotation: 'rotate-2', cardRotation: 'rotate-3' },
    ];

    return (
        <div className="min-h-screen w-full flex flex-col justify-between px-4 md:px-10 py-10">
            <div className="max-w-[92%] w-full mx-auto bg-[url('/Assets/paper-texture.jpg')] bg-no-repeat bg-center bg-cover bg-[#e8e8e8] bg-blend-multiply shadow-2xl p-6 md:p-12 lg:p-16">
                <div className="bg-center bg-no-repeat bg-[url('/Assets/base-titulos.png')] bg-size-[auto_800%]">
                    <h1 className="font-title text-2xl md:text-3xl lg:text-5xl text-center text-[#2f1d1a] mb-8 pt-2 pb-6 font-semibold tracking-widest">
                        Character Design
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 ">
                    {galleryImages.map((item) => (
                        <div
                            key={item.id}
                            className={`group relative hover:rotate-0 hover:scale-105 transition-all duration-300 hover:z-10`}
                        >
                            <div className="transition-shadow duration-300 ">
                                <Zoom>
                                    <div className="aspect-square mb-4 overflow-hidden cursor-zoom-in ">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover "
                                            style={{ backgroundColor: "#ffffff" }}
                                        />
                                    </div>
                                </Zoom>
                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                    <h3 className="text-white font-custom text-2xl md:text-3xl text-center px-4">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

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
export default CharacterDesign