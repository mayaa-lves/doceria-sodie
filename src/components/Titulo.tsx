import Link from "next/link";

interface TituloProps {
    titulo_pagina: string;
    subtitulo_pagina: string;
    seta_animacao: boolean;
}

export default function Título(props: TituloProps) {
    return (
        <div>
            <h1>{props.titulo_pagina}</h1>
            <p>{props.subtitulo_pagina}</p>

            {props.seta_animacao && 
                <div className="animacao-seta" ></div>
            }
        </div>
    )
}