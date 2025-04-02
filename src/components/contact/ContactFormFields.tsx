
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

type ContactFormFieldsProps = {
  formState: {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const ContactFormFields = ({ formState, handleChange }: ContactFormFieldsProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input 
            id="name" 
            name="name" 
            placeholder="Rahul Singh"
            required
            value={formState.name}
            onChange={handleChange}
            className="bg-white/50"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            name="email" 
            type="email" 
            placeholder="priya@example.com"
            required
            value={formState.email}
            onChange={handleChange}
            className="bg-white/50"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number (Optional)</Label>
        <Input 
          id="phone" 
          name="phone" 
          placeholder="(+91) 12334-45677"
          value={formState.phone}
          onChange={handleChange}
          className="bg-white/50"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea 
          id="message" 
          name="message" 
          placeholder="Tell us about your project or inquiry"
          rows={5}
          required
          value={formState.message}
          onChange={handleChange}
          className="bg-white/50"
        />
      </div>
    </>
  );
};

export default ContactFormFields;
