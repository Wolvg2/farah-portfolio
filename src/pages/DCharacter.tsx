

import 'react-medium-image-zoom/dist/styles.css';


function DCharacter() {

    return (
        <div className="max-w-[92%] w-full mx-auto bg-[url('/Assets/paper-texture.jpg')] bg-no-repeat bg-center bg-cover bg-[#e8e8e8] bg-blend-multiply shadow-2xl p-6 md:p-12 lg:p-16">
            <div className="w-full max-w-5xl px-6 items-center">
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