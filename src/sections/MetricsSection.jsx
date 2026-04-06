import metricsData from '../data/metricsData.js';
import Container from '../components/common/Container.jsx';
import StatCard from '../components/common/StatCard.jsx';
import SectionReveal from '../components/common/SectionReveal.jsx';

function MetricsSection() {
  return (
    <section className="py-16 border-t border-white/10 bg-white/[0.02]">
      <Container>
        <SectionReveal>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {metricsData.map((metric, idx) => (
              <StatCard key={idx} value={metric.value} label={metric.label} />
            ))}
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}

export default MetricsSection;