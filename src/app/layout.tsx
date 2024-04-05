import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";

import "./globals.css";
import "swiper/css";

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
    <html lang="en" className="bg-secondary">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
