import { useEffect, useState } from 'react';
import Container from '../components/common/Container.jsx';
import PrimaryButton from '../components/common/PrimaryButton.jsx';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#06080D]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)]'
          : 'bg-transparent'
      }`}
    >
      <Container className="flex items-center justify-between py-4">
        <a
          href="#home"
          className="text-lg font-semibold tracking-wide text-white sm:text-xl"
        >
          Nazmul Arafin Naim
        </a>

        <div className="hidden items-center space-x-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-primary to-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          <a
            href="/assets/Nazmul_Arafin_Naim_CV.pdf"
            download
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(37,99,235,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-[0_16px_40px_rgba(37,99,235,0.35)]"
          >
            Download CV
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
        >
          {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </Container>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-white/10 bg-[#06080D]/95 backdrop-blur-xl">
          <Container className="flex flex-col space-y-5 py-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/assets/Nazmul_Arafin_Naim_CV.pdf"
              download
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(37,99,235,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-[0_16px_40px_rgba(37,99,235,0.35)]"
            >
              Download CV
            </a>
          </Container>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;