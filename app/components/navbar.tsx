import { useState } from 'react';
import Image from 'next/image';
import Logo from '../../public/AUDMED LOGOTIPO.png';
import Link from 'next/link';
import Head from 'next/head';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <Link href={href} className="NavLink py-2 pl-3 pr-4 transition ease-in duration-100 hover:-translate-y-1 flex flex-row gap-1 rounded md:bg-transparent md:p-0 md:hover:text-green-700" aria-current="page">
    {children}
  </Link>
);

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer" className="ExternalLink py-2 pl-3 pr-4 transition ease-in duration-100 hover:-translate-y-1 flex flex-row gap-1 rounded md:p-0 md:hover:text-green-600">
    {children}
  </Link>
);

const Navbar: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      <header className="flex justify-between items-center p-4 lg:px-8">
        <div>
          <Image src={Logo} alt="Audmed Logo" />
        </div>
        <nav className="lg:flex items-center lg:space-x-4">
          <div className="lg:hidden">
            <button onClick={toggleMobileMenu} className={`hamburguer ${showMobileMenu ? 'open' : ''}`}>☰</button>
          </div>
          {showMobileMenu && (
            <div className="overlay">
              <div className="mobile-menu">
                <button className="close-button" onClick={toggleMobileMenu}>✕</button>
                <div className="menu-content">
                  {/* Renderizar links aqui para o menu móvel */}
                  <NavLink href={'/'}>Home</NavLink>
                  <NavLink href={'/sobre'}>A Audmed</NavLink>
                  <NavLink href={'/servicos'}>Serviços</NavLink>
                  <NavLink href={'/blog'}>Blog</NavLink>
                  <NavLink href={'/trabalhe-conosco'}>Trabalhe Conosco</NavLink>
                  <NavLink href={'/contatos'}>Contato</NavLink>
                  <NavLink href={'/treinamentos'}>Treinamentos e Palestras</NavLink>
                  <ExternalLink href={'https://sistema.soc.com.br/WebSoc/'}><p>Área do Cliente</p></ExternalLink>
                </div>
              </div>
            </div>
          )}
          <div className="hidden lg:flex items-center sm:text-xs lg:space-x-1 xl:space-x-4">
            {/* Renderizar links aqui para o menu grande */}
            <NavLink href={'/'}>Home</NavLink>
            <NavLink href={'/sobre'}>A Audmed</NavLink>
            <NavLink href={'/servicos'}>Serviços</NavLink>
            <NavLink href={'/treinamentos'}>Treinamentos e Palestras</NavLink>
            <NavLink href={'/blog'}>Blog</NavLink>
            <NavLink href={'/trabalhe-conosco'}>Trabalhe Conosco</NavLink>
            <NavLink href={'/contatos'}>Contato</NavLink>
            <ExternalLink href={'https://sistema.soc.com.br/WebSoc/'}><p>Área do Cliente</p></ExternalLink>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
