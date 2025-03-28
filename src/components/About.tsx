import React from "react";
import { useInView } from "@/lib/animations";
import { cn } from "@/lib/utils";

const About = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-24 bg-accent/50">
      <div
        ref={ref}
        className={cn(
          "section-container grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center opacity-0",
          isInView && "animate-fade-in"
        )}
      >
        <div className="order-2 md:order-1">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            About Me
          </span>
          
          <h2 className="section-title mb-6">
            A passionate full-stack developer 
          </h2>
          
          <p className="text-gray-600 mb-6">
            I'm a MERN stack developer with experience creating beautiful, functional, and user-centered digital experiences. I combine technical expertise with a deep understanding of design principles to build products that look great and work well.
          </p>
          
          <p className="text-gray-600 mb-8">
            When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or seeking inspiration in nature and art. I believe in continuous learning and pushing the boundaries of what's possible on the web.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Education</h3>
              <p className="text-gray-600">Bachelor Of Technology in Information Technology From<br />Rajasthan Technical University, Kota</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Experience</h3>
              <p className="text-gray-600">Full Stack Development<br />MERN Stack Specialist <br />Coding Enthusiast</p>
            </div>
          </div>
        </div>
        
        <div className="order-1 md:order-2 relative">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/5 to-primary/30 p-2 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl" />
            <div className="w-full h-full bg-white/50 rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/80" />
              <div className="absolute top-4 left-4 right-4 bottom-4 rounded-lg overflow-hidden">
                {/* Profile Image */}
                <img
                  src="/profile.png"  
                  alt="Your Name"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out rounded-lg overflow-hidden"
                />
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-400/20 rounded-full blur-xl" />
        </div>
      </div>
    </section>
  );
};

export default About;
