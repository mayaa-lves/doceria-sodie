import Link from "next/link";

export default function Header() {
  return (
    // header-contorno: Fundo bege claro cobrindo toda a largura
    <div className="w-full bg-[#EAE2D5] border-b border-[#D1C7BD] py-4 px-6">
      
      {/* conteudo: Container centralizado com largura máxima */}
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 grid grid-cols-3">
        
        {/* Logo */}
        <div className="flex justify-start">
            <img 
                src="/logo/logo.png" 
                alt="Sodiê Doces" 
                className="h-20 w-auto object-contain py-2" 
            />
        </div>

        {/* Menu de Navegação */}
        <nav className="hidden md:flex items-center flex justify-center" >
          <ul className="flex items-center text-[#5C3D2E] font-medium text-sm lg:text-base">
            <li className="px-4 border-r border-[#A89F95] last:border-r-0 hover:text-[#3D251A] transition-colors">
              <Link href="/">A Sodiê</Link>
            </li>
            {/* Item Produtos com Dropdown */}
            <li className="relative group px-4 border-r border-[#A89F95] last:border-r-0 text-[#5C3D2E] hover:text-[#3D251A] transition-colors cursor-pointer py-2">
                
                {/* Link Principal */}
                <div className="flex items-center gap-1 font-medium text-sm lg:text-base">
                    <Link href="/produtos">Produtos</Link>
                    <span className="text-xs transition-transform group-hover:rotate-180">▼</span>
                </div>

                {/* O Menu Suspenso (Dropdown) */}
                <div className="absolute left-0 top-full mt-1 w-48 bg-[#E2D8C9] rounded-b-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
                    <ul className="flex flex-col py-1 text-[#5C3D2E] text-sm">
                    <li>
                        <Link href="/produtos/bolos" className="block px-4 py-2 hover:bg-[#D6CBB9] transition-colors">Bolos</Link>
                    </li>
                    <li>
                        <Link href="/produtos/chocolates" className="block px-4 py-2 hover:bg-[#D6CBB9] transition-colors">Chocolates</Link>
                    </li>
                    <li>
                        <Link href="/produtos/salgados" className="block px-4 py-2 hover:bg-[#D6CBB9] transition-colors">Salgados</Link>
                    </li>
                    <li>
                        <Link href="/produtos/kit-festa" className="block px-4 py-2 hover:bg-[#D6CBB9] transition-colors">Kit Festa</Link>
                    </li>
                    <li>
                        <Link href="/produtos/doces" className="block px-4 py-2 hover:bg-[#D6CBB9] transition-colors">Doces</Link>
                    </li>
                    <li>
                        <Link href="/produtos/tortas" className="block px-4 py-2 hover:bg-[#D6CBB9] transition-colors">Tortas Doces</Link>
                    </li>
                    <li>
                        <Link href="/produtos/bebidas" className="block px-4 py-2 hover:bg-[#D6CBB9] transition-colors">Bebidas</Link>
                    </li>
                    <li>
                        <Link href="/produtos/balas" className="block px-4 py-2 hover:bg-[#D6CBB9] transition-colors">Balas de Coco</Link>
                    </li>
                    </ul>
                </div>

            </li>
            <li className="px-4 border-r border-[#A89F95] last:border-r-0 hover:text-[#3D251A] transition-colors">
              <Link href="/contato">Contato</Link>
            </li>
          </ul>
        </nav>

        {/* Redes Sociais */}
        <div className="flex items-center gap-4 flex justify-end">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#5C3D2E] hover:opacity-80 transition-opacity">
            <img src="/logo/logoInsta.png" alt="Instagram" className="w-6 h-6" />
          </a>
          {/* Notei que no seu código dizia whatsapp, mas na imagem é o Facebook. Ajustei o ícone/classe para bater com a imagem. */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#5C3D2E] hover:opacity-80 transition-opacity">
            <img src="/logo/logoWhats.png" alt="WhatsApp" className="w-6 h-6" />
          </a>
        </div>

      </div>
    </div>
  );
}