
import { Mail, MessageSquare, Phone } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="md:col-span-2 space-y-8">
      <div className="animate-fade-in">
        <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-media-lightBlue p-3 rounded-lg mr-4">
              <Mail className="h-5 w-5 text-media-blue" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium">Sunrisedun@gmail.com</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-media-lightBlue p-3 rounded-lg mr-4">
              <Phone className="h-5 w-5 text-media-blue" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="font-medium"> +91 - 9837886184</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-media-lightBlue p-3 rounded-lg mr-4">
              <MessageSquare className="h-5 w-5 text-media-blue" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Live Chat</p>
              <p className="font-medium">Available 9 AM - 5 PM IST</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="animate-fade-in animate-delay-100">
        <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
        <p className="text-muted-foreground mb-4">We're available during these hours for in-person meetings:</p>
        
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>Monday - Friday</span>
            <span className="font-medium">9:00 AM - 6:00 PM</span>
          </li>
          <li className="flex justify-between">
            <span>Saturday</span>
            <span className="font-medium">10:00 AM - 2:00 PM</span>
          </li>
          <li className="flex justify-between">
            <span>Sunday</span>
            <span className="font-medium">Closed</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
