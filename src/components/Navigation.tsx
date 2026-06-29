import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState('');
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const triggers: ScrollTrigger[] = [];
    const sections = document.querySelectorAll('[data-section-name]');
    sections.forEach((section) => {
      const name = section.getAttribute('data-section-name') || '';
      const st = ScrollTrigger.create({
        trigger: section,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => setCurrentSection(name),
        onEnterBack: () => setCurrentSection(name),
      });
      triggers.push(st);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      triggers.forEach((st) => st.kill());
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between transition-all duration-500"
      style={{
        padding: '1.5rem var(--space-page-x)',
        backgroundColor: scrolled ? 'rgba(255,252,245,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-rule)' : '1px solid transparent',
      }}
    >
      <a
        href="#hero"
        className="font-medium text-[1rem] tracking-[-0.01em]"
        style={{ color: 'var(--text-primary)', fontFamily: '"Instrument Sans", system-ui, sans-serif' }}
      >
        Hempooja K
      </a>

      <span
        className="hidden md:block text-[0.75rem] tracking-[0.08em] uppercase transition-opacity duration-300"
        style={{
          color: 'var(--text-secondary)',
          fontFamily: '"Instrument Sans", system-ui, sans-serif',
          opacity: currentSection ? 1 : 0,
        }}
      >
        {currentSection}
      </span>

      <a
        href="#contact"
        className="link-underline text-[0.875rem]"
        style={{ color: 'var(--accent-teal)', fontFamily: '"Instrument Sans", system-ui, sans-serif' }}
      >
        Get in Touch
      </a>
    </nav>
  );
}
