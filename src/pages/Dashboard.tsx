import { Building2, TrendingUp, Shield, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";

const mockProperties = [
  {
    id: "PROP-2024-0847",
    address: "123 Main Street, Apt 4B",
    city: "New York, NY",
    size: "2,500 sq ft",
    status: "verified" as const,
  },
  {
    id: "PROP-2024-0912",
    address: "456 Oak Avenue, Suite 12",
    city: "Los Angeles, CA",
    size: "3,200 sq ft",
    status: "verified" as const,
  },
  {
    id: "PROP-2024-1023",
    address: "789 Pine Road",
    city: "Chicago, IL",
    size: "1,800 sq ft",
    status: "pending" as const,
  },
  {
    id: "PROP-2024-1156",
    address: "321 Maple Boulevard, Unit 8",
    city: "Miami, FL",
    size: "4,100 sq ft",
    status: "verified" as const,
  },
];

const stats = [
  {
    icon: Building2,
    label: "Total Properties",
    value: "4",
    change: "+2 this month",
  },
  {
    icon: Shield,
    label: "Verified",
    value: "3",
    change: "75% verified",
  },
  {
    icon: TrendingUp,
    label: "Total Value",
    value: "$2.4M",
    change: "+12% growth",
  },
  {
    icon: Clock,
    label: "Pending",
    value: "1",
    change: "Awaiting verification",
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-5xl font-black text-primary mb-2">
              My Properties
            </h1>
            <p className="text-muted-foreground">
              Manage and track all your blockchain-verified real estate assets
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-card rounded-lg p-5 border border-border hover:border-accent/30 transition-colors animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-accent" />
                  </div>
                </div>
                <div className="text-3xl font-black text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
                <div className="text-xs text-success mt-2 font-medium">{stat.change}</div>
              </div>
            ))}
          </div>

          {/* Filter Tabs */}
          <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
            <h2 className="text-xl font-bold text-primary">Your Properties</h2>
            <div className="flex gap-2">
              <button className="px-4 py-2 text-sm font-semibold rounded-md bg-accent text-accent-foreground">
                All
              </button>
              <button className="px-4 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-muted transition-colors">
                Verified
              </button>
              <button className="px-4 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-muted transition-colors">
                Pending
              </button>
            </div>
          </div>

          {/* Properties Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockProperties.map((property, index) => (
              <div
                key={property.id}
                className="animate-fade-up"
                style={{ animationDelay: `${(index + 4) * 50}ms` }}
              >
                <PropertyCard {...property} />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {mockProperties.length === 0 && (
            <div className="text-center py-20">
              <Building2 className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">No properties yet</h3>
              <p className="text-muted-foreground mb-6">
                Register your first property to get started
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
