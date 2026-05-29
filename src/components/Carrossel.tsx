"use client"
import Image from "next/image"

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
  return (
    // 1. Carousel agora ocupa a largura total da tela, com margem vertical para respirar
    <Carousel className="w-full max-w-full py-4 relative group">
      <CarouselContent>
        {carrosselImagens.map((imagem, index) => (
            <CarouselItem key={index}> 
                
                {/* Alterado aqui: Altura maior e responsiva para valorizar a imagem */}
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
      
      {/* 3. Botões de navegação posicionados de forma elegante nas extremidades */}
      <CarouselPrevious className="left-4 opacity-0 group-hover:opacity-100 transition-opacity" />
      <CarouselNext className="right-4 opacity-0 group-hover:opacity-100 transition-opacity" />
    </Carousel>
  )
}

