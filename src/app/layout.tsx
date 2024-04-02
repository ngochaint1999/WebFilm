import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Xemphim',
    default: 'Xemphim | Xem phim mới | Phim hay | Phim chiếu rạp | Phimmoi'
  },
  description: "Xemphim - Xem phim moi, phim online, phim HD, phim mới nhất, phim lẻ, phim bộ, phim hoạt hình, phim Việt Nam, phim Hollywood...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
