import { useState, useEffect } from 'react';

export function useTypewriter(texts: string[], options = {
  typingSpeed: 100,
  deletingSpeed: 50,
  pauseDuration: 1500
}) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      if (displayText.length < texts[currentIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(texts[currentIndex].slice(0, displayText.length + 1));
        }, options.typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, options.pauseDuration);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, options.deletingSpeed);
      } else {
        setCurrentIndex((current) => (current + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentIndex, texts, options]);

  return {
    text: displayText,
    isTyping,
    currentWord: texts[currentIndex]
  };
}