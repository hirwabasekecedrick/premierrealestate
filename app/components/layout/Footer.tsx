"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Search,
} from "lucide-react";

// Dummy assets for the search recommendations
const ASSETS = [
  { id: "1", title: "Modern Luxury Villa", type: "For Sale" },
  { id: "2", title: "Urban Apartment CBD", type: "For Rent" },
  { id: "3", title: "Office Space in Heights", type: "For Rent" },
  { id: "4", title: "Family Home Kibagabaga", type: "For Sale" },
  { id: "5", title: "Commercial Plot Rebero", type: "For Sale" },
  { id: "6", title: "Penthouse Nyarutarama", type: "For Sale" },
];

export function Footer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showRecommendations, setShowRecommendations] = useState(false);

  const filteredAssets = ASSETS.filter((a) =>
    a.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 mb-8 group">
              <div className="relative w-28 h-28 flex items-center justify-center overflow-hidden rounded-xl group-hover:rotate-6 transition-transform">
                <Image
                  src="/logo.png"
                  alt="Premier Real Estate Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-heading font-extrabold text-3xl text-primary tracking-tight">
                Premier Real Estate
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Find your dream home in Kigali. We offer premium properties,
              luxury homes, and the best real estate services in Rwanda.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.facebook.com/premierKigali"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://twitter.com/EstatePremier"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://www.instagram.com/premier_real_estate_services/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/premier-real-estate-services-rwanda/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@premierrealestate1?_t=8XcLtL1BcGs&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Property Search (Replaced Quick Links) */}
          <div className="relative">
            <h3 className="font-heading font-semibold text-lg mb-6 flex items-center gap-2">
              Property Search
            </h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search by name or location..."
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-gray-500 transition-all pl-11"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowRecommendations(true);
                }}
                onFocus={() => setShowRecommendations(true)}
                onBlur={() =>
                  setTimeout(() => setShowRecommendations(false), 200)
                }
              />
              <Search
                size={18}
                className="absolute left-4 top-3.5 text-gray-400"
              />
            </div>

            {/* Recommendations Dropdown */}
            <div
              className={`absolute top-[4.5rem] left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl overflow-hidden z-50 transition-all duration-300 transform origin-top ${showRecommendations && searchQuery ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"}`}
            >
              {filteredAssets.length > 0 ? (
                <ul className="max-h-64 overflow-y-auto custom-scrollbar">
                  {filteredAssets.map((asset) => (
                    <li key={asset.id}>
                      <Link
                        href={`/properties/${asset.id}`}
                        className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 transition-colors"
                      >
                        <span className="block text-secondary font-semibold text-sm mb-0.5">
                          {asset.title}
                        </span>
                        <span className="text-[10px] text-primary font-bold uppercase tracking-wider">
                          {asset.type}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="px-5 py-4 text-sm text-gray-500 bg-gray-50 text-center">
                  No properties found.
                </div>
              )}
            </div>
          </div>
        {/* <div></div> */}
          {/* Contact Details */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <MapPin className="text-primary shrink-0 mt-1" size={20} />
                <span className="text-gray-400">
                  8KG 622 St | Fair View Building 2nd Floor
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-primary shrink-0" size={20} />
                <span className="text-gray-400">+250 787 058 133</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-primary shrink-0" size={20} />
                <span className="text-gray-400">
                  info@premierrealestate.co.rw
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">
              Newsletter
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get the latest property news and listings delivered
              to your inbox.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-primary text-white placeholder-gray-500 transition-colors"
                required
              />
              <button
                type="submit"
                className="w-full bg-primary text-white px-4 py-3 rounded-lg font-medium hover:bg-primary-hover transition-colors flex justify-center items-center gap-2"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Premier Real Estate. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
