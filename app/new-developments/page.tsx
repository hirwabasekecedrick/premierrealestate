import { PropertyCard, PropertyProps } from "../components/property/PropertyCard";
import { Sparkles, Calendar } from "lucide-react";

const NEW_DEVELOPMENTS: PropertyProps[] = [
    {
        id: "nd1",
        title: "Kigali Heights Residences",
        price: "From FRW 250,000",
        location: "Kimihurura, Kigali",
        beds: 3,
        baths: 2,
        sqft: 200,
        imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        isFeatured: true,
    },
    {
        id: "nd2",
        title: "Vision City Phase 2",
        price: "From FRW 350,000",
        location: "Gacuriro, Kigali",
        beds: 4,
        baths: 3,
        sqft: 350,
        imageUrl: "https://images.unsplash.com/photo-1613490908578-83b9e4a3ed60?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        isFeatured: true,
    },
    {
        id: "nd3",
        title: "Greenwood Apartments",
        price: "From FRW 120,000",
        location: "Kagugu, Kigali",
        beds: 2,
        baths: 2,
        sqft: 150,
        imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        isFeatured: false,
    }
];

export default function NewDevelopmentsPage() {
    return (
        <div className="pb-20 bg-background min-h-screen">

            {/* Header */}
            <div className="bg-secondary py-16 text-center text-white mb-16 px-4">
                <div className="flex justify-center mb-4">
                    <div className="bg-primary/20 p-3 rounded-full">
                        <Sparkles className="text-primary" size={32} />
                    </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">New Developments</h1>
                <p className="text-lg max-w-2xl mx-auto text-gray-300">
                    Be the first to secure a spot in Kigali's most anticipated upcoming residential and commercial projects.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                    <h2 className="text-2xl font-heading font-bold text-secondary">Featured Projects</h2>
                    <div className="flex items-center gap-2 text-muted bg-white px-4 py-2 rounded-xl border border-border shadow-sm">
                        <Calendar size={18} />
                        <span className="text-sm font-medium">Completing 2024 - 2026</span>
                    </div>
                </div>

                {/* Listings Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {NEW_DEVELOPMENTS.map((property) => (
                        <div key={property.id} className="relative group">
                            <PropertyCard {...property} />
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-20 bg-secondary rounded-3xl p-10 text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 z-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')" }}></div>
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h3 className="text-3xl font-heading font-bold text-white mb-4">Looking for investment opportunities?</h3>
                        <p className="text-lg text-gray-300 mb-8">
                            Register your interest to receive exclusive off-plan pricing and floor plans before they go public.
                        </p>
                        <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-xl font-medium transition-colors shadow-lg shadow-primary/30">
                            Register Interest
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
