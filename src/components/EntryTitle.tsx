import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface EntryTitleProps {
  text?: string;
  fontSize?: string;
  fontWeight?: string;
  shadowBlur?: number;
  yOffsetFactor?: number;
  hueSpeed?: number;
}

export default function EntryTitle({
  text = 'Experience',
  fontSize = 'clamp(4rem, 12vw, 12rem)',
  fontWeight = '700',
  shadowBlur = 16,
  yOffsetFactor = 0.65,
}: EntryTitleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hueRotation = useRef({ value: 270 });

  useGSAP(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    function parseFontSize(size: string): number {
      const temp = document.createElement('span');
      temp.style.fontSize = size;
      temp.style.position = 'absolute';
      temp.style.visibility = 'hidden';
      container!.appendChild(temp);
      const px = parseFloat(getComputedStyle(temp).fontSize);
      container!.removeChild(temp);
      return px;
    }

    function draw(hue: number) {
      if (!ctx || !canvas) return;
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;
      ctx.clearRect(0, 0, w, h);

      const offset = h * yOffsetFactor;
      const gradient = ctx.createLinearGradient(
        cx - offset, cy - offset,
        cx + offset, cy + offset
      );
      gradient.addColorStop(0, `hsl(${hue}, 100%, 75%)`);
      gradient.addColorStop(0.5, `hsl(${hue + 30}, 100%, 85%)`);
      gradient.addColorStop(1, `hsl(${hue + 60}, 100%, 90%)`);

      ctx.fillStyle = gradient;
      ctx.shadowColor = `hsl(${hue}, 100%, 80%)`;
      ctx.shadowBlur = shadowBlur * dpr;

      const resolvedFontSize = parseFontSize(fontSize) * dpr;
      ctx.font = `${fontWeight} ${resolvedFontSize}px "Instrument Sans", system-ui, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, cx, cy);
    }

    function resizeCanvas() {
      if (!container || !canvas) return;
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      canvas.width = containerWidth * dpr;
      canvas.height = containerHeight * dpr;
      canvas.style.width = `${containerWidth}px`;
      canvas.style.height = `${containerHeight}px`;
      draw(hueRotation.current.value);
    }

    const hueTween = gsap.to(hueRotation.current, {
      value: '+=360',
      duration: 40,
      ease: 'none',
      repeat: -1,
    });

    const onTick = () => draw(hueRotation.current.value);
    gsap.ticker.add(onTick);

    resizeCanvas();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      gsap.ticker.remove(onTick);
      hueTween.kill();
    };
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden flex justify-center items-center"
      style={{ height: 'clamp(8rem, 20vw, 20rem)' }}
      aria-label={text}
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
        }}
      />
    </div>
  );
}
