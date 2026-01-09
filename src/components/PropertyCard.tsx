import { MapPin, Maximize, CheckCircle2, Hexagon } from "lucide-react";

interface PropertyCardProps {
  id: string;
  address: string;
  city: string;
  size: string;
  status: "verified" | "pending";
  image?: string;
}

const PropertyCard = ({ id, address, city, size, status, image }: PropertyCardProps) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden card-hover border border-border/50 group">
      {/* Property Image */}
      <div className="relative h-40 bg-muted overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={address} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
            <MapPin className="w-10 h-10 text-muted-foreground/30" />
          </div>
        )}
        
        {/* NFT Badge */}
        <div className="absolute top-2 left-2 nft-badge">
          <Hexagon className="w-3 h-3" />
          NFT
        </div>

        {/* Status Badge */}
        <div className="absolute top-2 right-2">
          {status === "verified" ? (
            <div className="verified-badge glow-green">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Verified
            </div>
          ) : (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-yellow-500/20 text-yellow-500">
              Pending
            </div>
          )}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Property Details */}
      <div className="p-4">
        {/* Property ID */}
        <div className="text-xs font-mono text-accent mb-1.5">
          {id}
        </div>

        {/* Address */}
        <h3 className="font-semibold text-primary text-sm mb-2 line-clamp-1 group-hover:text-accent transition-colors">
          {address}
        </h3>

        {/* Meta Info */}
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {city}
          </div>
          <div className="flex items-center gap-1">
            <Maximize className="w-3 h-3" />
            {size}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
