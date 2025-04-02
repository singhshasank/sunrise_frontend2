
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'primary' | 'secondary';
  icon?: boolean;
  className?: string;
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const AnimatedButton = ({ 
  children, 
  variant = 'default', 
  icon = false,
  className,
  size = 'default',
  ...props 
}: AnimatedButtonProps) => {
  const baseStyles = "relative overflow-hidden transition-all duration-300 transform hover:translate-y-[-2px]";
  
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return "bg-primary text-white hover:bg-primary/90";
      case 'secondary':
        return "bg-media-green text-white hover:bg-media-green/90";
      case 'outline':
        return "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white";
      default:
        return "bg-primary text-white hover:bg-primary/90";
    }
  };

  return (
    <Button
      className={cn(
        baseStyles,
        getVariantStyles(),
        "group",
        className
      )}
      size={size}
      {...props}
    >
      <span className="relative z-10 flex items-center">
        {children}
        {icon && (
          <ChevronRight className="ml-1 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
      <span className="absolute inset-0 h-full w-full bg-black/5 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
    </Button>
  );
};

export default AnimatedButton;
