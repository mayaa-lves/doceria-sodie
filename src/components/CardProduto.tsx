"use client"
import React, { useState } from "react"
import Image from "next/image"

// 🚀 1. Garantimos a tipagem correta para o TypeScript
interface DoceProps {
  id: number;
  nome: string;
  src: string;
  alt: string;
  ingrediente: string;
  destaque: boolean;
}

interface CardProdutoProps {
  itens: DoceProps[];
}

export default function CardProduto({ itens = [] }: CardProdutoProps) {
  // Estado para armazenar quais IDs de produtos falharam ao carregar a imagem
  const [imagensQuebradas, setImagensQuebradas] = useState<Record<number, boolean>>({});

  // Caminho do seu placeholder padrão caso a foto suma ou esteja com nome errado
  const placeholderImage = "/fotos/brigadeiro.png" // Você pode mudar para uma imagem padrão de doce se preferir

  if (!itens || itens.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-[#5C3E2E] text-sm">Nenhum produto encontrado.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto w-full px-4">
      {itens.map((produto) => {
        // Se este produto específico deu erro de imagem, usamos o placeholder
        const imagemFinal = imagensQuebradas[produto.id] ? placeholderImage : produto.src;

        return (
          <div 
            key={produto.id} 
            className="bg-[#F6EFE5] rounded-2xl p-6 flex flex-col items-center justify-between text-center min-h-[420px] shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Container da Imagem */}
            <div className="relative w-full h-[180px] flex items-center justify-center mb-6">
              <Image
                src={imagemFinal}
                alt={produto.alt}
                width={200}
                height={200}
                className="object-contain transition-transform duration-350 hover:scale-110"
                priority={produto.id <= 4}
                // 🚀 MÁGICA AQUI: Se a imagem falhar (404), ativa o placeholder na hora sem quebrar a tela
                onError={() => {
                  setImagensQuebradas((prev) => ({ ...prev, [produto.id]: true }));
                }}
              />
            </div>

            {/* Conteúdo Inferior */}
            <div className="w-full flex flex-col items-center flex-grow justify-between">
              <h3 className="text-[#3D251A] font-sans font-black text-lg md:text-xl tracking-tight max-w-[200px] mb-6">
                {produto.nome}
              </h3>

              <button className="bg-[#3D251A] text-white font-semibold text-sm px-8 py-2 rounded-xl hover:bg-[#5C3D2E] active:scale-95 transition-all w-fit shadow-md">
                Eu quero
              </button>
            </div>
          </div>
        );
      })}
    </div>
  )
}