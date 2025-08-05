import { socialLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex space-x-4 mb-4 md:mb-0">
          {socialLinks.map((link) => (
            <Button key={link.name} variant="ghost" size="icon" asChild>
              <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                <link.icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
        </div>
        <p className="text-muted-foreground text-sm">
          © {currentYear} Portfolio Canvas. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
