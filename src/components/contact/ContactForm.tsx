
import { Card } from '@/components/ui/card';
import ContactInfo from './ContactInfo';
import ContactFormFields from './ContactFormFields';
import ContactFormSubmitButton from './ContactFormSubmitButton';
import { useContactForm } from '@/hooks/useContactForm';

const ContactForm = () => {
  const { formState, isSubmitting, handleChange, handleSubmit } = useContactForm();
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-media-lightBlue/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Have a question or ready to elevate your media presence? Reach out to us
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <ContactInfo />
          
          <div className="md:col-span-3">
            <Card className="p-6 md:p-8 glass-card animate-fade-in animate-delay-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                <ContactFormFields 
                  formState={formState} 
                  handleChange={handleChange} 
                />
                
                <ContactFormSubmitButton isSubmitting={isSubmitting} />
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
