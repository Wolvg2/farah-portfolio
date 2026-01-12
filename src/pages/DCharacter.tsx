

import 'react-medium-image-zoom/dist/styles.css';


function DCharacter() {

    return (
        <div className="w-full flex justify-center py-20">
            <div className="w-full max-w-5xl px-6">
                    <video
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="/public/Personajes-3D/Boy.mp4" type="video/mp4" />
                    </video>        
            </div>
        </div>

    );
}
export default DCharacter