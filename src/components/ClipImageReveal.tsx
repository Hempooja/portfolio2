import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Tag from './Tag';

gsap.registerPlugin(ScrollTrigger);

interface ClipImageRevealProps {
  type: 'type-1' | 'type-2';
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  tags: string[];
  liveLink?: string;
}

export default function ClipImageReveal({
  type,
  imageSrc,
  imageAlt,
  title,
  description,
  tags,
  liveLink,
}: ClipImageRevealProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const captionTitleRef = useRef<HTMLHeadingElement>(null);
  const captionDescRef = useRef<HTMLParagraphElement>(null);
  const captionTagsRef = useRef<HTMLDivElement>(null);
  const liveLinkRef = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !imageWrapRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
      },
    });

    tl.fromTo(
      imageWrapRef.current,
      { clipPath: 'inset(40%)' },
      {
        clipPath: 'inset(0%)',
        ease: 'cubic-bezier(0.76, 0, 0.24, 1)',
        duration: 1.5,
      },
      0
    );

    tl.fromTo(
      imageWrapRef.current.querySelector('.image-inner'),
      { scale: 1.2 },
      { scale: 1, ease: 'none', duration: 1.5 },
      0
    );

    const captionElements = [
      captionTitleRef.current,
      captionDescRef.current,
      captionTagsRef.current,
      liveLinkRef.current,
    ].filter(Boolean);

    captionElements.forEach((el, index) => {
      if (!el) return;
      const fromX = index % 2 === 0 ? '-5vw' : '5vw';
      tl.fromTo(
        el,
        { x: fromX, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power2.out' },
        '<+=0.5'
      );
    });
  }, { scope: sectionRef });

  const isType1 = type === 'type-1';

  return (
    <section
      ref={sectionRef}
      className="relative flex w-full mb-16 last:mb-0"
      data-type={type}
      aria-label={imageAlt}
      style={{ justifyContent: isType1 ? 'flex-start' : 'flex-end' }}
    >
      <div
        ref={imageWrapRef}
        className="relative overflow-hidden"
        style={{
          clipPath: 'inset(40%)',
          width: '60%',
          aspectRatio: '60/50',
          willChange: 'clip-path',
        }}
      >
        <div
          className="image-inner absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
      </div>

      <figcaption
        className="absolute top-0 h-full flex flex-col justify-center px-[5vw]"
        style={{
          right: isType1 ? '0' : 'auto',
          left: isType1 ? 'auto' : '0',
          alignItems: isType1 ? 'flex-end' : 'flex-start',
          textAlign: isType1 ? 'right' : 'left',
          maxWidth: '45%',
        }}
      >
        <h3
          ref={captionTitleRef}
          className="opacity-0 font-normal italic leading-[0.9] mb-4"
          style={{
            fontSize: 'clamp(2rem, 4vw, 4rem)',
            fontFamily: '"Instrument Sans", system-ui, sans-serif',
          }}
        >
          {title}
        </h3>
        <p
          ref={captionDescRef}
          className="opacity-0 text-sm font-semibold uppercase tracking-wider max-w-xs mb-4"
          style={{
            color: 'var(--text-secondary)',
            fontFamily: '"Instrument Sans", system-ui, sans-serif',
          }}
        >
          {description}
        </p>
        <div
          ref={captionTagsRef}
          className="opacity-0 flex gap-2 flex-wrap"
        >
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        {liveLink && (
          <a
            ref={liveLinkRef}
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-0 mt-4 text-sm font-medium link-underline"
            style={{
              color: 'var(--accent-teal)',
              fontFamily: '"Instrument Sans", system-ui, sans-serif',
            }}
          >
            View Live &rarr;
          </a>
        )}
      </figcaption>
    </section>
  );
}
