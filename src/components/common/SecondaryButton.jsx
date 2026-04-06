function SecondaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-gold/30 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-gold backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:bg-gold/10 hover:text-white"
    >
      {children}
    </a>
  );
}

export default SecondaryButton;