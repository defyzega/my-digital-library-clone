import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      title: "[PENGUMUMAN] Gangguan Layanan Perpustakaan Sementara",
      excerpt: "Disampaikan kepada #SobatUSULib, sehubungan Perpustakaan akan menambahkan daya listrik...",
      date: "12 Agustus 2025",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center"
    },
    {
      title: "Workshop Literasi Digital untuk Mahasiswa",
      excerpt: "Perpustakaan mengadakan workshop literasi digital yang akan membantu mahasiswa dalam penelitian...",
      date: "10 Agustus 2025", 
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop&crop=center"
    },
    {
      title: "Koleksi Buku Digital Terbaru Bulan Agustus",
      excerpt: "Perpustakaan telah menambahkan koleksi buku digital terbaru untuk mendukung kegiatan akademik...",
      date: "8 Agustus 2025",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop&crop=center"
    }
  ];

  return (
    <section className="py-16 bg-library-light-blue/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-library-blue mb-4">
            BERITA PERPUSTAKAAN
          </h2>
          <p className="text-muted-foreground">Berita Seputar Perpustakaan</p>
          <div className="w-24 h-1 bg-library-gold mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-library-gold text-library-blue px-3 py-1 rounded-full text-xs font-semibold">
                  BERITA
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-library-blue line-clamp-2 group-hover:text-library-gold transition-colors">
                  {item.title}
                </CardTitle>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  {item.date}
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="group border-library-blue text-library-blue hover:bg-library-blue hover:text-white"
                >
                  Baca Selengkapnya
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="default"
            className="bg-library-blue hover:bg-library-blue/90 text-white px-8 py-3"
          >
            Lihat Semua Berita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;