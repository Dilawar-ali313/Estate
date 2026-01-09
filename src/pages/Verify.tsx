import { useState } from "react";
import { Search, CheckCircle2, AlertCircle, MapPin, Maximize, User, Calendar, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface VerificationResult {
  isVerified: boolean;
  propertyId: string;
  owner: string;
  address: string;
  city: string;
  size: string;
  registeredDate: string;
  txHash: string;
}

const Verify = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<VerificationResult | null>(null);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setNotFound(false);
    setResult(null);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (searchQuery.toLowerCase().includes("123") || searchQuery.toLowerCase().includes("main")) {
      setResult({
        isVerified: true,
        propertyId: "PROP-2024-0847",
        owner: "0x1234567890abcdef1234567890abcdef12345678",
        address: "123 Main Street, Apt 4B",
        city: "New York, NY 10001",
        size: "2,500 sq ft",
        registeredDate: "January 15, 2024",
        txHash: "0x7f9a3b4c8e21f5d6a9c2e7b0d1f4a8c3e6b9d2a5",
      });
    } else {
      setNotFound(true);
    }

    setIsSearching(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success text-sm font-semibold mb-4">
                <Search className="w-4 h-4" />
                Ownership Verification
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-primary mb-4">
                Verify Property Ownership
              </h1>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Search by property ID, address, or wallet address to instantly verify ownership records.
              </p>
            </div>

            {/* Netflix-style Search Form */}
            <form onSubmit={handleSearch} className="mb-10">
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Enter property ID, address, or wallet..."
                    className="pl-12 h-14 text-lg bg-muted border-border focus:border-accent"
                    required
                  />
                </div>
                <Button type="submit" variant="netflix" size="lg" className="h-14 px-8" disabled={isSearching}>
                  {isSearching ? "Searching..." : "Verify"}
                </Button>
              </div>
            </form>

            {/* Loading State */}
            {isSearching && (
              <div className="bg-card rounded-lg p-8 border border-border text-center">
                <div className="spinner w-10 h-10 mx-auto mb-4" />
                <p className="text-muted-foreground">Querying blockchain records...</p>
              </div>
            )}

            {/* Not Found */}
            {notFound && (
              <div className="bg-card rounded-lg p-8 border border-destructive/30 text-center animate-fade-up">
                <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-8 h-8 text-destructive" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Property Not Found</h3>
                <p className="text-muted-foreground">
                  No property records match your search. Please check the ID or address.
                </p>
              </div>
            )}

            {/* Verification Result */}
            {result && (
              <div className="bg-card rounded-lg border border-border overflow-hidden animate-fade-up">
                {/* Header */}
                <div className="bg-success/10 px-6 py-4 flex items-center gap-3 border-b border-border">
                  <div className="w-10 h-10 rounded-full bg-success flex items-center justify-center glow-green">
                    <CheckCircle2 className="w-5 h-5 text-success-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-success">Ownership Verified</div>
                    <div className="text-sm text-muted-foreground">Property is registered on blockchain</div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-5">
                  {/* Property ID */}
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                      Property ID
                    </div>
                    <div className="font-mono text-accent font-bold">{result.propertyId}</div>
                  </div>

                  {/* Owner */}
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1 flex items-center gap-1">
                      <User className="w-3 h-3" />
                      Owner Wallet Address
                    </div>
                    <div className="wallet-address break-all">{result.owner}</div>
                  </div>

                  {/* Address */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        Property Address
                      </div>
                      <div className="text-primary font-medium">{result.address}</div>
                      <div className="text-sm text-muted-foreground">{result.city}</div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1 flex items-center gap-1">
                        <Maximize className="w-3 h-3" />
                        Property Size
                      </div>
                      <div className="text-primary font-medium">{result.size}</div>
                    </div>
                  </div>

                  {/* Registration Date */}
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      Registration Date
                    </div>
                    <div className="text-primary font-medium">{result.registeredDate}</div>
                  </div>

                  {/* Transaction Hash */}
                  <div className="pt-4 border-t border-border">
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Transaction Hash
                    </div>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-accent hover:underline font-mono text-sm"
                    >
                      {result.txHash}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Example Searches */}
            {!result && !notFound && !isSearching && (
              <div className="text-center text-sm text-muted-foreground">
                <p className="mb-3">Try searching for:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSearchQuery("123 Main Street")}
                    className="px-4 py-2 rounded-md bg-muted hover:bg-muted/70 transition-colors font-medium"
                  >
                    123 Main Street
                  </button>
                  <button
                    type="button"
                    onClick={() => setSearchQuery("PROP-2024-0847")}
                    className="px-4 py-2 rounded-md bg-muted hover:bg-muted/70 transition-colors font-medium"
                  >
                    PROP-2024-0847
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Verify;
