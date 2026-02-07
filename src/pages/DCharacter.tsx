

import 'react-medium-image-zoom/dist/styles.css';


function DCharacter() {

    return (
        <div className="max-w-[89%] w-full mx-auto bg-[url('/Assets/paper-texture.jpg')] bg-no-repeat bg-center bg-cover bg-[#e8e8e8] bg-blend-multiply shadow-2xl p-6 md:p-12 lg:p-16">
            <div className="bg-center bg-no-repeat bg-[url('/Assets/base-titulos.png')] bg-size-[auto_800%]">
                    <h1 className="font-title text-2xl md:text-3xl lg:text-5xl text-center text-[#2f1d1a] mb-8 pt-2 pb-6 font-semibold tracking-widest">
                        Personajes 3D
                    </h1>
                </div>
            <div className="w-full max-w-8xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <video
                    className="w-full h-full object-cover"
                    controls
                    loop
                    muted
                    playsInline
                >
                    <source src="/Personajes-3D/buho-video.mp4" type="video/mp4" />
                    
                </video>
                <video
                    className="w-full h-full object-cover"
                    controls
                    loop
                    muted
                    playsInline
                >
                    <source src="/Personajes-3D/Boy.mp4" type="video/mp4" />

                </video>
                
            </div>
        </div>

    );
}
export default DCharacter