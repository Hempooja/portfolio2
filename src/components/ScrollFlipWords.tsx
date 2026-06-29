import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface Word {
  id: string;
  text: string;
}

interface ScrollFlipWordsProps {
  words: Word[];
  containerHeight?: string;
  flipDuration?: number;
  flipEase?: string;
  staggerDelay?: number;
  flipRepeatDelay?: number;
  characterColor?: string;
  backgroundColor?: string;
  fontSize?: string;
  fontFamily?: string;
}

export default function ScrollFlipWords({
  words,
  containerHeight = '300vh',
  flipDuration = 0.45,
  flipEase = 'sine.inOut',
  staggerDelay = 0.08,
  flipRepeatDelay = 0.02,
  characterColor = '#FFFFFF',
  backgroundColor = '#FFFCF5',
  fontSize = 'clamp(8rem, 30vw, 30rem)',
  fontFamily = '"Instrument Sans", system-ui, sans-serif',
}: ScrollFlipWordsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const charsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(() => {
    const container = containerRef.current;
    const chars = charsRef.current;
    if (!container || chars.length === 0) return;

    const totalChars = words.reduce((sum, w) => sum + w.text.length, 0);
    const totalStaggerDuration = (totalChars - 1) * staggerDelay;
    const baseDelay = flipDuration + totalStaggerDuration + flipRepeatDelay;

    function setupChar(
      char: HTMLSpanElement,
      wordIndex: number,
      charIndex: number
    ) {
      const isLastChar = charIndex === words[wordIndex].text.length - 1;
      const isLastWord = wordIndex === words.length - 1;
      const globalIndex = words.slice(0, wordIndex).reduce((s, w) => s + w.text.length, 0) + charIndex;
      const startTime = globalIndex * staggerDelay;

      const tweens: gsap.core.Tween[] = [];

      tweens.push(
        gsap.fromTo(
          char,
          { rotationX: 0 },
          {
            rotationX: -180,
            duration: flipDuration,
            ease: flipEase,
          }
        )
      );

      if (!isLastWord || !isLastChar) {
        tweens.push(
          gsap.fromTo(
            char,
            { rotationX: 180 },
            {
              rotationX: 0,
              duration: flipDuration,
              ease: flipEase,
              delay: baseDelay - flipDuration + startTime,
            }
          )
        );
      }

      return tweens;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,
        pin: wrapperRef.current,
      },
    });

    words.forEach((word, wordIndex) => {
      word.text.split('').forEach((_, charIndex) => {
        const globalIdx = words.slice(0, wordIndex).reduce((s, w) => s + w.text.length, 0) + charIndex;
        const char = chars[globalIdx];
        if (char) {
          const charTweens = setupChar(char, wordIndex, charIndex);
          charTweens.forEach((t) => tl.add(t, 0));
        }
      });
    });

    return () => {
      tl.kill();
    };
  }, { scope: containerRef });

  const baseWord = words[0]?.text || '';
  const totalChars = words.reduce((sum, w) => sum + w.text.length, 0);

  return (
    <div
      ref={containerRef}
      style={{ height: containerHeight, backgroundColor }}
    >
      <div
        ref={wrapperRef}
        className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center"
      >
        <div
          className="flex mx-[3vw]"
          style={{ perspective: '1000px' }}
        >
          {words.map((word) => (
            <div
              key={word.id}
              className="flex flex-row items-center will-change-transform"
              style={{ backfaceVisibility: 'hidden' }}
            >
              {baseWord.split('').map((_char, i) => {
                const wordIndex = words.findIndex((w) => w.id === word.id);
                const globalCharIndex = words
                  .slice(0, wordIndex)
                  .reduce((s, w) => s + w.text.length, 0) + i;
                return (
                  <span
                    key={`${word.id}-${i}`}
                    ref={(el) => {
                      if (el && globalCharIndex < totalChars) {
                        charsRef.current[globalCharIndex] = el;
                      }
                    }}
                    className="inline-block origin-center will-change-transform"
                    style={{
                      color: characterColor,
                      fontSize,
                      fontFamily,
                      lineHeight: 0.65,
                      letterSpacing: '-0.06em',
                      fontWeight: 400,
                      textTransform: 'uppercase' as const,
                    }}
                  >
                    {i < word.text.length ? word.text[i] : ''}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
