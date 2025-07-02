
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground">
            Get to know more about my journey and passion for development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="p-6 border border-border/50">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4">My Story</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                 <h1 className='text-white bold font-semibold'>Education:</h1>
                 <span> Bachelor Of Technology In Information Technology from  <strong>Rajasthan Technical University (Kota)</strong> With Strong Foundation</span>
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a MERN stack developer with experience creating beautiful, functional, and user-centered digital experiences. I combine technical expertise with a deep understanding of design principles to build products that look great and work well
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border border-border/50">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4">What I Do</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    Frontend Development (React Js, TypeScript , HTML ,Css, JS)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    Backend Development (Node.js, Express Js, APIs)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    Database Design (PostgreSQL, MongoDB , MySql)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    Cloud Deployment ( Vercel, Render)
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center lg:text-left">
            <div className="w-80 h-80 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-500 mb-8">
              <img 
                src="bhanu.jpg" 
                alt="Bhanu Sharma"
                className="w-full h-full object-cover hover:scale-150 "
              />
             
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Let's Work Together</h3>
              <p className="text-muted-foreground">
                I'm always interested in any new opportunities and exciting projects. 
                Let's connect and discuss how we can bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="mailto:bhanu772899sharma@gmail.com?subject=Let's%20Connect&body=Hi%20Bhanu%2C%20I%20would%20like%20to%20talk%20about..."
                target='_blank'
                 rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Contact Me
                </Button></a>
               <a
               href='https://drive.google.com/file/d/1Xm__hpqtAmrs9p2Gf0AHCewd1NmWr1MK/view?usp=sharing'
               download
               target='_blank'
      
               >
                <Button variant="outline">
                  Download Resume
                </Button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
