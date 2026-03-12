"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, Home, DollarSign } from "lucide-react";

const HERO_CONTENT = [
    {
        title: "Welcome to Kigali",
        subtitle: "Premier Real Estate Services is a boutique real estate firm in Kigali Rwanda specializing in residential and commercial rentals and sales.",
        bgImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
    },
    {
        title: "Residences",
        subtitle: "Home is more than a place, it’s a feeling.",
        bgImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
        title: "Office Spaces",
        subtitle: "Others see windows, we see opportunities.",
        bgImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
    },
    {
        title: "Industrial Spots",
        subtitle: "Maximize your property potential",
        bgImage: "https://images.unsplash.com/photo-1580982337632-15f5cbeb6e1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
];

export function HeroSection() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<"buy" | "rent">("buy");
    const [currentSlide, setCurrentSlide] = useState(0);

    // Search States
    const [location, setLocation] = useState("");
    const [propertyType, setPropertyType] = useState("Any Type");
    const [priceRange, setPriceRange] = useState("Any Price");

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % HERO_CONTENT.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const handleSearch = () => {
        const params = new URLSearchParams();
        if (location) params.append("search", location);
        if (propertyType !== "Any Type") params.append("type", propertyType);
        // Simplified price filter logic for routing
        if (priceRange !== "Any Price") params.append("price", priceRange);

        router.push(`/${activeTab}?${params.toString()}`);
    };

    return (
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
            {/* Background Images */}
            {HERO_CONTENT.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                    style={{ backgroundImage: `url('${slide.bgImage}')` }}
                >
                    <div className="absolute inset-0 bg-secondary/70"></div>
                </div>
            ))}

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center mt-16">
                <div className="text-center mb-10 pb-4 h-48 flex flex-col justify-end">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 tracking-tight drop-shadow-lg transition-all duration-500 transform translate-y-0">
                        {HERO_CONTENT[currentSlide].title}
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md transition-all duration-500">
                        {HERO_CONTENT[currentSlide].subtitle}
                    </p>
                </div>

                {/* Premium Search Bar Panel */}
                <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md p-2 rounded-3xl shadow-2xl border border-white/20">
                    <div className="bg-white rounded-2xl p-4 md:p-6 shadow-inner">

                        {/* Buy / Rent Toggle */}
                        <div className="flex items-center gap-4 mb-6 pt-1 pl-2">
                            <button
                                onClick={() => setActiveTab("buy")}
                                className={`text-lg font-medium transition-colors pb-2 border-b-2 ${activeTab === 'buy' ? 'border-primary text-primary' : 'border-transparent text-muted hover:text-primary'}`}
                            >
                                For Sale
                            </button>
                            <button
                                onClick={() => setActiveTab("rent")}
                                className={`text-lg font-medium transition-colors pb-2 border-b-2 ${activeTab === 'rent' ? 'border-primary text-primary' : 'border-transparent text-muted hover:text-primary'}`}
                            >
                                For Rent
                            </button>
                        </div>

                        {/* Form Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">

                            <div className="w-full">
                                <label className="block text-sm font-medium text-muted mb-1 ml-1">Location</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <MapPin size={18} className="text-muted" />
                                    </div>
                                    <input
                                        type="text"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        className="w-full pl-10 pr-3 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-muted/50"
                                        placeholder="e.g. Nyarutarama"
                                    />
                                </div>
                            </div>

                            <div className="w-full">
                                <label className="block text-sm font-medium text-muted mb-1 ml-1">Property Type</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Home size={18} className="text-muted" />
                                    </div>
                                    <select
                                        value={propertyType}
                                        onChange={(e) => setPropertyType(e.target.value)}
                                        className="w-full pl-10 pr-3 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none bg-white cursor-pointer"
                                    >
                                        <option>Any Type</option>
                                        <option>Villa</option>
                                        <option>Apartment</option>
                                        <option>Mansion</option>
                                        <option>Commercial</option>
                                    </select>
                                </div>
                            </div>

                            <div className="w-full">
                                <label className="block text-sm font-medium text-muted mb-1 ml-1">Price Range</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <DollarSign size={18} className="text-muted" />
                                    </div>
                                    <select
                                        value={priceRange}
                                        onChange={(e) => setPriceRange(e.target.value)}
                                        className="w-full pl-10 pr-3 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none bg-white cursor-pointer"
                                    >
                                        <option>Any Price</option>
                                        <option>FRW 100k - FRW 300k</option>
                                        <option>FRW 300k - FRW 500k</option>
                                        <option>FRW 500k - FRW 1M</option>
                                        <option>FRW 1M+</option>
                                    </select>
                                </div>
                            </div>

                            <div className="w-full">
                                <button
                                    onClick={handleSearch}
                                    className="w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 h-[48px] shadow-lg hover:shadow-primary/30 active:scale-[0.98]"
                                >
                                    <Search size={20} />
                                    <span>Search</span>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
