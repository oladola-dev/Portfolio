import { useState, useEffect } from "react";
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";

const socialLinks = [
    { icon: Github, url: "https://github.com" },
    { icon: Linkedin, url: "https://linkedin.com" },
    { icon: Twitter, url: "https://twitter.com" },
];

const footerLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const winScroll =
                window.scrollY ||
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;

            const scrolledContainer = Array.from(document.querySelectorAll("*")).find((el) => {
                if (el === document.body || el === document.documentElement) return false;
                const { overflow, overflowY } = window.getComputedStyle(el);
                return (overflow + overflowY).match(/auto|scroll/) && el.scrollTop > 200;
            });

            setVisible(winScroll > 200 || !!scrolledContainer);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        document.addEventListener("scroll", handleScroll, { passive: true, capture: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("scroll", handleScroll, { capture: true });
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        document.documentElement.scrollTo?.({ top: 0, behavior: "smooth" });
        document.body.scrollTo?.({ top: 0, behavior: "smooth" });

        Array.from(document.querySelectorAll("*")).forEach((el) => {
            if (el === document.body || el === document.documentElement) return;
            const { overflow, overflowY } = window.getComputedStyle(el);
            if ((overflow + overflowY).match(/auto|scroll/) && el.scrollTop > 0) {
                el.scrollTo({ top: 0, behavior: "smooth" });
            }
        });
    };

    return (
        <div
            style={{
                position: "fixed",
                bottom: "28px",
                right: "28px",
                zIndex: 99999,
                display: "flex",
                alignItems: "center",
                gap: "10px",
                opacity: visible ? 1 : 0,
                pointerEvents: visible ? "auto" : "none",
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.3s, transform 0.3s",
            }}
        >
            {/* "Back to top" label — slides in on hover */}
            <span
                className="text-xs white font-medium tracking-wide"
                style={{
                    whiteSpace: "nowrap",
                    opacity: hovered ? 1 : 0,
                    transform: hovered ? "translateX(0)" : "translateX(10px)",
                    transition: "opacity 0.25s, transform 0.25s",
                    pointerEvents: "none",
                }}
            >
                Back to top
            </span>

            {/* Circle button */}
            <button
                onClick={scrollToTop}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                aria-label="Back to top"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                style={{
                    transform: hovered ? "translateY(-3px)" : "translateY(0)",
                    transition: "transform 0.2s, background-color 0.2s",
                    border: "none",
                    cursor: "pointer",
                }}
            >
                <ArrowUp className="w-4 h-4 text-primary" />
            </button>
        </div>
    );
};

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <ScrollToTopButton />

            <footer className="py-12 border-t border-border">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                        {/* Logo & Copyright */}
                        <div className="text-center md:text-left">
                            <a href="#" className="text-xl font-bold tracking-tight">
                                <span className="text-primary">Olalekan Olayinka Daniel</span>
                            </a>
                            <p className="text-sm text-muted-foreground mt-1">
                                &copy; {currentYear} All rights reserved.
                            </p>
                        </div>

                        {/* Nav Links */}
                        <div className="flex items-center gap-6">
                            {footerLinks.map(({ href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {label}
                                </a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map(({ icon: Icon, url }) => (
                                <a
                                    key={url}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                                >
                                    <Icon className="w-4 h-4 text-primary" />
                                </a>
                            ))}
                        </div>

                    </div>
                </div>
            </footer>
        </>
    );
};