import { Link } from "react-router-dom"

function Welcome() {
    return (
        <div
            className="
                relative
                h-screen
                w-full
                overflow-hidden
                bg-[url('/Assets/paper-texture.jpg')]
                bg-repeat
                bg-[#d5e69f]
                bg-blend-multiply
                flex
                justify-center
                pt-[2vh]
            "

        >
            {/* ESQUINAS DECORATIVAS */}
            <img
                src="/Assets/bordes.png"
                className="absolute top-0 left-0 w-60 pointer-events-none"
            />

            <img
                src="/Assets/bordes.png"
                className="absolute top-0 right-0 w-60 rotate-90 pointer-events-none"
            />

            <img
                src="/Assets/bordes.png"
                className="absolute bottom-0 right-0 w-60 rotate-180 pointer-events-none"
            />

            <img
                src="/Assets/bordes.png"
                className="absolute bottom-0 left-0 w-60     -rotate-90 pointer-events-none"
            />


            <div className="relative text-center max-w-3xl w-full">

                {/* OJO */}
                <img
                    src="/Assets/ojo-farahdise.png"
                    alt="Ojo Farahdise"
                    className="
                        mx-auto
                        max-h-[100vh]
                        w-auto
                        object-contain
                        -mb-40
                        relative
                        z-10
                    "
                />

                {/* TEXTO */}
                <div className="relative z-20 flex justify-center" >
                    <h1
                        className="
                            font-title
                            text-[clamp(1.6rem,3.5vw,3rem)]
                            text-[#2f1d1a]
                            tracking-[0.35em]
                            leading-none
                            whitespace-nowrap
                            uppercase
                            inline-block
                            mx-auto
                            transform
                            translate-x-[-0.175em]
                        "
                    >
                        Farah Crisostomo Monsivais
                    </h1>
                </div>
                <div className="relative z-20 flex justify-center" >
                    <p
                        className="
                            font-title
                            text-[clamp(1.5rem,1vw,1rem)]
                            text-[#2f1d1a]
                            tracking-[0.35em]
                            leading-none
                            whitespace-nowrap
                            uppercase
                            inline-block
                            mx-auto
                            transform
                            translate-x-[-0.175em]
                        "
                    >
                        Artista Conceptual / Artista de personajes 3D
                    </p>
                </div>

                {/* DECORACIÓN */}
                <img
                    src="/Assets/decoracion-luna.png"
                    alt="Decoración luna/estrellas"
                    className="
                        mx-auto
                        max-h-[20vh]
                        w-auto
                        object-contain
                        -mt-6
                        -mb-6
                    "
                />

                {/* BOTÓN */}
                <Link
                    to="/home"
                    className="
                        btn-entrar
                        inline-block
                        px-20
                        py-10
                        text-[#2f1d1a]
                        text-5xl
                        font-title
                        rounded-xl
                        font-bold
                        -mt-2
                        transition-all
                        duration-300
                    "
                >
                    Entrar
                </Link>

            </div>
        </div>
    )
}

export default Welcome
