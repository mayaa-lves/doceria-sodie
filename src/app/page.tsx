import Header from "@/components/Header";
import Titulo from "@/components/Titulo";
import Carrossel from "@/components/Carrossel";
import CardProduto from "@/components/CardProduto";
import Footer from "@/components/Footer";

// Importando o banco de dados JSON 
import produtosJson from "../../produtos.json";
import CardapioGeral from "@/components/CardapioGeral";

// Tipagem para garantir que o TypeScript entenda o JSON importado
interface DoceProps {
  id: number;
  nome: string;
  src: string;
  alt: string;
  ingrediente: string;
  destaque: boolean;
}

export default function Home() {
  //  filtro dos destaques
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
              <p className="text-[#5C3E2E] text-sm mt-2 max-w-md mx-auto">
                Nossos campeões de vendas separados especialmente para você se apaixonar.
              </p>
            </div>

            {/* listra filtrada */}
            <CardProduto itens={produtosEmDestaque} />
            
            
        </section>
        <section id="cardapioGeral" className="w-full min-h-[95vh] bg-[#F9F6F0] py-12 text-center flex flex-col items-center">
          <CardapioGeral />
        </section>
        
        <Footer />
    </div>
  )
}