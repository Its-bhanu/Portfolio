
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    title: 'Dmatics Technology',
    company: 'Frontend Development',
    period: 'May 2024 - June 2024',
    location: 'Remote',
    description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting robust solutions.',
    technologies: ['Html', 'Css', 'Js', 'React Js']
  },
   {
    title: 'Kota Super Thermal Power Station',
    company: 'Energy Generation and Management',
    period: 'May 2024 - June 2024',
    location: 'Kota, Rajasthan',
    description: 'Visiting or studying a power station like KSTPS (Kota Super Thermal Power Station) offers valuable real-world insights into electrical and mechanical engineering, energy management, and environmental sciences.',
    technologies: [  'Energy Management', 'Environmental Sciences']
  },
  {
    title: 'HackTech Fest',
    company: 'Thapar Innovation Hackathon',
    period: '2025',
    location: 'Remote',
    description: 'Developed a full-stack agriculture-based web application.',
    technologies: ['React.js', 'Express.js', 'MongoDB', 'stripe']
  },
  {
    title: 'Code Alpha Pvt Ltd',
    company: 'Full Stack Developer',
    period: ' June 2025 - July 2025',
    location: 'Remote',
    description: 'Created responsive web interfaces and collaborated with designers to deliver pixel-perfect implementations for various client projects.',
    technologies: ['React', 'Express.Js', 'JavaScript', 'mongoDB', 'Tailwind CSS']
  },
 
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground">
            My professional journey and growth as a developer
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <CardTitle className="text-xl">{exp.title}</CardTitle>
                  <div className="text-sm text-muted-foreground">
                    {exp.period}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{exp.company}</span>
                  <span className="hidden md:inline">•</span>
                  <span>{exp.location}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
