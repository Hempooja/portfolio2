import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const CONTACT_ITEMS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'Email',
    value: 'hempoojaksv@gmail.com',
    href: 'mailto:hempoojaksv@gmail.com',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/hempooja-k',
    href: 'https://linkedin.com/in/hempooja-k-b82104202/',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: 'Phone',
    value: '+91 63698 45663',
    href: 'tel:+916369845663',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15,3 21,3 21,9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    ),
    label: 'Live Project',
    value: 'safewaydroptaxi.com',
    href: 'https://safewaydroptaxi.com',
  },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const overline = sectionRef.current.querySelector('.contact-overline');
    const heading = sectionRef.current.querySelector('.contact-heading');
    const desc = sectionRef.current.querySelector('.contact-desc');
    const items = sectionRef.current.querySelectorAll('.contact-item');

    gsap.fromTo(
      overline,
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: overline, start: 'top 85%' },
      }
    );

    gsap.fromTo(
      heading,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 1.0, ease: 'power2.out',
        scrollTrigger: { trigger: heading, start: 'top 85%' },
      }
    );

    gsap.fromTo(
      desc,
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.2,
        scrollTrigger: { trigger: desc, start: 'top 85%' },
      }
    );

    gsap.fromTo(
      items,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', stagger: 0.1,
        scrollTrigger: { trigger: items[0], start: 'top 85%' },
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="contact"
      data-section-name="Contact"
      style={{
        backgroundColor: 'var(--bg-dark)',
        paddingTop: 'var(--space-section)',
        paddingBottom: 'var(--space-inner)',
        paddingLeft: 'var(--space-page-x)',
        paddingRight: 'var(--space-page-x)',
      }}
    >
      <div className="content-container">
        <p
          className="contact-overline text-[0.75rem] font-medium tracking-[0.12em] uppercase mb-4"
          style={{ color: 'var(--accent-teal)', fontFamily: '"Instrument Sans", system-ui, sans-serif' }}
        >
          LET'S CONNECT
        </p>

        <h2
          className="contact-heading font-bold leading-[1.05] tracking-[-0.03em] max-w-[700px]"
          style={{
            fontSize: 'var(--text-h1)',
            color: 'var(--text-inverse)',
            fontFamily: '"Instrument Sans", system-ui, sans-serif',
          }}
        >
          Let's Build{' '}
          <em style={{ fontFamily: '"Instrument Serif", Georgia, serif', fontStyle: 'italic', color: 'var(--accent-lavender)' }}>
            Something
          </em>{' '}
          Together
        </h2>

        <p
          className="contact-desc mt-6 max-w-[560px]"
          style={{
            fontSize: 'var(--text-body)',
            color: 'rgba(255,252,245,0.7)',
            lineHeight: 1.75,
            fontFamily: '"Instrument Sans", system-ui, sans-serif',
          }}
        >
          I'm always open to discussing cloud architecture, DevOps automation, AI-driven systems, or new
          opportunities. Whether you're looking for a collaborator or just want to say hello — my inbox is open.
        </p>

        <div
          className="my-12"
          style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.1)' }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {CONTACT_ITEMS.map((item) => (
            <div key={item.label} className="contact-item">
              <div style={{ color: 'var(--accent-teal)' }} className="mb-3">
                {item.icon}
              </div>
              <p
                className="text-[0.75rem] font-medium tracking-[0.08em] uppercase mb-2"
                style={{ color: 'var(--text-secondary)', fontFamily: '"Instrument Sans", system-ui, sans-serif' }}
              >
                {item.label}
              </p>
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-[1.125rem] font-medium transition-colors duration-300 hover:text-teal"
                style={{
                  color: 'var(--text-inverse)',
                  fontFamily: '"Instrument Sans", system-ui, sans-serif',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--accent-teal)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--text-inverse)';
                }}
              >
                {item.value}
              </a>
            </div>
          ))}
        </div>

        <div
          className="mt-[var(--space-component)]"
          style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.08)' }}
        />

        <div className="flex justify-between items-center pt-8">
          <p
            className="text-[0.75rem]"
            style={{ color: 'var(--text-secondary)', fontFamily: '"Instrument Sans", system-ui, sans-serif' }}
          >
            &copy; 2025 Hempooja K
          </p>
          <p
            className="text-[0.75rem]"
            style={{ color: 'var(--text-secondary)', fontFamily: '"Instrument Sans", system-ui, sans-serif' }}
          >
            Built with care
          </p>
        </div>
      </div>
    </section>
  );
}
