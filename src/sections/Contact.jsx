import { useState } from "react";
import { Phone, Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";


const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "olalekanolayinka16@gmail.com",
        href: "mailto:olalekanolayinka16@gmail.com"
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+234 81 3665 7577",
        href: "tel:+2348136657577"
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Peace Community, Lokoja, Kogi State, Nigeria.",
        href: "https://maps.google.com/?q=Peace+Community+Lokoja+Kogi+State+Nigeria"
    },
];


export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type: null,
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setSubmitStatus({ type: null, message: "" });
        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error(
                    "EmailJS configuration is missing. Please check your environment variables."
                );
            }
            await emailjs.send(serviceId, templateId, {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            }, publicKey);

            setSubmitStatus({
                type: "success",
                message: "Message sent successfully! I'll get back to you soon."
            });
            setFormData({ name: "", email: "", message: "" });

        } catch (err) {
            console.error("EmailJS Error:", err);
            setSubmitStatus({
                type: "error",
                message: "Failed to send message. Please try again later."
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-32 relative overflow-hidden">

            {/* BACKGROUND DECORATIONS */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            </div>

            {/* CONTENT */}
            <div className="container mx-auto px-6 relative z-10">

                {/* SECTION HEADER */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary-foreground text-sm font-medium">
                        Get In Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Let's build{" "}
                        <span className="font-serif italic font-normal text-white">
                            something great.
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        Having a project in mind? I'd love to hear about it. Send me a message and
                        let's discuss how we can work together.
                    </p>
                </div>

                {/* TWO-COLUMN GRID */}
                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

                    {/* ── COL 1 · CONTACT FORM ── */}
                    <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    placeholder="Your name..."
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    placeholder="You@email.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    required
                                    placeholder="Your message..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                />
                            </div>

                            <Button type="submit" className="w-full size-lg" disabled={isLoading}>
                                {isLoading ? (
                                    <>Sending...</>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="w-5 h-5" />
                                    </>
                                )}
                            </Button>
                        </form>

                        {/* STATUS FEEDBACK — lives outside <form> so it never breaks submit */}
                        {submitStatus.type && (
                            <div
                                className={`flex items-center gap-3 mt-4 p-4 rounded-xl ${
                                    submitStatus.type === "success"
                                        ? "bg-green-500/10 border border-green-500/20 text-green-500"
                                        : "bg-red-500/10 border border-red-500/20 text-red-500"
                                }`}
                            >
                                {submitStatus.type === "success" ? (
                                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                ) : (
                                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                )}
                                <p className="text-sm">{submitStatus.message}</p>
                            </div>
                        )}
                    </div>

                    {/* ── COL 2 · CONTACT INFO + AVAILABILITY ── */}
                    <div className="flex flex-col gap-6">

                        {/* CONTACT INFO CARDS */}
                        <div className="space-y-4">
                            {contactInfo.map(({ icon: Icon, label, value, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    className="flex items-center gap-4 p-4 glass rounded-2xl border border-primary/10 hover:border-primary/30 transition-all"
                                >
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-muted-foreground">{label}</div>
                                        <div className="font-medium">{value}</div>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* AVAILABILITY CARD */}
                        <div className="glass p-6 rounded-3xl border border-primary/30">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
                                <span className="font-medium">Available for work</span>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                I am currently open to new opportunities and existing projects.
                                Whether you need a full-time full-stack engineer or a freelance consultant,
                                let's talk and see how I can help bring your ideas to life!
                            </p>
                        </div>

                    </div>
                    {/* ── END COL 2 ── */}

                </div>
            </div>
        </section>
    );
};
