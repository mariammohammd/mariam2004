import { Button } from '@/components/ui/button';
import { ChevronDown, Download, Mail } from 'lucide-react';
import mariamProfile from '@/assets/mariam-profile.jpg';
import biotechBg from '@/assets/biotech-hero-bg.jpg';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url(${biotechBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold font-poppins">
                <span className="text-foreground">Mariam Mohamed</span>
                <br />
                <span className="text-gradient">Maher Hamed Baker</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
                Biotechnology Specialist | Genetics & Data Analysis | Bioinformatics Enthusiast
              </p>
              
              <p className="text-lg text-muted-foreground max-w-2xl">
                Combining scientific expertise in genetics and biotechnology with advanced data analysis 
                skills to advance bioinformatics and make research more accessible and applicable.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="btn-primary group">
                <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden hero-glow float">
                <img 
                  src={mariamProfile} 
                  alt="Mariam Mohamed Maher Hamed Baker - Biotechnology Specialist"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-secondary rounded-full opacity-30 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </div>
      </div>

      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-secondary rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-accent rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-primary rounded-full animate-pulse delay-1500"></div>
      </div>
    </section>
  );
};

export default Hero;