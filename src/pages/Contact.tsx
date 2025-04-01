import MainLayout from "@/components/layout/MainLayout";
import Breadcrumb from "@/components/knowledge/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset the form
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      // Reset success state after a delay
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb 
          items={[
            { label: "Contact Us", link: undefined }
          ]} 
        />
        
        <div className="mt-8 max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Support</h1>
          <p className="text-lg text-gray-600 mb-8">
            Need help with something specific? Fill out the form below and our support team will get back to you as soon as possible.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject"
                    name="subject"
                    placeholder="How can we help you?"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder="Please provide as much detail as possible..."
                    rows={6}
                    value={formState.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-kb-blue hover:bg-kb-darkBlue"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                
                {isSuccess && (
                  <div className="bg-green-50 text-green-700 p-4 rounded-md flex items-center mt-4">
                    <CheckCircle2 className="mr-2" size={20} />
                    <span>Your message has been sent successfully!</span>
                  </div>
                )}
              </form>
            </div>
            
            <div className="md:col-span-2">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Other Ways to Get Help</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800">Email Support</h4>
                    <p className="text-gray-600">support@nctvdashboard.com</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800">Phone Support</h4>
                    <p className="text-gray-600">+1 (888) 123-4567</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9am-5pm EST</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800">Knowledge Base</h4>
                    <p className="text-gray-600">Search our comprehensive guides and tutorials.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800">User Community</h4>
                    <p className="text-gray-600">Connect with other users in our community forums.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
