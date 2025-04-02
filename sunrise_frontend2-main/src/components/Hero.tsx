
import { useRef, useEffect } from 'react';
import AnimatedButton from './AnimatedButton';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const opacity = 1 - scrollY / 500;
      const translateY = scrollY * 0.5;
      
      if (heroRef.current) {
        heroRef.current.style.opacity = Math.max(opacity, 0).toString();
        heroRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    const contentElement = document.getElementById('main-content');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-media-blue/10 to-media-green/5 z-0"></div>
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20 z-0"
        style={{ backgroundBlendMode: 'overlay' }}
      ></div>
      
      {/* Content */}
      <div 
        ref={heroRef}
        className="container mx-auto px-4 z-10 text-center transition-all duration-300 will-change pt-20"
      >
        <div className="flex flex-col items-center max-w-3xl mx-auto">
          <span className="inline-block bg-media-lightBlue text-media-blue px-4 py-1.5 rounded-full text-sm font-medium mb-6 animate-fade-in">
            Transforming Media Experiences
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in animate-delay-100">
            Elevate Your <span className="text-media-blue">Brand</span> Through Strategic Media Services
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in animate-delay-200">
            Sunrise Media House helps businesses amplify their message across radio, television, and digital platforms with innovative advertising solutions tailored to your unique needs.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in animate-delay-300">
            <Link to="/services">
              <AnimatedButton 
                variant="primary" 
                icon 
                size="lg"
              >
                Explore Our Services
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToContent}
          className="flex flex-col items-center text-sm text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll to content"
        >
          <span className="mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
