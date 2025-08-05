import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
          Get In Touch
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          I'm currently available for freelance work and open to discussing new projects. If you have an idea you'd like to bring to life, or just want to say hi, feel free to reach out.
        </p>
        <Button asChild size="lg">
          <a href="mailto:placeholder@example.com">Say Hello</a>
        </Button>
      </div>
    </section>
  );
}
