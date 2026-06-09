"use client"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import React from "react"
import Link from "next/link"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type CategoriaSodieProps = {
  src: string;
  alt: string;
  titulo: string;
  href: string; 
}

const categoriasSodie: CategoriaSodieProps[] = [
  { src: "/fotos/bg_doces.png", alt: "Docinhos", titulo: "DOCINHOS", href: "/produtos" },
  { src: "/fotos/bg_kit_festa.png", alt: "Kits Festa", titulo: "KITS FESTA", href: "/produtos" },
  { src: "/fotos/bg_balas_de_coco.png", alt: "Balas de Coco", titulo: "BALAS DE COCO", href: "/produtos" },
  { src: "/fotos/bg_choco.png", alt: "Chocolates", titulo: "CHOCOLATES", href: "/produtos" }, 
  { src: "/fotos/bg_bolos.png", alt: "Bolos", titulo: "BOLOS", href: "/produtos" },
  { src: "/fotos/bg_salgados.png", alt: "Salgados", titulo: "SALGADOS", href: "/produtos" },
]

export default function CardapioGeral() {
    // Configuração do autoplay 
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: false })
    )

    return (
        <section className="w-full bg-[#F9F6F0] py-12">
            <div className="w-full max-w-7xl mx-auto px-16">
                
                {/* Título Principal */}
                <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#3D251A] text-center mb-10">
                    Conheça todos os nossos sabores
                </h2>
                
                {/* Carrossel */}
                <Carousel 
                  className="w-full relative group" 
                  plugins={[plugin.current]}
                  opts={{ align: "start", loop: true }}
                >
                    <CarouselContent className="-ml-4">
                        {categoriasSodie.map((categoria, index) => (
                            <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"> 
                                
                                
                                <Link 
                                href={categoria.href} 
                                className="relative block w-full h-[380px] rounded-[2.5rem] overflow-hidden shadow-lg group/card cursor-pointer border border-[#EAE2D5]"
                                >
                                    
                                    {/* Imagem do Produto */}
                                    <Image
                                    src={categoria.src}
                                    alt={categoria.alt}
                                    fill 
                                    priority={index < 4}
                                    className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                                    />

                                    {/* Camada gradiente escura */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col items-center justify-end pb-8 px-4 text-center">
                                        
                                        <h3 className="text-white font-sans font-black text-xl tracking-wide mb-3 drop-shadow-md">
                                            {categoria.titulo}
                                        </h3>

                                        {/* Botão Saiba Mais */}
                                        <span className="bg-[#F3E9DC] text-[#3D251A] text-sm font-bold px-6 py-1.5 rounded-full shadow hover:bg-white transition-colors">
                                            Saiba mais
                                        </span>
                                    </div>
                                    
                                </Link> 
                                
                            </CarouselItem>
                    ))}
                    </CarouselContent>
                    
                    
                    <CarouselPrevious className="hidden md:flex -left-12 bg-[#3D251A] text-white hover:bg-[#5C3D2E] hover:text-white border-none w-10 h-10 transition-colors shadow-md" />
                    <CarouselNext className="hidden md:flex -right-12 bg-[#3D251A] text-white hover:bg-[#5C3D2E] hover:text-white border-none w-10 h-10 transition-colors shadow-md" />
                </Carousel>

            </div>
        </section>
    )
}