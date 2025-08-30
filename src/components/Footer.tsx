import { Linkedin, Github, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/mariam-maher-793311320',
      label: 'LinkedIn Profile'
    },
    {
      icon: Github,
      href: 'https://github.com/mariammohammd',
      label: 'GitHub Profile'
    },
    {
      icon: Mail,
      href: 'mailto:mariammohammd@std.mans.edu.eg',
      label: 'Email Contact'
    }
  ];

  const quickLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold font-poppins text-gradient">
              Mariam Mohamed
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Biotechnology Specialist & Data Analysis Expert combining scientific research 
              with modern data science to advance bioinformatics and create meaningful solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-poppins">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-poppins">Get In Touch</h3>
            <div className="space-y-3 text-muted-foreground">
              <div>
                <p className="font-medium text-foreground">Email</p>
                <a 
                  href="mailto:mariammohammd@std.mans.edu.eg"
                  className="hover:text-primary transition-colors"
                >
                  mariammohammd@std.mans.edu.eg
                </a>
              </div>
              <div>
                <p className="font-medium text-foreground">Phone</p>
                <a 
                  href="tel:+201091880667"
                  className="hover:text-primary transition-colors"
                >
                  +20 109 188 0667
                </a>
              </div>
              <div>
                <p className="font-medium text-foreground">Location</p>
                <p>Mansoura, Egypt</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © {currentYear} Mariam Mohamed Maher Hamed Baker. All rights reserved.
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for advancing biotechnology and data science</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;