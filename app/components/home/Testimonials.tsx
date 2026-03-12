"use client";

import { Star, Quote } from "lucide-react";
import Image from "next/image";

const TESTIMONIALS = [
    {
        id: 1,
        name: "David Kalisa",
        role: "Property Owner",
        text: "The professionalism shown by Premier Real Estate is unmatched. They helped me rent out my commercial space in record time with high-quality tenants.",
        rating: 5,
        image: "/assets/nice.png"
    },
    {
        id: 2,
        name: "Sarah Umutoni",
        role: "Home Buyer",
        text: "Finding a home in Kigali can be stressful, but the team made it seamless. They understood my needs perfectly and found me a gem in Nyarutarama.",
        rating: 5,
        image: "/assets/kagugu.png"
    },
    {
        id: 3,
        name: "Jean-Paul Habimana",
        role: "Real Estate Investor",
        text: "Their investment analysis and local market knowledge are exceptional. I've worked with many agencies, but Premier is truly at the top.",
        rating: 5,
        image: "/assets/front.png"
    }
];

export function Testimonials() {
    return (
        <section className="py-32 bg-gray-50/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center mb-20 animate-fade-in-up">
                    <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Testimonials</span>
                    <h2 className="text-4xl md:text-6xl font-heading font-medium text-secondary leading-tight">
                        What our clients <br className="hidden md:block" />
                        say about us.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((t, idx) => (
                        <div
                            key={t.id}
                            className="bg-white p-10 rounded-[3rem] shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group animate-fade-in-up"
                            style={{ animationDelay: `${(idx + 1) * 200}ms` }}
                        >
                            <div className="mb-8 flex justify-between items-center">
                                <div className="flex gap-1">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} size={16} className="fill-accent text-accent" />
                                    ))}
                                </div>
                                <Quote className="text-primary/10 group-hover:text-primary/20 transition-colors" size={40} />
                            </div>

                            <p className="text-secondary/70 text-lg leading-relaxed mb-10 font-medium">
                                &quot;{t.text}&quot;
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/10">
                                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-heading font-bold text-secondary">{t.name}</h4>
                                    <p className="text-xs text-muted font-bold uppercase tracking-wider">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
