import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Link, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  Youtube,
  Globe 
} from "lucide-react";
import heroLibrary from "@/assets/hero-library.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-[600px] bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${heroLibrary})`
      }}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white">
            <h1 className="text-6xl lg:text-8xl font-bold mb-4">
              <span className="block text-white italic font-light">Layanan</span>
              <span className="block text-library-gold uppercase tracking-wide">
                PENELUSURAN LITERATUR
              </span>
            </h1>
            
            <Card className="bg-library-gold/90 backdrop-blur-sm p-6 text-library-blue max-w-md">
              <h2 className="text-lg font-semibold mb-2">
                Layanan Penelusuran Literatur
              </h2>
              <p className="text-sm">
                GRATIS khusus untuk Dosen dan Mahasiswa Pascasarjana 
                Universitas Digital
              </p>
            </Card>

            {/* Contact info */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-white">
                <div className="bg-library-gold rounded-full p-2">
                  <Link className="h-5 w-5 text-library-blue" />
                </div>
                <span>bit.ly/reservasiartikelDigitalLibrary</span>
              </div>
              
              <div className="flex items-center gap-3 text-white">
                <div className="bg-library-gold rounded-full p-2">
                  <Phone className="h-5 w-5 text-library-blue" />
                </div>
                <span>0812-6260-2128</span>
              </div>
              
              <div className="flex items-center gap-3 text-white">
                <div className="bg-library-gold rounded-full p-2">
                  <MapPin className="h-5 w-5 text-library-blue" />
                </div>
                <div>
                  <p className="font-semibold">Lantai 1,</p>
                  <p className="text-sm">Layanan Referensi & Literasi Informasi</p>
                  <p className="text-sm">Perpustakaan USU</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - QR Code and Social */}
          <div className="flex flex-col items-center lg:items-end space-y-6">
            <Card className="bg-white p-6 text-center">
              <h3 className="font-bold text-library-blue mb-4">SCAN ME</h3>
              <div className="w-32 h-32 bg-muted border-2 border-library-gold flex items-center justify-center">
                <span className="text-muted-foreground text-xs">QR Code</span>
              </div>
            </Card>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              {[
                { icon: Instagram, label: "@usulibraryofficial" },
                { icon: Facebook, label: "USU Library" },
                { icon: Youtube, label: "USU Library" },
                { icon: Globe, label: "library.usu.ac.id" },
              ].map((social, index) => (
                <Button
                  key={index}
                  variant="secondary"
                  size="icon"
                  className="rounded-full bg-library-gold hover:bg-library-gold/80"
                >
                  <social.icon className="h-5 w-5 text-library-blue" />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;