import Container from '../components/common/Container.jsx';
import SectionTitle from '../components/common/SectionTitle.jsx';
import SectionReveal from '../components/common/SectionReveal.jsx';

function AboutSection() {
  return (
    <section id="about" className="py-16 border-t border-white/10 bg-white/[0.02]">
      <Container>
        <SectionReveal>
          <SectionTitle
            title="About Me"
            subtitle="Get to know who I am and what I do"
          />
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
                I build solutions at the intersection of data, AI, and real-world business problems.
              </h3>
            </div>

            <div className="space-y-4">
              <p className="text-textSecondary">
                With a foundation in statistics and engineering, I transform raw data into
                meaningful insights that drive business decisions. My experience spans
                analytics, interactive dashboards, machine learning applications, and
                automation tools.
              </p>

              <p className="text-textSecondary">
                I hold an MSc in Applied Statistics & Data Science and a BSc in Computer
                & Communication Engineering, bringing together analytical training and
                practical software engineering expertise.
              </p>
            </div>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}

export default AboutSection;