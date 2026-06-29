import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const locationRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    tl.fromTo(portraitRef.current, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 1.2 })
      .fromTo(labelRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.3)
      .fromTo(nameRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.0 }, 0.5)
      .fromTo(titleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.7)
      .fromTo(locationRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.8)
      .fromTo(descRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.9)
      .fromTo(ctaRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 }, 1.1);
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="hero"
      data-section-name="Home"
      className="min-h-screen w-full"
      style={{
        backgroundColor: 'var(--bg-primary)',
        paddingTop: 'var(--space-section)',
        paddingLeft: 'var(--space-page-x)',
        paddingRight: 'var(--space-page-x)',
      }}
    >
      <div className="content-container grid grid-cols-1 md:grid-cols-12 gap-6 items-center min-h-[80vh]">
        {/* Portrait - columns 1-5 */}
        <div
          ref={portraitRef}
          className="md:col-span-5 opacity-0"
        >
          <img
            src="/assets/portrait.jpg"
            alt="Hempooja K — AWS Solutions Architect"
            className="w-full object-cover"
            style={{ aspectRatio: '3/4', borderRadius: '2px' }}
            loading="eager"
          />
        </div>

        {/* Empty column 6 - whitespace */}
        <div className="hidden md:block md:col-span-1" />

        {/* Text content - columns 7-12 */}
        <div className="md:col-span-6 flex flex-col justify-center text-center md:text-left">
          <p
            ref={labelRef}
            className="text-[0.75rem] font-medium tracking-[0.12em] uppercase mb-4 opacity-0"
            style={{ color: 'var(--accent-teal)', fontFamily: '"Instrument Sans", system-ui, sans-serif' }}
          >
            AWS SOLUTIONS ARCHITECT
          </p>

          <h1
            ref={nameRef}
            className="font-bold leading-[1] tracking-[-0.02em] opacity-0"
            style={{
              fontSize: 'var(--text-hero-name)',
              color: 'var(--text-primary)',
              fontFamily: '"Instrument Sans", system-ui, sans-serif',
            }}
          >
            Hempooja K
          </h1>

          <p
            ref={titleRef}
            className="font-medium leading-[1] tracking-[-0.03em] mt-2 opacity-0"
            style={{
              fontSize: 'var(--text-h3)',
              color: 'var(--text-primary)',
              fontFamily: '"Instrument Sans", system-ui, sans-serif',
            }}
          >
            Building{' '}
            <em
              style={{
                fontFamily: '"Instrument Serif", Georgia, serif',
                fontStyle: 'italic',
                color: 'var(--accent-teal)',
              }}
            >
              Resilient
            </em>{' '}
            Cloud Systems
          </p>

          <p
            ref={locationRef}
            className="text-[1rem] mt-4 opacity-0"
            style={{ color: 'var(--text-secondary)', fontFamily: '"Instrument Sans", system-ui, sans-serif' }}
          >
            <span style={{ color: 'var(--accent-teal)' }}>●</span> Bengaluru, India
          </p>

          <p
            ref={descRef}
            className="mt-6 mx-auto md:mx-0 opacity-0"
            style={{
              fontSize: 'var(--text-body)',
              color: 'var(--text-secondary)',
              maxWidth: '480px',
              lineHeight: 1.75,
              fontFamily: '"Instrument Sans", system-ui, sans-serif',
            }}
          >
            Former UPSC aspirant turned cloud architect. Combining systems-thinking from Public Administration
            with hands-on expertise in AWS infrastructure, containerization, and conversational AI. Currently
            shaping enterprise cloud operations at Accenture.
          </p>

          <a
            ref={ctaRef}
            href="#about"
            className="inline-block mt-8 text-[1rem] font-medium pb-[2px] self-center md:self-start opacity-0"
            style={{
              color: 'var(--text-primary)',
              borderBottom: '1px solid var(--text-primary)',
              fontFamily: '"Instrument Sans", system-ui, sans-serif',
            }}
          >
            Explore my work ↓
          </a>
        </div>
      </div>
    </section>
  );
}
