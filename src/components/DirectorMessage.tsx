
import { Card } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const DirectorMessage = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-media-lightBlue/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Message from our Director</h2>
            <p className="section-subtitle">Our vision for transforming the media landscapes</p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl animate-fade-in">
                <img 
                  src="https://i.ibb.co/gLWWZgCF/Whats-App-Image-2026-01-03-at-11-15-12-AM.jpg" 
                  alt="Sunrise Media House Director" 
                  className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-semibold">Sandeep Kumar</h3>
                  <p className="text-white/80">Founder & Director</p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <Card className="p-8 md:p-10 glass-card animate-fade-in animate-delay-100">
                <div className="text-media-blue mb-4">
                  <Quote size={48} className="opacity-30" />
                </div>
                <blockquote className="text-lg md:text-xl leading-relaxed mb-6">
                  At Sunrise Media House, we believe in the transformative power of strategic media placement. 
                  Our mission is to bridge the gap between brands and their audiences through innovative advertising 
                  solutions that resonate and inspire. In today's digital age, standing out requires more than just 
                  visibility—it demands meaningful connections, authentic storytelling, and strategic positioning.
                </blockquote>
                <blockquote className="text-lg md:text-xl leading-relaxed mb-6">
                  We've built our company on three core principles: creativity, precision, and measurable results. 
                  We don't just place ads; we craft media experiences that elevate brands and create lasting impressions.
                  Our team's expertise spans traditional and digital media landscapes, allowing us to develop 
                  comprehensive strategies that meet your audience wherever they are.
                </blockquote>
                <p className="text-lg font-medium text-media-blue">Sandeep Kumar</p>
                <p className="text-muted-foreground">Founder & Director, Sunrise Media House</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;
