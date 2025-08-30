import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Data Analysis Track',
      company: 'DEPI (Digital Egypt Pioneers)',
      location: 'Egypt',
      period: '2024',
      type: 'Training Program',
      description: 'Comprehensive training in data analysis techniques, statistical methods, and data visualization tools. Developed proficiency in Excel, SQL, Python, Power BI, and Tableau.',
      skills: ['Python', 'SQL', 'Power BI', 'Tableau', 'Excel', 'Statistical Analysis'],
      color: 'bg-primary/10 border-primary/20'
    },
    {
      title: 'Plant DNA Extraction & Genetic Research',
      company: 'Sakha Agricultural Research Station',
      location: 'Sakha, Egypt',
      period: '2023',
      type: 'Research Internship',
      description: 'Hands-on experience in plant DNA isolation, PCR testing, mutation analysis, and genetic fingerprinting of plants. Conducted research on plant genetics and contributed to ongoing genetic studies.',
      skills: ['DNA Isolation', 'PCR Testing', 'Genetic Analysis', 'Mutation Analysis', 'Plant Genetics'],
      color: 'bg-secondary/10 border-secondary/20'
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="section-divider mx-auto w-24 mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building expertise through hands-on training and research experience in both 
            biotechnology and data analysis fields.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-primary rounded-full hidden md:block border-4 border-background"></div>
                  
                  <Card className={`ml-0 md:ml-20 card-gradient card-hover ${exp.color}`}>
                    <CardContent className="p-8">
                      <div className="space-y-4">
                        
                        {/* Header */}
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                          <div>
                            <h3 className="text-xl font-bold font-poppins text-foreground">
                              {exp.title}
                            </h3>
                            <div className="flex items-center gap-2 text-primary font-semibold">
                              <Building className="h-4 w-4" />
                              {exp.company}
                            </div>
                          </div>
                          
                          <div className="flex flex-col lg:items-end gap-2">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <MapPin className="h-4 w-4" />
                              {exp.location}
                            </div>
                          </div>
                        </div>

                        {/* Type Badge */}
                        <div className="inline-block">
                          <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                            {exp.type}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Skills */}
                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground">Key Skills & Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill) => (
                              <span 
                                key={skill}
                                className="px-3 py-1 bg-muted rounded-full text-sm font-medium border border-border"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;