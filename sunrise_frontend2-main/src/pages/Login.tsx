
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from '@/components/ui/use-toast';
import { Eye, EyeOff, ArrowRight, Facebook, Mail } from 'lucide-react';

const Login = () => {
  const { toast } = useToast();
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Login Successful",
        description: "Welcome back to Sunrise Media House!",
        duration: 5000,
      });
      setIsLoading(false);
    }, 1500);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Registration Successful",
        description: "Your account has been created. Welcome to Sunrise Media House!",
        duration: 5000,
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-20 pb-16 flex items-center justify-center bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="hidden md:block">
            <div className="relative overflow-hidden rounded-2xl h-full min-h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Sunrise Media House" 
                className="absolute w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-media-blue/80 to-media-green/50"></div>
              <div className="absolute inset-0 flex flex-col justify-center p-12 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome to Sunrise Media House</h2>
                <p className="text-lg mb-8">Access your account to manage your media campaigns and track performance.</p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-white/20 p-2 rounded-full mr-4">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Campaign Management</h3>
                      <p className="text-sm text-white/80">Track and manage all your active media campaigns</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white/20 p-2 rounded-full mr-4">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Performance Analytics</h3>
                      <p className="text-sm text-white/80">Access detailed analytics and reporting for your campaigns</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white/20 p-2 rounded-full mr-4">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Media Resources</h3>
                      <p className="text-sm text-white/80">Download assets, reports, and industry insights</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <Card className="p-8 glass-card border-none">
              <div className="flex items-center justify-center space-x-2 mb-8">
                <span className="text-2xl font-bold text-media-blue">Sunrise</span>
                <span className="text-2xl font-bold text-media-green">Media</span>
              </div>
              
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="register">Register</TabsTrigger>
                </TabsList>
                
                <TabsContent value="login" className="animate-fade-in">
                  <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your@email.com"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        required
                        className="bg-white/50"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Link to="/forgot-password" className="text-xs text-media-blue hover:underline">
                          Forgot Password?
                        </Link>
                      </div>
                      <div className="relative">
                        <Input 
                          id="password" 
                          type={showLoginPassword ? "text" : "password"}
                          placeholder="••••••••"
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          required
                          className="bg-white/50"
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                          onClick={() => setShowLoginPassword(!showLoginPassword)}
                        >
                          {showLoginPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remember" />
                      <label
                        htmlFor="remember"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Remember me
                      </label>
                    </div>
                    
                    <Button type="submit" className="w-full bg-media-blue hover:bg-media-blue/90" disabled={isLoading}>
                      {isLoading ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Logging in...
                        </span>
                      ) : (
                        "Login"
                      )}
                    </Button>
                    
                    <div className="relative my-6">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">or continue with</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" type="button" className="bg-white">
                        <Facebook className="mr-2 h-4 w-4" />
                        Facebook
                      </Button>
                      <Button variant="outline" type="button" className="bg-white">
                        <Mail className="mr-2 h-4 w-4" />
                        Google
                      </Button>
                    </div>
                  </form>
                </TabsContent>
                
                <TabsContent value="register" className="animate-fade-in">
                  <form onSubmit={handleRegister} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        placeholder="John Doe"
                        value={registerName}
                        onChange={(e) => setRegisterName(e.target.value)}
                        required
                        className="bg-white/50"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="register-email">Email</Label>
                      <Input 
                        id="register-email" 
                        type="email" 
                        placeholder="your@email.com"
                        value={registerEmail}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                        required
                        className="bg-white/50"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="register-password">Password</Label>
                      <div className="relative">
                        <Input 
                          id="register-password" 
                          type={showRegisterPassword ? "text" : "password"}
                          placeholder="••••••••"
                          value={registerPassword}
                          onChange={(e) => setRegisterPassword(e.target.value)}
                          required
                          className="bg-white/50"
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                          onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                        >
                          {showRegisterPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Password must be at least 8 characters long with a number and special character.
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" required />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the{" "}
                        <Link to="/terms" className="text-media-blue hover:underline">
                          Terms of Service
                        </Link>
                        {" "}and{" "}
                        <Link to="/privacy" className="text-media-blue hover:underline">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>
                    
                    <Button type="submit" className="w-full bg-media-green hover:bg-media-green/90" disabled={isLoading}>
                      {isLoading ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Creating account...
                        </span>
                      ) : (
                        "Create Account"
                      )}
                    </Button>
                    
                    <div className="relative my-6">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">or continue with</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" type="button" className="bg-white">
                        <Facebook className="mr-2 h-4 w-4" />
                        Facebook
                      </Button>
                      <Button variant="outline" type="button" className="bg-white">
                        <Mail className="mr-2 h-4 w-4" />
                        Google
                      </Button>
                    </div>
                  </form>
                </TabsContent>
              </Tabs>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
