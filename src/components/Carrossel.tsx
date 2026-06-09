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

const carrosselImagens = [
    {src:"/carrossel/banner1.png", alt:"Brigadeiro"},
    {src:"/carrossel/banner2.png", alt:"Bolo de Chocolate"},
    {src:"/carrossel/banner3.png", alt:"Bolo de Morango"},
]


export default function Carrossel() {
  // tempo para o carrossel avançar automaticamente
  const plugin = React.useRef(
      Autoplay({ delay: 4000, stopOnInteraction: false })
    )
  return (
    // Carousel 
    <Carousel className="w-full max-w-full py-4 relative group" plugins={[plugin.current]}>
      <CarouselContent>
        {carrosselImagens.map((imagem, index) => (
            <CarouselItem key={index}> 
                
                <div className="relative w-full h-[350px] sm:h-[450px] md:h-[520px] overflow-hidden">
                    <Image
                    src={imagem.src}
                    alt={imagem.alt}
                    fill 
                    priority={index === 0}
                    className="object-cover"
                    />
                </div>
                
            </CarouselItem>
        ))}
      </CarouselContent>
      
      {/* Botões de navegação */}
      <CarouselPrevious className="left-4 opacity-0 group-hover:opacity-100 transition-opacity" />
      <CarouselNext className="right-4 opacity-0 group-hover:opacity-100 transition-opacity" />
    </Carousel>
  )
}

