import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import PropertyCard from "./PropertyCard";

interface Property {
  id: string;
  address: string;
  city: string;
  size: string;
  status: "verified" | "pending";
  image?: string;
}

interface PropertyRowProps {
  title: string;
  properties: Property[];
}

const PropertyRow = ({ title, properties }: PropertyRowProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative group">
      {/* Section Title */}
      <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 px-4 md:px-0">
        {title}
      </h3>

      {/* Scroll Container */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-full bg-gradient-to-r from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-start pl-2"
        >
          <ChevronLeft className="w-8 h-8 text-primary" />
        </button>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="netflix-row px-4 md:px-0"
        >
          {properties.map((property) => (
            <div key={property.id} className="w-[280px] md:w-[300px]">
              <PropertyCard {...property} />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-full bg-gradient-to-l from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-end pr-2"
        >
          <ChevronRight className="w-8 h-8 text-primary" />
        </button>
      </div>
    </div>
  );
};

export default PropertyRow;
