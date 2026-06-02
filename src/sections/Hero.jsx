import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import {Button} from "../components/Button";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';


const skills = [
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Tailwind",
  "Express",
  "Html",
  "Git",
  "GitHub Actions",
  "Python",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/person.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* GREEN DOTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
  {[...Array(30)].map((_, i) => (
            <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
                backgroundColor: "#2082A6",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation:`slow-drift 1s ${15 * Math.random() * 20}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
            }}
            />
        ))}
        </div>

        {/* CONTENT */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
               {/* LEFT COLUMN - TEXT CONTENT  */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            Software Engineer *React Specialist
                        </span>
                    </div>

                    {/* HEADLINE */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                          Crafting <span className="text-primary glow-text">digitals</span>
                          <br />  
                          experiences with
                          <br />
                          <span className="font-serif italic font-normal text-white">
                            precision.
                          </span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-800">
                            Hi, I'm Olalekan Olayinka Daniel - a software engineer specializing in Html, Css, Javascript, MongoDB, Express.js, React and Node.js . I build scalable, performant web applications that users love.
                        </p>
                    </div>

                    {/* CALL TO ACTION */}
                    <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                      <Button size="lg"> Contact me <ArrowRight  className="w-5 h-5"/>
                      </Button>
                    <AnimatedBorderButton>
                       <Download className="w-5 h-5" />
                        Download CV
                    </AnimatedBorderButton>
                    </div>


                              {/* SOCIAL LINKS */}
                            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">Follow me:</span>
                            {[
                              { icon: FaGithub, href: "https://github.com/oladola-dev" },
                              { icon: FaLinkedin, href: "https://www.linkedin.com/in/olalekan-olayinka-206135194" },
                              { icon: FaTwitter, href: "https://twitter.com/timberland04" },
                            ].map((social, idx) => {
                              const Icon = social.icon;
                              return (
                                <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                                  <Icon className="w-5 h-5"/>
                                </a>
                              );
                            })}
                          </div>
             </div>



               {/* RIGHT COLUMN - PROFILE IMAGE  */}
                <div className="relative animate-fade-in animation-delay-300">
                  {/* PROFILE IMAGE */}
                  <div className="relative max-w-md mx-auto">
                    <div
                    className="absolute inset-0
                    rounded-3xl bg-gradient-to-br
                    from-primary/30 via-transparent
                    to-primary/10 blur-2xl animate-pulse-glow"
                    />
                    <div className="relative glass rounded-3xl p-2 glow-border">
                      <img src="/profile-picture.jpeg"
                       alt="Olalekan Olayinka"
                       className="w-full aspect-[4/5] object-cover rounded-2xl"
                       />

                       {/* FLOATING BADGE */}
                          <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                            <div className="flex items-center gap-3">
                              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                              <span className="text-sm font-medium">Available for work</span>
                            </div>
                          </div>

                       {/* STATS BADGE */}
                       <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                        <div className="text-2xl font-bold text-primary">5+</div>
                        <div className="text-xs text-muted-foreground">Years Exp.</div>
                       </div>
                    </div>
                  </div>
                </div>


            </div>

            {/* SKILLS SECTION */}
            <div className="my-20 animate-fade-in animation-delay-600">
              <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I work with</p>
              <div className="relative overflow-hidden">
                <div className="flex animate-marquee">
                  {[...skills, ...skills].map((skills, idx) => (
                    <div key={idx} className="flex-shrink-0 px-8 py-4">
                      <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skills}</span>
                      </div>
                  ))}
                  </div>
              </div>
            </div>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x
        animate-fade-in animation-delay-800">
        <a 
        href="#about"
        className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>

        </div>
    </section>
  );
};
