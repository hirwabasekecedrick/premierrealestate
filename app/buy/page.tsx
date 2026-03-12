"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  PropertyCard,
  PropertyProps,
} from "../components/property/PropertyCard";
import { Filter, Search, X } from "lucide-react";

const BUY_PROPERTIES: PropertyProps[] = [
  {
    id: "b1",
    title: "Exclusive Mansion in Vision City",
    price: "FRW 850,000,000",
    location: "Gacuriro, Kigali",
    beds: 6,
    baths: 5,
    sqft: 800,
    type: "Mansion",
    status: "For Sale",
    imageUrl: "/assets/front.png",
    isFeatured: true,
  },
  {
    id: "b2",
    title: "Modern 3-Bedroom Apartment",
    price: "FRW 150,000,000",
    location: "Kagugu, Kigali",
    beds: 3,
    baths: 2,
    sqft: 180,
    type: "Apartment",
    status: "For Sale",
    imageUrl: "/assets/front2.jpg",
    isFeatured: false,
  },
  {
    id: "b3",
    title: "Commercial Property with High ROI",
    price: "FRW 1,200,000,000",
    location: "Kiyovu, Kigali",
    beds: 0,
    baths: 4,
    sqft: 1200,
    type: "Commercial",
    status: "For Sale",
    imageUrl: "/assets/main.jpg",
    isFeatured: true,
  },
  {
    id: "b4",
    title: "Newly Built Villa",
    price: "FRW 350,000,000",
    location: "Kibagabaga, Kigali",
    beds: 4,
    baths: 3,
    sqft: 400,
    type: "Villa",
    status: "For Sale",
    imageUrl: "/assets/kagugu.png",
    isFeatured: false,
  },
  {
    id: "b5",
    title: "Charming Family House",
    price: "FRW 220,000,000",
    location: "Nyanza, Kigali",
    beds: 4,
    baths: 2,
    sqft: 250,
    type: "House",
    status: "For Sale",
    imageUrl: "/assets/penthouse.jpg",
    isFeatured: false,
  },
  {
    id: "b6",
    title: "Prime Land for Development",
    price: "FRW 500,000,000",
    location: "Rebero, Kigali",
    beds: 0,
    baths: 0,
    sqft: 2000,
    type: "Land",
    status: "For Sale",
    imageUrl: "/assets/nice.png",
    isFeatured: false,
  },
];

function BuyPageContent() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  const initialType = searchParams.get("type") || "Any Type";

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [propertyType, setPropertyType] = useState(initialType);
  const [sortBy, setSortBy] = useState("Newest First");

  const filteredProperties = useMemo(() => {
    let result = BUY_PROPERTIES.filter(
      (p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.location.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    if (propertyType !== "Any Type") {
      result = result.filter((p) => p.type === propertyType);
    }

    // Simple sorting logic based on price (parsing numbers)
    if (sortBy === "Price: Low to High") {
      result.sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^0-9]/g, "")) || 0;
        const priceB = parseInt(b.price.replace(/[^0-9]/g, "")) || 0;
        return priceA - priceB;
      });
    } else if (sortBy === "Price: High to Low") {
      result.sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^0-9]/g, "")) || 0;
        const priceB = parseInt(b.price.replace(/[^0-9]/g, "")) || 0;
        return priceB - priceA;
      });
    }

    return result;
  }, [searchQuery, propertyType, sortBy]);

  return (
    <div className="bg-background min-h-screen">
      <div
        className="relative py-16 text-center text-white mb-10 px-4 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/b.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 tracking-tight">
            Properties for Sale
          </h1>

          <p className="text-lg max-w-2xl mx-auto text-gray-200">
            Invest in your future with our curated selection of properties for
            sale in Kigali.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search and Filters Bar */}
        <div className="bg-white p-4 rounded-3xl shadow-sm border border-border mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search size={18} className="text-muted" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3.5 border border-border rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-muted/60"
              placeholder="Search by location or name..."
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-muted hover:text-primary transition-colors"
              >
                <X size={18} />
              </button>
            )}
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="px-5 py-3.5 border border-border rounded-2xl outline-none bg-background text-secondary font-bold w-full md:w-auto focus:ring-2 focus:ring-primary transition-all cursor-pointer"
            >
              <option>Any Type</option>
              <option>Villa</option>
              <option>Apartment</option>
              <option>Mansion</option>
              <option>House</option>
              <option>Commercial</option>
              <option>Land</option>
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-5 py-3.5 border border-border rounded-2xl outline-none bg-background text-secondary font-bold w-full md:w-auto focus:ring-2 focus:ring-primary transition-all cursor-pointer"
            >
              <option>Newest First</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
            <button className="flex items-center gap-2 px-6 py-3.5 border border-border rounded-2xl hover:bg-gray-50 transition-all text-secondary font-bold shrink-0 hover:shadow-md">
              <Filter size={18} />
              <span className="hidden sm:inline">Advanced</span>
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8 flex justify-between items-center">
          <p className="text-muted font-medium">
            Found{" "}
            <span className="text-secondary font-bold">
              {filteredProperties.length}
            </span>{" "}
            properties match your criteria
          </p>
          {propertyType !== "Any Type" && (
            <button
              onClick={() => setPropertyType("Any Type")}
              className="flex items-center gap-1 text-xs font-bold text-primary hover:underline"
            >
              <X size={14} /> Clear {propertyType} Filter
            </button>
          )}
        </div>

        {/* Listings Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-border">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Search size={32} className="text-muted" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-secondary mb-2">
              Oops! No properties found
            </h3>
            <p className="text-muted">
              We couldn&apos;t find any properties matching your search. Try
              different keywords or filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setPropertyType("Any Type");
              }}
              className="mt-6 text-primary font-bold hover:underline"
            >
              Reset all filters
            </button>
          </div>
        )}

        {/* Pagination Dummy */}
        {filteredProperties.length > 0 && (
          <div className="mt-16 flex justify-center">
            <div className="flex gap-2">
              {[1].map((page) => (
                <button
                  key={page}
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold transition-all ${page === 1 ? "bg-primary text-white shadow-lg shadow-primary/20" : "bg-white border border-border text-secondary hover:bg-gray-50"}`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function BuyPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen py-20 text-center">
          Loading properties...
        </div>
      }
    >
      <BuyPageContent />
    </Suspense>
  );
}
