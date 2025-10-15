export type Review = {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
  reviewCount: number;
  reviews?: Review[];
  tags?: string[];
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  headline: string;
  description: string;
  heroImage: string;
  ctaLabel: string;
};
