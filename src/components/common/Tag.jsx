function Tag({ children }) {
  return (
    <span className="mb-2 mr-2 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-slate-300 backdrop-blur-md transition-all duration-300 group-hover:border-gold/20 group-hover:text-white">
      {children}
    </span>
  );
}

export default Tag;