import MovieCategory from "@/components/movie-category";
import RecommendCard from "@/components/recommend-card";
import { Movie, RecommendMovie } from "@/types";
import OnePiece from "@/assets/one-piece.jpg";
import Thumbnail from "@/assets/movie.jpg";
import Footer from "@/components/footer";

export default function Home() {
  const FeaturedData: Movie[] = [
    {
      _id: "1",
      name: "Đảo hải tặc",
      yearOfRelease: "2023",
      origin_url: OnePiece,
    },
    {
      _id: "2",
      name: "Đảo hải tặc",
      yearOfRelease: "2023",
      origin_url: OnePiece,
    },
    {
      _id: "3",
      name: "Đảo hải tặc",
      yearOfRelease: "2023",
      origin_url: OnePiece,
    },
    {
      _id: "4",
      name: "Đảo hải tặc",
      yearOfRelease: "2023",
      origin_url: OnePiece,
    },
    {
      _id: "5",
      name: "Đảo hải tặc",
      yearOfRelease: "2023",
      origin_url: OnePiece,
    },
  ];
  const RecommendData: RecommendMovie[] = [
    {
      _id: "1",
      name: "Nam Lai Bắc Vãng",
      yearOfRelease: "2023",
      rating: "4.9",
      srcImg: Thumbnail,
    },
    {
      _id: "2",
      name: "Nam Lai Bắc Vãng",
      yearOfRelease: "2023",
      rating: "4.9",
      srcImg: Thumbnail,
    },
    {
      _id: "3",
      name: "Nam Lai Bắc Vãng",
      yearOfRelease: "2023",
      rating: "4.9",
      srcImg: Thumbnail,
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center bg-secondary">
      <div className="bg-primary mt-[71.5px] ">
        <p className="text-center py-3 border border-yellow-600 text-white text-sm">
          Xem phim miễn phí chất lượng cao - Xemphim
        </p>
        {/* Quảng cáo  */}
        <div className="flex items-center">
          <div className="w-full md:basis-2/3 lg:basis-2/3 xl:basis-2/3 2xl:basis-2/3 h-full border-r-[1px] border-gray">
            <MovieCategory title="Phim mới nổi bật" movies={FeaturedData} />
            <MovieCategory
              title="Phim chiếu rạp mới cập nhật"
              movies={FeaturedData}
            />
            <MovieCategory title="Phim bộ mới cập nhật" movies={FeaturedData} />
            <MovieCategory title="Phim lẻ mới cập nhật" movies={FeaturedData} />
          </div>
          <div className="md:block md:basis-1/3 lg-basis-1/3  xl:basis-1/4  2xl:basis-1/5 px-2 w-[340px]">
            {RecommendData.map((item, index) => (
              <RecommendCard key={index} movie={item} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
