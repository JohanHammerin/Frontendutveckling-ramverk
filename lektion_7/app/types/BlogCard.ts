export interface BlogCard {
  title: string;
  content: string;
  tags: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface Rating {
  rate: number;
  count: number;
}
