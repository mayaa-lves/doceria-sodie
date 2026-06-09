"use client"
import Header from "@/components/Header"
import Titulo from "@/components/Titulo"
import CardProduto from "@/components/CardProduto"
import Footer from "@/components/Footer"
import produtos from "../../../produtos.json"

export default function Produtos() {
    return (
        <div className="w-full bg-[#F9F6F0] min-h-screen flex flex-col items-center justify-start">
            {/* Menu superior */}
            <Header />
            
            {/* Cabeçalho da Vitrine */}
            <Titulo 
                titulo_pagina="Nossos Sabores."
                subtitulo_pagina="Explore nosso cardápio completo. De bolos artesanais irresistíveis a salgados assados na hora, temos o pedaço perfeito para cada momento do seu dia."
                seta_animacao
            />

            {/* SEÇÃO DA VITRINE DE PRODUTOS */}
            <main className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12 flex-grow">
                
                
                <div className="w-full flex flex-col items-start mb-8 border-b border-[#EAE2D5] pb-4">
                    <h2 className="text-[#3D251A] font-sans font-black text-2xl md:text-3xl">
                        Cardápio Completo
                    </h2>
                    <p className="text-[#5C3E2E] text-sm mt-1">
                        Selecione as opções ou veja todas as nossas especialidades abaixo
                    </p>
                </div>

                
                <section id="produtosGeral" className="w-full flex flex-col items-center justify-center min-h-[50vh]">
                    <CardProduto itens={produtos}/>
                </section>

                {/* encomendas */}
                <div className="mt-16 bg-[#F3E9DC] rounded-2xl p-6 md:p-8 border border-[#EAE2D5] text-center max-w-3xl mx-auto">
                    <h3 className="text-[#3D251A] font-bold text-lg mb-2">
                        Deseja algo exclusivo ou encomendas em grande quantidade?
                    </h3>
                    <p className="text-sm text-[#5C3E2E] leading-relaxed mb-4">
                        Nossos confeiteiros estão prontos para produzir bolos personalizados, kits para festas corporativas ou aniversários. 
                    </p>
                    <a 
                        href="/contato" 
                        className="inline-block bg-[#3D251A] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl hover:bg-[#5C3E2E] transition-all shadow-sm"
                    >
                        Entre em contato
                    </a>
                </div>

            </main>
            
            {/* Rodapé */}
            <Footer />
        </div>
    )
}