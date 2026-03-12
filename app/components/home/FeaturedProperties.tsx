import { PropertyCard, PropertyProps } from "../property/PropertyCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const DUMMY_PROPERTIES: PropertyProps[] = [
    {
        id: "1",
        title: "Modern Luxury Villa",
        price: "FRW 850,000",
        location: "Nyarutarama, Kigali",
        beds: 5,
        baths: 4,
        sqft: 4500,
        type: "Villa",
        status: "For Sale",
        imageUrl: "https://images.unsplash.com/photo-1613490900233-141c5560ddaf?w=800&q=80"
    },
    {
        id: "2",
        title: "City View Penthouse",
        price: "FRW 4,500/mo",
        location: "Kiyovu, Kigali",
        beds: 3,
        baths: 3,
        sqft: 2800,
        type: "Apartment",
        status: "For Rent",
        imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80"
    },
    {
        id: "3",
        title: "Elegant Family Home",
        price: "FRW 420,000",
        location: "Kacyiru, Kigali",
        beds: 4,
        baths: 3,
        sqft: 3200,
        type: "House",
        status: "For Sale",
        imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
    }
];

export function FeaturedProperties() {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
                            Featured Properties
                        </h2>
                        <p className="text-muted text-lg">
                            Explore our handpicked selection of premium properties. From luxury villas to modern city apartments, find your perfect match.
                        </p>
                    </div>
                    <Link href="/properties" className="hidden md:flex items-center gap-2 text-primary font-medium hover:text-primary-hover transition-colors group">
                        View All Properties
                        <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Listings Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {DUMMY_PROPERTIES.map((property) => (
                        <PropertyCard key={property.id} {...property} />
                    ))}
                </div>

                {/* Mobile View All Button */}
                <div className="mt-10 md:hidden flex justify-center">
                    <Link href="/properties" className="flex items-center gap-2 bg-primary/10 text-primary font-medium hover:bg-primary/20 px-6 py-3 rounded-xl transition-colors">
                        View All Properties
                        <ArrowRight size={20} />
                    </Link>
                </div>

            </div>
        </section>
    );
}
