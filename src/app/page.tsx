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
    {
      _id: "9",
      name: "Bhakshak: Tội lỗi làm ngơ",
      yearOfRelease: "2023",
      srcImg: Advertising,
    },
  ];

  const NewsData: News[] = [
    {
      _id: "1",
      day: 8,
      month: 'April',
      title: "Top 10 bộ phim Hàn Quốc hay nhất mọi thời đại",
      description:
        "Đây là một chủ đề phổ biến và luôn thu hút lượt truy cập cao. Bạn có thể tổng hợp danh sách phim dựa trên các tiêu chí như đánh giá của các nhà phê bình, lượt xem trên các nền tảng trực tuyến, hoặc ý kiến của khán giả. Hãy nhớ đưa ra những thông tin thú vị và hấp dẫn về từng bộ phim, chẳng hạn như nội dung tóm tắt, dàn diễn viên, đạo diễn, giải thưởng đạt được, v.v.",
    },
    {
      _id: "2",
      day: 8,
      month: 'April',
      title: "Những bộ phim Việt Nam hay nhất năm 2024",
      description:
        "Đây là cơ hội để bạn giới thiệu những tác phẩm điện ảnh mới nhất và chất lượng nhất của Việt Nam đến với khán giả. Hãy chọn lọc những bộ phim có nội dung hấp dẫn, diễn xuất tốt và được đánh giá cao bởi các nhà phê bình. Bạn cũng có thể so sánh các bộ phim này với nhau để tạo sự thu hút cho bài viết",
    },
    {
      _id: "3",
      day: 3,
      month: 'April',
      title: "Những bộ phim Hollywood hot nhất hiện nay",
      description:
        "Nắm bắt xu hướng phim ảnh Hollywood là điều cần thiết để thu hút lượt truy cập cho trang web của bạn. Hãy giới thiệu những bộ phim bom tấn mới nhất, những dự án được mong chờ, và những diễn viên nổi tiếng. Bạn cũng có thể chia sẻ những thông tin hậu trường thú vị về các bộ phim này.",
    },
    {
      _id: "4",
      day: 2,
      month: 'April',
      title: "Bí mật đằng sau những cảnh quay ấn tượng nhất của điện ảnh",
      description:
        "Khán giả luôn tò mò về cách thức các nhà làm phim tạo ra những cảnh quay đẹp mắt và ấn tượng. Hãy viết bài viết này để hé lộ những bí mật đằng sau các kỹ thuật quay phim, hiệu ứng đặc biệt, và công nghệ CGI. Bạn cũng có thể chia sẻ những câu chuyện thú vị về quá trình quay phim của các bộ phim nổi tiếng.",
    },
    {
      _id: "5",
      day: 2,
      month: 'April',
      title: "Giải mã những chi tiết ẩn trong phim",
      description:
        "Nhiều bộ phim có những chi tiết ẩn mà có thể không phải khán giả nào cũng nhận ra. Hãy viết bài viết để giải mã những chi tiết này, giúp khán giả hiểu rõ hơn về nội dung phim và ý đồ của đạo diễn.",
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
    <main className="lg:flex min-h-screen flex-col items-center">
      {/* Quảng cáo  */}

      <div className="lg:flex justify-between block">
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
        <div className="md:block md:basis-1/3 p-[30px]">
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
    </main>
  );
}
