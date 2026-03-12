import Image from "next/image";
import Link from "next/link";
import { MapPin, Bed, Bath, Square, ArrowUpRight } from "lucide-react";

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
    id, title, price, location, beds, baths, sqft, status = "For Sale", imageUrl
}: PropertyProps) {
    return (
        <div className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full transform hover:-translate-y-2">
            {/* Image Container */}
            <div className="relative h-72 w-full overflow-hidden p-4">
                <div className="relative h-full w-full rounded-[2rem] overflow-hidden">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                        <span className="bg-white/90 backdrop-blur-md text-secondary text-[10px] font-black px-4 py-1.5 rounded-full shadow-sm uppercase tracking-wider">
                            {status}
                        </span>
                    </div>

                </div>
            </div>

            {/* Content */}
            <div className="p-8 pt-2 flex flex-col flex-grow">
                <div className="flex items-center gap-1.5 text-primary text-[11px] font-black uppercase tracking-[0.1em] mb-3">
                    <MapPin size={14} className="mb-0.5" />
                    {location}
                </div>

                <h3 className="font-heading text-2xl font-bold text-secondary mb-4 line-clamp-1 group-hover:text-primary transition-colors">
                    {title}
                </h3>

                {/* Specs with small pill backgrounds */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full text-[12px] font-bold text-secondary/70">
                        <Bed size={14} />
                        <span>{beds}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full text-[12px] font-bold text-secondary/70">
                        <Bath size={14} />
                        <span>{baths}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full text-[12px] font-bold text-secondary/70">
                        <Square size={14} />
                        <span>{sqft} sm</span>
                    </div>
                </div>

                {/* Price and Action */}
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                    <div>
                        <p className="text-[10px] text-muted font-bold uppercase tracking-wider mb-0.5">Price</p>
                        <div className="text-2xl font-black text-secondary">
                            {price}
                        </div>
                    </div>
                    <Link
                        href={`/properties/${id}`}
                        className="w-12 h-12 bg-secondary text-white rounded-2xl flex items-center justify-center hover:bg-primary transition-all shadow-lg active:scale-90"
                    >
                        <ArrowUpRight size={20} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
