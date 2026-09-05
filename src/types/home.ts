export interface courseInfoType {
  type: string;
  ageCategory?: string;
  sessions: number | string;
  price: number;
  name: string;
  details: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
  offPrecent?: number;
  votesAverage: number;
  votes: number;
  href: string;
  studentsNumber: number;
  isFavorite: boolean;
  author: string;
  group?: string;
}

export interface Card2Type {
  article?: Card2TypeProps;
  cls?: string;
  item?: any;
}

export interface NewCart {
  imgSrc: string;
  imgAlt: string;
  head: string;
  para: string;
  date: string;
  author: string;
  category: string;
  comments: number;
  linkName: string;
}

export interface Card2TypeProps {
  cover: string;
  // imgAlt : string,
  name: string;
  body: string;
  createdAt: string;
  author: string;
  category: string;
  // comments ?: number,
  _id: string;
  date?: string;
}

export interface teachersInfoType {
  name: string;
  details: string;
  image: string;
  telegramId?: string;
  githubId?: string;
  instagramId?: string;
  infoUrl?: string;
}

export interface sentencesType {
  name: string;
  job: string;
  sentence: string;
  image: string;
}
