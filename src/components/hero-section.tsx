import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/data";

export function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden cursor-crosshair-accent">
      <div className="absolute inset-0 bg-background -z-10" />
      <div className="absolute inset-0 bg-dot-slate-500/[0.3] dark:bg-dot-white/[0.1] -z-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-headline font-bold mb-4 animate-fade-in-up">
          Hi, I'm Alex Doe
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          A Full-Stack Developer creating beautiful and performant web experiences.
        </p>
        <div className="flex justify-center space-x-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {socialLinks.map((link) => (
            <Button key={link.name} variant="outline" size="icon" asChild>
              <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                <link.icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
