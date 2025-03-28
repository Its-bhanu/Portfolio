
import React from "react";
import { useInView } from "@/lib/animations";
import { cn } from "@/lib/utils";

// Skills data for Bhanu Sharma
const skillsData = {
  categories: [
    {
      name: "Frontend",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 80 },
        { name: "Responsive Design", level: 80 },
        { name: "Bootstrap/Tailwind", level: 80 },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 80 },
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "PHP (Basics)", level: 55 },
      ],
    },
    {
      name: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 80 },
        { name: "C++", level: 75 },
        { name: "REST APIs", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Deployment", level: 75 },
      ],
    },
  ],
};

const Skills = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="skills" className="py-24 bg-accent/50">
      <div
        ref={ref}
        className={cn(
          "section-container opacity-0",
          isInView && "animate-fade-in"
        )}
      >
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Expertise
          </span>
          
          <h2 className="section-title">
            Skills & Proficiencies
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of my technical skills and proficiencies that I've acquired throughout my career.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.categories.map((category, categoryIndex) => (
            <div
              key={category.name}
              className={cn(
                "glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-md opacity-0",
                isInView && "animate-fade-in",
                categoryIndex === 0 ? "animation-delay-100" : 
                categoryIndex === 1 ? "animation-delay-300" : 
                "animation-delay-500"
              )}
            >
              <h3 className="text-xl font-semibold mb-6 text-center">
                {category.name}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={cn(
                          "h-full bg-primary transition-all duration-1000 ease-out rounded-full transform-gpu",
                          isInView ? "w-full" : "w-0"
                        )}
                        style={{
                          width: `${skill.level}%`,
                          transitionDelay: `${100 + index * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="glass-card rounded-xl p-8 max-w-3xl text-center">
            <h3 className="text-xl font-semibold mb-4">Additional Experience</h3>
            <p className="text-gray-600 mb-6">
              Beyond the core technical skills, I also have experience with full stack development, performance optimization, accessibility standards, and cross-browser compatibility.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {["Full Stack Development",  " Competative programming in C++", "MySQL", "PHP(Basics)", "REST API", "Responsive Design", "Performance Optimization","Devops","Docker"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
