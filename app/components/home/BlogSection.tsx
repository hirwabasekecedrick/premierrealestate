import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

const FEATURED_BLOGS = [
    {
        id: 1,
        title: "10 Reasons to Invest in Kigali Real Estate in 2024",
        excerpt: "Discover why Kigali is becoming one of the most attractive real estate investment hubs in East Africa.",
        date: "March 15, 2024",
        author: "Jane Doe",
        category: "Investment",
        imageUrl: "/assets/kigali_c_centre.avif"
    },
    {
        id: 2,
        title: "Guide to Buying Your First Home in Rwanda",
        excerpt: "A comprehensive step-by-step guide for first-time homebuyers navigating the Rwandan property market.",
        date: "March 02, 2024",
        author: "John Smith",
        category: "Guides",
        imageUrl: "/assets/m_plaza.jpg"
    },
    {
        id: 3,
        title: "Top 5 Neighborhoods for Expatriates in Kigali",
        excerpt: "Looking to relocate to Kigali? Here are the best neighborhoods that offer comfort, security, and community.",
        date: "February 20, 2024",
        author: "Alice Johnson",
        category: "Lifestyle",
        imageUrl: "/assets/sky-view.jpg"
    }
];

export default function BlogSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 animate-fade-in-up">
                    <div className="max-w-2xl">
                        <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Resources & News</h2>
                        <h3 className="text-3xl md:text-5xl font-heading font-bold text-secondary leading-tight">
                            Latest Insights From The <br />
                            <span className="text-primary italic">Rwandan Market</span>
                        </h3>
                    </div>
                    <Link
                        href="/blog"
                        className="group flex items-center gap-2 text-secondary font-bold hover:text-primary transition-colors pb-2 border-b-2 border-secondary hover:border-primary"
                    >
                        View All Articles
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {FEATURED_BLOGS.map((post, idx) => (
                        <article
                            key={post.id}
                            className="bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all group flex flex-col animate-fade-in-up"
                            style={{ animationDelay: `${(idx + 1) * 200}ms` }}
                        >
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm text-secondary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                    {post.category}
                                </div>
                                <Image
                                    src={post.imageUrl}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs font-medium text-muted mb-4">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar size={14} className="text-primary" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <User size={14} className="text-primary" />
                                        {post.author}
                                    </div>
                                </div>
                                <h4 className="text-xl font-heading font-bold text-secondary mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                                    <Link href={`/blog/${post.id}`}>
                                        {post.title}
                                    </Link>
                                </h4>
                                <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <Link
                                    href={`/blog/${post.id}`}
                                    className="mt-auto inline-flex items-center gap-2 text-secondary font-bold hover:text-primary transition-colors text-sm uppercase tracking-wide"
                                >
                                    Read Full Story
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
