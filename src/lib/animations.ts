
import { useEffect, useState, useRef } from "react";

// Hook to animate elements when they enter the viewport
export function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return { ref, isInView };
}

// Hook to animate elements on scroll
export function useScrollAnimation(threshold = 0.1) {
  const [elements, setElements] = useState<Element[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
      }
    );

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    setElements(Array.from(animatedElements));

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, [threshold]);

  return elements;
}

// Hook for smooth scroll to element
export function useSmoothScroll() {
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return { scrollToElement };
}
