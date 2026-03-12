import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AboutUsPage() {
    return (
        <div className="pb-20 bg-background min-h-screen">

            {/* Header Overlay */}
            <div className="relative bg-secondary py-24 text-center text-white mb-20 px-4 overflow-hidden min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0 z-0 bg-cover bg-center opacity-40 grayscale hover:grayscale-0 transition-all duration-1000" style={{ backgroundImage: "url('/assets/m_plaza.jpg')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 to-secondary/40"></div>
                <div className="relative z-10 max-w-4xl mx-auto animate-fade-in-up">
                    <h1 className="text-5xl md:text-7xl font-heading font-medium mb-8 tracking-tight">About Premier Real Estate</h1>
                    <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto font-medium">
                        We are a boutique real estate firm in Kigali, Rwanda specializing in high-end residential and commercial estates.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">

                    <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/assets/Front-image.png"
                            alt="Exceptional Real Estate Service"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">
                            Our Vision & Mission
                        </h2>
                        <p className="text-lg text-muted leading-relaxed mb-6">
                            Home is more than a place, it’s a feeling. We strive to provide unparalleled services to our clients by helping them make informed decisions and finding the spaces that perfectly align with their lifestyle and business needs.
                        </p>
                        <p className="text-lg text-muted leading-relaxed mb-8">
                            Others see windows, we see opportunities. Our expertise spans luxury modern homes, expansive industrial spaces, and state-of-the-art office environments across Kigali's most prestigious districts.
                        </p>

                        <div className="space-y-4 mb-10">
                            {['Integrity & Transparency', 'Deep Local Knowledge', 'Client-Centric Approach', 'Comprehensive Guidance'].map((point, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="bg-primary/10 p-1.5 rounded-full">
                                        <CheckCircle2 className="text-primary" size={20} />
                                    </div>
                                    <span className="font-heading font-semibold text-secondary text-lg">{point}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            <div className="bg-background border border-border px-8 py-6 rounded-2xl text-center shadow-sm">
                                <div className="font-heading font-bold text-4xl text-primary mb-1">10+</div>
                                <div className="text-sm font-medium text-muted uppercase tracking-wider">Years Exp.</div>
                            </div>
                            <div className="bg-background border border-border px-8 py-6 rounded-2xl text-center shadow-sm">
                                <div className="font-heading font-bold text-4xl text-primary mb-1">500+</div>
                                <div className="text-sm font-medium text-muted uppercase tracking-wider">Listings</div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Founder Section */}
                <div className="mb-24 relative">
                    <div className="absolute -inset-x-4 inset-y-0 bg-secondary/5 rounded-3xl -z-10 transform -skew-y-1"></div>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
                            About The Founder
                        </h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-border flex flex-col md:flex-row transform hover:-translate-y-1 transition-all duration-300">
                        <div className="w-full md:w-2/5 relative h-[500px] md:h-auto">
                            <Image
                                src="/passport-photo-cele-683x1024.jpg"
                                alt="Celesitne UWINEZA"
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                        <div className="w-full md:w-3/5 p-8 md:p-14 flex flex-col justify-center bg-white relative">
                            {/* Decorative quotes */}
                            <div className="absolute top-10 right-10 text-primary/10 text-8xl font-serif">"</div>

                            <h3 className="text-3xl font-heading font-bold text-secondary mb-2 relative z-10">Celesitne UWINEZA</h3>
                            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-8 relative z-10">Chief Executive Officer</p>

                            <p className="text-muted leading-relaxed mb-6 text-lg relative z-10">
                                Mr. Uwineza is an innovative business professional with a clear vision of how best to serve clients in need of real estate services in the Kigali market. He is an experienced manager with a background in real estate marketing, property management, client service, contract negotiations, and investment analysis.
                            </p>
                            <p className="text-muted leading-relaxed text-lg relative z-10">
                                He has significant leadership experience and has emphasized the importance of working ethically and efficiently throughout his business career. Mr. Uwineza earned his Bachelor’s Degree in Sustainable Human Development from Catholic University of Eastern Africa in Kenya.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Meet The Team */}
                <div className="mb-20">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">Meet The Team</h2>
                        <p className="text-lg text-muted max-w-2xl mx-auto mb-6">
                            Our team has a long history of success, innovation and leadership in the real estate industry. We are dedicated to providing the highest quality of service.
                        </p>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        {[
                            {
                                name: "Donator NDERITU",
                                role: "Co Founder",
                                image: "/Donator-Nderu.jpg"
                            },
                            {
                                name: "Rose IRIBAGIZA",
                                role: "Chief Operating Officer",
                                image: "/Iribagiza-Rose.jpg"
                            },
                            {
                                name: "Yvette UMURERWA",
                                role: "Chief Growth Officer",
                                image: "/Yvette-Umurerwa.jpg"
                            }
                        ].map((member) => (
                            <div
                                key={member.name}
                                className="group relative bg-white rounded-3xl overflow-hidden border border-border shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                            >

                                {/* Image */}
                                <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Hover gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                                </div>

                                {/* Info */}
                                <div className="p-8 text-center">
                                    <h3 className="text-xl font-heading font-bold text-secondary">
                                        {member.name}
                                    </h3>

                                    <span className="mt-3 inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-4 py-2 rounded-full">
                                        {member.role}
                                    </span>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

            </div> {/* Closing max-w-7xl here */}
        </div>
    );
}
