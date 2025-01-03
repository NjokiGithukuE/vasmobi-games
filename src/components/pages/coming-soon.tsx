import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Github, Twitter, Instagram, Loader2 } from 'lucide-react';

const ComingSoon = () => {
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Email subscription state
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Set launch date (1 month from now)
  useEffect(() => {
    const launchDate = new Date();
    launchDate.setMonth(launchDate.getMonth() + 1);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubscriptionStatus('success');
      setEmail('');
    } catch (error) {
      setSubscriptionStatus('error');
    } finally {
      setIsLoading(false);
      setTimeout(() => setSubscriptionStatus('idle'), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl w-full text-center space-y-8">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-extrabold text-orange-600">
            VasMobi Games
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-600">
            Something amazing is coming soon
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-xl mx-auto">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="bg-white p-4 rounded-lg shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-orange-500">
                {value}
              </div>
              <div className="text-gray-500 capitalize">
                {unit}
              </div>
            </div>
          ))}
        </div>

        {/* Email Subscription */}
        <div className="max-w-md mx-auto mt-12">
          <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow"
            />
            <Button 
              type="submit" 
              disabled={isLoading}
              className="bg-orange-500 hover:bg-orange-600"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Subscribing...
                </>
              ) : (
                'Notify Me'
              )}
            </Button>
          </form>

          {/* Subscription Status Messages */}
          {subscriptionStatus === 'success' && (
            <Alert className="mt-4 bg-green-50 border-green-200">
              <AlertDescription className="text-green-800">
                Thanks for subscribing! We'll keep you updated.
              </AlertDescription>
            </Alert>
          )}
          {subscriptionStatus === 'error' && (
            <Alert className="mt-4" variant="destructive">
              <AlertDescription>
                Oops! Something went wrong. Please try again.
              </AlertDescription>
            </Alert>
          )}
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-8">
          <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
            <Github className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;