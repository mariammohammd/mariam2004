import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the form data to a backend service
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mariammohammd@std.mans.edu.eg',
      href: 'mailto:mariammohammd@std.mans.edu.eg',
      color: 'text-primary'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+20 109 188 0667',
      href: 'tel:+201091880667',
      color: 'text-secondary'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'mariam-maher-793311320',
      href: 'https://linkedin.com/in/mariam-maher-793311320',
      color: 'text-accent'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'mariammohammd',
      href: 'https://github.com/mariammohammd',
      color: 'text-primary'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mansoura, Egypt',
      href: null,
      color: 'text-secondary'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="section-divider mx-auto w-24 mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on exciting biotechnology research or data analysis projects? 
            I'd love to hear from you and discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold font-poppins mb-6">
              Contact Information
            </h3>
            
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="card-gradient card-hover border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center`}>
                      <info.icon className={`h-5 w-5 text-primary-foreground`} />
                    </div>
                    
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground font-medium">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className={`${info.color} hover:underline font-medium transition-colors`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Links */}
            <Card className="card-gradient border-primary/20 mt-8">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-4">Quick Connect</h4>
                <div className="flex gap-3">
                  <Button size="sm" className="btn-primary flex-1">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-poppins">
                  Send Me a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="bg-muted border-border"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-muted border-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="bg-muted border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or inquiry..."
                      rows={6}
                      required
                      className="bg-muted border-border resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="btn-primary w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <Card className="card-gradient border-accent/20 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold font-poppins mb-4">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether you're looking for data analysis expertise, biotechnology consultation, 
                or collaborative research opportunities, I'm excited to explore how we can work 
                together to create meaningful impact in the intersection of biology and data science.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <span>• Available for freelance projects</span>
                <span>• Open to research collaborations</span>
                <span>• Consulting services available</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;