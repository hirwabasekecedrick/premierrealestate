import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const NEIGHBORHOODS = [
    {
        name: "Nyarutarama",
        listings: 45,
        imageUrl: "/assets/kagugu.png",
        span: "col-span-1 md:col-span-2 row-span-2",
    },
    {
        name: "Kacyiru",
        listings: 32,
        imageUrl: "/assets/nice.png",
        span: "col-span-1 row-span-1",
    },
    {
        name: "Kiyovu",
        listings: 28,
        imageUrl: "/assets/kiyovu.png",
        span: "col-span-1 row-span-1",
    },
    {
        name: "Kimihurura",
        listings: 56,
        imageUrl: "/assets/sky-view.jpg",
        span: "col-span-1 row-span-1",
    },
    {
        name: "Gacuriro",
        listings: 24,
        imageUrl: "/assets/front.png",
        span: "col-span-1 row-span-1",
    },
];

export function Neighborhoods() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
                        Explore Kigali Neighborhoods
                    </h2>
                    <p className="text-muted text-lg">
                        Find the perfect location that fits your lifestyle. From the bustling diplomatic zones to the quiet, leafy suburbs.
                    </p>
                </div>

                {/* CSS Grid for Areas */}
                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px] auto-rows-[290px]">
                    {NEIGHBORHOODS.map((area, index) => (
                        <Link
                            key={area.name}
                            href={`/properties?location=${area.name}`}
                            className={`group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 block ${area.span}`}
                        >
                            {/* Background Image */}
                            <Image
                                src={area.imageUrl}
                                alt={`${area.name} Neighborhood`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end">
                                <div>
                                    <h3 className="text-white font-heading font-bold text-2xl mb-1 drop-shadow-md">
                                        {area.name}
                                    </h3>
                                    <p className="text-gray-300 text-sm font-medium">
                                        {area.listings} Properties
                                    </p>
                                </div>

                                {/* View Icon Button */}
                                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-primary transition-colors">
                                    <ArrowUpRight size={20} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}
