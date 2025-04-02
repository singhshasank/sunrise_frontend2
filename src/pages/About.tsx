
import { useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Heart, Target, Zap, Award, Star, CheckCircle } from 'lucide-react';
import ContactForm from '@/components/ContactForm';



const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-background">
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-media-lightBlue/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <Badge variant="outline" className="mb-4 px-3 py-1 border-media-blue text-media-blue bg-media-lightBlue/30">
                Our Story
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Transforming Media Advertising Since 2010
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Sunrise Media House was founded with a vision to help businesses navigate the 
                complex media landscape and connect with audiences in meaningful ways.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                What began as a boutique radio advertising agency has grown into a comprehensive 
                media service provider spanning radio, television, and digital platforms. Our team 
                of industry experts brings decades of combined experience and a passion for 
                innovative media solutions.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <p className="text-3xl font-bold text-media-blue">500+</p>
                  <p className="text-sm text-muted-foreground">Clients Served</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-media-blue">5,000+</p>
                  <p className="text-sm text-muted-foreground">Campaigns Delivered</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-media-blue">12+</p>
                  <p className="text-sm text-muted-foreground">Industry Awards</p>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in animate-delay-100">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80" 
                  alt="Sunrise Media House team" 
                  className="object-cover w-full h-full transform transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-lg max-w-xs">
                <p className="text-sm italic text-muted-foreground">
                  "Our mission is to bridge the gap between brands and audiences through strategic media excellence."
                </p>
                <p className="text-sm font-medium mt-2">— Sandeep Kumar, Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-white" id="values">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge variant="outline" className="mb-4 px-3 py-1 border-media-green text-media-green bg-media-green/10">
              Our Values
            </Badge>
            <h2 className="section-title">Guided by Principles</h2>
            <p className="section-subtitle">
              Our core values shape everything we do, from client interactions to campaign development and team culture.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Excellence",
                description: "We strive for excellence in every campaign, every interaction, and every result we deliver for clients.",
                icon: <Award className="h-8 w-8 text-media-blue" />
              },
              {
                title: "Innovation",
                description: "We embrace new technologies, platforms, and approaches to drive breakthrough results for our clients.",
                icon: <Zap className="h-8 w-8 text-media-green" />
              },
              {
                title: "Integrity",
                description: "We operate with transparency, honesty, and ethical standards in all client and business relationships.",
                icon: <Heart className="h-8 w-8 text-media-blue" />
              },
              {
                title: "Precision",
                description: "We believe in data-driven decisions and meticulous attention to detail in campaign execution.",
                icon: <Target className="h-8 w-8 text-media-green" />
              },
              {
                title: "Collaboration",
                description: "We work as true partners with our clients, fostering open communication and shared success.",
                icon: <BarChart className="h-8 w-8 text-media-blue" />
              },
              {
                title: "Results",
                description: "We measure our success by the tangible outcomes and ROI we deliver for our clients.",
                icon: <Star className="h-8 w-8 text-media-green" />
              }
            ].map((value, index) => (
              <Card key={value.title} className="p-8 text-center glass-card border-none animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gray-100 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      
      
      <section className="py-16 md:py-24 bg-white" id="success-stories">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge variant="outline" className="mb-4 px-3 py-1 border-media-green text-media-green bg-media-green/10">
              Client Success
            </Badge>
            <h2 className="section-title">Success Stories</h2>
            <p className="section-subtitle">
              Real results for real clients across industries and media channels.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="retail" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-12">
                <TabsTrigger value="retail">Retail</TabsTrigger>
                <TabsTrigger value="finance">Finance</TabsTrigger>
                <TabsTrigger value="technology">Technology</TabsTrigger>
                <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
              </TabsList>
              
              <TabsContent value="retail" className="animate-fade-in">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">National Retail Chain</h3>
                    <p className="text-muted-foreground mb-6">
                      A leading retail chain sought to drive foot traffic to their 200+ locations nationwide through an integrated media campaign.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      <div>
                        <h4 className="font-semibold mb-2">The Challenge</h4>
                        <p className="text-muted-foreground">
                          Increase store visits by 30% during a key seasonal promotion while maintaining cost efficiency across markets.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Our Solution</h4>
                        <p className="text-muted-foreground">
                          We developed a coordinated campaign across radio, television, and digital platforms, with market-specific targeting and messaging.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">The Results</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-media-green mr-3 flex-shrink-0" />
                            <span>48% increase in store traffic during the campaign period</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-media-green mr-3 flex-shrink-0" />
                            <span>36% year-over-year sales growth</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-media-green mr-3 flex-shrink-0" />
                            <span>22% reduction in cost-per-acquisition</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-media-blue pl-4 py-2 italic">
                      "Sunrise Media House transformed our approach to radio advertising, driving a 48% increase in store visits and substantially boosting sales."
                      <p className="mt-2 not-italic font-medium">— Sarah Miller, Marketing Director</p>
                    </div>
                  </div>
                  
                  <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px]">
                    <img 
                      src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
                      alt="Retail Success Story" 
                      className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <div className="bg-media-green text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-2">
                        Radio + Digital
                      </div>
                      <div className="text-white text-xl md:text-2xl font-bold">
                        48% Traffic Increase
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="finance" className="animate-fade-in">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Regional Banking Institution</h3>
                    <p className="text-muted-foreground mb-6">
                      A regional bank needed to promote a new digital banking platform to both existing customers and prospective clients.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      <div>
                        <h4 className="font-semibold mb-2">The Challenge</h4>
                        <p className="text-muted-foreground">
                          Drive digital platform adoption while differentiating from competitors in a crowded financial services market.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Our Solution</h4>
                        <p className="text-muted-foreground">
                          Created a multi-phase campaign leveraging television for brand awareness, complemented by targeted digital advertising.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">The Results</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-media-green mr-3 flex-shrink-0" />
                            <span>85% increase in digital platform sign-ups</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-media-green mr-3 flex-shrink-0" />
                            <span>32% growth in new account openings</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-media-green mr-3 flex-shrink-0" />
                            <span>2.4x ROI on the media investment</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-media-blue pl-4 py-2 italic">
                      "The campaign exceeded all of our expectations and helped us achieve our digital transformation goals faster than projected."
                      <p className="mt-2 not-italic font-medium">— James Roberts, VP of Marketing</p>
                    </div>
                  </div>
                  
                  <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px]">
                    <img 
                      src="https://images.unsplash.com/photo-1556742208-999815fca738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                      alt="Finance Success Story" 
                      className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <div className="bg-media-blue text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-2">
                        Television + Digital
                      </div>
                      <div className="text-white text-xl md:text-2xl font-bold">
                        85% Adoption Increase
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="technology" className="animate-fade-in">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">B2B SaaS Company</h3>
                    <p className="text-muted-foreground mb-6">
                      A growing software-as-a-service company needed to increase brand awareness and lead generation among enterprise customers.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      <div>
                        <h4 className="font-semibold mb-2">The Challenge</h4>
                        <p className="text-muted-foreground">
                          Reach C-suite decision-makers in target industries and convert them into qualified sales opportunities.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Our Solution</h4>
                        <p className="text-muted-foreground">
                          Developed a thought leadership campaign across digital publications, supported by targeted programmatic advertising.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">The Results</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-media-green mr-3 flex-shrink-0" />
                            <span>3.2x increase in qualified leads</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-media-green mr-3 flex-shrink-0" />
                            <span>67% improvement in cost-per-lead</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-media-green mr-3 flex-shrink-0" />
                            <span>$4.2 million in new business attributed to the campaign</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-media-blue pl-4 py-2 italic">
                      "The strategic placement of our content across digital platforms resulted in a 3.2x improvement in lead quality and significant revenue growth."
                      <p className="mt-2 not-italic font-medium">— Michael Chen, CEO</p>
                    </div>
                  </div>
                  
                  <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px]">
                    <img 
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                      alt="Technology Success Story" 
                      className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <div className="bg-media-green text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-2">
                        Digital Media
                      </div>
                      <div className="text-white text-xl md:text-2xl font-bold">
                        3.2x Lead Increase
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="healthcare" className="animate-fade-in">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Regional Healthcare Network</h3>
                    <p className="text-muted-foreground mb-6">
                      A healthcare provider network needed to raise awareness of new telehealth services and drive patient adoption.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      <div>
                        <h4 className="font-semibold mb-2">The Challenge</h4>
                        <p className="text-muted-foreground">
                          Educate diverse patient demographics about telehealth benefits and overcome adoption hesitation.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Our Solution</h4>
                        <p className="text-muted-foreground">
                          Created an integrated campaign across radio, television, and targeted digital, with demographic-specific messaging.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">The Results</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-media-green mr-3 flex-shrink-0" />
                            <span>156% increase in telehealth appointments</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-media-green mr-3 flex-shrink-0" />
                            <span>42% reduction in non-emergency in-person visits</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-media-green mr-3 flex-shrink-0" />
                            <span>91% patient satisfaction with telehealth services</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-media-blue pl-4 py-2 italic">
                      "The campaign was instrumental in changing patient perceptions and behaviors. The results surpassed our most optimistic projections."
                      <p className="mt-2 not-italic font-medium">— Dr. Lisa Wang, Chief Medical Officer</p>
                    </div>
                  </div>
                  
                  <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px]">
                    <img 
                      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                      alt="Healthcare Success Story" 
                      className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <div className="bg-media-blue text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-2">
                        Multi-Channel
                      </div>
                      <div className="text-white text-xl md:text-2xl font-bold">
                        156% Service Adoption
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      <ContactForm />
    </div>
  );
};

export default About;
