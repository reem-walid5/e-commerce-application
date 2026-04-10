export interface SubCategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface ProductType {
  sold: number;
  images: string[];
  subcategory: SubCategory[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  imageCover: string;
  category: Category;
  brand: Brand;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  priceAfterDiscount: number;
  id: string;
}
      
export interface CartResponse {
  _id: string;
  cartOwner: string;
  products: CartItem[];
  totalCartPrice: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface CartItem {
  _id: string;
  count: number;
  price: number;
  product: ProductType;
}

export interface OrderPlaceType{
  shippingAddress:{
    details: string,
    phone: string,
    city: string,
    postalCode?:string
  }
}
