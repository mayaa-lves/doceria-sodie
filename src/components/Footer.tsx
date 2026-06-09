"use client"
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full bg-[#EAE2D5] flex flex-col">
            
            {/* faixa marrom */}
            <div className="w-full h-8 bg-[#3D251A] "></div>

            {/* Container do conteúdo */}
            <div className="w-full max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
                
                {/* Logo Sodiê */}
                <div className="flex-shrink-0">
                    <Image 
                        src="/logo/logo.png" 
                        alt="Sodiê Doces" 
                        width={90} 
                        height={90} 
                        className="object-contain"
                    />
                </div>

                {/*  Menu de Navegação */}
                <nav className="text-[#5C3D2E] font-medium text-sm md:text-base">
                    <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                        
                        <li>
                            <Link href="/#" className="hover:text-[#3D251A] transition-colors">A Sodiê</Link>
                        </li>
                        
                        {/* Divisor Vertical */}
                        <span className="text-[#D6CBB9] hidden sm:inline">|</span>

                        {/* Link de Produtos */}
                        <li className="relative group cursor-pointer">
                            <div className="flex items-center gap-1 hover:text-[#3D251A] transition-colors">
                                <Link href="/produtos">Produtos</Link>
                                <span className="text-xs transition-transform group-hover:rotate-180">▲</span>
                            </div>

                            {/* Dropdown que abre para CIMA */}
                            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 bg-[#E2D8C9] rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
                                <ul className="flex flex-col py-1 text-[#5C3D2E] text-sm text-left">
                                    <li><Link href="/produtos/bolos" className="block px-4 py-2 hover:bg-[#D6CBB9] transition-colors">Bolos</Link></li>
                                    <li><Link href="/produtos/chocolates" className="block px-4 py-2 hover:bg-[#D6CBB9] transition-colors">Chocolates</Link></li>
                                    <li><Link href="/produtos/salgados" className="block px-4 py-2 hover:bg-[#D6CBB9] transition-colors">Salgados</Link></li>
                                    <li><Link href="/produtos/kit-festa" className="block px-4 py-2 hover:bg-[#D6CBB9] transition-colors">Kit Festa</Link></li>
                                    <li><Link href="/produtos/doces" className="block px-4 py-2 hover:bg-[#D6CBB9] transition-colors">Doces</Link></li>
                                    <li><Link href="/produtos/tortas" className="block px-4 py-2 hover:bg-[#D6CBB9] transition-colors">Tortas Doces</Link></li>
                                    <li><Link href="/produtos/bebidas" className="block px-4 py-2 hover:bg-[#D6CBB9] transition-colors">Bebidas</Link></li>
                                    <li><Link href="/produtos/balas" className="block px-4 py-2 hover:bg-[#D6CBB9] transition-colors">Balas de Coco</Link></li>
                                </ul>
                            </div>
                        </li>

                        <span className="text-[#D6CBB9] hidden sm:inline">|</span>

                        <li>
                            <Link href="#" className="hover:text-[#3D251A] transition-colors">Lojas</Link>
                        </li>

                        <span className="text-[#D6CBB9] hidden sm:inline">|</span>

                        <li>
                            <Link href="#" className="hover:text-[#3D251A] transition-colors">Contato</Link>
                        </li>

                        <span className="text-[#D6CBB9] hidden sm:inline">|</span>

                        <li>
                            <Link href="#" className="hover:text-[#3D251A] transition-colors">Política de Privacidade</Link>
                        </li>
                    </ul>
                </nav>

                {/*  Redes Sociais */}
                <div className="flex items-center gap-4">
                    <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                        <Image 
                            src="/logo/logoInsta.png" 
                            alt="Instagram" 
                            width={24} 
                            height={24} 
                        />
                    </Link>
                    <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                        <Image 
                            src="/logo/logoWhats.png" 
                            alt="WhatsApp" 
                            width={24} 
                            height={24} 
                        />
                    </Link>
                </div>

            </div>
        </footer>
    );
}