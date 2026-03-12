"use client";

import { Send } from "lucide-react";

export default function PropertyContactForm() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission (e.g., send email or API call)
        alert("Thank you for your interest! We will get back to you soon.");
    };

    return (
        <div className="bg-white rounded-3xl p-8 border border-border shadow-2xl sticky top-32">
            <h3 className="font-heading font-bold text-2xl text-secondary mb-6">Request more info</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary mb-1.5 ml-1">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Your full name"
                        className="w-full bg-gray-50 border border-border rounded-xl px-4 py-3 text-secondary focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-muted/60"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-1.5 ml-1">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="+250 7xx xxx xxx"
                        className="w-full bg-gray-50 border border-border rounded-xl px-4 py-3 text-secondary focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-muted/60"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1.5 ml-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="your@email.com"
                        className="w-full bg-gray-50 border border-border rounded-xl px-4 py-3 text-secondary focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-muted/60"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary mb-1.5 ml-1">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        placeholder="I'm interested in this property and would like more information..."
                        className="w-full bg-gray-50 border border-border rounded-xl px-4 py-3 text-secondary focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none placeholder:text-muted/60"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-secondary hover:bg-secondary-light text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 mt-4 active:scale-[0.98]"
                >
                    <Send size={20} />
                    Send Request
                </button>
            </form>

            <p className="mt-6 text-xs text-muted leading-relaxed text-center px-4">
                By clicking "Send Request", you agree to our terms of service and privacy policy.
            </p>
        </div>
    );
}
