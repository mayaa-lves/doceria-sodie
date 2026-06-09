"use client"
import React, { useState } from "react"
import Header from "@/components/Header"
import Titulo from "@/components/Titulo"
import Footer from "@/components/Footer"

export default function Contato() {
    // formulário
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [mensagem, setMensagem] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        alert(`Obrigado pelo contato, ${nome}! Sua mensagem foi enviada.`)
        setNome("")
        setEmail("")
        setMensagem("")
    }

    return (
        <div className="w-full bg-[#F9F6F0] min-h-screen flex flex-col items-center justify-start">
            <Header />
            
            <Titulo 
                titulo_pagina="Contato."
                subtitulo_pagina="Buscamos oferecer diariamente a melhor experiência e sabores para você! Entre em contato conosco para dúvidas, sugestões ou encomendas especiais."
                seta_animacao
            />

            {/* SEÇÃO PRINCIPAL DE CONTATO */}
            <section className="w-full max-w-6xl mx-auto min-h-[100vh] px-4 md:px-12 py-12 flex flex-col lg:flex-row gap-12 flex-grow" id="produtosGeral">
                
                {/* FORMULÁRIO DE CONTATO */}
                <div className="w-full lg:w-2/3 bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-[#EAE2D5]">
                    <h2 className="text-[#3D251A] font-sans font-black text-2xl mb-6">
                        Envie uma mensagem
                    </h2>
                    
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="nome" className="text-[#3D251A] font-semibold text-sm">
                                Seu Nome
                            </label>
                            <input 
                                type="text" 
                                id="nome"
                                required
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                placeholder="Digite seu nome completo" 
                                className="w-full bg-[#FBF9F6] text-[#3D251A] px-4 py-3 rounded-xl border border-[#EAE2D5] focus:outline-none focus:ring-2 focus:ring-[#3D251A] transition-all text-sm"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="email" className="text-[#3D251A] font-semibold text-sm">
                                Seu E-mail
                            </label>
                            <input 
                                type="email" 
                                id="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="exemplo@email.com" 
                                className="w-full bg-[#FBF9F6] text-[#3D251A] px-4 py-3 rounded-xl border border-[#EAE2D5] focus:outline-none focus:ring-2 focus:ring-[#3D251A] transition-all text-sm"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="mensagem" className="text-[#3D251A] font-semibold text-sm">
                                Como podemos te ajudar?
                            </label>
                            <textarea 
                                id="mensagem"
                                rows={5}
                                required
                                value={mensagem}
                                onChange={(e) => setMensagem(e.target.value)}
                                placeholder="Escreva sua dúvida, sugestão ou feedback aqui..." 
                                className="w-full bg-[#FBF9F6] text-[#3D251A] px-4 py-3 rounded-xl border border-[#EAE2D5] focus:outline-none focus:ring-2 focus:ring-[#3D251A] transition-all text-sm resize-none"
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            className="bg-[#3D251A] text-white font-bold text-sm px-8 py-3.5 rounded-xl hover:bg-[#5C3E2E] active:scale-98 transition-all w-full sm:w-fit self-end shadow-md mt-2"
                        >
                            Enviar Mensagem
                        </button>
                    </form>
                </div>

                {/* CARD DE INFORMAÇÕES ADICIONAIS */}
                <div className="w-full lg:w-1/3 flex flex-col gap-6">
                    
                    {/* Atendimento Rápido */}
                    <div className="bg-[#3D251A] text-[#F9F6F0] rounded-2xl p-6 md:p-8 shadow-sm flex flex-col justify-between h-fit">
                        <div>
                            <h3 className="font-sans font-black text-xl mb-4 text-white">
                                Atendimento Direto
                            </h3>
                            <p className="text-sm text-[#DFD5C6] leading-relaxed mb-6">
                                Quer fazer um pedido imediato ou precisa de uma resposta urgente? Fale conosco pelos nossos canais oficiais.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 text-sm font-medium">
                            <div className="flex items-center gap-3">
                                <span className="text-lg">📞</span>
                                <span>(11) 4004-xxxx</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-lg">💬</span>
                                <a href="#" className="hover:underline text-white font-semibold">
                                    Chamar no WhatsApp
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-lg">✉️</span>
                                <span>sac@sodiedoces.com.br</span>
                            </div>
                        </div>
                    </div>

                    {/* Redes Sociais e Horários */}
                    <div className="bg-[#F3E9DC] rounded-2xl p-6 md:p-8 border border-[#EAE2D5] text-[#3D251A]">
                        <h4 className="font-bold text-base mb-3">Horário de Funcionamento</h4>
                        <p className="text-sm text-[#5C3E2E] leading-relaxed mb-6">
                            Segunda a Sábado: 09h às 20h <br />
                            Domingos e Feriados: 09h às 18h
                        </p>

                        <h4 className="font-bold text-base mb-3">Nossas Redes</h4>
                        <div className="flex gap-4 text-sm font-semibold">
                            <a href="#" className="hover:text-[#5C3E2E] underline">Instagram</a>
                            <a href="#" className="hover:text-[#5C3E2E] underline">Facebook</a>
                        </div>
                    </div>

                </div>

            </section>
            
            <Footer />
        </div>
    )
}