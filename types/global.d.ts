interface Tags {
  _id: string;
  name: string;
}
interface Author {
  _id: string;
  name: string;
  imgurl: string;
}

export interface Question {
  _id: string;
  title: string;
  description: string;
  tags: Tags[];
  author: Author[];
  upvotes: number;
  downvotes: number;
  views: number;
  answers: number;
  createdAt: Date;
}
