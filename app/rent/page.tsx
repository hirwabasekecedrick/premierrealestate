"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PropertyCard, PropertyProps } from "../components/property/PropertyCard";
import { Filter, Search, X } from "lucide-react";

const RENT_PROPERTIES: PropertyProps[] = [
    {
        id: "r1",
        title: "Modern Apartment in Gacuriro",
        price: "FRW 1,200,000/mo",
        location: "Gacuriro, Kigali",
        beds: 2,
        baths: 2,
        sqft: 120,
        type: "Apartment",
        status: "For Rent",
        imageUrl: "/assets/front-pic-1.png",
        isFeatured: true,
    },
    {
        id: "r2",
        title: "Spacious Villa with Pool",
        price: "FRW 3,500,000/mo",
        location: "Nyarutarama, Kigali",
        beds: 4,
        baths: 3,
        sqft: 450,
        type: "Villa",
        status: "For Rent",
        imageUrl: "/assets/nice.png",
        isFeatured: false,
    },
    {
        id: "r3",
        title: "Cozy Studio in City Center",
        price: "FRW 800,000/mo",
        location: "Kiyovu, Kigali",
        beds: 1,
        baths: 1,
        sqft: 65,
        type: "Apartment",
        status: "For Rent",
        imageUrl: "/assets/kagugu.png",
        isFeatured: false,
    },
    {
        id: "r4",
        title: "Family Home with Garden",
        price: "FRW 2,000,000/mo",
        location: "Kibagabaga, Kigali",
        beds: 3,
        baths: 2,
        sqft: 300,
        type: "House",
        status: "For Rent",
        imageUrl: "/assets/front.png",
        isFeatured: true,
    },
    {
        id: "r5",
        title: "Luxury Penthouse",
        price: "FRW 4,500,000/mo",
        location: "Kacyiru, Kigali",
        beds: 3,
        baths: 3,
        sqft: 350,
        type: "Apartment",
        status: "For Rent",
        imageUrl: "/assets/penthouse.jpg",
        isFeatured: false,
    },
    {
        id: "r6",
        title: "Office Space in CBD",
        price: "FRW 1,500,000/mo",
        location: "Nyarugenge, Kigali",
        beds: 0,
        baths: 1,
        sqft: 150,
        type: "Commercial",
        status: "For Rent",
        imageUrl: "/assets/m_plaza.jpg",
        isFeatured: false,
    }
];

function RentPageContent() {
    const searchParams = useSearchParams();
    const initialSearch = searchParams.get("search") || "";
    const initialType = searchParams.get("type") || "Any Type";

    const [searchQuery, setSearchQuery] = useState(initialSearch);
    const [propertyType, setPropertyType] = useState(initialType);
    const [sortBy, setSortBy] = useState("Newest First");

    const filteredProperties = useMemo(() => {
        let result = RENT_PROPERTIES.filter(p =>
            p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.location.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (propertyType !== "Any Type") {
            result = result.filter(p => p.type === propertyType);
        }

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
        <div className="pb-20 bg-background min-h-screen">

            {/* Header */}
            <div className="bg-secondary py-16 text-center text-white mb-10 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 relative z-10 tracking-tight">Properties for Rent</h1>
                <p className="text-lg max-w-2xl mx-auto text-gray-300 relative z-10">
                    Discover a wide range of rental properties across Kigali's vibrant neighborhoods.
                </p>
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
                        Found <span className="text-secondary font-bold">{filteredProperties.length}</span> rental properties
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
                        <h3 className="text-2xl font-heading font-bold text-secondary mb-2">Oops! No rentals found</h3>
                        <p className="text-muted">We couldn't find any rentals matching your search. Try different keywords or filters.</p>
                        <button
                            onClick={() => {
                                setSearchQuery("");
                                setPropertyType("Any Type");
                            }}
                            className="mt-6 text-primary font-bold hover:underline"
                        >
                            Reset search
                        </button>
                    </div>
                )}

                {/* Pagination Dummy */}
                {filteredProperties.length > 0 && (
                    <div className="mt-16 flex justify-center">
                        <div className="flex gap-2">
                            {[1].map((page) => (
                                <button key={page} className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold transition-all ${page === 1 ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-white border border-border text-secondary hover:bg-gray-50'}`}>
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

export default function RentPage() {
    return (
        <Suspense fallback={<div className="min-h-screen py-20 text-center">Loading listings...</div>}>
            <RentPageContent />
        </Suspense>
    );
}
