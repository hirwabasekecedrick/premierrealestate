import { Flame, ArrowRight, MapPin, Bed, Bath, Square } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HOT_DEALS = [
    {
        id: "hd1",
        title: "Limited Penthouse Deal",
        price: "FRW 450,000,000",
        originalPrice: "FRW 520,000,000",
        location: "Kiyovu, Kigali",
        beds: 4,
        baths: 4,
        sqft: 3500,
        imageUrl: "/assets/penthouse.jpg",
        discount: "15% OFF",
        deadline: "Ends in 3 days"
    },
    {
        id: "hd2",
        title: "Industrial Warehouse Space",
        price: "FRW 850,000/mo",
        originalPrice: "FRW 1,100,000/mo",
        location: "Free Trade Zone, Kigali",
        beds: 0,
        baths: 2,
        sqft: 5000,
        imageUrl: "/assets/warehouse.webp",
        discount: "HOT LEASE",
        deadline: "Limited Slots"
    },
    {
        id: "hd3",
        title: "Modern Suburban Home",
        price: "FRW 180,000,000",
        originalPrice: "FRW 210,000,000",
        location: "Kagugu, Kigali",
        beds: 3,
        baths: 2,
        sqft: 2200,
        imageUrl: "/assets/front2.jpg",
        discount: "QUICK SALE",
        deadline: "Selling Fast"
    }
];

export function HotDeals() {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full font-bold text-sm mb-6 animate-pulse">
                            <Flame size={18} fill="currentColor" /> HOT DEALS OF THE WEEK
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-secondary mb-4 leading-tight">
                            Exclusive Offers You <br />
                            <span className="text-primary italic">Can't Miss</span>
                        </h2>
                        <p className="text-muted text-lg">
                            Grab these high-value properties at significantly reduced prices. These deals are updated weekly and move fast.
                        </p>
                    </div>
                    <Link href="/properties" className="group flex items-center gap-2 text-secondary font-bold hover:text-primary transition-colors pb-2 border-b-2 border-secondary hover:border-primary">
                        View All Deals
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {HOT_DEALS.map((deal) => (
                        <div key={deal.id} className="bg-white rounded-[2rem] overflow-hidden border border-border shadow-sm hover:shadow-2xl transition-all duration-500 group">
                            {/* Image Section */}
                            <div className="relative h-72 overflow-hidden">
                                <Image
                                    src={deal.imageUrl}
                                    alt={deal.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="bg-red-600 text-white text-xs font-black px-4 py-1.5 rounded-full shadow-lg">
                                        {deal.discount}
                                    </span>
                                </div>
                                <div className="absolute top-4 right-4 z-10">
                                    <span className="bg-white/90 backdrop-blur-md text-secondary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter shadow-sm">
                                        {deal.deadline}
                                    </span>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8">
                                <div className="flex items-center gap-1.5 text-primary text-sm font-bold mb-3 uppercase tracking-wider">
                                    <MapPin size={14} />
                                    {deal.location}
                                </div>
                                <h3 className="text-2xl font-heading font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                                    {deal.title}
                                </h3>

                                <div className="flex flex-wrap gap-4 mb-6 py-4 border-y border-gray-50">
                                    {deal.beds > 0 && (
                                        <div className="flex items-center gap-1.5 text-muted text-sm font-medium">
                                            <Bed size={16} className="text-primary/60" />
                                            {deal.beds} Beds
                                        </div>
                                    )}
                                    <div className="flex items-center gap-1.5 text-muted text-sm font-medium">
                                        <Bath size={16} className="text-primary/60" />
                                        {deal.baths} Baths
                                    </div>
                                    <div className="flex items-center gap-1.5 text-muted text-sm font-medium">
                                        <Square size={16} className="text-primary/60" />
                                        {deal.sqft} sqft
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-xs text-muted line-through mb-0.5">{deal.originalPrice}</div>
                                        <div className="text-2xl font-heading font-black text-secondary">{deal.price}</div>
                                    </div>
                                    <Link
                                        href={`/properties/${deal.id}`}
                                        className="w-12 h-12 bg-secondary text-white rounded-2xl flex items-center justify-center hover:bg-primary transition-all shadow-lg active:scale-90"
                                    >
                                        <ArrowRight size={20} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
