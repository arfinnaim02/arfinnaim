function PrimaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(37,99,235,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-[0_16px_40px_rgba(37,99,235,0.35)]"
    >
      {children}
    </a>
  );
}

export default PrimaryButton;