
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import axios from 'axios';

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const API_URL = 'https://sunrise-backend-web.onrender.com';

export const useContactForm = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send data to backend
      await axios.post(`${API_URL}/api/contact`, formState);
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
      
      // Reset form
      setFormState({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formState,
    isSubmitting,
    handleChange,
    handleSubmit
  };
};
