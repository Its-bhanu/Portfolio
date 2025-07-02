
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { PortfolioSidebar } from '@/components/PortfolioSidebar';
import { ThemeProvider } from '@/components/ThemeProvider';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { TechStackSection } from '@/components/TechStackSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <PortfolioSidebar />
          <main className="flex-1 overflow-auto">
            <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40 p-4">
              <SidebarTrigger />
            </div>
            
            <div className="scroll-smooth">
              <HeroSection />
              <AboutSection />
              <TechStackSection />
              <ExperienceSection />
              <ProjectsSection />
            </div>
            
            <Footer />
          </main>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default Index;
