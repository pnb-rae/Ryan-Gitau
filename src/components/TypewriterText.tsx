import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  texts: string[];
  speed?: number;
  pause?: number;
  className?: string;
  staticOnMobile?: boolean;
}

export default function TypewriterText({ 
  texts, 
  speed = 100, 
  pause = 2000, 
  className = '', 
  staticOnMobile = true,
}: TypewriterTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (staticOnMobile && isMobile) {
      setCurrentText(texts[0] || '');
      return;
    }

    const fullText = texts[currentTextIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        } else {
          // Start deleting after pause
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(fullText.substring(0, currentText.length - 1));
        } else {
          // Move to next text
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timer);
  }, [currentText, currentTextIndex, isDeleting, texts, speed, pause, staticOnMobile, isMobile]);

  return (
    <span className={`${className} relative`}>
      {staticOnMobile && isMobile ? (texts[0] || '') : currentText}
      {!(staticOnMobile && isMobile) && <span className="animate-pulse text-primary">|</span>}
    </span>
  );
}