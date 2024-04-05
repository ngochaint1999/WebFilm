import MovieCategory from "@/components/movie-category";
import NewsCategory from "@/components/news-category";
import RecommendCard from "@/components/recommend-card";
import AdvertisingSlide from "@/components/advertising-slide";
import IntroduceCard from "@/components/introduce-card";
import { AdvertisingMovie, Movie, News, RecommendMovie } from "@/types";
import OnePiece from "@/assets/one-piece.jpg";
import Thumbnail from "@/assets/movie.jpg";
import Advertising from "@/assets/advertising.jpg";
import Introduce from "@/assets/introduce.jpg";
import Footer from "@/components/footer";
import Link from "next/link";

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
    {
      _id: "6",
      name: "Đảo hải tặc",
      yearOfRelease: "2023",
      origin_url: OnePiece,
    },
    {
      _id: "7",
      name: "Đảo hải tặc",
      yearOfRelease: "2023",
      origin_url: OnePiece,
    },
    {
      _id: "8",
      name: "Đảo hải tặc",
      yearOfRelease: "2023",
      origin_url: OnePiece,
    },
    {
      _id: "9",
      name: "Đảo hải tặc",
      yearOfRelease: "2023",
      origin_url: OnePiece,
    },
    {
      _id: "10",
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
    {
      _id: "4",
      name: "Nam Lai Bắc Vãng",
      yearOfRelease: "2023",
      rating: "4.9",
      srcImg: Thumbnail,
    },
    {
      _id: "5",
      name: "Nam Lai Bắc Vãng",
      yearOfRelease: "2023",
      rating: "4.9",
      srcImg: Thumbnail,
    },
    {
      _id: "6",
      name: "Nam Lai Bắc Vãng",
      yearOfRelease: "2023",
      rating: "4.9",
      srcImg: Thumbnail,
    },
  ];
  const AdvertisingData: AdvertisingMovie[] = [
    {
      _id: "1",
      name: "Bhakshak: Tội lỗi làm ngơ",
      yearOfRelease: "2023",
      srcImg: Advertising,
    },
    {
      _id: "2",
      name: "Bhakshak: Tội lỗi làm ngơ",
      yearOfRelease: "2023",
      srcImg: Advertising,
    },
    {
      _id: "3",
      name: "Bhakshak: Tội lỗi làm ngơ",
      yearOfRelease: "2023",
      srcImg: Advertising,
    },
    {
      _id: "4",
      name: "Bhakshak: Tội lỗi làm ngơ",
      yearOfRelease: "2023",
      srcImg: Advertising,
    },
    {
      _id: "4",
      name: "Bhakshak: Tội lỗi làm ngơ",
      yearOfRelease: "2023",
      srcImg: Advertising,
    },
    {
      _id: "5",
      name: "Bhakshak: Tội lỗi làm ngơ",
      yearOfRelease: "2023",
      srcImg: Advertising,
    },
    {
      _id: "6",
      name: "Bhakshak: Tội lỗi làm ngơ",
      yearOfRelease: "2023",
      srcImg: Advertising,
    },
    {
      _id: "7",
      name: "Bhakshak: Tội lỗi làm ngơ",
      yearOfRelease: "2023",
      srcImg: Advertising,
    },
    {
      _id: "8",
      name: "Bhakshak: Tội lỗi làm ngơ",
      yearOfRelease: "2023",
      srcImg: Advertising,
    },
  ];

  const NewsData: News[] = [
    {
      _id: "1",
      title: "Top 12 phim ngôn tình Trung Quốc hay không nên bỏ qua",
      description:
        "List những bộ phim ngôn tình Trung Quốc lãng mạn sẽ khiến tâm hồn bạn trở nên ngọt ngào. Tham khảo ngay top phim tình cảm Trung Quốc đã được phimmoi liệt kê bên dưới nhé! Thầm",
    },
    {
      _id: "2",
      title: "Top 10 bộ phim hay nhất mà bạn nên xem một lần trong đời",
      description:
        "Phim truyện là một lĩnh vực rộng lớn, có rất nhiều thể loại phim với nhưng nội dung và ý nghĩa khác nhau. Xem phim không chỉ để giải trí, mà mỗi bộ phim còn đem lại những ý",
    },
    {
      _id: "3",
      title: "Top 10 bộ phim hay nhất mà bạn nên xem một lần trong đời",
      description:
        "Netflix vừa công bố số liệu thống kê hàng tuần cho bộ phim và chương trình truyền hình ăn khách nhất trên nền tảng này. Những năm trước, Netflix thường không chia sẻ số lượng",
    },
    {
      _id: "4",
      title: "Top 10 bộ phim hay nhất mà bạn nên xem một lần trong đời",
      description:
        "Netflix vừa công bố số liệu thống kê hàng tuần cho bộ phim và chương trình truyền hình ăn khách nhất trên nền tảng này. Những năm trước, Netflix thường không chia sẻ số lượng",
    },
    {
      _id: "5",
      title: "Top 10 bộ phim hay nhất mà bạn nên xem một lần trong đời",
      description:
        "Netflix vừa công bố số liệu thống kê hàng tuần cho bộ phim và chương trình truyền hình ăn khách nhất trên nền tảng này. Những năm trước, Netflix thường không chia sẻ số lượng",
    },
  ];
  const yearData = [
    { _id: "1", title: "2024" },
    { _id: "2", title: "2023" },
    { _id: "3", title: "2022" },
    { _id: "4", title: "2021" },
    { _id: "5", title: "2020" },
    { _id: "6", title: "2019" },
    { _id: "7", title: "2018" },
    { _id: "8", title: "2017" },
    { _id: "9", title: "2016" },
    { _id: "10", title: "2015" },
    { _id: "11", title: "2014" },
    { _id: "12", title: "2013" },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center bg-secondary">
      <div className="bg-primary mt-[74px] max-w-7xl w-full">
        <p className="text-center py-3 border border-yellow-600 text-white text-sm">
          Xem phim miễn phí chất lượng cao - Xemphim
        </p>
        {/* Quảng cáo  */}

        <div className="md:flex block">
          <div className="w-full md:basis-2/3 lg:basis-2/3 xl:basis-2/3 2xl:basis-2/3 h-full border-r-[1px] border-gray p-[30px]">
            <AdvertisingSlide movies={AdvertisingData} />
            <MovieCategory title="Phim mới nổi bật" movies={FeaturedData} />
            <MovieCategory
              title="Phim chiếu rạp mới cập nhật"
              movies={FeaturedData}
            />
            <MovieCategory title="Phim bộ mới cập nhật" movies={FeaturedData} />
            <MovieCategory title="Phim lẻ mới cập nhật" movies={FeaturedData} />
            <NewsCategory title="Tin tức" news={NewsData} />
          </div>
          <div className="md:block md:basis-1/3 lg-basis-1/3 xl:basis-1/4  2xl:basis-1/5 p-[30px]">
            <p className="text-[17px] text-whiteLight mb-[15px]">
              Năm phát hành
            </p>
            <div className="grid grid-rows-4 grid-flow-col gap-2">
              {yearData.map((item) => (
                <Link
                  href={""}
                  key={item._id}
                  className="flex justify-center text-[13px] bg-primary text-whiteLight py-1 hover:bg-blue hover:text-white"
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <IntroduceCard srcImg={Introduce} name="Độc chiến 2" year="2023" />
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
