import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SectionHeader from '../components/SectionHeader';

gsap.registerPlugin(ScrollTrigger);

const CERTIFICATIONS = [
  {
    badge: 'AWS',
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    description:
      'Comprehensive knowledge of AWS services, cloud architecture design, and deployment strategies for scalable, cost-efficient systems.',
  },
  {
    badge: 'AI',
    title: 'Elements of Artificial Intelligence',
    issuer: 'University of Helsinki',
    description:
      'Fundamentals of artificial intelligence, machine learning concepts, and the societal implications of AI technologies.',
  },
  {
    badge: 'IITK',
    title: 'Developing Soft Skills and Personality',
    issuer: 'IIT Kanpur',
    description:
      'Communication, teamwork, leadership, and interpersonal skills development for professional excellence.',
  },
];

export default function CertificationsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    const cards = sectionRef.current.querySelectorAll('.cert-card');
    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', stagger: 0.15,
        scrollTrigger: { trigger: cards[0], start: 'top 80%' },
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="certifications"
      data-section-name="Credentials"
      style={{
        backgroundColor: 'var(--bg-primary)',
        paddingTop: 'var(--space-inner)',
        paddingBottom: 'var(--space-inner)',
        paddingLeft: 'var(--space-page-x)',
        paddingRight: 'var(--space-page-x)',
      }}
    >
      <div className="content-container">
        <SectionHeader
          overline="CREDENTIALS"
          heading="Certified Expertise"
          highlightWord="Expertise"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.badge}
              className="cert-card p-10 transition-all duration-[400ms] ease-out"
              style={{
                backgroundColor: 'var(--bg-light)',
                border: '1px solid var(--border-rule)',
                borderRadius: '4px',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = 'var(--accent-teal)';
                el.style.transform = 'translateY(-4px)';
                el.style.boxShadow = '0 8px 32px rgba(13,148,136,0.08)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = 'var(--border-rule)';
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = 'none';
              }}
            >
              <div className="mb-6">
                <span
                  className="inline-flex items-center px-[0.85rem] py-[0.35rem] rounded-full text-[0.75rem] font-medium"
                  style={{
                    backgroundColor: 'rgba(13,148,136,0.1)',
                    color: 'var(--accent-teal)',
                    fontFamily: '"Instrument Sans", system-ui, sans-serif',
                  }}
                >
                  {cert.badge}
                </span>
              </div>

              <h3
                className="font-semibold"
                style={{
                  fontSize: 'var(--text-h5)',
                  color: 'var(--text-primary)',
                  fontFamily: '"Instrument Sans", system-ui, sans-serif',
                }}
              >
                {cert.title}
              </h3>

              <p
                className="mt-2 text-[0.875rem]"
                style={{ color: 'var(--text-secondary)', fontFamily: '"Instrument Sans", system-ui, sans-serif' }}
              >
                {cert.issuer}
              </p>

              <div
                className="my-6"
                style={{ height: '1px', backgroundColor: 'var(--border-rule)' }}
              />

              <p
                className="text-[0.9375rem]"
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  fontFamily: '"Instrument Sans", system-ui, sans-serif',
                }}
              >
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
