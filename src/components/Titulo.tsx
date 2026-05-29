import Link from "next/link";

interface TituloProps {
    titulo_pagina: string;
    subtitulo_pagina: string;
    seta_animacao: boolean;
}

export default function Título(props: TituloProps) {
    return (
        // 1. Container Principal
        <div className="w-full bg-[#F9F6F0] min-h-[85vh] flex flex-col items-center justify-center p-6 text-center">
            
            {/* 2. O Título */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#3D251A] mb-3">
                {props.titulo_pagina}
            </h1>
            
            {/* 3. O Subtítulo */}
            <p className="text-base md:text-lg lg:text-xl font-light italic text-[#5C3D2E] mb-8">
                {props.subtitulo_pagina}
            </p>

            {/* 4. A Linha Decorativa com Animação */}
            {props.seta_animacao && 
                <div className="text-[#D4AF37] text-3xl font-bold animate-bounce mt-4 cursor-pointer">
                    <a href="#produtosGeral">↓</a>
                </div>
            }
        </div>
    )
}