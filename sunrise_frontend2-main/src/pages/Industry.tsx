
import { useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, BarChart, PieChart, AreaChart, TrendingUp, Radio, Tv, Globe, Users } from 'lucide-react';
import AnimatedButton from '@/components/AnimatedButton';
import ContactForm from '@/components/ContactForm';

interface TrendData {
  title: string;
  description: string;
  icon: React.ReactNode;
  stats: string;
  color: string;
}

const industryTrends: TrendData[] = [
  {
    title: "Digital Transformation",
    description: "Traditional media channels are embracing digital integration, creating hybrid advertising opportunities that combine the strengths of both worlds.",
    icon: <TrendingUp className="h-8 w-8" />,
    stats: "78% Growth",
    color: "bg-media-blue text-white"
  },
  {
    title: "Programmatic Audio",
    description: "Automated buying of audio ad inventory is revolutionizing radio advertising, allowing for more precise targeting and real-time optimization.",
    icon: <Radio className="h-8 w-8" />,
    stats: "63% Adoption",
    color: "bg-media-green text-white"
  },
  {
    title: "Connected TV",
    description: "The rise of streaming services has created new opportunities for targeted television advertising with enhanced measurement capabilities.",
    icon: <Tv className="h-8 w-8" />,
    stats: "92% Reach",
    color: "bg-media-blue text-white"
  },
  {
    title: "Multi-Channel Attribution",
    description: "Advanced analytics are enabling advertisers to better understand how different media channels contribute to conversion and brand lift.",
    icon: <BarChart className="h-8 w-8" />,
    stats: "3.4x ROI",
    color: "bg-media-green text-white"
  },
  {
    title: "Contextual Targeting",
    description: "With the phasing out of third-party cookies, contextual targeting is experiencing a renaissance for privacy-compliant audience targeting.",
    icon: <Globe className="h-8 w-8" />,
    stats: "42% Increase",
    color: "bg-media-blue text-white"
  },
  {
    title: "Audio Branding",
    description: "Sonic branding is becoming essential as voice-activated devices and audio platforms continue to grow in prominence and usage.",
    icon: <Users className="h-8 w-8" />,
    stats: "55% Recognition",
    color: "bg-media-green text-white"
  }
];

interface InsightData {
  category: string;
  title: string;
  description: string;
  points: string[];
  image: string;
}

const industryInsights: InsightData[] = [
  {
    category: "market",
    title: "Market Evolution",
    description: "The advertising landscape is continuously evolving with emerging technologies and changing consumer behaviors.",
    points: [
      "Digital ad spending surpassed traditional media for the first time in 2019 and continues to grow rapidly.",
      "Mobile advertising now accounts for over 70% of all digital ad spending in most developed markets.",
      "Connected TV advertising is growing at 35% annually as streaming services expand their reach.",
      "Podcast advertising has seen a 100% growth rate for three consecutive years, creating new audio opportunities."
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
  },
  {
    category: "audience",
    title: "Audience Behaviors",
    description: "Understanding how audiences consume media is crucial for effective advertising strategy and campaign planning.",
    points: [
      "Second-screen usage during TV viewing has increased to 86%, creating multi-platform engagement opportunities.",
      "Audio content consumption has risen 30% in the past five years, with peak listening during commuting hours.",
      "Social media usage patterns continue to evolve, with video-based platforms seeing the highest growth rates.",
      "Generation Z consumes content differently than millennials, preferring shorter formats and authenticity."
    ],
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    category: "technology",
    title: "Technology Impact",
    description: "Technological advancements are reshaping media consumption and creating new advertising opportunities.",
    points: [
      "AI-driven programmatic advertising is enabling more precise targeting and real-time optimization.",
      "Voice search and smart speakers are creating new audio touchpoints for brands to connect with consumers.",
      "Augmented reality is transforming interactive advertising experiences across platforms.",
      "5G technology is enabling higher quality video streaming and more immersive ad formats."
    ],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    category: "creative",
    title: "Creative Trends",
    description: "Creative strategies and formats are evolving to capture audience attention in an increasingly crowded media landscape.",
    points: [
      "Short-form video content continues to dominate engagement metrics across platforms.",
      "Interactive ad units are showing 300% higher engagement rates than static advertisements.",
      "User-generated content collaborations are becoming a mainstream strategy for authentic brand messaging.",
      "Personalized creative based on audience data is delivering 30% higher conversion rates."
    ],
    image: "https://images.unsplash.com/photo-1577401239170-897942555fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80"
  }
];

const Industry = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-background">
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-media-lightBlue/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge variant="outline" className="mb-4 px-3 py-1 border-media-blue text-media-blue bg-media-lightBlue/30">
              Industry Insights
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Media Industry Trends & Analysis
            </h1>
            <p className="text-xl text-muted-foreground">
              Stay informed about the latest developments in the ever-evolving media landscape
              with expert insights from Sunrise Media House.
            </p>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')] bg-cover bg-center opacity-5"></div>
            
            <div className="grid md:grid-cols-3 gap-8 relative animate-fade-in">
              <div className="text-center p-8 glass-card rounded-xl">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-media-blue/10 mb-4">
                  <LineChart className="h-8 w-8 text-media-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Market Analysis</h3>
                <p className="text-muted-foreground">
                  In-depth analysis of media market trends, advertising spend, and industry forecasts.
                </p>
              </div>
              
              <div className="text-center p-8 glass-card rounded-xl animate-fade-in animate-delay-100">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-media-green/10 mb-4">
                  <AreaChart className="h-8 w-8 text-media-green" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Audience Insights</h3>
                <p className="text-muted-foreground">
                  Consumer behavior research and demographic trends across media channels.
                </p>
              </div>
              
              <div className="text-center p-8 glass-card rounded-xl animate-fade-in animate-delay-200">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-media-blue/10 mb-4">
                  <PieChart className="h-8 w-8 text-media-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Technology Impact</h3>
                <p className="text-muted-foreground">
                  How emerging technologies are reshaping media consumption and advertising strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge variant="outline" className="mb-4 px-3 py-1 border-media-green text-media-green bg-media-green/10">
              Trend Report
            </Badge>
            <h2 className="section-title">Current Media Industry Trends</h2>
            <p className="section-subtitle">
              Key developments shaping the future of media and advertising that businesses should monitor.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {industryTrends.map((trend, index) => (
              <Card key={trend.title} className="overflow-hidden border-none shadow-md animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className={`p-4 ${trend.color}`}>
                  <div className="flex justify-between items-center">
                    {trend.icon}
                    <span className="font-bold">{trend.stats}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{trend.title}</h3>
                  <p className="text-muted-foreground">{trend.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-media-lightBlue/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge variant="outline" className="mb-4 px-3 py-1 border-media-blue text-media-blue bg-media-lightBlue/30">
              Market Intelligence
            </Badge>
            <h2 className="section-title">Industry Insights</h2>
            <p className="section-subtitle">
              Explore our latest research and analysis on key aspects of the media industry landscape.
            </p>
          </div>
          
          <Tabs defaultValue="market" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="market">Market Evolution</TabsTrigger>
              <TabsTrigger value="audience">Audience Behaviors</TabsTrigger>
              <TabsTrigger value="technology">Technology Impact</TabsTrigger>
              <TabsTrigger value="creative">Creative Trends</TabsTrigger>
            </TabsList>
            
            {industryInsights.map((insight) => (
              <TabsContent key={insight.category} value={insight.category} className="animate-fade-in">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{insight.title}</h3>
                    <p className="text-muted-foreground mb-6">{insight.description}</p>
                    
                    <div className="space-y-4 mb-8">
                      {insight.points.map((point, index) => (
                        <div key={index} className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-media-blue/10 flex items-center justify-center mt-1 mr-3">
                            <div className="h-2 w-2 rounded-full bg-media-blue"></div>
                          </div>
                          <p>{point}</p>
                        </div>
                      ))}
                    </div>
                    
                    <AnimatedButton variant="primary" icon>
                      Download Full Report
                    </AnimatedButton>
                  </div>
                  
                  <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                    <img 
                      src={insight.image} 
                      alt={insight.title} 
                      className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <Badge className={insight.category === "market" || insight.category === "technology" ? "bg-media-blue text-white" : "bg-media-green text-white"}>
                        {insight.category === "market" ? "Market Research" : 
                         insight.category === "audience" ? "Audience Analysis" :
                         insight.category === "technology" ? "Tech Trends" : "Creative Insights"}
                      </Badge>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-5"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="outline" className="mb-4 px-3 py-1 border-media-green text-media-green bg-media-green/10">
              Resources
            </Badge>
            <h2 className="section-title">Industry Resources</h2>
            <p className="section-subtitle">
              Access our library of white papers, case studies, and research reports on the media industry.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "2023 Media Landscape Report",
                category: "Research Report",
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              },
              {
                title: "Digital Audio Advertising Guide",
                category: "White Paper",
                image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              },
              {
                title: "Cross-Channel Attribution",
                category: "Case Study",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              }
            ].map((resource, index) => (
              <div key={resource.title} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <Card className="overflow-hidden border-none shadow-md h-full group">
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={resource.image} 
                      alt={resource.title} 
                      className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <Badge className="bg-white/20 text-white backdrop-blur-sm">
                        {resource.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">{resource.title}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">24 pages</span>
                      <AnimatedButton variant="outline" size="sm">
                        Download
                      </AnimatedButton>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <ContactForm />
    </div>
  );
};

export default Industry;
