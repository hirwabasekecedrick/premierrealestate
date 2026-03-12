import Image from "next/image";
import { MapPin, Bed, Bath, Square, CheckCircle2, Phone, Mail, CalendarDays } from "lucide-react";

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
        description: "Experience unparalleled luxury in this stunning modern villa located in the heart of Nyarutarama. Featuring expansive floor-to-ceiling windows, a private infinity pool, and a state-of-the-art chef's kitchen. The master suite offers panoramic views of Kigali's rolling hills.",
        amenities: [
            "Infinity Pool", "Smart Home Technology", "Gated Security 24/7",
            "Chef's Kitchen", "Home Theater", "Wine Cellar",
            "Landscaped Garden", "Double Garage"
        ],
        agent: {
            name: "Elise Kamanzi",
            role: "Senior Luxury Agent",
            phone: "+250 788 000 001",
            email: "elise@premierrealestate.co.rw",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&q=80"
        },
        images: [
            "https://images.unsplash.com/photo-1613490900233-141c5560ddaf?w=1200&q=80",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
        ]
    };

    return (
        <div className="bg-background min-h-screen">

            {/* Image Gallery Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-sm">
                    <div className="col-span-4 md:col-span-3 row-span-2 relative group cursor-pointer">
                        <Image src={property.images[0]} alt="Main" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute top-4 left-4 flex gap-2">
                            <span className="bg-primary text-white font-bold px-4 py-2 rounded-full shadow-lg text-sm">{property.status}</span>
                            <span className="bg-white/90 backdrop-blur-md text-secondary font-bold px-4 py-2 rounded-full shadow-lg text-sm">{property.type}</span>
                        </div>
                    </div>
                    <div className="hidden md:block col-span-1 row-span-1 relative overflow-hidden group cursor-pointer">
                        <Image src={property.images[1]} alt="Side 1" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="hidden md:block col-span-1 row-span-1 relative overflow-hidden group cursor-pointer">
                        <Image src={property.images[2]} alt="Side 2" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-secondary/40 flex items-center justify-center hover:bg-secondary/50 transition-colors">
                            <span className="text-white font-medium">+5 Photos</span>
                        </div>
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

                    {/* Sidebar - Agent & CTAs */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-3xl p-8 border border-border shadow-2xl sticky top-32">
                            <h3 className="font-heading font-bold text-xl text-secondary mb-6">Interested in this property?</h3>

                            {/* Agent Profile */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                                    <Image src={property.agent.avatar} alt={property.agent.name} fill className="object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-heading font-bold text-lg text-secondary">{property.agent.name}</h4>
                                    <p className="text-primary text-sm font-medium">{property.agent.role}</p>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-4 mb-8">
                                <button className="w-full bg-secondary hover:bg-secondary-light text-white font-medium py-3.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
                                    <CalendarDays size={20} />
                                    Get Started
                                </button>
                                <button className="w-full bg-primary hover:bg-primary-hover text-white font-medium py-3.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
                                    <Phone size={20} />
                                    Call Agent
                                </button>
                                <button className="w-full bg-transparent hover:bg-gray-50 border border-border text-secondary font-medium py-3.5 rounded-xl transition-all flex items-center justify-center gap-2">
                                    <Mail size={20} />
                                    Send Message
                                </button>
                            </div>

                            {/* Safety Tip */}
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-xs text-muted leading-relaxed">
                                <strong className="text-secondary font-semibold block mb-1">Safety Tip:</strong>
                                Never transfer money before verifying the property and signing a legal agreement. Our agents are verified professionals.
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}
