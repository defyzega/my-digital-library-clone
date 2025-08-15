import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import universityLogo from "@/assets/university-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Profil", hasDropdown: true },
    { label: "Koleksi", hasDropdown: true },
    { label: "Layanan", hasDropdown: true },
    { label: "Fasilitas", hasDropdown: true },
    { label: "Berita", hasDropdown: true },
    { label: "Download", hasDropdown: true },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex justify-between items-center py-2 text-sm">
          <div className="flex items-center gap-6">
            <img
              src={universityLogo}
              alt="University Logo"
              className="h-12 w-12"
            />
            <div>
              <h1 className="font-bold text-library-blue">
                PERPUSTAKAAN UNIVERSITAS DIGITAL
              </h1>
              <p className="text-muted-foreground text-xs">
                University Digital Library
              </p>
              <p className="text-muted-foreground text-xs">NPP: 123456789012345</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm">
              In English
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center justify-between py-3">
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="font-medium text-foreground hover:text-library-blue"
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Item 1</DropdownMenuItem>
                  <DropdownMenuItem>Item 2</DropdownMenuItem>
                  <DropdownMenuItem>Item 3</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border py-4">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  className="justify-start"
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;