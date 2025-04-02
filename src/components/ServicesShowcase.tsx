
import { Card, CardContent } from '@/components/ui/card';
import { Radio, Tv, Globe } from 'lucide-react';
import AnimatedButton from './AnimatedButton';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    title: "Radio Advertising",
    description: "Reach targeted audiences through strategic radio ad placements across local, regional, and national stations with engaging audio content.",
    icon: <Radio className="h-10 w-10 text-media-blue" />,
    features: ["Demographic targeting", "Prime time slots", "Script writing", "Voice talent"],
    link: "/services#radio"
  },
  {
    title: "Television Commercials",
    description: "Create high-impact television commercials and secure optimal placements to maximize visibility and brand recognition.",
    icon: <Tv className="h-10 w-10 text-media-green" />,
    features: ["HD production", "Strategic time slots", "Creative direction", "Performance tracking"],
    link: "/services#television"
  },
  {
    title: "Digital Media",
    description: "Comprehensive digital advertising solutions across social platforms, search engines, and premium websites for maximum engagement.",
    icon: <Globe className="h-10 w-10 text-media-blue" />,
    features: ["Social media ads", "Google Ads", "Content marketing", "Analytics & reporting"],
    link: "/services#digital"
  }
];

const ServicesShowcase = () => {
  return (
    <section id="main-content" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Premium Services</h2>
          <p className="section-subtitle">
            We help businesses amplify their presence through strategic media placements
            across radio, television, and digital platforms.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={service.title} className={`animate-fade-in animate-delay-${index * 100}`}>
              <Link to={service.link} className="block h-full">
                <Card className="h-full overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                  <CardContent className="p-6 md:p-8 flex flex-col h-full">
                    <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    
                    <div className="mt-auto">
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center">
                            <div className="h-1.5 w-1.5 rounded-full bg-media-green mr-2"></div>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="text-primary font-medium text-sm flex items-center">
                        Learn more 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services">
            <AnimatedButton variant="primary" icon>
              View All Services
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
