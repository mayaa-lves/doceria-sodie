import Header from "@/components/Header";
import Titulo from "@/components/Titulo";
import Carrossel from "@/components/Carrossel";
import CardProduto from "@/components/CardProduto";
import Footer from "@/components/Footer";


import produtosJson from "../../produtos.json";

interface DoceProps {
  id: number;
  nome: string;
  src: string;
  alt: string;
  ingrediente: string;
  destaque: boolean;
}

export default function Home() {
  // Filtro de destaques feito diretamente aqui na Home antes de mandar pro componente
  const produtosEmDestaque = (produtosJson as DoceProps[]).filter(
    (produto) => produto.destaque === true
  );

  return (
    <div className="w-full bg-[#F9F6F0] min-h-screen flex flex-col items-center justify-start">
        <Header />
        <Titulo 
            titulo_pagina="Tradição em cada pedaço."
            subtitulo_pagina="Mais de 100 variedades de bolos artesanais feitos com o mais puro chocolate e frutas selecionadas."
            seta_animacao
        />

        <Carrossel />
        
        <section id="produtosGeral" className="w-full bg-[#F9F6F0] py-12 text-center flex flex-col items-center">
            <div className="mb-10 text-center">
              <h2 className="text-[#3D251A] font-sans font-black text-2xl md:text-3xl">
                Os Mais Pedidos da Semana
              </h2>
            </div>

            {/* Enviando a lista filtrada e tipada */}
            <CardProduto itens={produtosEmDestaque} />
        </section>
        
        <Footer />
    </div>
  )
}