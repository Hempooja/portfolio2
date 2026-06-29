import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const header = sectionRef.current.querySelector('.about-header');
    const paras = sectionRef.current.querySelectorAll('.about-para');
    const image = sectionRef.current.querySelector('.about-image');

    gsap.fromTo(
      header,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 1.0, ease: 'power2.out',
        scrollTrigger: { trigger: header, start: 'top 80%' },
      }
    );

    gsap.fromTo(
      paras,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', stagger: 0.15,
        scrollTrigger: { trigger: paras[0], start: 'top 80%' },
      }
    );

    gsap.fromTo(
      image,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 1.2, ease: 'power2.out', delay: 0.3,
        scrollTrigger: { trigger: image, start: 'top 85%' },
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="about"
      data-section-name="About"
      style={{
        backgroundColor: 'var(--bg-primary)',
        paddingTop: 'var(--space-inner)',
        paddingBottom: 'var(--space-inner)',
        paddingLeft: 'var(--space-page-x)',
        paddingRight: 'var(--space-page-x)',
      }}
    >
      <div className="content-container grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Text column - 1-7 */}
        <div className="md:col-span-7 relative">
          {/* Accent vertical marker */}
          <div
            className="hidden md:block absolute left-[-2rem] top-0 bottom-0 w-[2px]"
            style={{ backgroundColor: 'var(--accent-teal)' }}
          />

          <div className="about-header">
            <p
              className="text-[0.75rem] font-medium tracking-[0.12em] uppercase mb-4"
              style={{ color: 'var(--accent-teal)', fontFamily: '"Instrument Sans", system-ui, sans-serif' }}
            >
              ABOUT
            </p>
            <h2
              className="font-medium leading-[0.85] tracking-[-0.04em] max-w-[600px]"
              style={{
                fontSize: 'var(--text-h2)',
                fontFamily: '"Instrument Sans", system-ui, sans-serif',
                color: 'var(--text-primary)',
              }}
            >
              From{' '}
              <em style={{ fontFamily: '"Instrument Serif", Georgia, serif', fontStyle: 'italic', color: 'var(--accent-teal)' }}>
                Civil Service
              </em>{' '}
              to Cloud Service
            </h2>
          </div>

          <div
            className="my-8"
            style={{ height: '1px', backgroundColor: 'var(--border-rule)' }}
          />

          <p
            className="about-para"
            style={{
              fontSize: 'var(--text-body)',
              color: 'var(--text-primary)',
              maxWidth: '640px',
              lineHeight: 1.75,
              fontFamily: '"Instrument Sans", system-ui, sans-serif',
            }}
          >
            My journey into technology was shaped by a deep interest in systems and governance. As a UPSC
            aspirant with Public Administration as my optional subject, I developed a strong foundation in
            management theories, hierarchical systems, and organizational decision-making — perspectives that
            now inform how I approach cloud architecture and DevOps at scale.
          </p>

          <p
            className="about-para mt-6"
            style={{
              fontSize: 'var(--text-body)',
              color: 'var(--text-primary)',
              maxWidth: '640px',
              lineHeight: 1.75,
              fontFamily: '"Instrument Sans", system-ui, sans-serif',
            }}
          >
            I hold a Bachelor of Computer Applications from Holy Cross College (CGPA: 8.2), where I served
            as President of the YUVA Club and founded Cockakitham, an eco-friendly paper manufacturing
            initiative aligned with UN Sustainable Development Goals. These experiences taught me that
            leadership is about building systems that outlast your presence.
          </p>

          <p
            className="about-para mt-6"
            style={{
              fontSize: 'var(--text-body)',
              color: 'var(--text-primary)',
              maxWidth: '640px',
              lineHeight: 1.75,
              fontFamily: '"Instrument Sans", system-ui, sans-serif',
            }}
          >
            Today, I work as an Application Tech Support Practitioner at Accenture, contributing to
            enterprise cloud-hosted applications and infrastructure environments. I'm AWS Certified Solutions
            Architect – Associate and continuously expanding my expertise in cloud operations,
            containerization, and AI-driven systems.
          </p>
        </div>

        {/* Image column - 9-12 with offset */}
        <div className="md:col-span-5 hidden md:block">
          <div className="about-image" style={{ marginTop: '8rem' }}>
            <img
              src="/assets/about-desk.jpg"
              alt="Study desk scene"
              className="w-full object-cover"
              style={{ aspectRatio: '4/5', borderRadius: '2px' }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
