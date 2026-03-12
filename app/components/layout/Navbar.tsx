"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";

interface NavbarProps {
    isEmbedded?: boolean;
}

export function Navbar({ isEmbedded = false }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about-us" },
        { name: "Property List", href: "/buy" },
        { name: "Contact Us", href: "/contact-us" },
    ];

    const isHeroPage = pathname === "/" || pathname === "/new-developments";

    // Style logic based on state and props
    const navClasses = isEmbedded
        ? "w-full py-4 px-4 sticky top-0"
        : `fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-500 rounded-full border px-6 py-2 ${isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-2xl py-3 border-border/50"
            : "bg-white/10 backdrop-blur-sm shadow-lg border-white/20"
        }`;

    const textClass = isEmbedded || (!isScrolled && isHeroPage && !isEmbedded) ? "text-white" : "text-secondary";

    return (
        <nav className={navClasses}>
            {/* Embedded Container with separation */}
            <div className={`flex justify-between items-center transition-all ${isEmbedded
                ? 'mx-auto  max-w-[1600px] bg-white/10 backdrop-blur-xl rounded-full border border-white/20 px-6 py-3 shadow-2xl'
                : ''
                }`}>
                {/* Logo & Brand */}
                <Link href="/" className="flex items-center gap-3 group shrink-0">
                    <div className="relative w-10 h-10 lg:w-12 lg:h-12 overflow-hidden rounded-lg p-1 group-hover:scale-110 transition-transform">
                        <Image
                            src="/logo.png"
                            alt="Premier Real Estate Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className={`font-heading font-extrabold text-xl lg:text-2xl tracking-tight transition-colors ${textClass}`}>
                        Premier Real Estate
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-2">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 ${isActive && !isEmbedded
                                    ? "bg-white text-secondary shadow-sm"
                                    : isActive && isEmbedded
                                        ? "bg-white/20 text-white backdrop-blur-md"
                                        : (isScrolled || !isHeroPage ? 'text-secondary hover:text-primary' : 'text-white/80 hover:text-white hover:bg-white/10')
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Actions */}
                <div className="hidden lg:flex items-center gap-6">
                    <button className={`flex items-center gap-1.5 font-medium text-sm transition-colors ${textClass}`}>
                        <Globe size={16} />
                        Eng
                    </button>
                    <Link href="/contact-us">
                        <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 text-sm">
                            Get Started
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu & Language Wrapper */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`p-1.5 transition-colors ${textClass}`}
                    >
                        {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-x-4 top-24 z-[100]">
                    <div className="bg-white/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-[2rem] border border-white/40 p-6 flex flex-col gap-2 animate-in fade-in slide-in-from-top-8 duration-500">
                        {navLinks.map((link, index) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`px-5 py-3.5 rounded-2xl font-bold text-lg transition-all flex items-center justify-between group animate-in fade-in slide-in-from-left-4 duration-500`}
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <span className={isActive ? 'text-primary' : 'text-secondary group-hover:text-primary group-hover:translate-x-1 transition-all'}>
                                        {link.name}
                                    </span>
                                    {isActive && (
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    )}
                                </Link>
                            );
                        })}
                        <div className="h-px bg-gray-100/50 my-2" />
                        <Link href="/contact-us" onClick={() => setIsMobileMenuOpen(false)} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <button className="w-full bg-primary text-white py-4 rounded-full font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all mt-2">
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
