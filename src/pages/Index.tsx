
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import ServicesShowcase from '@/components/ServicesShowcase';
import DirectorMessage from '@/components/DirectorMessage';
import ContactForm from '@/components/ContactForm';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, BarChart, Clock, Target, Users } from 'lucide-react';
import AnimatedButton from '@/components/AnimatedButton';
import { Link } from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      <ServicesShowcase />
      
      <section className="py-16 md:py-24 bg-gradient-to-r from-media-blue/5 to-media-green/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-3 py-1 border-media-blue text-media-blue bg-media-lightBlue/30">
              Why Choose Us
            </Badge>
            <h2 className="section-title">Crafting Media Excellence</h2>
            <p className="section-subtitle">
              We combine industry expertise with innovative strategies to deliver
              exceptional media solutions that drive measurable results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart className="h-8 w-8 text-media-blue" />,
                title: "Data-Driven Approach",
                description: "We leverage analytics and insights to optimize ad placements for maximum ROI and audience engagement."
              },
              {
                icon: <Target className="h-8 w-8 text-media-green" />,
                title: "Strategic Targeting",
                description: "Our precise audience targeting ensures your message reaches the right people at the right time."
              },
              {
                icon: <Award className="h-8 w-8 text-media-blue" />,
                title: "Award-Winning Creative",
                description: "Our creative team crafts compelling content that captures attention and drives action."
              },
              {
                icon: <Users className="h-8 w-8 text-media-green" />,
                title: "Industry Relationships",
                description: "Our established network of media partners enables premium placements at competitive rates."
              },
              {
                icon: <Clock className="h-8 w-8 text-media-blue" />,
                title: "Agile & Responsive",
                description: "We adapt quickly to market changes and emerging opportunities to keep your brand ahead."
              },
              {
                icon: <Award className="h-8 w-8 text-media-green" />,
                title: "Proven Results",
                description: "Our track record demonstrates consistent success in achieving and exceeding client objectives."
              }
            ].map((item, index) => (
              <Card key={item.title} className="p-6 glass-card border-none hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <DirectorMessage />
      
      <section className="py-16 md:py-24 bg-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-5"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 px-3 py-1 border-media-blue text-media-blue bg-media-lightBlue/30">
              Success Stories
            </Badge>
            <h2 className="section-title">Transforming Brands Through Strategic Media</h2>
            <p className="section-subtitle">
              See how we've helped businesses across industries achieve remarkable results 
              through targeted media campaigns.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mt-12 text-left">
              <Card className="p-6 glass-card border-none animate-fade-in">
                <div className="flex items-center mb-4">
                  <div className="bg-media-blue/10 p-3 rounded-md">
                    <span className="text-media-blue text-2xl font-bold">48%</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold">Increased Engagement</h3>
                    <p className="text-sm text-muted-foreground">Retail Brand Campaign</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Sunrise Media House transformed our approach to radio advertising, driving a 48% increase in store visits and substantially boosting sales."
                </p>
                <p className="mt-4 font-medium">Rahul Mittal, Marketing Director</p>
              </Card>
              
              <Card className="p-6 glass-card border-none animate-fade-in animate-delay-100">
                <div className="flex items-center mb-4">
                  <div className="bg-media-green/10 p-3 rounded-md">
                    <span className="text-media-green text-2xl font-bold">3.2x</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold">ROI Improvement</h3>
                    <p className="text-sm text-muted-foreground">Tech Industry Campaign</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The strategic placement of our ads across digital platforms resulted in a 3.2x improvement in ROI compared to our previous campaigns."
                </p>
                <p className="mt-4 font-medium">Sandeep Kumar, Founder and Director </p>
              </Card>
            </div>
            
            <div className="mt-12 animate-fade-in animate-delay-200">
              <Link to="/about#success-stories">
                <AnimatedButton variant="primary" icon>
                  View All Success Stories
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <ContactForm />
    </div>
  );
};

export default Index;
