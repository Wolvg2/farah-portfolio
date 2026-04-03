
import { useState } from 'react';

type GalleryItem = {
    id: number;
    title: string;
    images: string[];
    tapeRotation: string;
    cardRotation: string;
};

function BackgroundDesign() {
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

    const galleryImages: GalleryItem[] = [
        { id: 1, title: 'Casa Fantasma', images: ['/Escenarios-2D/casa_fantasma.png'], tapeRotation: '-rotate-2', cardRotation: '-rotate-3' },
        { id: 2, title: 'Takoyakis', images: ['/Escenarios-2D/Takoyakis.png', '/Escenarios-2D/takoyakis_boceto.png'], tapeRotation: '-rotate-2', cardRotation: '-rotate-3' },
        { id: 3, title: 'Casa Tarde', images: ['/Escenarios-2D/casa-tarde.png'], tapeRotation: 'rotate-2', cardRotation: 'rotate-1' },
        { id: 4, title: 'Cabaña Sin Hojas', images: ['/Escenarios-2D/cabaña-sin-hojas.jpg'], tapeRotation: '-rotate-3', cardRotation: '-rotate-2' },
        { id: 5, title: 'Cuarto Noche', images: ['/Escenarios-2D/cuarto-noche.png'], tapeRotation: '-rotate-1', cardRotation: '-rotate-1' },
        { id: 6, title: 'Mar de Tinta', images: ['/Escenarios-2D/mar-tinta.png'], tapeRotation: 'rotate-2', cardRotation: 'rotate-3' },
    ];

    return (
        <div className="min-h-screen w-full flex flex-col justify-between px-4 md:px-10 py-10">
            <div className="max-w-[92%] w-full mx-auto bg-[url('/Assets/paper-texture.jpg')] bg-no-repeat bg-center bg-cover bg-[#e8e8e8] bg-blend-multiply shadow-2xl p-6 md:p-12 lg:p-16">

                <div className="bg-center bg-no-repeat bg-[url('/Assets/base-titulos.png')] bg-size-[auto_800%]">
                    <h1 className="font-title text-2xl md:text-3xl lg:text-5xl text-center text-[#2f1d1a] mb-8 pt-2 pb-6 font-semibold tracking-widest">
                        Diseño de Escenarios
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 ">
                    {galleryImages.map((item) => (
                        <div
                            key={item.id}
                            className={`group relative hover:rotate-0 hover:scale-105 transition-all duration-300 hover:z-10 cursor-pointer`}
                            onClick={() => setSelectedItem(item)}
                        >
                            <div className="transition-shadow duration-300 ">
                                <div className="aspect-square mb-4 overflow-hidden cursor-zoom-in ">
                                    <img
                                        src={item.images[0]}
                                        alt={item.title}
                                        className="w-full h-full object-cover "
                                        style={{ backgroundColor: "#ffffff" }}
                                    />
                                </div>
                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                    <h3 className="text-white font-custom text-2xl md:text-3xl text-center px-4">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedItem && (
                    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50" onClick={() => setSelectedItem(null)}>
                        <div className="relative w-screen h-screen" onClick={(e) => e.stopPropagation()}>

                            <button
                                onClick={() => setSelectedItem(null)}
                                className="absolute top-4 right-4 w-10 h-10 text-white text-3xl font-bold flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 transition-transform hover:scale-110"
                                aria-label="Cerrar galería"
                            >
                                ×
                            </button>
                            
                            <div
                                className="w-screen h-screen overflow-y-auto snap-y snap-mandatory p-0"
                                style={{
                                    scrollbarWidth: 'thin',
                                    msOverflowStyle: 'none'
                                }}
                            >
                                <style>
                                    {`::-webkit-scrollbar { width: 0 !important; height: 0 !important; }`}
                                </style>
                                {selectedItem.images.map((image, index) => (
                                    <div key={index} className="snap-start h-screen flex items-center justify-center">
                                        <img
                                            src={image}
                                            alt={`${selectedItem.title} ${index + 1}`}
                                            className="h-screen w-screen object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

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
export default BackgroundDesign