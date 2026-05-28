// import { useState } from "react";
// import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

// const testimonials = [
//     {
//         quote: "Oladola is one of the most talented developers I've worked with. His ability to translate complex requirements into elegant solutions is remarkable.",
//         author: "Sarah Chen",
//         role: "CTO, Tech Innovation Inc",
//     },
//     {
//         quote: "Working with Oladola has been a game-changer for our team. His ability to deliver high-quality code under tight deadlines is truly impressive.",
//         author: "Michael Lee",
//         role: "Product Manager, Digital Solutions.",
//     },
//     {
//         quote: "Oladola's expertise in full-stack development is unparalleled. He consistently delivers robust and scalable solutions.",
//         author: "Emily Davis",
//         role: "Engineering Lead, WebTech Co.",
//     },
//     {
//         quote: "Not only is Oladola brilliant, but he's also a fantastic collaborator.",
//         author: "David Kim",
//         role: "CEO, Innovation Hub",
//     },
//     {
//         quote: "Oladola does his work without being policed. He is a trusted software engineer.",
//         author: "Emmanuel Hayes",
//         role: "CEO, Web-79 Hub",
//     }
// ];

// export const Testimonials = () => {
//     const [activeIdx, setActiveIdx] = useState(0);

//     const next = () => {
//         setActiveIdx((prev) => (prev + 1) % testimonials.length);
//     };

//     const previous = () => {
//         setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//     };

//     return (
//         <section id="testimonials" className="py-32 relative overflow-hidden">
//             <div
//                 className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5
//                 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
//             />
//             <div className="container mx-auto px-6 relative z-10">

//                 {/* SECTION HEADER */}
//                 <div className="text-center max-w-3xl mx-auto mb-16">
//                     <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
//                         What People Say
//                     </span>
//                     <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
//                         Kind words from{" "}
//                         <span className="font-serif italic font-normal text-white">
//                             amazing people
//                         </span>
//                     </h2>
//                 </div>

//                 {/* TESTIMONIAL CAROUSEL */}
//                 <div className="max-w-4xl mx-auto">
//                     <div className="relative">

//                         {/* Main Testimonial */}
//                         <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
//                             <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
//                                 <Quote className="w-6 h-6 text-primary-foreground" />
//                             </div>

//                             <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
//                                 "{testimonials[activeIdx].quote}"
//                             </blockquote>

//                             <div className="flex items-center gap-4">
//                                 <div>
//                                     <div className="font-semibold">{testimonials[activeIdx].author}</div>
//                                     <div className="text-sm text-muted-foreground">{testimonials[activeIdx].role}</div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* TESTIMONIAL NAVIGATION */}
//                         <div className="flex items-center justify-center gap-4 mt-8">
//                             <button
//                                 className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
//                                 onClick={previous}
//                             >
//                                 <ChevronLeft className="w-5 h-5" />
//                             </button>

//                             <div className="flex gap-2">
//                                 {testimonials.map((_, idx) => (
//                                     <button
//                                         key={idx}
//                                         onClick={() => setActiveIdx(idx)}
//                                         className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                                             idx === activeIdx
//                                                 ? "w-8 bg-primary"
//                                                 : "bg-muted-foreground/50 hover:bg-primary/50"
//                                         }`}
//                                     />
//                                 ))}
//                             </div>

//                             <button
//                                 onClick={next}
//                                 className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
//                             >
//                                 <ChevronRight className="w-5 h-5" />
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };


import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        quote: "Oladola is one of the most talented developers I've worked with. His ability to translate complex requirements into elegant solutions is remarkable.",
        author: "Sarah Chen",
        role: "CTO, Tech Innovation Inc",
    },
    {
        quote: "Working with Oladola has been a game-changer for our team. His ability to deliver high-quality code under tight deadlines is truly impressive.",
        author: "Michael Lee",
        role: "Product Manager, Digital Solutions.",
    },
    {
        quote: "Oladola's expertise in full-stack development is unparalleled. He consistently delivers robust and scalable solutions.",
        author: "Emily Davis",
        role: "Engineering Lead, WebTech Co.",
    },
    {
        quote: "Not only is Oladola brilliant, but he's also a fantastic collaborator.",
        author: "David Kim",
        role: "CEO, Innovation Hub",
    },
    {
        quote: "Oladola does his work without being policed. He is a trusted software engineer.",
        author: "Emmanuel Hayes",
        role: "CEO, Web-79 Hub",
    }
];

export const Testimonials = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    const next = () => {
        setActiveIdx((prev) => (prev + 1) % testimonials.length);
    };

    const previous = () => {
        setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className="py-32 relative overflow-hidden">
            <div
                className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5
                rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
            />
            <div className="container mx-auto px-6 relative z-10">

                {/* SECTION HEADER */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        What People Say
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Kind words from{" "}
                        <span className="font-serif italic font-normal text-white">
                            amazing people
                        </span>
                    </h2>
                </div>

                {/* TESTIMONIAL CAROUSEL */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">

                        {/* Main Testimonial */}
                        <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
                            <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                                <Quote className="w-6 h-6 text-primary-foreground" />
                            </div>

                            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                                "{testimonials[activeIdx].quote}"
                            </blockquote>

                            <div className="flex items-center justify-center gap-4">
                                <div className="text-center">
                                    <div className="font-semibold">{testimonials[activeIdx].author}</div>
                                    <div className="text-sm text-muted-foreground">{testimonials[activeIdx].role}</div>
                                </div>
                            </div>
                        </div>

                        {/* TESTIMONIAL NAVIGATION */}
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <button
                                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                                onClick={previous}
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            <div className="flex gap-2">
                                {testimonials.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveIdx(idx)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                            idx === activeIdx
                                                ? "w-8 bg-primary"
                                                : "bg-muted-foreground/50 hover:bg-primary/50"
                                        }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={next}
                                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};