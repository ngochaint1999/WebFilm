/** @format */

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Navbar from "@/components/navbar";

import "./globals.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Footer from "@/components/footer";

const roboto = Roboto({
  subsets: ["vietnamese"],
  weight: ["100", "300", "400", "500", "700"],
});

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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />

      <body className={`${roboto.className}`}>
        <Navbar />
        <div className="bg-primary mt-[74px] container w-full">
          <p className="text-center py-3 border border-yellow-600 text-white text-sm">
            Xem phim miễn phí chất lượng cao - Xemphim
          </p>
          {children}
          <hr className="border border-gray mt-2.5" />
          <Footer />
        </div>
      </body>
    </html>
  );
}
