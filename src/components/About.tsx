import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Dna, BarChart3, Microscope } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Academic Excellence',
      description: 'Graduated with Excellence from Mansoura University'
    },
    {
      icon: Dna,
      title: 'Genetics Expert',
      description: 'Specialized in genetic engineering and mutations'
    },
    {
      icon: BarChart3,
      title: 'Data Analysis',
      description: 'Strong analytical skills for bioinformatics research'
    },
    {
      icon: Microscope,
      title: 'Research Focus',
      description: 'Plant DNA isolation and genetic fingerprinting'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins mb-4">
            About <span className="text-gradient">Mariam</span>
          </h2>
          <div className="section-divider mx-auto w-24 mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Bio Content */}
          <div className="space-y-6 slide-up">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold font-poppins text-primary">
                Biotechnology Specialist & Data Analysis Expert
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Mariam is a dedicated Biotechnology graduate from the Agricultural Sciences Department 
                  at Mansoura University, where she graduated with Excellence. Her academic journey has 
                  been marked by a deep passion for understanding the intricate world of genetics and 
                  genetic engineering.
                </p>
                
                <p>
                  With specialized expertise in genetics, genetic engineering, plant DNA isolation, 
                  mutations, and bioinformatics, Mariam represents the new generation of scientists 
                  who seamlessly blend traditional biological research with cutting-edge data analysis 
                  techniques.
                </p>
                
                <p>
                  Her unique approach combines rigorous scientific methodology with advanced data 
                  analysis skills, making her research more accessible and applicable to real-world 
                  challenges. Mariam is passionate about advancing the field of bioinformatics and 
                  contributing to meaningful scientific discoveries.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="text-lg font-semibold text-primary mb-4">Research Interests</h4>
              <div className="flex flex-wrap gap-2">
                {['Genetics', 'Genetic Engineering', 'Plant DNA Isolation', 'Mutations', 'Bioinformatics', 'Data Analysis'].map((interest) => (
                  <span 
                    key={interest}
                    className="px-3 py-1 bg-card rounded-full text-sm font-medium border border-border"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="card-gradient card-hover border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto">
                    <highlight.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold font-poppins">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;