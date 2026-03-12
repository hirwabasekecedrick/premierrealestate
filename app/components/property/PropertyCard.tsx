import Image from "next/image";
import Link from "next/link";
import { MapPin, Bed, Bath, Square, Heart } from "lucide-react";

export interface PropertyProps {
    id: string;
    title: string;
    price: string;
    location: string;
    beds: number;
    baths: number;
    sqft: number;
    type?: string;
    status?: "For Sale" | "For Rent";
    imageUrl: string;
    isFeatured?: boolean;
}

export function PropertyCard({
    id, title, price, location, beds, baths, sqft, type = "Villa", status = "For Sale", imageUrl
}: PropertyProps) {
    return (
        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border flex flex-col h-full transform hover:-translate-y-1">
            {/* Image Container */}
            <div className="relative h-64 w-full overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                        {status}
                    </span>
                    <div className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                        {type}
                    </div>
                </div>


                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link href={`/properties/${id}`} className="bg-white text-secondary font-medium px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        Quick View
                    </Link>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="mb-2 font-heading text-2xl font-bold text-primary">
                    {price}
                </div>
                <h3 className="font-heading text-xl font-semibold text-secondary mb-1 line-clamp-1">
                    {title}
                </h3>
                <p className="text-muted flex items-center gap-1.5 mb-4 text-sm">
                    <MapPin size={16} />
                    {location}
                </p>

                {/* Divider */}
                <div className="h-px w-full bg-border mb-4"></div>

                {/* Specs */}
                <div className="flex items-center justify-between text-muted text-sm mt-auto mb-6">
                    <div className="flex items-center gap-1.5">
                        <Bed size={18} className="text-secondary/70" />
                        <span>{beds} Beds</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Bath size={18} className="text-secondary/70" />
                        <span>{baths} Baths</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Square size={18} className="text-secondary/70" />
                        <span>{sqft} sqft</span>
                    </div>
                </div>

                {/* Action Button */}
                <Link
                    href={`/properties/${id}`}
                    className="w-full text-center block bg-secondary/5 hover:bg-secondary text-secondary hover:text-white border border-secondary/10 py-3 rounded-xl font-medium transition-colors"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
}
