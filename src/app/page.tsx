import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-secondary">
      <Navbar />
      <div className="bg-primary mt-[71.5px] max-w-7xl w-full">
        <p className="text-center w-full py-3 border border-yellow-600 text-white text-sm">
          Xem phim miễn phí chất lượng cao - Xemphim
        </p>
        {/* Quảng cáo  */}

        
      </div>
    </main>
  );
}
