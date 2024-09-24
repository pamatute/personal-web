import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ul className="flex justify-between items-center">
          <li>
            <Link href="/" className="text-xl font-bold">
              Mi Sitio Web
            </Link>
          </li>
          <li>
            <ul className="flex space-x-4">
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/projects">Proyectos</Link></li>
              <li><Link href="/about">Sobre Mí</Link></li>
              <li><Link href="/consulting">Consultoría</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;