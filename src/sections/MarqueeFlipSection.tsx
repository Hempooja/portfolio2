import { useEffect, useState } from 'react';
import ScrollFlipWords from '../components/ScrollFlipWords';

const WORDS = [
  { id: 'aws', text: 'AWS' },
  { id: 'devops', text: 'DEVOPS' },
  { id: 'cloud', text: 'CLOUD' },
  { id: 'docker', text: 'DOCKER' },
  { id: 'dialogflow', text: 'DIALOGFLOW' },
  { id: 'systems', text: 'SYSTEMS' },
];

export default function MarqueeFlipSection() {
  const [containerHeight, setContainerHeight] = useState('300vh');

  useEffect(() => {
    const mqlMobile = window.matchMedia('(max-width: 767px)');
    const mqlTablet = window.matchMedia('(min-width: 768px) and (max-width: 1023px)');

    function updateHeight() {
      if (mqlMobile.matches) {
        setContainerHeight('200vh');
      } else if (mqlTablet.matches) {
        setContainerHeight('250vh');
      } else {
        setContainerHeight('300vh');
      }
    }

    updateHeight();
    mqlMobile.addEventListener('change', updateHeight);
    mqlTablet.addEventListener('change', updateHeight);

    return () => {
      mqlMobile.removeEventListener('change', updateHeight);
      mqlTablet.removeEventListener('change', updateHeight);
    };
  }, []);

  return (
    <ScrollFlipWords
      words={WORDS}
      containerHeight={containerHeight}
      flipDuration={0.45}
      flipEase="sine.inOut"
      staggerDelay={0.08}
      flipRepeatDelay={0.02}
      characterColor="#F5F1EA"
      backgroundColor="#FFFCF5"
      fontSize="clamp(8rem, 30vw, 30rem)"
      fontFamily='"Instrument Sans", system-ui, sans-serif'
    />
  );
}
