"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Share2, MessageCircle } from "lucide-react";

const BLOG_POSTS = [
    {
        id: 1,
        title: "10 Reasons to Invest in Kigali Real Estate in 2024",
        date: "March 15, 2024",
        author: "Jane Doe",
        category: "Investment",
        imageUrl: "/assets/kigali_c_centre.avif",
        content: `
            <p className="text-lg mb-6 leading-relaxed">Kigali's real estate market is witnessing an unprecedented boom. As the city continues to position itself as a strategic business hub in East Africa, investors from around the globe are turning their eyes toward Rwanda's capital.</p>
            <h2 className="text-2xl font-bold text-secondary mt-12 mb-6">1. Rapid Urban Development</h2>
            <p className="mb-6 leading-relaxed">The city's master plan is guiding a structured expansion that ensures infrastructure keeps pace with growth. New roads, reliable utilities, and digital connectivity make every newly developed neighborhood a potential goldmine.</p>
            <h2 className="text-2xl font-bold text-secondary mt-12 mb-6">2. Safety and Cleanliness</h2>
            <p className="mb-6 leading-relaxed">Often cited as the cleanest city in Africa, Kigali offers a quality of life that is increasingly rare in growing metropolises. This reputation translates directly into higher property values and stable rental demand.</p>
            <blockquote className="border-l-4 border-primary pl-6 my-10 italic text-xl text-secondary/70 font-medium">
                "Kigali isn't just growing; it's maturing into a world-class destination for both living and business."
            </blockquote>
            <h2 className="text-2xl font-bold text-secondary mt-12 mb-6">3. Favorable Regulatory Environment</h2>
            <p className="mb-6 leading-relaxed">Rwanda's ease of doing business rankings are among the best on the continent. Land registration processes are transparent, digitized, and efficient, giving investors peace of mind.</p>
        `
    },
    {
        id: 2,
        title: "Guide to Buying Your First Home in Rwanda",
        date: "March 02, 2024",
        author: "John Smith",
        category: "Guides",
        imageUrl: "/assets/m_plaza.jpg",
        content: "<p>Coming soon...</p>"
    },
    {
        id: 3,
        title: "Top 5 Neighborhoods for Expatriates in Kigali",
        date: "February 20, 2024",
        author: "Alice Johnson",
        category: "Lifestyle",
        imageUrl: "/assets/sky-view.jpg",
        content: "<p>Coming soon...</p>"
    }
];

export default function BlogPostPage() {
    const params = useParams();
    const router = useRouter();
    const post = BLOG_POSTS.find(p => p.id.toString() === params.id);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Post not found</h1>
                    <Link href="/blog" className="text-primary hover:underline">Return to blog</Link>
                </div>
            </div>
        );
    }

    return (
        <article className="pb-32 bg-white min-h-screen">
            {/* Post Hero */}
            <div className="relative h-[60vh] min-h-[400px] w-full">
                <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute inset-0 flex items-end">
                    <div className="max-w-4xl mx-auto px-6 pb-20 w-full animate-fade-in-up">
                        <button
                            onClick={() => router.back()}
                            className="bg-white/20 backdrop-blur-md text-white border border-white/20 px-6 py-2.5 rounded-full flex items-center gap-2 mb-10 hover:bg-white hover:text-secondary transition-all"
                        >
                            <ArrowLeft size={18} />
                            Back to Blog
                        </button>

                        <div className="flex gap-3 mb-6">
                            <span className="bg-primary px-5 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-widest">
                                {post.category}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-heading font-medium text-white leading-tight lg:leading-[1.1] tracking-tight">
                            {post.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Post Content */}
            <div className="max-w-4xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 -mt-10 relative z-10 bg-white rounded-[3rem] p-10 lg:p-16 shadow-2xl">

                    {/* Sidebar / Meta */}
                    <div className="lg:w-1/4 border-b lg:border-b-0 lg:border-r border-gray-100 pb-8 lg:pb-0 lg:pr-12">
                        <div className="sticky top-32">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-secondary font-bold">
                                    {post.author[0]}
                                </div>
                                <div>
                                    <p className="text-xs text-muted uppercase font-bold tracking-widest">Writer</p>
                                    <p className="font-bold text-secondary">{post.author}</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-3 text-muted">
                                    <Calendar size={18} />
                                    <span className="text-sm font-medium">{post.date}</span>
                                </div>
                                <div className="flex items-center gap-3 text-muted">
                                    <MessageCircle size={18} />
                                    <span className="text-sm font-medium">4 Comments</span>
                                </div>
                                <div className="pt-8 border-t border-gray-100 flex gap-4">
                                    <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                        <Share2 size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Body */}
                    <div className="lg:w-3/4">
                        <div
                            className="blog-content prose prose-lg prose-primary max-w-none text-secondary/80"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex flex-wrap gap-2">
                                {['Kigali', 'Investment', 'Real Estate', 'Rwanda'].map(tag => (
                                    <span key={tag} className="px-4 py-1.5 bg-gray-50 text-muted text-xs font-bold rounded-full">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
