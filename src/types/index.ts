/** @format */

export type Item = {
  id: string;
  name: string;
  slug: string;
};

export type Movie = {
  category: Item[];
  chieurap: boolean;
  country: Item[];
  episode_current: string;
  lang: string;
  modified: {
    time: Date;
  };
  tmdb: {
    type: string;
    id: string;
    season: number;
    vote_average: number;
    vote_count: number;
  };
  name: string;
  origin_name: string;
  poster_url: string;
  quality: string;
  slug: string;
  sub_docquyen: boolean;
  thumb_url: string;
  time: string;
  type: string;
  year: number;
  _id: string;
};
export type Detail = {
  created: {
    time: Date;
  };
  modified: {
    time: Date;
  };
  _id: string;
  name: string;
  slug: string;
  origin_name: string;
  content: string;
  type: string;
  status: string;
  thumb_url: string;
  poster_url: string;
  is_copyright: boolean;
  sub_docquyen: boolean;
  chieurap: boolean;
  trailer_url: string;
  time: string;
  episode_current: string;
  episode_total: string;
  quality: string;
  lang: string;
  notify: string;
  showtimes: string;
  year: number;
  view: number;
  actor: string[];
  director: string[];
  category: {
    id: string;
    name: string;
    slug: string;
  }[];
  country: {
    id: string;
    name: string;
    slug: string;
  }[];
  episodes: {
    server_name: string;
    server_data: Episode[];
  }[];
};

export type Category = {
  name: string;
  slug: string;
};
export type Person = {
  _id: string;
  name: string;
  avt: any;
  sub: string;
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

export type AdvertisingMovie = {
  _id: string;
  name: string;
  yearOfRelease: string;
  srcImg: any;
};
export type Episode = {
  name: string;
  slug: string;
  filename: string;
  link_embed: string;
  link_m3u8: string;
};
