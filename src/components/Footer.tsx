import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Twitter
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-library-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-library-gold">Kontak Perpustakaan</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-library-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Perpustakaan Universitas Digital</p>
                  <p className="text-sm text-gray-300">
                    Jl. Dr. Mansyur No. 1, Medan 20155
                    Sumatera Utara, Indonesia
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-library-gold" />
                <span>+62 61 8213912</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-library-gold" />
                <span>library@digital.ac.id</span>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-library-gold">Jam Operasional</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-library-gold mt-1" />
                <div>
                  <p className="font-semibold">Senin - Jumat</p>
                  <p className="text-sm text-gray-300">08:00 - 16:00 WIB</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-library-gold mt-1" />
                <div>
                  <p className="font-semibold">Sabtu</p>
                  <p className="text-sm text-gray-300">08:00 - 14:00 WIB</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-library-gold mt-1" />
                <div>
                  <p className="font-semibold">Minggu</p>
                  <p className="text-sm text-gray-300">Tutup</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-library-gold">Tautan Cepat</h3>
            <ul className="space-y-2">
              {[
                "Katalog Online",
                "E-Journal",
                "E-Book",
                "Repositori",
                "Panduan Pengguna",
                "FAQ"
              ].map((link) => (
                <li key={link}>
                  <Button 
                    variant="link" 
                    className="text-gray-300 hover:text-library-gold p-0 h-auto justify-start"
                  >
                    {link}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-library-gold">Ikuti Kami</h3>
            <div className="flex gap-3 mb-6">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Youtube, label: "Youtube" },
                { icon: Twitter, label: "Twitter" }
              ].map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  className="border-library-gold hover:bg-library-gold hover:text-library-blue"
                >
                  <social.icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
            
            <Card className="bg-library-gold/10 border-library-gold/30 p-4">
              <h4 className="font-semibold text-library-gold mb-2">Newsletter</h4>
              <p className="text-sm text-gray-300 mb-3">
                Dapatkan update terbaru dari perpustakaan
              </p>
              <Button 
                variant="outline" 
                size="sm"
                className="border-library-gold text-library-gold hover:bg-library-gold hover:text-library-blue w-full"
              >
                Berlangganan
              </Button>
            </Card>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-12 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2025 Perpustakaan Universitas Digital. Semua hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;