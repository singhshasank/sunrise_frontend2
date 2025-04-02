import { useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedButton from '@/components/AnimatedButton';
import ContactForm from '@/components/ContactForm';
import { 
  BriefcaseBusiness, 
  GraduationCap, 
  Users, 
  ArrowRight, 
  MoveUpRight, 
  CheckCircle,
  Monitor,
  Radio,
  Tv,
  ChartBar
} from 'lucide-react';

interface JobPosting {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  posted: string;
}

const jobPostings: JobPosting[] = [];

interface CareerPathCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  paths: {
    title: string;
    roles: string[];
  }[];
}

const careerPaths: CareerPathCard[] = [
  {
    title: "Media Strategy",
    description: "Develop comprehensive media strategies for clients across all platforms.",
    icon: <BriefcaseBusiness className="h-8 w-8 text-media-blue" />,
    paths: [
      {
        title: "Strategy & Planning",
        roles: [
          "Junior Media Planner",
          "Media Planner",
          "Senior Media Planner",
          "Media Strategy Director"
        ]
      },
      {
        title: "Account Management",
        roles: [
          "Account Coordinator",
          "Account Executive",
          "Senior Account Executive",
          "Account Director"
        ]
      }
    ]
  },
  {
    title: "Creative Services",
    description: "Create compelling content for radio, television, and digital platforms.",
    icon: <Monitor className="h-8 w-8 text-media-green" />,
    paths: [
      {
        title: "Content Creation",
        roles: [
          "Copywriter",
          "Creative Designer",
          "Production Coordinator",
          "Creative Director"
        ]
      },
      {
        title: "Production",
        roles: [
          "Production Assistant",
          "Producer",
          "Senior Producer",
          "Executive Producer"
        ]
      }
    ]
  },
  {
    title: "Channel Specialization",
    description: "Build expertise in specific media channels and platforms.",
    icon: <Radio className="h-8 w-8 text-media-blue" />,
    paths: [
      {
        title: "Radio & Audio",
        roles: [
          "Audio Specialist",
          "Radio Media Buyer",
          "Audio Content Producer",
          "Audio Strategy Director"
        ]
      },
      {
        title: "Television & Video",
        roles: [
          "Video Specialist",
          "TV Media Buyer",
          "Video Producer",
          "Broadcast Director"
        ]
      },
      {
        title: "Digital Media",
        roles: [
          "Digital Media Specialist",
          "Programmatic Buyer",
          "Digital Campaign Manager",
          "Digital Strategy Director"
        ]
      }
    ]
  },
  {
    title: "Analytics & Insights",
    description: "Transform data into actionable insights that drive campaign performance.",
    icon: <ChartBar className="h-8 w-8 text-media-green" />,
    paths: [
      {
        title: "Performance Analysis",
        roles: [
          "Analytics Associate",
          "Media Analyst",
          "Senior Analyst",
          "Analytics Director"
        ]
      },
      {
        title: "Research & Insights",
        roles: [
          "Research Associate",
          "Market Research Analyst",
          "Consumer Insights Manager",
          "Research Director"
        ]
      }
    ]
  }
];

const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const noOpeningsMessage = (
    <Card className="p-6 hover:shadow-md transition-shadow animate-fade-in">
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <p className="text-muted-foreground">No current openings available.</p>
        <p className="mt-2">Please check back later or submit a general application.</p>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen pt-20 bg-background">
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-media-lightBlue/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge variant="outline" className="mb-4 px-3 py-1 border-media-blue text-media-blue bg-media-lightBlue/30">
              Careers
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Build Your Future in Media
            </h1>
            <p className="text-xl text-muted-foreground">
              Join our team of innovative media professionals and help shape the future of
              advertising across radio, television, and digital platforms.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 text-center glass-card border-none animate-fade-in">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-media-blue/10 mb-4">
                <BriefcaseBusiness className="h-8 w-8 text-media-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovative Culture</h3>
              <p className="text-muted-foreground">
                Join a collaborative team that values creativity, innovation, and excellence in everything we do.
              </p>
            </Card>
            
            <Card className="p-8 text-center glass-card border-none animate-fade-in animate-delay-100">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-media-green/10 mb-4">
                <GraduationCap className="h-8 w-8 text-media-green" />
              </div>
              <h3 className="text-xl font-bold mb-2">Professional Growth</h3>
              <p className="text-muted-foreground">
                Access continuous learning opportunities, mentorship, and clear career advancement paths.
              </p>
            </Card>
            
            <Card className="p-8 text-center glass-card border-none animate-fade-in animate-delay-200">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-media-blue/10 mb-4">
                <Users className="h-8 w-8 text-media-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Impactful Work</h3>
              <p className="text-muted-foreground">
                Create campaigns that reach millions and help shape the media landscape across platforms.
              </p>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge variant="outline" className="mb-4 px-3 py-1 border-media-green text-media-green bg-media-green/10">
              Opportunities
            </Badge>
            <h2 className="section-title">Current Job Openings</h2>
            <p className="section-subtitle">
              Explore our current opportunities to join the Sunrise Media House team.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-12">
                <TabsTrigger value="all">All Positions</TabsTrigger>
                <TabsTrigger value="sales">Sales</TabsTrigger>
                <TabsTrigger value="digital">Digital</TabsTrigger>
                <TabsTrigger value="production">Production</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="animate-fade-in">
                <div className="space-y-6">
                  {noOpeningsMessage}
                </div>
              </TabsContent>
              
              <TabsContent value="sales" className="animate-fade-in">
                <div className="space-y-6">
                  {noOpeningsMessage}
                </div>
              </TabsContent>
              
              <TabsContent value="digital" className="animate-fade-in">
                <div className="space-y-6">
                  {noOpeningsMessage}
                </div>
              </TabsContent>
              
              <TabsContent value="production" className="animate-fade-in">
                <div className="space-y-6">
                  {noOpeningsMessage}
                </div>
              </TabsContent>
              
              <TabsContent value="analytics" className="animate-fade-in">
                <div className="space-y-6">
                  {noOpeningsMessage}
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">Don't see a position that matches your skills?</p>
              <AnimatedButton variant="primary">
                Submit General Application
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-media-lightBlue/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge variant="outline" className="mb-4 px-3 py-1 border-media-blue text-media-blue bg-media-lightBlue/30">
              Career Development
            </Badge>
            <h2 className="section-title">Media Career Paths</h2>
            <p className="section-subtitle">
              Explore potential career trajectories within the media industry and at Sunrise Media House.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {careerPaths.map((path, index) => (
              <Card key={path.title} className="p-6 md:p-8 glass-card border-none animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-md ${index % 2 === 0 ? 'bg-media-blue/10' : 'bg-media-green/10'} mr-4`}>
                    {path.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{path.title}</h3>
                    <p className="text-muted-foreground">{path.description}</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {path.paths.map((subPath) => (
                    <div key={subPath.title}>
                      <h4 className="font-semibold mb-3">{subPath.title}</h4>
                      <div className="space-y-3">
                        {subPath.roles.map((role, roleIndex) => (
                          <div key={role} className="flex items-center">
                            {roleIndex > 0 && (
                              <div className="w-6 h-6 mr-3 flex justify-center">
                                <div className="h-full w-px bg-gray-200"></div>
                              </div>
                            )}
                            {roleIndex === 0 && <MoveUpRight className="w-6 h-6 mr-3 text-muted-foreground" />}
                            <span className={roleIndex === subPath.roles.length - 1 ? "font-medium" : ""}>
                              {role}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-5"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge variant="outline" className="mb-4 px-3 py-1 border-media-green text-media-green bg-media-green/10">
              Benefits
            </Badge>
            <h2 className="section-title">Why Work With Us</h2>
            <p className="section-subtitle">
              At Sunrise Media House, we offer a comprehensive benefits package and a 
              supportive work environment designed to help you thrive.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Comprehensive Benefits",
                list: [
                  "Competitive salary packages",
                  "Health, dental, and vision insurance",
                  "401(k) with company match",
                  "Paid time off and holidays",
                  "Flexible spending accounts"
                ]
              },
              {
                title: "Professional Development",
                list: [
                  "Continuous learning opportunities",
                  "Industry certification support",
                  "Professional conference attendance",
                  "Mentorship programs",
                  "Leadership development tracks"
                ]
              },
              {
                title: "Work-Life Balance",
                list: [
                  "Flexible work arrangements",
                  "Remote work options",
                  "Wellness programs",
                  "Team building events",
                  "Community volunteer opportunities"
                ]
              }
            ].map((benefit, index) => (
              <Card key={benefit.title} className="p-6 glass-card border-none animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <h3 className="text-xl font-semibold mb-6">{benefit.title}</h3>
                <ul className="space-y-3">
                  {benefit.list.map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-media-green mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <ContactForm />
    </div>
  );
};

export default Career;
