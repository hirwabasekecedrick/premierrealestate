import { MapPin, Bed, Bath, Square, CheckCircle2 } from "lucide-react";
import PropertyImageCarousel from "@/app/components/property/PropertyImageCarousel";
import PropertyContactForm from "@/app/components/property/PropertyContactForm";

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
    // Dummy data for demo
    const property = {
        title: "Modern Luxury Villa with Pool",
        price: "FRW 850,000",
        location: "Nyarutarama, Kigali",
        beds: 5,
        baths: 4,
        sqft: 4500,
        type: "Villa",
        status: "For Sale",
        description: "Experience unparalleled luxury in this stunning modern villa located in the heart of Nyarutarama. Featuring expansive floor-to-ceiling windows, a private pool, and a state-of-the-art chef's kitchen. The master suite offers panoramic views of Kigali's rolling hills.",
        amenities: [
            "Pool", "Smart Home Technology", "Gated Security 24/7",
            "Chef's Kitchen", "Home Theater", "Wine Cellar",
            "Landscaped Garden", "Double Garage"
        ],
        agent: {
            name: "Sales",
            role: "Senior Luxury Agent",
            phone: "+250 787 058 133",
            email: "info@premierrealestate.co.rw",
            avatar: "/Iribagiza-Rose.jpg" // Using an existing local asset for avatar
        },
        images: [
            "/assets/Main-PHOTO-2020-10-08-11-20-26-1.jpg",
            "/assets/PHOTO-2020-10-06-11-30-251.jpg",
            "/assets/b.png",
            "/assets/bedroom.png",
            "/assets/drone.png",
            "/assets/front.png",
            "/assets/front2.jpg",
            "/assets/img-brilliant-5.jpg"
        ]
    };

    return (
        <div className="bg-background min-h-screen">

            {/* Top Section: Carousel & Contact Form */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Image Gallery Header (Carousel) */}
                    <div className="lg:col-span-2">
                        <PropertyImageCarousel images={property.images} />
                    </div>

                    {/* Sidebar - Request Info Form (Top for Desktop) */}
                    <div className="lg:col-span-1 h-full">
                        <PropertyContactForm />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-10">
                        {/* Title & Price */}
                        <div>
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                <h1 className="text-3xl md:text-5xl font-heading font-bold text-secondary">
                                    {property.title}
                                </h1>
                                <div className="text-3xl md:text-4xl font-heading font-bold text-primary">
                                    {property.price}
                                </div>
                            </div>
                            <p className="text-muted text-lg flex items-center gap-2">
                                <MapPin size={20} className="text-primary" />
                                {property.location}
                            </p>
                        </div>

                        {/* Core Specs */}
                        <div className="flex flex-wrap gap-8 py-6 border-y border-border">
                            <div className="flex items-center gap-3">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <Bed size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-muted font-medium uppercase tracking-wider">Bedrooms</p>
                                    <p className="font-heading font-bold text-xl">{property.beds}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <Bath size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-muted font-medium uppercase tracking-wider">Bathrooms</p>
                                    <p className="font-heading font-bold text-xl">{property.baths}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <Square size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-muted font-medium uppercase tracking-wider">Square Ft.</p>
                                    <p className="font-heading font-bold text-xl">{property.sqft}</p>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <h2 className="text-2xl font-heading font-bold text-secondary mb-4">Property Description</h2>
                            <p className="text-foreground/80 leading-relaxed text-lg">
                                {property.description}
                            </p>
                        </div>

                        {/* Amenities */}
                        <div>
                            <h2 className="text-2xl font-heading font-bold text-secondary mb-6">Premium Amenities</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6">
                                {property.amenities.map((amenity, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-foreground/80">
                                        <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                                        <span>{amenity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Sidebar - Safety Tip */}
                    {/* <div className="lg:col-span-1">
                        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 text-sm text-muted leading-relaxed shadow-sm">
                            <strong className="text-secondary font-semibold block mb-2">Safety Tip:</strong>
                            Never transfer money before verifying the property and signing a legal agreement. Our agents are verified professionals who will walk you through the process securely.
                        </div>
                    </div> */}

                </div>
            </div>

        </div>
    );
}
