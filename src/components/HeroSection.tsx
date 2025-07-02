import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = ['Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'UI/UX Design'];
  const fullName = 'BHANU SHARMA';
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseBetweenRoles = 2000;

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentRole = roles[currentRoleIndex];

    if (!isDeleting && displayedRole.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseBetweenRoles);
    } else if (isDeleting && displayedRole === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    } else if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedRole(currentRole.substring(0, displayedRole.length - 1));
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setDisplayedRole(currentRole.substring(0, displayedRole.length + 1));
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [currentRoleIndex, displayedRole, isDeleting, roles]);


  const handleScrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-slide-in min-h-[1.2em]">
            {fullName}
          </h1>

          <div className="h-8 mb-4">
            <p className="text-xl md:text-2xl text-muted-foreground transition-all duration-500 ease-in-out transform min-h-[2rem]">
              {displayedRole}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional, and user-friendly applications
            using modern web technologies. I love turning ideas into reality through code.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          {/* 👇 Button scrolls to #projects */}
          <Button
            size="lg"
            onClick={handleScrollToProjects}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            View My Work
          </Button>

          <a
            href="https://drive.google.com/file/d/1Xm__hpqtAmrs9p2Gf0AHCewd1NmWr1MK/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="outline">
              Download Resume
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
