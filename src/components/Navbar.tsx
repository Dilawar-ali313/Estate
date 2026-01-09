import API from "../api";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Building2, Menu, X, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/register", label: "Register Property" },
    { href: "/verify", label: "Verify Ownership" },
    { href: "/dashboard", label: "Dashboard" },
  ];
const connectWallet = async () => {
  try {
    if (!(window as any).ethereum) {
      alert("MetaMask install nahi hai");
      return;
    }

   const accounts = await (window as any).ethereum.request({
  method: "eth_requestAccounts",
});

const wallet = accounts[0];

const res = await API.post("/auth/wallet-login", { wallet });
const { token } = res.data;

localStorage.setItem("token", token);

setIsConnected(true);
setWalletAddress(wallet);

alert("wallet connected ✅");
  } catch (error) {
    console.log(error);
    alert("Error connecting wallet");
  }
};
 

  const truncateAddress = (address: string) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center group-hover:shadow-netflix transition-all">
              <Building2 className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className="font-black text-lg text-primary">Monkschain <span className="text-accent">2026</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all",
                  location.pathname === link.href
                    ? "text-accent"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Wallet Button */}
          <div className="hidden md:flex items-center gap-3">
            {isConnected ? (
              <div className="flex items-center gap-2">
                <span className="wallet-address">{truncateAddress(walletAddress)}</span>
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              </div>
            ) : (
              <Button variant="netflix" size="sm" onClick={connectWallet}>
                <Wallet className="w-4 h-4" />
                Connect Wallet
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    location.pathname === link.href
                      ? "bg-accent/10 text-accent"
                      : "text-muted-foreground hover:text-primary hover:bg-muted"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 mt-2 border-t border-border">
                {isConnected ? (
                  <div className="flex items-center gap-2 px-4">
                    <span className="wallet-address">{truncateAddress(walletAddress)}</span>
                    <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  </div>
                ) : (
                  <Button variant="netflix" className="w-full" onClick={connectWallet}>
                    <Wallet className="w-4 h-4" />
                    Connect Wallet
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
