import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PropertyRow from "@/components/PropertyRow";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const recentProperties = [
  { id: "PROP-2024-0847", address: "123 Main Street, Apt 4B", city: "New York, NY", size: "2,500 sq ft", status: "verified" as const },
  { id: "PROP-2024-0912", address: "456 Oak Avenue, Suite 12", city: "Los Angeles, CA", size: "3,200 sq ft", status: "verified" as const },
  { id: "PROP-2024-1023", address: "789 Pine Road", city: "Chicago, IL", size: "1,800 sq ft", status: "pending" as const },
  { id: "PROP-2024-1156", address: "321 Maple Boulevard, Unit 8", city: "Miami, FL", size: "4,100 sq ft", status: "verified" as const },
  { id: "PROP-2024-1287", address: "555 Cedar Lane", city: "Seattle, WA", size: "2,800 sq ft", status: "verified" as const },
  { id: "PROP-2024-1398", address: "777 Birch Street", city: "Denver, CO", size: "3,500 sq ft", status: "pending" as const },
];

const verifiedProperties = [
  { id: "PROP-2024-0101", address: "100 Blockchain Ave", city: "Austin, TX", size: "5,000 sq ft", status: "verified" as const },
  { id: "PROP-2024-0202", address: "200 Crypto Lane", city: "Boston, MA", size: "2,200 sq ft", status: "verified" as const },
  { id: "PROP-2024-0303", address: "300 Token Street", city: "Portland, OR", size: "1,900 sq ft", status: "verified" as const },
  { id: "PROP-2024-0404", address: "400 Web3 Boulevard", city: "Phoenix, AZ", size: "3,800 sq ft", status: "verified" as const },
  { id: "PROP-2024-0505", address: "500 Decentralized Dr", city: "Atlanta, GA", size: "2,600 sq ft", status: "verified" as const },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        
        {/* Netflix-style Property Rows */}
        <section className="py-16 space-y-12">
          <div className="container mx-auto">
            <PropertyRow title="Recently Registered Properties" properties={recentProperties} />
          </div>
          <div className="container mx-auto">
            <PropertyRow title="Verified Properties" properties={verifiedProperties} />
          </div>
        </section>

        <HowItWorks />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
