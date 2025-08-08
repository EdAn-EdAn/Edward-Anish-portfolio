import { useEffect, useCallback } from 'react';

export const useScrollAnimation = () => {
  const handleScroll = useCallback(() => {
    const fadeElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .section-reveal');
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    fadeElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Show element when scrolling down
      if (rect.top <= windowHeight * 0.85 && rect.bottom >= 0) {
        element.classList.add('visible');
      }
      // Hide element when scrolling up (reverse transition)
      else if (rect.top > windowHeight * 0.9 || rect.bottom < -100) {
        element.classList.remove('visible');
      }
    });

    // Parallax effect
    parallaxElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const speed = parseFloat(element.getAttribute('data-speed') || '0.5');
      const yPos = -(rect.top * speed);
      
      (element as HTMLElement).style.setProperty('--parallax-y', `${yPos}px`);
    });
  }, []);

  useEffect(() => {
    // Initial check
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return null;
};