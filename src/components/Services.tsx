import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, Database, FlaskConical, TrendingUp, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: 'Data Analysis & Visualization',
      description: 'Comprehensive data analysis services using advanced statistical methods and modern visualization tools to transform complex datasets into actionable insights.',
      features: [
        'Statistical Analysis & Modeling',
        'Interactive Dashboard Creation',
        'Data Cleaning & Processing',
        'Predictive Analytics',
        'Report Generation'
      ],
      tools: ['Python', 'R', 'Power BI', 'Tableau', 'Excel'],
      status: 'Available Now',
      statusColor: 'text-success bg-success/10'
    },
    {
      icon: Database,
      title: 'Bioinformatics Solutions',
      description: 'Specialized bioinformatics services combining biological expertise with computational tools to analyze genetic data and biological sequences.',
      features: [
        'Genomic Data Analysis',
        'Sequence Alignment & Analysis',
        'Phylogenetic Analysis',
        'Protein Structure Prediction',
        'Gene Expression Analysis'
      ],
      tools: ['Python', 'BioPython', 'R/Bioconductor', 'BLAST', 'MEGA'],
      status: 'Coming Soon',
      statusColor: 'text-warning bg-warning/10'
    },
    {
      icon: FlaskConical,
      title: 'Research Consultation',
      description: 'Expert consultation services for biotechnology research projects, experimental design, and scientific methodology.',
      features: [
        'Experimental Design',
        'Research Methodology',
        'Scientific Writing',
        'Literature Review',
        'Project Planning'
      ],
      tools: ['Laboratory Protocols', 'Scientific Methods', 'Quality Control'],
      status: 'Available Now',
      statusColor: 'text-success bg-success/10'
    },
    {
      icon: TrendingUp,
      title: 'Training & Workshops',
      description: 'Educational services and training programs in data analysis, biotechnology techniques, and bioinformatics tools.',
      features: [
        'Data Analysis Training',
        'Bioinformatics Workshops',
        'Scientific Software Training',
        'Research Skills Development',
        'Custom Training Programs'
      ],
      tools: ['Interactive Learning', 'Hands-on Practice', 'Real Projects'],
      status: 'Coming Soon',
      statusColor: 'text-warning bg-warning/10'
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins mb-4">
            Services & <span className="text-gradient">Offerings</span>
          </h2>
          <div className="section-divider mx-auto w-24 mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bridging the gap between biological research and data science through specialized 
            services that combine scientific expertise with modern analytical capabilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card-gradient card-hover border-border/50 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${service.statusColor}`}>
                    {service.status}
                  </span>
                </div>
                
                <CardTitle className="text-xl font-poppins group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-muted-foreground">
                        <ArrowRight className="h-3 w-3 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Tools & Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.tools.map((tool) => (
                      <span 
                        key={tool}
                        className="px-2 py-1 bg-muted rounded-md text-xs font-medium border border-border"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-4">
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    disabled={service.status === 'Coming Soon'}
                  >
                    {service.status === 'Coming Soon' ? 'Coming Soon' : 'Learn More'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="card-gradient border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold font-poppins mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how we can work together to bring your research and data analysis 
                projects to life with cutting-edge biotechnology and data science expertise.
              </p>
              <Button size="lg" className="btn-primary">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;