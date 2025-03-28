
import React, { useState } from "react";
import { useInView } from "@/lib/animations";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "Online Pandit Booking App",
    category: "Web Development",
    description:
      "A web application for booking religious services with pandits. Features include user authentication, search filters, and payment integration and working on astrology chat with astrologers.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT","Razorpay","nodemailer"],
    image: "/panditBook.png",
    link: "https://book-pandit.vercel.app/"
  },
  {
    id: 2,
    title: "Chat App",
    category: "Web Development",
    description:
      "A real-time chat application that allows users to communicate instantly. Includes features like user authentication, private messaging, and group chats.",
    technologies: ["React", "Socket.io", "Express", "MongoDB", "JWT"],
    image: "/ChatApp.png",
    link: "https://chat-app-omega-seven-52.vercel.app/login"
  },
  {
    id: 3,
    title: "Age Calculator",
    category: "Web Development",
    description:
      "A simple age calculator that helps users determine their age based on date of birth.",
    technologies: ["Html", "css", "JavaScript"],
    image: "/agecalculator.png",
    link: "https://its-bhanu.github.io/agecalculate/"
  },
  // {
  //   id: 4,
  //   title: "Todo List",
  //   category: "Web Development",
  //   description:
  //     "A task management application that helps users organize their tasks. Features include task creation, completion tracking, and prioritization.",
  //   technologies: ["React", "Node.js", "MongoDB", "Tailwindcss"],
  //   image: "/Todoapp.png",
  //   link: ""
  // },
  {
    id: 5,
    title: "Currency Converter",
    category: "Web Development",
    description:
      "A currency conversion tool that provides up-to-date exchange rates for various currencies. Features include real-time rate updates and conversion history.",
    technologies: ["React", "API Integration", "JavaScript", "Tailwindcss"],
    image: "/Currency Convertor.png",
    link: "https://currencyconvertor-nine.vercel.app/"
  },
];

const categories = ["All", "Web Development"];

const Projects = () => {
  const { ref, isInView } = useInView();
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24">
      <div
        ref={ref}
        className={cn(
          "section-container opacity-0",
          isInView && "animate-fade-in"
        )}
      >
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Work
          </span>
          
          <h2 className="section-title">
            Featured Projects
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise in building modern digital experiences.
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={cn(
                "group glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md",
                activeProject === project.id && "ring-2 ring-primary"
              )}
              onClick={() => setActiveProject(project.id)}
            >
              <div className="aspect-video bg-gray-100 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span className="text-sm text-gray-500">{project.category}</span>
                  </div>
                  <div className="bg-primary/10 text-primary rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
