import { Link } from "react-router-dom"

function Welcome() {

    return (
        <div className="min-h-screen w-full bg-[url('/Assets/paper-texture.jpg')] bg-repeat bg-[#d5e69f] bg-blend-multiply flex items-center justify-center p-4">
            <div className="text-center max-w-3xl">
                <div className="flex justify-center mb-3">
                    <img
                        src="/Assets/ojo-farahdise.png"
                        className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
                        alt="Ojo Farahdise"
                    />
                </div>
                <div className="mb-3">
                    <h1 className="font-title text-4xl md:text-5xl lg:text-6xl text-[#2f1d1a] tracking-wider">
                        Farah Crisostomo Monsivais
                    </h1>
                    <p className="font-custom text-lg md:text-xl lg:text-2xl mt-1 text-[#2f1d1a] font-semibold tracking-widest">
                        Artista Conceptual / Artista de personajes 3D
                    </p>
                </div>
                <div className="flex justify-center ">
                    <img
                        src="/Assets/decoracion-luna.png"
                        className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44"
                        alt="Decoración luna/estrellas"
                    />
                </div>
                <Link
                    to="/home"
                    className="btn-entrar inline-block px-20 py-10 text-[#2f1d1a] text-2xl md:text-3xl font-title rounded-xl transition-all duration-300  font-bold "
                >
                    <span className="relative z-10">Entrar</span>
                </Link>
            </div>

        </div>
    )
}
export default Welcome