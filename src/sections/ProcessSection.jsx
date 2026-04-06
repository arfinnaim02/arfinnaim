import Container from '../components/common/Container.jsx';
import SectionTitle from '../components/common/SectionTitle.jsx';
import SectionReveal from '../components/common/SectionReveal.jsx';
import { FaSearch, FaChartLine, FaCode, FaRocket } from 'react-icons/fa';

function ProcessSection() {
  const steps = [
    {
      icon: FaSearch,
      title: 'Understand',
      text: 'We begin by understanding the business problem and identifying the right data, goals, and opportunities.',
    },
    {
      icon: FaChartLine,
      title: 'Analyze',
      text: 'I explore the data, uncover insights, and define the best analytical or product approach.',
    },
    {
      icon: FaCode,
      title: 'Build',
      text: 'I build dashboards, automation tools, or full digital systems tailored to practical business needs.',
    },
    {
      icon: FaRocket,
      title: 'Deliver',
      text: 'I deliver polished, production-ready solutions focused on usability, clarity, and real impact.',
    },
  ];

  return (
    <section className="py-16 border-t border-white/10 bg-transparent">
      <Container>
        <SectionReveal>
          <SectionTitle
            title="How I Work"
            subtitle="My process for turning data into real-world impact"
          />
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title, text }, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                  <Icon className="text-primary" />
                </div>

                <h4 className="mb-2 text-lg font-semibold text-white">{title}</h4>

                <p className="text-sm text-textSecondary">{text}</p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}

export default ProcessSection;