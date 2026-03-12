import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

export default function ContactUsPage() {
    return (
        <div className="pb-20 bg-background min-h-screen">

            {/* Header */}
            <div className="bg-secondary py-16 text-center text-white mb-16 px-4">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Contact Us</h1>
                <p className="text-lg max-w-2xl mx-auto text-gray-300">
                    Have a question about a property or want to list your home? Get in touch with our expert agents today.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Details */}
                    <div>
                        <h2 className="text-3xl font-heading font-bold text-secondary mb-8">Get In Touch</h2>
                        <div className="space-y-8 mb-10">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <MapPin className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-heading font-semibold text-lg text-secondary">Office Location</h3>
                                    <p className="text-muted leading-relaxed">KN 5 Rd, Kigali Heights<br />Kigali, Rwanda</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <Phone className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-heading font-semibold text-lg text-secondary">Phone Number</h3>
                                    <p className="text-muted leading-relaxed">+250 787 058 133</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <Mail className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-heading font-semibold text-lg text-secondary">Email Address</h3>
                                    <p className="text-muted leading-relaxed">info@premierrealestate.co.rw</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <Clock className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-heading font-semibold text-lg text-secondary">Working Hours</h3>
                                    <p className="text-muted leading-relaxed">Mon - Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 2:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-3xl p-8 border border-border shadow-xl">
                        <h3 className="font-heading font-bold text-2xl text-secondary mb-6">Send us a Message</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-secondary mb-1">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-secondary mb-1">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Doe" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-secondary mb-1">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-secondary mb-1">Phone Number</label>
                                <input type="tel" className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="+250 788 000 000" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-secondary mb-1">Message</label>
                                <textarea rows={5} className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
                            </div>
                            <button type="button" className="w-full bg-primary hover:bg-primary-hover text-white py-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2 shadow-lg">
                                Send Message
                                <ArrowRight size={20} />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
