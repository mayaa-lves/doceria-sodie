"use client"
import React from "react"
import Image from "next/image"

// Definição do tipo de cada doce
interface DoceProps {
  id: number;
  nome: string;
  src: string;
  alt: string;
  ingrediente: string;
  destaque: boolean;
}

// O componente agora recebe a lista pronta de fora
interface CardProdutoProps {
  itens: DoceProps[];
}

export default function CardProduto({ itens }: CardProdutoProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto w-full px-4">
      {itens.map((produto) => (
        <div 
          key={produto.id} 
          className="bg-[#F6EFE5] rounded-2xl p-6 flex flex-col items-center justify-between text-center min-h-[420px] shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          {/* Imagem Centralizada */}
          <div className="relative w-full h-[180px] flex items-center justify-center mb-6">
            <Image
              src={produto.src}
              alt={produto.alt}
              width={200}
              height={200}
              className="object-contain transition-transform duration-350 hover:scale-110"
              priority={produto.id <= 4}
            />
          </div>

          {/* Conteúdo Inferior - Nome e Botão */}
          <div className="w-full flex flex-col items-center flex-grow justify-between">
            <h3 className="text-[#3D251A] font-sans font-black text-lg md:text-xl tracking-tight max-w-[200px] mb-6">
              {produto.nome}
            </h3>

            <button className="bg-[#3D251A] text-white font-semibold text-sm px-8 py-2 rounded-xl hover:bg-[#5C3D2E] active:scale-95 transition-all w-fit shadow-md">
              Eu quero
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}