import { Link } from "react-router-dom";
import { Wallet, FileText, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center hero-gradient overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Red glow accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Netflix-style large headline */}
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-primary leading-[0.95] mb-6 animate-slide-up tracking-tight">
            Decentralized
            <br />
            <span className="text-accent">Real Estate.</span>
            <br />
            <span className="text-muted-foreground text-4xl md:text-5xl lg:text-6xl font-bold">
              Verified on Blockchain.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up delay-200">
            Own, register, and verify property ownership securely using smart contracts. 
            Immutable records. Zero fraud.
          </p>

          {/* CTA Buttons - Netflix style */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
            <Button variant="netflix" size="xl" className="glow-red">
              <Wallet className="w-5 h-5" />
              Connect Wallet
            </Button>
            <Button variant="netflix-secondary" size="xl" asChild>
              <Link to="/register">
                <FileText className="w-5 h-5" />
                Register Property
              </Link>
            </Button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto animate-fade-up delay-400">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-primary mb-1">2,500+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Properties Verified</div>
            </div>
            <div className="text-center border-x border-border">
              <div className="text-4xl md:text-5xl font-black text-primary mb-1">$1.2B</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Value Secured</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-accent mb-1">100%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Fraud Prevention</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
