import { useState } from "react";
import { FileText, MapPin, Maximize, Upload, Loader2, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    propertyAddress: "",
    city: "",
    state: "",
    zipCode: "",
    propertySize: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 3000));

    setIsSubmitting(false);
    setIsSuccess(true);

    toast({
      title: "Property Registered Successfully!",
      description: "Your property NFT has been minted on the blockchain.",
    });
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-lg mx-auto text-center">
              <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6 animate-scale-in glow-green">
                <CheckCircle2 className="w-10 h-10 text-success" />
              </div>
              <h1 className="text-3xl font-black text-primary mb-4 animate-fade-up">
                Property Registered!
              </h1>
              <p className="text-muted-foreground mb-8 animate-fade-up delay-100">
                Your property has been successfully registered on the blockchain. 
                An NFT representing ownership has been minted to your wallet.
              </p>
              <div className="bg-card rounded-lg p-6 border border-border animate-fade-up delay-200">
                <div className="text-sm text-muted-foreground mb-2">Transaction Hash</div>
                <div className="wallet-address break-all text-success">
                  0x7f9a...3b4c...8e21...f5d6
                </div>
              </div>
              <Button
                variant="netflix"
                size="lg"
                className="mt-8"
                onClick={() => {
                  setIsSuccess(false);
                  setFormData({
                    propertyAddress: "",
                    city: "",
                    state: "",
                    zipCode: "",
                    propertySize: "",
                    description: "",
                  });
                }}
              >
                Register Another Property
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
                <FileText className="w-4 h-4" />
                Property Registration
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-primary mb-4">
                Register Your Property
              </h1>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Submit your property details to mint a unique NFT representing verified ownership.
              </p>
            </div>

            {/* Form Card - Netflix modal style */}
            <div className="bg-card rounded-lg p-8 border border-border shadow-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Property Address */}
                <div className="space-y-2">
                  <Label htmlFor="propertyAddress" className="flex items-center gap-2 text-primary">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    Property Address
                  </Label>
                  <Input
                    id="propertyAddress"
                    name="propertyAddress"
                    value={formData.propertyAddress}
                    onChange={handleChange}
                    placeholder="123 Main Street"
                    className="bg-muted border-border"
                    required
                  />
                </div>

                {/* City, State, Zip */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-primary">City</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="New York"
                      className="bg-muted border-border"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state" className="text-primary">State</Label>
                    <Input
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="NY"
                      className="bg-muted border-border"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode" className="text-primary">Zip Code</Label>
                    <Input
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      placeholder="10001"
                      className="bg-muted border-border"
                      required
                    />
                  </div>
                </div>

                {/* Property Size */}
                <div className="space-y-2">
                  <Label htmlFor="propertySize" className="flex items-center gap-2 text-primary">
                    <Maximize className="w-4 h-4 text-muted-foreground" />
                    Property Size (sq ft)
                  </Label>
                  <Input
                    id="propertySize"
                    name="propertySize"
                    type="number"
                    value={formData.propertySize}
                    onChange={handleChange}
                    placeholder="2500"
                    className="bg-muted border-border"
                    required
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description" className="text-primary">Property Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Provide additional details about the property..."
                    rows={4}
                    className="bg-muted border-border"
                  />
                </div>

                {/* Document Upload */}
                <div className="space-y-2">
                  <Label className="text-primary">Ownership Documents</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-accent/50 transition-colors cursor-pointer bg-muted/50">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground">
                      Drag and drop your documents, or{" "}
                      <span className="text-accent font-medium">browse</span>
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      PDF, JPG, PNG up to 10MB
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="netflix"
                  size="lg"
                  className="w-full glow-red"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Minting NFT on Blockchain...
                    </>
                  ) : (
                    <>
                      <FileText className="w-5 h-5" />
                      Register on Blockchain
                    </>
                  )}
                </Button>

                {/* Info */}
                <p className="text-xs text-center text-muted-foreground">
                  By registering, you confirm ownership and agree to our{" "}
                  <a href="#" className="text-accent hover:underline">
                    Terms of Service
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
