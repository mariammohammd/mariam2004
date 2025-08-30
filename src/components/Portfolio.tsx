import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, BarChart3, Database, FlaskConical } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Superstore Sales Analysis Dashboard',
      category: 'Data Analysis',
      description: 'Comprehensive analysis of retail sales data with interactive visualizations, identifying key trends, seasonal patterns, and performance metrics across different product categories and regions.',
      image: '/lovable-uploads/48037f10-1219-4746-9167-48bf85070d43.png',
      technologies: ['Power BI', 'Excel', 'Data Visualization', 'Statistical Analysis'],
      features: [
        'Interactive sales dashboard',
        'Regional performance analysis', 
        'Product category insights',
        'Time-series forecasting',
        'KPI tracking and monitoring'
      ],
      status: 'Completed',
      type: 'Data Analysis',
      icon: BarChart3
    }
  ];

  const upcomingProjects = [
    {
      title: 'Plant Genetic Diversity Analysis',
      category: 'Bioinformatics',
      description: 'Computational analysis of plant genetic sequences to study biodiversity patterns and evolutionary relationships using phylogenetic analysis.',
      technologies: ['Python', 'BioPython', 'MEGA', 'R'],
      type: 'Bioinformatics',
      icon: Database,
      status: 'Planning'
    },
    {
      title: 'DNA Mutation Detection Pipeline',
      category: 'Biotechnology',
      description: 'Automated pipeline for detecting and analyzing genetic mutations in plant samples using PCR and sequencing data.',
      technologies: ['Laboratory Protocols', 'PCR Analysis', 'Sequence Analysis'],
      type: 'Research',
      icon: FlaskConical,
      status: 'In Development'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins mb-4">
            Portfolio & <span className="text-gradient">Projects</span>
          </h2>
          <div className="section-divider mx-auto w-24 mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing completed projects and upcoming research initiatives that demonstrate 
            the intersection of biotechnology expertise and data analysis capabilities.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold font-poppins mb-8 text-center">
            Featured Project
          </h3>
          
          {projects.map((project, index) => (
            <Card key={index} className="card-gradient border-primary/20 overflow-hidden max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-0">
                
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover min-h-80 hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-success/20 text-success rounded-full text-sm font-medium">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <project.icon className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <span className="text-sm text-primary font-medium">{project.category}</span>
                      </div>
                      
                      <h4 className="text-2xl font-bold font-poppins mb-4">{project.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h5 className="font-semibold text-foreground mb-3">Key Features:</h5>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-muted-foreground text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className="font-semibold text-foreground mb-3">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 bg-muted rounded-full text-sm font-medium border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <Button className="btn-primary">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Project
                      </Button>
                      <Button variant="outline">
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Upcoming Projects */}
        <div>
          <h3 className="text-2xl font-semibold font-poppins mb-8 text-center">
            Upcoming Projects
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {upcomingProjects.map((project, index) => (
              <Card 
                key={index} 
                className="card-gradient card-hover border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <project.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <span className="px-3 py-1 bg-warning/20 text-warning rounded-full text-xs font-medium">
                      {project.status}
                    </span>
                  </div>
                  
                  <CardTitle className="text-lg font-poppins">{project.title}</CardTitle>
                  <p className="text-sm text-primary font-medium">{project.category}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div>
                    <h5 className="font-semibold text-foreground mb-2 text-sm">Technologies:</h5>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-muted rounded-md text-xs font-medium border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="card-gradient border-secondary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold font-poppins mb-4">
                Collaborate on Future Projects
              </h3>
              <p className="text-muted-foreground mb-6">
                Interested in collaborating on biotechnology research or data analysis projects? 
                Let's explore opportunities to work together and create impactful solutions.
              </p>
              <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                Discuss Collaboration
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;