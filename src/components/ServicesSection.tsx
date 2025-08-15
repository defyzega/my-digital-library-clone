import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Search, 
  BookOpen, 
  Database, 
  GraduationCap, 
  Archive, 
  Users, 
  Heart,
  FileText,
  CheckCircle
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: "Katalog Online",
      description: "OPAC (Online Public Access Catalogue)"
    },
    {
      icon: FileText,
      title: "Jurnal Elektronik", 
      description: "Jurnal elektronik bereputasi yang dilanggan oleh USU"
    },
    {
      icon: BookOpen,
      title: "Buku Elektronik",
      description: "Buku elektronik yang dilanggan oleh USU"
    },
    {
      icon: GraduationCap,
      title: "Panduan Sumberdaya Perpustakaan",
      description: "Berisikan Informasi Terkait Resource Guides"
    },
    {
      icon: Archive,
      title: "Repositori USU",
      description: "Terdiri dari karya-karya oleh dan/atau tentang universitas dalam bentuk dokumen elektronik"
    },
    {
      icon: Users,
      title: "Kelas Literasi Informasi",
      description: "Lihat Jadwal dan Ikuti Pelatihannya"
    },
    {
      icon: Heart,
      title: "Pojok Kearifan Lokal",
      description: "Pojok kearifan lokal yang berisikan koleksi kearifan lokal yang ada di Perpustakaan USU"
    },
    {
      icon: Database,
      title: "Layanan EBSCO DISCOVERY",
      description: "Satu pintu pencarian untuk semua koleksi EBSCO dan koleksi milik Perpustakaan USU, serta akses fulltext ke semua database E-Journal berlangganan"
    },
    {
      icon: FileText,
      title: "Arsip Dupak Dosen",
      description: "Arsip untuk Dupak Dosen yang berasal dari Universitas Sumatera Utara"
    },
    {
      icon: CheckCircle,
      title: "Cek Pinjaman",
      description: "Gunakan NIM Anda sebagai ID dan Password"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-library-blue mb-4">
            LAYANAN PERPUSTAKAAN USU
          </h2>
          <div className="w-24 h-1 bg-library-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-library-gold group hover:scale-105"
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-full bg-library-light-blue flex items-center justify-center mb-4 group-hover:bg-library-gold transition-colors">
                  <service.icon className="h-6 w-6 text-library-blue" />
                </div>
                <CardTitle className="text-lg font-semibold text-library-blue">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;