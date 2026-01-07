import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import axios, { AxiosError } from 'axios';

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const API_URL = 'https://sunrise-backendoiugty.onrender.com';

export const useContactForm = () => {
  const { toast } = useToast();

  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post(
        `${API_URL}/api/contact`,
        formState,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 10000, // 🔥 avoids Render cold-start issues
        }
      );

      toast({
        title: 'Message sent!',
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });

      setFormState({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

    } catch (err) {
      const error = err as AxiosError;

      console.error('Contact form error:', error);

      toast({
        title: 'Error sending message',
        description:
          error.response?.data?.message ||
          'Server unavailable. Please try again shortly.',
        variant: 'destructive',
        duration: 5000,
      });

    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formState,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
};
