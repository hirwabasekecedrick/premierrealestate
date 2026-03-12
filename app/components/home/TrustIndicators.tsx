import { Star, ShieldCheck, Award } from "lucide-react";
import Image from "next/image";

const TESTIMONIALS = [
    {
        name: "Sarah Mutoni",
        role: "Homeowner",
        text: "Finding our dream home in Nyarutarama was a breeze. The team at Premier Real Estate is incredibly professional and understood exactly what we wanted.",
        avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1eb44e?w=150&q=80",
        rating: 5,
    },
    {
        name: "David Rwabuhihi",
        role: "Investor",
        text: "I have bought three commercial properties through them. Their market knowledge and secure transaction process make them the best in Kigali.",
        avatar: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=150&q=80",
        rating: 5,
    },
    {
        name: "Aline Mpinga",
        role: "Tenant",
        text: "They helped me find an amazing apartment in Kacyiru within 48 hours. The agent was responsive, polite, and negotiated a great deal for me.",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80",
        rating: 5,
    }
];

export function TrustIndicators() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Trusted By Logos (Placeholder concept) */}
                <div className="mb-24">
                    <p className="text-center text-sm font-semibold text-muted tracking-wider uppercase mb-8">
                        Trusted by Leading Companies in Rwanda
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
                        {/* Using text placeholders instead of actual images for simplicity */}
                        <span className="font-heading font-extrabold text-2xl text-secondary">Bank of Kigali</span>
                        <span className="font-heading font-extrabold text-2xl text-secondary">Equity Bank</span>
                        <span className="font-heading font-extrabold text-2xl text-secondary">RSSB</span>
                        <span className="font-heading font-extrabold text-2xl text-secondary">MTN</span>
                    </div>
                </div>

                {/* Testimonials Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-medium text-sm mb-6">
                        <Award size={16} /> 2,000+ Happy Clients
                    </div>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
                        Don't just take our word for it
                    </h2>
                    <p className="text-muted text-lg">
                        Read what our clients have to say about their experience working with Premier Real Estate.
                    </p>
                </div>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial, i) => (
                        <div key={i} className="bg-background rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg transition-shadow relative">
                            {/* Quote Icon Background */}
                            <div className="absolute top-6 right-8 text-primary/10 font-heading text-8xl leading-none font-bold italic select-none">
                                "
                            </div>

                            <div className="flex gap-1 text-primary mb-6">
                                {[...Array(testimonial.rating)].map((_, idx) => (
                                    <Star key={idx} size={18} fill="currentColor" />
                                ))}
                            </div>

                            <p className="text-foreground/80 mb-8 relative z-10 italic">
                                "{testimonial.text}"
                            </p>

                            <div className="flex items-center gap-4 mt-auto">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
                                    <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-heading font-bold text-secondary">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-muted text-sm flex items-center gap-1">
                                        <ShieldCheck size={14} className="text-primary" />
                                        Verified {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
