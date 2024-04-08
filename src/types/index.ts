export type Movie = {
  _id: string;
  name: string;
  yearOfRelease: string;
  origin_url: any;
};

export type News = {
  _id: string;
  title: string;
  description: string;
  day: number;
  month: string;
};

export type RecommendMovie = {
  _id: string;
  name: string;
  yearOfRelease: string;
  rating: string;
  srcImg: any;
};

export type Category = {
  name: string;
  slug: string;
};

export type AdvertisingMovie = {
  _id: string;
  name: string;
  yearOfRelease: string;
  srcImg: any;
};
