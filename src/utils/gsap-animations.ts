// GSAP Animation Utilities for Cleanstar Detailing
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize GSAP animations
export function initGSAP() {
  // Fade in animations for sections
  gsap.utils.toArray('.animate-fade-in').forEach((element: any) => {
    gsap.fromTo(element, 
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Slide in from left
  gsap.utils.toArray('.animate-slide-left').forEach((element: any) => {
    gsap.fromTo(element, 
      {
        opacity: 0,
        x: -100
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Slide in from right
  gsap.utils.toArray('.animate-slide-right').forEach((element: any) => {
    gsap.fromTo(element, 
      {
        opacity: 0,
        x: 100
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Scale animations
  gsap.utils.toArray('.animate-scale').forEach((element: any) => {
    gsap.fromTo(element, 
      {
        opacity: 0,
        scale: 0.8
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Stagger animations for lists
  gsap.utils.toArray('.animate-stagger').forEach((container: any) => {
    const items = container.querySelectorAll('.stagger-item');
    gsap.fromTo(items, 
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });
}

// Counter animation function
export function animateCounter(elementId: string, endValue: number, duration: number = 2) {
  const element = document.getElementById(elementId);
  if (!element) return;

  const obj = { count: 0 };
  gsap.to(obj, {
    count: endValue,
    duration: duration,
    ease: "power2.out",
    onUpdate: () => {
      element.textContent = Math.ceil(obj.count).toString();
    },
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      once: true
    }
  });
}

// Parallax effect
export function initParallax() {
  gsap.utils.toArray('.parallax').forEach((element: any) => {
    gsap.to(element, {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  });
}

// Floating animation
export function initFloatingAnimation() {
  gsap.utils.toArray('.floating').forEach((element: any) => {
    gsap.to(element, {
      y: -20,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    });
  });
}

// Navbar background animation
export function initNavbarAnimation() {
  const navbar = document.querySelector('header nav');
  if (!navbar) return;

  ScrollTrigger.create({
    start: "top -80",
    end: 99999,
    toggleClass: {className: "scrolled", targets: navbar}
  });
}

// Text reveal animation
export function initTextReveal() {
  gsap.utils.toArray('.text-reveal').forEach((element: any) => {
    const text = element.textContent;
    element.innerHTML = text.split('').map((char: string) => 
      char === ' ' ? ' ' : `<span style="display: inline-block; opacity: 0; transform: translateY(50px)">${char}</span>`
    ).join('');
    
    const spans = element.querySelectorAll('span');
    gsap.to(spans, {
      opacity: 1,
      y: 0,
      duration: 0.05,
      stagger: 0.02,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });
  });
}
