import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
          About Me
        </h2>
        <Card className="max-w-4xl mx-auto overflow-hidden shadow-lg">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-3 items-center">
              <div className="md:col-span-1">
                <Image
                  src="https://placehold.co/400x400.png"
                  alt="Professional photo"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                  data-ai-hint="professional portrait"
                />
              </div>
              <div className="md:col-span-2 p-8 md:p-12">
                <p className="text-muted-foreground mb-4">
                  Hello! I'm a passionate and creative developer with a knack for building beautiful, functional, and user-centric web applications. My journey into the world of code began with a fascination for how things work on the internet, and it has since evolved into a full-fledged career.
                </p>
                <p className="text-muted-foreground mb-4">
                  With a strong foundation in modern web technologies, I specialize in creating dynamic and responsive websites and applications. I thrive in collaborative environments and enjoy turning complex problems into elegant, simple solutions. 
                </p>
                <p className="text-muted-foreground">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee while planning my next big project.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
