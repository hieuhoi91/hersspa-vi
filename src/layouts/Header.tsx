'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import franchiseData from '../data/franchise.json';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';

const navItems = [
  {
    label: 'Trang chủ',
    href: '#',
  },
  {
    label: 'Giới thiệu',
    href: '#about',
  },
  {
    label: 'Dịch vụ',
    href: '#service',
  },
  {
    label: 'Gallery',
    href: '#gallery',
  },
  {
    label: 'Đối tác',
    href: '#partner',
  },
];

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedFranchise, setSelectedFranchise] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleFranchiseClick = (item: { id: number; label: string }) => {
    setSelectedFranchise(item);
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    setIsDialogOpen(true);
  };

  const handleNavItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full sticky top-0 z-50 flex justify-center h-[50px] md:h-[60px] bg-[#543217]">
      <div className="w-full max-w-[1200px] mx-auto px-4 grid grid-cols-3 md:grid-cols-7">
        {/* Mobile Menu Button */}
        <div className="md:hidden col-span-1 flex items-center justify-start px-2">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button className="text-white p-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-[#543217] text-white border-r-[#FFD56E]"
            >
              <SheetHeader>
                <SheetTitle className="text-white">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleNavItemClick}
                    className="bg-gradient-to-b from-white to-[#FFD56E] text-lg bg-clip-text text-transparent py-2"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Separator className="my-4" />
              <Link
                href="https://www.hersspa.com/"
                className="cursor-pointer text-white py-1.5 rounded-md relative"
              >
                English
              </Link>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block col-span-3 h-full">
          <NavigationMenu className="h-full">
            <NavigationMenuList className="gap-4 flex h-full items-center justify-center lg:gap-2 xl:gap-4 mr-2 lg:mr-4">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className="whitespace-nowrap bg-gradient-to-b from-white to-[#FFD56E] text-sm lg:text-base xl:text-[20px] bg-clip-text text-transparent cursor-pointer">
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Logo */}
        <div className="col-span-1 md:col-span-1 relative z-50 flex justify-center">
          <Image
            src="/logo-2.png"
            alt="Logo"
            width={200}
            height={200}
            className="w-[70%] md:w-[85%] absolute top-0 md:-top-3 left-1/2 transform -translate-x-1/2 rounded-b-0 lg:rounded-b-[50px] rounded-t-0 lg:rounded-t-[28px]"
          />
        </div>

        {/* Franchising Button */}
        <div
          className="col-span-1 md:col-span-3 flex items-center justify-center h-full relative"
          ref={dropdownRef}
        >
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-[#543217] border-2 cursor-pointer border-[#FFD56E] px-3 md:px-4 lg:px-6 py-1.5 md:py-2 rounded-md relative"
          >
            <span className="bg-gradient-to-b from-white to-[#FFD56E] text-xs md:text-sm lg:text-base xl:text-[20px] bg-clip-text text-transparent font-bold">
              FRANCHISING
            </span>
          </button>
          <Link
            href="https://english.hersspa.com/"
            className="cursor-pointer px-3 text-white md:px-4 lg:px-6 py-1.5 md:py-2 hidden md:block rounded-md relative"
          >
            English
          </Link>

          {isDropdownOpen && (
            <div className="absolute top-full mt-2 bg-white border-2 border-[#543217] rounded-md shadow-lg min-w-[200px] md:min-w-[250px] z-50 -left-20 md:left-16">
              {franchiseData.franchiseItems.map((item) => (
                <button
                  key={item.id}
                  className="block w-full cursor-pointer text-left px-4 md:px-6 py-2 md:py-3 text-[#543217] border-b border-[#543217] border-opacity-20 last:border-b-0 text-sm md:text-base"
                  onClick={() => handleFranchiseClick(item)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <Dialog
        open={isDialogOpen}
        onOpenChange={(open) => setIsDialogOpen(open)}
      >
        <DialogContent className="max-w-sm md:max-w-2xl max-h-[90vh] overflow-y-auto mx-4 flex flex-col m-0">
          <DialogHeader className="text-center">
            <DialogTitle className="text-[#543217] text-lg md:text-xl font-bold">
              {selectedFranchise?.label}
            </DialogTitle>
            <DialogDescription className="text-[#543217] text-sm md:text-base">
              Danh sách các chi nhánh của Her S Spa.
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 max-h-[60vh] md:max-h-96 overflow-y-auto flex-1">
            {selectedFranchise?.children?.map(
              (location: { id: number; label: string; address: string }) => (
                <Link
                  href={`https://m.me/${location.id}`}
                  target="_blank"
                  key={location.id}
                  className="p-2 md:p-3 bg-[#FFD56E] bg-opacity-10 rounded-md border flex flex-col gap-2 border-[#543217] border-opacity-20"
                >
                  <span className="text-[#543217] font-medium text-sm md:text-base">
                    {location.label}
                  </span>
                  <span className="text-black font-medium text-xs md:text-sm">
                    {location.address}
                  </span>
                </Link>
              )
            )}
            {selectedFranchise?.children?.length === 0 && (
              <div className="col-span-full flex items-center justify-center py-6 md:py-8 text-[#543217] opacity-60 text-sm md:text-base">
                Sắp có
              </div>
            )}
          </div>

          {/* <DialogFooter>
            <Button
              className="bg-[#543217] text-white cursor-pointer hover:bg-[#543217]/90"
              onClick={() => setIsDialogOpen(false)}
            >
              Close
            </Button>
          </DialogFooter> */}
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Header;
