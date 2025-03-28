
import React from "react";
import { useSmoothScroll } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Hero = () => {
  const { scrollToElement } = useSmoothScroll();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="section-container flex flex-col items-center justify-center text-center relative z-10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-70 animate-float" />
          <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl opacity-70 animate-float animation-delay-500" />
        </div>

        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 opacity-0 animate-fade-in">
          Welcome to my portfolio
        </span>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6 opacity-0 animate-fade-in animation-delay-100">
          I'm <span className="text-gradient">Bhanu Sharma</span>
          <br />
          <span className="text-gray-900">Full Stack Developer</span>
        </h1>

        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in animation-delay-200">
          I create exceptional full-stack applications with a focus on 
          clean design and powerful functionality using modern web technologies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in animation-delay-300">
          <button
            className="px-8 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors font-medium"
            onClick={() => scrollToElement("contact")}
          >
            Get in Touch
          </button>

         <Link to="https://drive.google.com/file/d/127XNGQsMpFMff7sRZYBJ-jbuOHfTNw70/view?usp=sharing" className="px-8 py-3 rounded-lg bg-primary text-white hover:bg-blue-800 transition-colors font-medium " target="_blank"> Here is My Resume</Link>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in animation-delay-700">
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
