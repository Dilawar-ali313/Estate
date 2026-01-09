import { Wallet, FileText, Coins, ShieldCheck } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Wallet,
    title: "Connect Wallet",
    description: "Link your MetaMask or any Web3 wallet to securely interact with the blockchain.",
  },
  {
    number: 2,
    icon: FileText,
    title: "Register Property",
    description: "Submit property details including location, size, and ownership documents.",
  },
  {
    number: 3,
    icon: Coins,
    title: "Mint NFT",
    description: "Your property is tokenized as a unique NFT with immutable records.",
  },
  {
    number: 4,
    icon: ShieldCheck,
    title: "Verify Ownership",
    description: "Anyone can verify property ownership instantly through our system.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            A simple, transparent process to secure your property on blockchain
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative bg-card rounded-lg p-6 border border-border hover:border-accent/50 transition-all duration-300 group hover:bg-card/80"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Step Number */}
              <div className="step-number mb-5 group-hover:animate-glow transition-all">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <step.icon className="w-6 h-6 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-3 w-6 border-t-2 border-dashed border-accent/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
