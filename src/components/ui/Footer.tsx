import { Github, Twitter, Youtube, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  Models: ['3 Series', '5 Series', '7 Series', 'X Series', 'M Series', 'i Series'],
  Experience: ['Test Drive', 'Build & Price', 'Events', 'Museum', 'Driving Experience'],
  Technology: ['iDrive', 'Electric Drive', 'Autonomous Driving', 'BMW OS', 'Safety'],
  Company: ['About BMW', 'Careers', 'Press', 'Sustainability', 'Contact'],
};

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border bg-background">
      <div className="container-custom py-16 lg:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-1 col-span-2 mb-8 lg:mb-0">
            <a href="#" className="text-2xl font-bold tracking-tighter text-gradient">
              BMW
            </a>
            <p className="mt-4 text-sm text-muted max-w-xs">
              The Ultimate Driving Machine. Crafting extraordinary vehicles since 1916.
            </p>
            <div className="flex gap-3 mt-6">
              {[Twitter, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300"
                  aria-label="Social media"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted hover:text-foreground transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>&copy; {new Date().getFullYear()} BMW Cinematic Experience. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}