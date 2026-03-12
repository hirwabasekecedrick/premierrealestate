"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export function Navbar() {
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
        { name: "New Developments", href: "/new-developments" },
        { name: "Rent", href: "/rent" },
        { name: "Buy", href: "/buy" },
        { name: "About Us", href: "/about-us" },
        { name: "Blog", href: "/blog" },
        { name: "Contact Us", href: "/contact-us" },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/95 backdrop-blur-md shadow-md py-3"
                : "bg-white/80 backdrop-blur-sm py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-4 group">
                        <div className="relative w-20 h-20 flex items-center justify-center overflow-hidden rounded-xl group-hover:scale-105 transition-transform duration-300">
                            <Image
                                src="/logo.png"
                                alt="Premier Real Estate Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="font-heading font-extrabold text-2xl tracking-tight text-primary">
                            Premier Real Estate
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`relative px-4 py-2 font-medium transition-all duration-200 group ${isActive
                                        ? "text-primary"
                                        : "text-secondary hover:text-primary"
                                        }`}
                                >
                                    {link.name}
                                    {/* Active/Hover Indicator */}
                                    <span className={`absolute bottom-0 left-0 w-full h-0.5 transform origin-left transition-transform duration-300 ${isActive ? "bg-accent scale-x-100" : "bg-primary scale-x-0 group-hover:scale-x-100"
                                        }`} />
                                </Link>
                            );
                        })}
                        <div className="ml-4">
                            <button className="bg-primary text-white px-6 py-2.5 rounded-full font-bold hover:bg-primary-hover transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transform duration-200 border-2 border-transparent">
                                Get Started
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-secondary hover:text-primary transition-colors focus:outline-none"
                        >
                            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-2xl border-t border-gray-100">
                    <div className="px-4 pt-2 pb-8 space-y-1">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`flex items-center justify-between px-4 py-4 text-lg font-bold rounded-xl transition-all ${isActive
                                        ? "bg-primary/5 text-primary border-l-4 border-accent"
                                        : "text-secondary hover:bg-gray-50 hover:text-primary"
                                        }`}
                                >
                                    {link.name}
                                    {isActive && <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />}
                                </Link>
                            );
                        })}
                        <div className="pt-6 px-4">
                            <button className="w-full bg-primary text-white px-6 py-4 rounded-2xl font-bold shadow-xl shadow-primary/20 hover:bg-primary-hover active:scale-95 transition-all">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
