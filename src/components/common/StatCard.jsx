function StatCard({ value, label }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
      <h3 className="text-3xl font-semibold text-white">{value}</h3>
      <p className="mt-2 text-center text-sm text-textSecondary">{label}</p>
    </div>
  );
}

export default StatCard;