"use client";

import { CheckCircle2, TrendingUp, Key, Users, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function EngagingContent() {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

                {/* Header Row split like the reference */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 mb-20 animate-fade-in-up">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-heading font-medium text-secondary leading-tight">
                            Your primary home might <br className="hidden md:block" />
                            begin to feel left out.
                        </h2>
                    </div>
                    <div className="flex items-center gap-6 group cursor-pointer" onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}>
                        <div className="relative w-32 h-16 rounded-full overflow-hidden shadow-lg border-2 border-white group-hover:scale-110 transition-transform duration-500">
                            <Image
                                src="/assets/Dinning-kitchen.png"
                                alt="Video teaser"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                <Play size={20} className="text-white fill-white" />
                            </div>
                        </div>
                        <p className="max-w-[200px] text-sm text-secondary/60 font-medium group-hover:text-primary transition-colors">
                            Each listing offers unique features, exceptional quality, and prime locations
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Big Image Card */}
                    <div className="lg:col-span-6 relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl group animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                        <Image
                            src="/assets/front-pic-1.png"
                            alt="Modern Architecture"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute bottom-6 left-6 flex -space-x-3">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-lg relative">
                                    <Image src={`/assets/${i === 1 ? 'kagugu.png' : i === 2 ? 'nice.png' : 'front.png'}`} alt="avatar" fill className="object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Small Info Card 1 */}
                    <div className="lg:col-span-3 bg-gray-50 rounded-[3rem] p-10 flex flex-col justify-center items-center text-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                        <h3 className="text-3xl font-heading font-bold text-secondary mb-6 leading-tight">
                            Big things can happen in small spaces.
                        </h3>
                        <p className="text-secondary/60 text-sm mb-10 leading-relaxed font-medium">
                            With thoughtful design and smart organization, you can maximize every inch, making room for creativity
                        </p>
                        <Link href="/buy" className="px-8 py-3 rounded-2xl border border-border bg-white text-secondary text-sm font-bold shadow-sm hover:bg-white hover:shadow-md transition-all active:scale-95">
                            Details
                        </Link>
                    </div>

                    {/* Small Info Card 2 */}
                    <div className="lg:col-span-3 overflow-hidden rounded-[3rem] shadow-xl border border-border group animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                        <div className="relative h-1/2 w-full">
                            <Image src="/assets/nice.png" alt="Property" fill className="object-cover" />
                        </div>
                        <div className="h-1/2 p-8 bg-white flex flex-col justify-between">
                            <div>
                                <p className="text-secondary/60 text-[13px] font-bold mb-2">Pricing Start at FRW 256K</p>
                            </div>
                            <Link href="/buy" className="w-full bg-secondary hover:bg-secondary-light text-white flex items-center justify-center gap-2 py-4 rounded-full font-bold transition-all group-hover:gap-4 active:scale-95">
                                Explore Properties
                                <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">→</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-16 flex flex-col items-center animate-fade-in-up" style={{ animationDelay: '800ms' }}>
                    <p className="text-center text-secondary/60 font-medium max-w-xl text-sm mb-10">
                        Whether it's creating a cozy corner for relaxation or transforming a small area into a workspace
                    </p>
                    <div className="flex gap-4">
                        <Link href="/buy" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all active:scale-90">←</Link>
                        <Link href="/buy" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all active:scale-90">→</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
