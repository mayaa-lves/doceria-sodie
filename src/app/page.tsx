import Header from "@/components/Header";
import Titulo from "@/components/Titulo";
import Carrossel from "@/components/Carrossel";


export default function Home() {
  return (
    <div>
        <Header />
        <Titulo 
            titulo_pagina="Tradição em cada pedaço."
            subtitulo_pagina="Mais de 100 variedades de bolos artesanais feitos com o mais puro chocolate e frutas selecionadas."
            seta_animacao
        />
        <section id="produtosGeral" className="w-full bg-[#F9F6F0] min-h-[85vh] flex flex-col items-center justify-center p-6 text-center">
            <Carrossel />
        </section>
    </div>
  )
}
