
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const techCategories = [
  {
    title: 'Frontend',
    color: 'bg-blue-500',
    technologies: [
      'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 
      'HTML', 'CSS', 'JavaScript', 'shadcn ui'
    ]
  },
  {
    title: 'Backend',
    color: 'bg-green-500',
    technologies: [
      'Node.js', 'Express.js', 'PostgreSQL', 
      'MongoDB',  'REST APIs', 'Socket.io'
    ]
  },
  {
    title: 'Tools & DevOps',
    color: 'bg-purple-500',
    technologies: [
      'Git', 'Docker', 'Firebase', 'Vercel', 
      , 'Render', 'Vite',"cloudinary"
    ]
  },
  {
    title: ' Other Tech Stack And languages',
    color: 'bg-orange-500',
    technologies: [
      'C++', 'c', 'Razorpay', 'Nodemailer', 'JWt', 
      
    ]
  }
];

export function TechStackSection() {
  return (
    <section id="tech-stack" className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${category.color}`} />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
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
