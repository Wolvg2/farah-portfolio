import { Link } from "react-router-dom"

function Welcome() {

    return (
        <div className="min-h-screen w-full bg-[url('/Assets/paper-texture.jpg')] bg-repeat bg-[#b3c787] bg-blend-multiply flex flex-col justify-center items-center ">
            
            <div className="text-center">
                <div className="flex flex-col items-center pt-8">
                    <img src="/Assets/ojo-farahdise.png" className="w-40 h-40 md:w-100 md:h-100" alt="Ojo Farahdise" />
                </div>
                <h1 className="text-5xl md:text-6xl font-serif mt-4 mb-2">Farah Crisostomo Monsivais</h1>
                <p className="text-xl md:text-2xl font-serif mb-4">Artista Conceptual / Artista de personajes 3D</p>        
                <div className="flex flex-col items-center pt-4 mb-8">
                    <img src="/Assets/decoracion-luna.png" className="w-20 h-40 md:w-40 md:h-20" alt="Decoración luna/estrellas" />
                </div>
                <Link to="/home"
                    className="mx-auto px-6 py-2 bg-orange-500 text-white text-xl font-serif rounded-xl hover:bg-orange-600 transition">
                    Entrar</Link>
            </div>
            
        </div>
    )
}
export default Welcome