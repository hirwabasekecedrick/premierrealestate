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
        imageUrl: "/assets/front-pic-1.png"
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
        imageUrl: "/assets/front.png"
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
        imageUrl: "/assets/nice.png"
    }
];

export function FeaturedProperties() {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 animate-fade-in-up">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-heading font-medium text-secondary mb-6 leading-tight">
                            Handpicked <br />
                            <span className="text-primary italic">Featured Properties</span>
                        </h2>
                        <p className="text-muted text-lg max-w-xl">
                            Explore our handpicked selection of premium properties. From luxury villas to modern city apartments, find your perfect match.
                        </p>
                    </div>
                    <Link href="/buy" className="hidden md:flex items-center gap-3 text-secondary font-bold hover:text-primary transition-colors pb-2 border-b-2 border-secondary hover:border-primary group">
                        View All Properties
                        <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Listings Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {DUMMY_PROPERTIES.map((property, idx) => (
                        <div key={property.id} className="animate-fade-in-up" style={{ animationDelay: `${(idx + 1) * 200}ms` }}>
                            <PropertyCard {...property} />
                        </div>
                    ))}
                </div>

                {/* Mobile View All Button */}
                <div className="mt-10 md:hidden flex justify-center">
                    <Link href="/buy" className="flex items-center gap-2 bg-primary/10 text-primary font-medium hover:bg-primary/20 px-6 py-3 rounded-xl transition-colors">
                        View All Properties
                        <ArrowRight size={20} />
                    </Link>
                </div>

            </div>
        </section>
    );
}
