import { CheckCircle2, Lock, Globe, Zap, History, Users } from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "Immutable Records",
    description: "Property ownership records permanently stored on blockchain, preventing tampering.",
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description: "Access and verify ownership from anywhere in the world, 24/7.",
  },
  {
    icon: Zap,
    title: "Instant Verification",
    description: "Verify property ownership in seconds instead of weeks. No paperwork.",
  },
  {
    icon: History,
    title: "Complete History",
    description: "View complete ownership history and all transactions for any property.",
  },
  {
    icon: Users,
    title: "Smart Transfers",
    description: "Transfer ownership securely through smart contracts with escrow.",
  },
  {
    icon: CheckCircle2,
    title: "Government Ready",
    description: "Designed to integrate with existing land registry systems.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-4">
            Why Choose <span className="text-accent">Monkschain</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Enterprise-grade security meets blockchain innovation
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card rounded-lg p-6 border border-border hover:border-success/50 transition-all duration-300 group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center mb-4 group-hover:bg-success/20 transition-colors">
                <feature.icon className="w-6 h-6 text-success" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-primary mb-2 flex items-center gap-2">
                {feature.title}
                <CheckCircle2 className="w-4 h-4 text-success" />
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
