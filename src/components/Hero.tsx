import { Button } from '@/components/ui/button';
import { ChevronDown, Download, Mail, ArrowRight, Sparkles, Dna } from 'lucide-react';
import mariamProfile from '@/assets/mariam-profile.jpg';
import biotechBg from '@/assets/biotech-hero-bg.jpg';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 50%, rgba(15, 23, 42, 0.95) 100%), url(${biotechBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating DNA Helixes */}
        <div className="absolute top-20 left-10 w-12 h-12 opacity-20 animate-float">
          <Dna className="w-full h-full text-primary rotate-45" />
        </div>
        <div className="absolute top-60 right-20 w-8 h-8 opacity-15 animate-float" style={{ animationDelay: '1s' }}>
          <Dna className="w-full h-full text-secondary rotate-12" />
        </div>
        <div className="absolute bottom-40 left-1/4 w-6 h-6 opacity-25 animate-float" style={{ animationDelay: '2s' }}>
          <Dna className="w-full h-full text-accent -rotate-45" />
        </div>

        {/* Geometric Particles */}
        <div className="absolute top-32 right-1/4 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/2 left-20 w-1 h-1 bg-secondary rounded-full animate-pulse opacity-40" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 right-10 w-3 h-3 bg-accent rounded-full animate-pulse opacity-50" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/4 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-pulse opacity-30" style={{ animationDelay: '2.5s' }}></div>

        {/* Gradient Orbs */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-primary rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-radial from-secondary/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Enhanced Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 fade-in">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full text-primary font-medium text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Available for Projects</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-8xl font-bold font-poppins leading-tight">
                <span className="block text-foreground">Mariam</span>
                <span className="block text-gradient relative">
                  Mohamed
                  <div className="absolute -inset-1 bg-gradient-primary rounded-lg blur opacity-20"></div>
                </span>
                <span className="block text-2xl lg:text-4xl font-medium text-muted-foreground mt-4">
                  Maher Hamed Baker
                </span>
              </h1>
              
              {/* Enhanced Tagline */}
              <div className="space-y-4">
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 text-sm">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full font-medium">Biotechnology</span>
                  <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full font-medium">Genetics</span>
                  <span className="px-3 py-1 bg-accent/20 text-accent rounded-full font-medium">Data Analysis</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full font-medium">Bioinformatics</span>
                </div>
                
                <p className="text-xl lg:text-2xl text-muted-foreground font-medium max-w-2xl">
                  Combining scientific expertise in genetics and biotechnology with advanced data analysis 
                  skills to advance bioinformatics and make research more accessible.
                </p>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="btn-primary group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-hover to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform relative z-10" />
                <span className="relative z-10">Get In Touch</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform relative z-10" />
              </Button>
              
              <Button variant="outline" size="lg" className="group backdrop-blur-sm border-border/50 bg-background/10 hover:bg-background/20">
                <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                Download CV
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity rounded-lg"></div>
              </Button>
            </div>

            {/* Stats or Achievements */}
            <div className="grid grid-cols-3 gap-6 pt-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gradient">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gradient">5+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gradient">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Enhanced Profile Section */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glassmorphism Container */}
              <div className="relative p-8 backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/20">
                {/* Profile Image */}
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden relative group">
                  <img 
                    src={mariamProfile} 
                    alt="Mariam Mohamed Maher Hamed Baker - Biotechnology Specialist"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Floating Action */}
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="bg-background/90 backdrop-blur-sm rounded-lg p-3 border border-border/50">
                      <p className="text-sm font-medium text-foreground">Excellence Graduate</p>
                      <p className="text-xs text-muted-foreground">Mansoura University</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-primary rounded-full opacity-30 animate-pulse blur-sm"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary rounded-full opacity-40 animate-pulse delay-1000 blur-sm"></div>
              </div>

              {/* Interactive Elements */}
              <div className="absolute top-4 -left-8 bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-3 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium">Available</span>
                </div>
              </div>
              
              <div className="absolute bottom-8 -right-8 bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-3 animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-xs text-center">
                  <div className="font-bold text-primary">DNA Expert</div>
                  <div className="text-muted-foreground">Genetics Specialist</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs text-muted-foreground font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse"></div>
            </div>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;