import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Radio, Tv, Globe, BarChart, Users, LucideIcon, AreaChart, LineChart } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import AnimatedButton from '@/components/AnimatedButton';

interface ServiceItemProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  icon: React.ReactNode;
}

const serviceItems: ServiceItemProps[] = [
  {
    id: "radio",
    title: "Radio Advertising",
    description: "Reach targeted audiences through strategic radio ad placements across local, regional, and national stations with compelling audio content that resonates with listeners.",
    features: [
      "Custom script development and voice talent selection",
      "Strategic time slot placement for maximum audience reach",
      "Demographic and geographic targeting",
      "Performance tracking and optimization",
      "Multiple station packages and network deals"
    ],
    benefits: [
      "Enhance brand recognition through audio identity",
      "Reach listeners during key commuting hours",
      "Target specific demographics with station selection",
      "Cost-effective reach compared to some visual mediums",
      "Quick production turnaround for time-sensitive campaigns"
    ],
    icon: <Radio className="h-12 w-12 text-media-blue" />
  },
  {
    id: "television",
    title: "Television Commercials",
    description: "Create high-impact television commercials and secure optimal placements to maximize visibility and brand recognition with visually compelling storytelling.",
    features: [
      "Full-service production from concept to final delivery",
      "Strategic channel and program placement",
      "Prime time and special event advertising opportunities",
      "Local, regional, and national broadcast options",
      "Detailed performance analytics and viewership data"
    ],
    benefits: [
      "Combine visual, audio, and motion for maximum impact",
      "Build trust and credibility with professional production",
      "Reach broad or highly targeted audiences",
      "Create emotional connections with compelling storytelling",
      "Leverage the prestige of television advertising"
    ],
    icon: <Tv className="h-12 w-12 text-media-green" />
  },
  {
    id: "digital",
    title: "Digital Media Publications",
    description: "Comprehensive digital advertising solutions across social platforms, search engines, and premium websites for maximum engagement and measurable results.",
    features: [
      "Social media advertising (Facebook, Instagram, LinkedIn, TikTok)",
      "Google Ads and search engine marketing",
      "Programmatic display advertising",
      "Native content and sponsored articles",
      "Video advertising on YouTube and streaming platforms"
    ],
    benefits: [
      "Precise audience targeting based on demographics and interests",
      "Real-time campaign optimization for maximum ROI",
      "Detailed analytics and performance reporting",
      "Remarketing capabilities to re-engage potential customers",
      "Scalable budget options for businesses of all sizes"
    ],
    icon: <Globe className="h-12 w-12 text-media-blue" />
  },
  {
    id: "consulting",
    title: "Media Consulting",
    description: "Expert consultation services to help businesses develop comprehensive media strategies aligned with their marketing objectives and budget constraints.",
    features: [
      "Media mix optimization and budget allocation",
      "Competitive analysis and market positioning",
      "Campaign planning and scheduling",
      "Vendor negotiation and rate optimization",
      "Cross-platform integration and message consistency"
    ],
    benefits: [
      "Leverage industry expertise for strategic decision-making",
      "Optimize advertising budget allocation for maximum impact",
      "Develop cohesive cross-channel messaging strategies",
      "Stay ahead of industry trends and emerging platforms",
      "Access preferential rates through our network relationships"
    ],
    icon: <Users className="h-12 w-12 text-media-green" />
  },
  {
    id: "analytics",
    title: "Performance Analytics",
    description: "Comprehensive analysis and reporting on campaign performance across all media channels with actionable insights for continuous improvement.",
    features: [
      "Real-time dashboard for campaign monitoring",
      "Cross-channel attribution modeling",
      "Audience engagement metrics and analysis",
      "Conversion tracking and ROI calculation",
      "Competitive benchmarking and industry comparisons"
    ],
    benefits: [
      "Make data-driven decisions for campaign optimization",
      "Understand true campaign impact on business objectives",
      "Identify highest-performing channels and content",
      "Refine targeting strategies based on audience insights",
      "Demonstrate clear ROI to stakeholders"
    ],
    icon: <BarChart className="h-12 w-12 text-media-blue" />
  }
];

const ServiceContent = ({ service }: { service: ServiceItemProps }) => {
  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact-form-section');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id={service.id} className="py-16 scroll-mt-20">
      <div className="grid md:grid-cols-5 gap-10 items-start">
        <div className="md:col-span-2">
          <Card className="p-8 glass-card border-none h-full animate-fade-in">
            <div className="mb-6">{service.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-muted-foreground mb-6">{service.description}</p>
            <AnimatedButton 
              variant={service.id === "television" || service.id === "consulting" ? "secondary" : "primary"} 
              icon
              onClick={scrollToContactForm}
            >
              Get Started
            </AnimatedButton>
          </Card>
        </div>
        
        <div className="md:col-span-3 space-y-6">
          <Card className="p-8 glass-card border-none animate-fade-in animate-delay-100">
            <h4 className="text-xl font-semibold mb-4">Key Features</h4>
            <ul className="space-y-3">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-media-blue/10 flex items-center justify-center mt-0.5 mr-3">
                    <div className="h-2 w-2 rounded-full bg-media-blue"></div>
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
          
          <Card className="p-8 glass-card border-none animate-fade-in animate-delay-200">
            <h4 className="text-xl font-semibold mb-4">Benefits</h4>
            <ul className="space-y-3">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-media-green/10 flex items-center justify-center mt-0.5 mr-3">
                    <div className="h-2 w-2 rounded-full bg-media-green"></div>
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Handle hash navigation
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    }
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-background">
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-media-lightBlue/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge variant="outline" className="mb-4 px-3 py-1 border-media-blue text-media-blue bg-media-lightBlue/30">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Strategic Media Solutions for Maximum Impact
            </h1>
            <p className="text-xl text-muted-foreground">
              We provide comprehensive advertising solutions across radio, television, and digital platforms 
              to amplify your brand's message and drive meaningful results.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {serviceItems.map((service, index) => (
              <a 
                key={service.id} 
                href={`#${service.id}`}
                className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-white/50 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-3">{service.icon}</div>
                <span className="text-sm font-medium">{service.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          {serviceItems.map((service, index) => (
            <ServiceContent key={service.id} service={service} />
          ))}
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-media-lightBlue/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge variant="outline" className="mb-4 px-3 py-1 border-media-green text-media-green bg-media-green/10">
              Our Process
            </Badge>
            <h2 className="section-title">How We Work With You</h2>
            <p className="section-subtitle">
              Our streamlined process ensures we develop and execute media strategies 
              that align perfectly with your business objectives.
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Process line */}
            <div className="absolute top-0 bottom-0 left-[50%] w-0.5 bg-media-blue/20 hidden md:block"></div>
            
            {/* Process steps */}
            <div className="space-y-16">
              {[
                {
                  title: "Discovery & Strategy",
                  description: "We begin by understanding your business, goals, target audience, and competitive landscape to develop a tailored media strategy.",
                  icon: <Users className="h-8 w-8 text-white" />
                },
                {
                  title: "Media Planning",
                  description: "Our team creates a comprehensive media plan with optimal channel selection, budget allocation, and scheduling for maximum impact.",
                  icon: <AreaChart className="h-8 w-8 text-white" />
                },
                {
                  title: "Creative Development",
                  description: "We create compelling content for your selected media channels, ensuring a consistent brand message that resonates with your audience.",
                  icon: <Tv className="h-8 w-8 text-white" />
                },
                {
                  title: "Implementation & Optimization",
                  description: "We launch your campaigns and continuously monitor performance, making data-driven optimizations to maximize results.",
                  icon: <LineChart className="h-8 w-8 text-white" />
                }
              ].map((step, index) => (
                <div key={step.title} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-6 md:gap-10`}>
                  <div className="md:w-1/2 relative animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    {/* Step number with icon - visible on mobile and desktop */}
                    <div className="absolute -top-4 -left-4 md:static md:mb-4 z-10 flex items-center justify-center h-12 w-12 rounded-full bg-media-blue text-white font-bold shadow-lg">
                      {step.icon}
                    </div>
                    
                    <Card className={`p-6 md:p-8 h-full border-none glass-card ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                      <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </Card>
                  </div>
                  
                  {/* Center dot on the line - visible only on desktop */}
                  <div className="hidden md:flex items-center justify-center h-10 w-10 rounded-full bg-white border-4 border-media-blue/30 z-10"></div>
                  
                  {/* This empty div maintains the layout for alternating sides */}
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section id="contact-form-section">
        <ContactForm />
      </section>
    </div>
  );
};

export default Services;
