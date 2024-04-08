import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";

import "./globals.css";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Xemphim",
    default: "Xemphim | Xem phim mới | Phim hay | Phim chiếu rạp | Phimmoi",
  },
  description:
    "Xemphim - Xem phim moi, phim online, phim HD, phim mới nhất, phim lẻ, phim bộ, phim hoạt hình, phim Việt Nam, phim Hollywood...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-secondary !scroll-smooth">
      <body className={`${inter.className}`}>
        <Navbar />
        <div className="bg-primary mt-[74px] container w-full">
          <p className="text-center py-3 border border-yellow-600 text-white text-sm">
            Xem phim miễn phí chất lượng cao - Xemphim
          </p>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
