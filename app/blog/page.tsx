import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

const BLOG_POSTS = [
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

export default function BlogPage() {
    return (
        <div className="pb-20 bg-background min-h-screen">

            {/* Header */}
            <div className="bg-secondary py-16 text-center text-white mb-16 px-4">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Real Estate Insights</h1>
                <p className="text-lg max-w-2xl mx-auto text-gray-300">
                    News, guides, and trends from the Rwandan property market.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Categories / Tags */}
                <div className="flex flex-wrap gap-3 justify-center mb-12">
                    {['All Posts', 'Investment', 'Guides', 'Lifestyle', 'Market Updates'].map((tag, index) => (
                        <button
                            key={index}
                            className={`px-5 py-2 rounded-full font-medium text-sm transition-colors ${index === 0 ? 'bg-secondary text-white' : 'bg-white border border-border text-muted hover:border-secondary hover:text-secondary'}`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_POSTS.map((post) => (
                        <article key={post.id} className="bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all group flex flex-col">
                            <div className="relative h-60 overflow-hidden">
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
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs font-medium text-muted mb-4">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar size={14} />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <User size={14} />
                                        {post.author}
                                    </div>
                                </div>
                                <h2 className="text-xl font-heading font-bold text-secondary mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                    <Link href={`/blog/${post.id}`}>
                                        {post.title}
                                    </Link>
                                </h2>
                                <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                                    {post.excerpt}
                                </p>
                                <Link href={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-hover transition-colors text-sm uppercase tracking-wide">
                                    Read Article
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </div>
    );
}
