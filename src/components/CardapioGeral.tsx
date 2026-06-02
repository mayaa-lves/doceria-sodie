"use client"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// Lista com as 6 categorias da doceria idênticas à imagem de referência
const categoriasSodie = [
  { src: "/fotos/bg_doces.png", alt: "Docinhos", titulo: "DOCINHOS" , link: "/docinhos"},
  { src: "/fotos/bg_kit_festa.png", alt: "Kits Festa", titulo: "KITS FESTA", link: "/kits-festa"},
  { src: "/fotos/bg_balas_de_coco.png", alt: "Balas de Coco", titulo: "BALAS DE COCO" },
  { src: "/fotos/bg_choco.png", alt: "Chocolates", titulo: "CHOCOLATES" }, 
  { src: "/fotos/bg_bolos.png", alt: "Bolos", titulo: "BOLOS" },
  { src: "/fotos/bg_salgados.png", alt: "Salgados", titulo: "SALGADOS" },
]

export default function CardapioGeral() {
    // Configuração do hook de autoplay mantido dentro do componente
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: false })
    )

    return (
        <section className="w-full bg-[#F9F6F0] py-12">
            {/* O segredo está aqui: o px-16 cria o "colchão" de espaço nas laterais para abrigar as setas */}
            <div className="w-full max-w-7xl mx-auto px-16">
                
                {/* Título Principal */}
                <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#3D251A] text-center mb-10">
                    Conheça todos os nossos sabores
                </h2>
                
                {/* Carrossel configurado para loop infinito e alinhamento inicial */}
                <Carousel 
                  className="w-full relative group" 
                  plugins={[plugin.current]}
                  opts={{ align: "start", loop: true }}
                >
                    <CarouselContent className="-ml-4">
                        {categoriasSodie.map((categoria, index) => (
                            // Responsividade: 1 card no celular, 2 no tablet, 3 em telas médias e 4 no monitor grande
                            <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"> 
                                
                                {/* Estrutura do Card arredondado */}
                                <div className="relative w-full h-[380px] rounded-[2.5rem] overflow-hidden shadow-lg group/card cursor-pointer border border-[#EAE2D5]">
                                    
                                    {/* Imagem do Produto */}
                                    <Image
                                      src={categoria.src}
                                      alt={categoria.alt}
                                      fill 
                                      priority={index < 4} // Carrega os 4 primeiros de forma otimizada
                                      className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                                    />

                                    {/* Camada gradiente escura para dar leitura aos textos brancos */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col items-center justify-end pb-8 px-4 text-center">
                                        
                                        {/* Título Interno */}
                                        <h3 className="text-white font-sans font-black text-xl tracking-wide mb-3 drop-shadow-md">
                                            {categoria.titulo}
                                        </h3>

                                        {/* Botão Saiba Mais */}
                                        <span className="bg-[#F3E9DC] text-[#3D251A] text-sm font-bold px-6 py-1.5 rounded-full shadow hover:bg-white transition-colors">
                                            Saiba mais
                                        </span>
                                    </div>
                                    
                                </div>
                                
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    
                    {/* Botões posicionados perfeitamente para fora das fotos (-left-12 e -right-12) */}
                    <CarouselPrevious className="hidden md:flex -left-12 bg-[#3D251A] text-white hover:bg-[#5C3D2E] hover:text-white border-none w-10 h-10 transition-colors shadow-md" />
                    <CarouselNext className="hidden md:flex -right-12 bg-[#3D251A] text-white hover:bg-[#5C3D2E] hover:text-white border-none w-10 h-10 transition-colors shadow-md" />
                </Carousel>

            </div>
        </section>
    )
}