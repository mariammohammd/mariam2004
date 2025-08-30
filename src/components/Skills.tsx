import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, FlaskConical, Code, Database } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Data Analysis',
      icon: BarChart3,
      color: 'text-primary',
      skills: [
        { name: 'Excel', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'SQL', level: 80 },
        { name: 'Power BI', level: 85 },
        { name: 'Tableau', level: 75 }
      ]
    },
    {
      title: 'Biotechnology',
      icon: FlaskConical,
      color: 'text-secondary',
      skills: [
        { name: 'DNA Isolation', level: 95 },
        { name: 'PCR Testing', level: 90 },
        { name: 'Genetic Analysis', level: 85 },
        { name: 'Mutation Analysis', level: 80 },
        { name: 'Plant Genetics', level: 90 }
      ]
    },
    {
      title: 'Programming',
      icon: Code,
      color: 'text-accent',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'R', level: 70 },
        { name: 'MATLAB', level: 65 },
        { name: 'JavaScript', level: 60 }
      ]
    },
    {
      title: 'Bioinformatics',
      icon: Database,
      color: 'text-primary',
      skills: [
        { name: 'Sequence Analysis', level: 80 },
        { name: 'Phylogenetics', level: 75 },
        { name: 'Genomics', level: 85 },
        { name: 'Statistical Analysis', level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="section-divider mx-auto w-24 mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive blend of biotechnology expertise and modern data analysis capabilities, 
            bridging the gap between traditional biological research and digital innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className="card-gradient card-hover border-border/50"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <category.icon className={`h-6 w-6 text-primary-foreground`} />
                </div>
                <CardTitle className="text-lg font-poppins">{category.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="skill-bar h-2">
                      <div 
                        className="skill-progress h-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.1)}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold font-poppins mb-8 text-primary">
            Core Competencies
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Research & Analysis</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>• Scientific Research Methodology</p>
                <p>• Statistical Data Analysis</p>
                <p>• Experimental Design</p>
                <p>• Literature Review</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Laboratory Skills</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>• Molecular Biology Techniques</p>
                <p>• Genetic Fingerprinting</p>
                <p>• Quality Control</p>
                <p>• Equipment Calibration</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Technical Tools</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>• Data Visualization</p>
                <p>• Database Management</p>
                <p>• Report Writing</p>
                <p>• Project Management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;