import { HeroIntro } from '@/components/animations/HeroIntro';
import { CinematicScroll } from '@/components/animations/CinematicScroll';
import { CarViewer } from '@/components/3d/CarViewer';
import { ModelGallery } from '@/components/ui/ModelGallery';
import { Specifications } from '@/components/ui/Specifications';
import { VideoShowcase } from '@/components/ui/VideoShowcase';
import { BookingForm } from '@/components/ui/BookingForm';
import { GridPattern } from '@/components/effects/GridPattern';

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <GridPattern className="fixed inset-0 -z-10 pointer-events-none" />
      
      <section id="hero" className="relative min-h-screen flex items-center justify-center">
        <HeroIntro />
        <CarViewer />
      </section>

      <section id="cinematic" className="relative">
        <CinematicScroll />
      </section>

      <section id="gallery" className="relative section-padding">
        <div className="container-custom">
          <ModelGallery />
        </div>
      </section>

      <section id="specs" className="relative section-padding bg-background/50">
        <div className="container-custom">
          <Specifications />
        </div>
      </section>

      <section id="videos" className="relative section-padding">
        <div className="container-custom">
          <VideoShowcase />
        </div>
      </section>

      <section id="booking" className="relative section-padding bg-background/50">
        <div className="container-custom max-w-3xl">
          <BookingForm />
        </div>
      </section>
    </div>
  );
}