import { CheckCircle2, TrendingUp, Key, Users } from "lucide-react";
import Image from "next/image";

export function EngagingContent() {
    return (
        <section className="py-24 bg-secondary text-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
                            Why Choose <span className="text-primary tracking-wide">Premier Real Estate?</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 max-w-xl leading-relaxed">
                            We provide a seamless, transparent, and highly professional real estate service. Whether you're buying your first home or expanding your investment portfolio, our experts are here to guide you every step of the way.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: <CheckCircle2 className="text-primary" size={24} />, title: "Premium Exclusive Listings", desc: "Access to the most luxurious and sought-after properties in Kigali before they hit the market." },
                                { icon: <TrendingUp className="text-primary" size={24} />, title: "Market Data & Analytics", desc: "Make informed decisions with our comprehensive property valuation and investment ROI analysis." },
                                { icon: <Key className="text-primary" size={24} />, title: "Hassle-Free Transactions", desc: "Our legal and financial teams ensure airtight contracts and a secure passing of the keys." },
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm shadow-sm flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-heading font-semibold text-xl mb-1">{item.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="mt-12 bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-full font-medium transition-transform hover:-translate-y-1 shadow-lg shadow-primary/30">
                            Speak with an Expert
                        </button>
                    </div>

                    {/* Image & Stats Grid */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4 h-[600px]">
                            <div className="col-span-1 row-span-2 relative rounded-3xl overflow-hidden mt-12 shadow-2xl">
                                <Image
                                    src="/assets/Dinning-kitchen.png"
                                    alt="Modern Home Interior"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/assets/front-pic-1.png"
                                    alt="Happy Couple with Keys"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Stat Box overlay */}
                            <div className="col-span-1 row-span-1 bg-white rounded-3xl p-8 flex flex-col justify-center items-center text-center shadow-xl border border-white/20">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                                    <Users size={32} />
                                </div>
                                <h4 className="font-heading font-bold text-4xl text-secondary mb-2 tracking-tight">
                                    1,500<span className="text-primary">+</span>
                                </h4>
                                <p className="text-muted font-medium uppercase tracking-wider text-sm">
                                    Happy Families
                                </p>
                                <p className="text-muted/60 text-xs mt-2">Found their dream home with us.</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
