"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ChevronDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Navbar } from "../layout/Navbar";

export function HeroSection() {
    const router = useRouter();
    const [propertyType, setPropertyType] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [rooms, setRooms] = useState("");

    const handleSearch = () => {
        const params = new URLSearchParams();
        if (location) params.append("search", location);
        if (propertyType) params.append("type", propertyType);
        if (price) params.append("price", price);
        if (rooms) params.append("rooms", rooms);
        router.push(`/buy?${params.toString()}`);
    };

    return (
        <section className="relative w-full min-h-screen flex flex-col overflow-hidden">
            {/* Background Image Layer - Full Bleed */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/hero.webp"
                    alt="Modern Mansion"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/70 via-black/20 to-black/30"></div>
            </div>

            {/* Content Layer */}
            <div className="relative z-10 w-full flex-1 flex flex-col">
                {/* Embedded Navbar */}
                <Navbar isEmbedded={true} />

                {/* Hero Content */}
                <div className="w-full max-w-7xl mx-auto flex-1 flex flex-col justify-center px-6 lg:px-8 py-20 lg:py-0">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
                        {/* Left Side: Headline */}
                        <div className="lg:col-span-7 xl:col-span-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                            {/* Badges */}
                            <div className="flex flex-wrap gap-3 mb-8">
                                {["House", "Apartment", "Residential"].map((tag) => (
                                    <span key={tag} className="px-5 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold border border-white/20 tracking-wider">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h1 className="text-4xl md:text-7xl xl:text-[6rem] font-heading font-medium text-white leading-[1.1] lg:leading-[1.02] tracking-tight">
                                Build Your Future, <br className="hidden md:block" />
                                One Property at a Time.
                            </h1>
                        </div>

                        {/* Right Side: Description & CTA */}
                        <div className="lg:col-span-4 lg:col-start-9 lg:pb-6 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                            <div className="flex flex-col items-start gap-8">
                                <p className="text-white/80 text-base md:text-lg lg:text-xl leading-relaxed font-medium">
                                    Each listing offers unique features, exceptional quality, and prime locations. Own Your World, One Property at a Time.
                                </p>
                                <button
                                    onClick={() => router.push('/buy')}
                                    className="group bg-primary hover:bg-white text-white hover:text-secondary px-10 py-5 rounded-full font-bold transition-all duration-500 flex items-center gap-3 shadow-2xl hover:scale-105 active:scale-95 whitespace-nowrap"
                                >
                                    Explore Properties
                                    <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Floating Search Panel */}
                <div className="relative w-full max-w-7xl mx-auto px-4 lg:px-8 pb-10 lg:pb-12 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                    <div className="w-full bg-white/95 backdrop-blur-2xl rounded-3xl lg:rounded-[3.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 lg:p-10 border border-white/40">
                        {/* Heading at Top */}
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-secondary tracking-tight">Find the best place</h2>
                        </div>

                        {/* Inputs Grid in Middle */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                            {/* Field 1 */}
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.15em] text-muted/80 px-1">Looking for</label>
                                <div className="relative group/field">
                                    <select
                                        value={propertyType}
                                        onChange={(e) => setPropertyType(e.target.value)}
                                        className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl py-4 px-5 outline-none text-sm font-bold text-secondary focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="">Property Type</option>
                                        <option value="House">House</option>
                                        <option value="Apartment">Apartment</option>
                                        <option value="Residential">Residential</option>
                                        <option value="Villa">Villa</option>
                                    </select>
                                    <ChevronDown size={14} className="absolute right-5 top-1/2 -translate-y-1/2 text-muted pointer-events-none group-focus-within/field:rotate-180 transition-transform" />
                                </div>
                            </div>
                            {/* Field 2 */}
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.15em] text-muted/80 px-1">Price Range</label>
                                <div className="relative group/field">
                                    <select
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl py-4 px-5 outline-none text-sm font-bold text-secondary focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="">Price Range</option>
                                        <option value="0-100000">FRW 0 - FRW 100k</option>
                                        <option value="100000-500000">FRW 100k - FRW 500k</option>
                                        <option value="500000-1000000">FRW 500k - FRW 1M</option>
                                        <option value="1000000+">FRW 1M+</option>
                                    </select>
                                    <ChevronDown size={14} className="absolute right-5 top-1/2 -translate-y-1/2 text-muted pointer-events-none group-focus-within/field:rotate-180 transition-transform" />
                                </div>
                            </div>
                            {/* Field 3 */}
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.15em] text-muted/80 px-1">Locations</label>
                                <div className="relative group/field">
                                    <select
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl py-4 px-5 outline-none text-sm font-bold text-secondary focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="">All Locations</option>
                                        <option value="New York">New York</option>
                                        <option value="Los Angeles">Los Angeles</option>
                                        <option value="Chicago">Chicago</option>
                                        <option value="Houston">Houston</option>
                                    </select>
                                    <ChevronDown size={14} className="absolute right-5 top-1/2 -translate-y-1/2 text-muted pointer-events-none group-focus-within/field:rotate-180 transition-transform" />
                                </div>
                            </div>
                            {/* Field 4 */}
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.15em] text-muted/80 px-1">Rooms Capacity</label>
                                <div className="relative group/field">
                                    <select
                                        value={rooms}
                                        onChange={(e) => setRooms(e.target.value)}
                                        className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl py-4 px-5 outline-none text-sm font-bold text-secondary focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="">Rooms</option>
                                        <option value="1">1 Bedroom</option>
                                        <option value="2">2+ Bedrooms</option>
                                        <option value="3">3+ Bedrooms</option>
                                        <option value="4">4+ Bedrooms</option>
                                    </select>
                                    <ChevronDown size={14} className="absolute right-5 top-1/2 -translate-y-1/2 text-muted pointer-events-none group-focus-within/field:rotate-180 transition-transform" />
                                </div>
                            </div>
                        </div>

                        {/* Footer Row: Quick Filters & Search Button */}
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-0">
                            {/* Quick Filters */}
                            <div className="flex flex-wrap items-center gap-4">
                                <span className="text-xs font-bold text-muted uppercase tracking-wider">Filters:</span>
                                {["City", "House", "Residential", "Apartment"].map((filter) => (
                                    <button
                                        key={filter}
                                        onClick={() => setPropertyType(filter)}
                                        className="px-5 py-2.5 rounded-full border border-gray-100 text-sm font-bold text-secondary hover:border-primary/20 hover:bg-primary/5 hover:text-primary transition-all active:scale-95"
                                    >
                                        {filter}
                                    </button>
                                ))}
                            </div>

                            {/* Search Button */}
                            <button
                                onClick={handleSearch}
                                className="w-full md:w-auto bg-secondary lg:h-16 px-14 py-4 lg:py-0 rounded-full text-white font-bold flex items-center justify-center gap-3 hover:bg-primary transition-all duration-500 active:scale-95 whitespace-nowrap lg:-mr-2 shadow-2xl shadow-secondary/20 group"
                            >
                                <Search size={22} className="group-hover:scale-110 transition-transform" />
                                <span className="text-lg hidden md:inline">Search Property</span>
                                <span className="text-lg md:hidden">Search</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
