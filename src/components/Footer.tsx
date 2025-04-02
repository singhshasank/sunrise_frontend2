
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-[#f8fafc] to-white border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Logo and info */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <div className="flex items-center text-2xl font-bold">
                <span className="text-media-blue">Sunrise</span>
                <span className="text-media-green">Media</span>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Sunrise Media House is a premier advertising service provider specializing in radio, television, and digital media placements to help businesses amplify their message.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-media-blue transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-media-blue transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-media-blue transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-media-blue transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/industry" className="text-muted-foreground hover:text-primary transition-colors">Industry</Link>
              </li>
              <li>
                <Link to="/career" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services#radio" className="text-muted-foreground hover:text-primary transition-colors">Radio Advertising</Link>
              </li>
              <li>
                <Link to="/services#television" className="text-muted-foreground hover:text-primary transition-colors">Television Commercials</Link>
              </li>
              <li>
                <Link to="/services#digital" className="text-muted-foreground hover:text-primary transition-colors">Digital Media</Link>
              </li>
              <li>
                <Link to="/services#consulting" className="text-muted-foreground hover:text-primary transition-colors">Media Consulting</Link>
              </li>
              <li>
                <Link to="/services#analytics" className="text-muted-foreground hover:text-primary transition-colors">Performance Analytics</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-media-blue" />
                <span className="text-muted-foreground">info@sunrisemediahouse.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-media-blue" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-media-blue" />
                <span className="text-muted-foreground">
                  1234 Media Avenue<br />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="py-8 border-t border-border mb-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-muted-foreground mb-6">
              Stay updated with the latest trends and insights in the media industry.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
              <Button type="submit" className="bg-primary text-white hover:bg-primary/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        {/* Bottom footer */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {currentYear} Sunrise Media House. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
