import getUserToken from "_/app/Utilis";
import { Brand, CartResponse, Category, ProductType } from "../Type";

export async function getAllProducts(): Promise<ProductType[] | null> {
    try {
      const res = await fetch(
        "https://ecommerce.routemisr.com/api/v1/products",
      );
      const finalResult = await res.json();
      //   console.log("finalResult", finalResult);
      return finalResult.data;
    } catch (error) {
      console.log("errrrrror", error);
      return null;
    }
  }
export async function getProductDetails(id:string): Promise<ProductType| null> {
    try {
      const res = await fetch(
        `https://ecommerce.routemisr.com/api/v1/products/${id}`,
      );
      const finalResult = await res.json();
      return finalResult.data;
    } catch (error) {
      console.log("errrrrror", error);
      return null;
    }
  }
export async function getAllBrands(): Promise<Brand[]| null> {
    try {
      const res = await fetch(
        `https://ecommerce.routemisr.com/api/v1/brands`,
      );
      const finalResult = await res.json();
      return finalResult.data;
    } catch (error) {
      console.log("errrrrror", error);
      return null;
    }
  }


 export async function getProductsByBrand(id: string) {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products`
    );
    const data = await res.json();

    console.log("PARAM ID:", id);
    console.log("FIRST PRODUCT BRAND:", data.data[0].brand._id);
   return data.data.filter((product: ProductType) => {
  if (product.brand._id === id) {
    console.log("MATCH FOUND:", product.title);
    return true;
  }
  return false;
});
  } catch (error) {
    console.log("error el product" , error);
    return [];
  }
}


export async function getCartProducts(): Promise<CartResponse| undefined | null> {
  const userToken = await getUserToken()
  console.log("userToken" , userToken);
  
    if (userToken) {
      try {
      const res = await fetch(
        "https://ecommerce.routemisr.com/api/v2/cart",{
          headers: {token:userToken},
        }
      );
      const finalResult = await res.json();
       console.log("finalResult CartProducts", finalResult);
      return finalResult.data;
    } catch (error) {
      console.log("errrrrror", error);
      return null;
    }
    } else {
      return undefined
    }
  }
export async function getWishlistProducts(): Promise<ProductType[]| undefined | null> {
  const userToken = await getUserToken()
    if (userToken) {
      try {
      const res = await fetch(
        "https://ecommerce.routemisr.com/api/v1/wishlist",{
          headers: {token:userToken},
        }
      );
      const finalResult = await res.json();
       console.log("finalResult wishlist products", finalResult);
      return finalResult.data;
    } catch (error) {
      console.log("errrrrror wishlist", error);
      return null;
    }
    } else {
      return undefined
    }
  }

  export async function getUserOrders(userId:string): Promise<CartResponse| undefined | null> {
  const userToken = await getUserToken()
    if (userToken) {
      try {
      const res = await fetch(
        `https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`,{
          headers: {token:userToken},
        }
      );
      const finalResult = await res.json();
       console.log("finalResult user order", finalResult);
      return finalResult.data;
    } catch (error) {
      console.log("errrrrror", error);
      return null;
    }
    } else {
      return undefined
    }
  }

  export async function getAllCategories(): Promise<Category[] | null> {
    try {
      const res = await fetch(
        "https://ecommerce.routemisr.com/api/v1/categories",
      );
      const finalResult = await res.json();
      //   console.log("finalResult", finalResult);
      return finalResult.data;
    } catch (error) {
      console.log("errrrrror", error);
      return null;
    }
  }

  export async function getCategoryDetails(id:string): Promise<Category| null> {
    try {
      const res = await fetch(
        `https://ecommerce.routemisr.com/api/v1/categories/${id}`,
      );
      const finalResult = await res.json();
      console.log("getCategoryDetails" , finalResult);
      return finalResult.data;
      
    } catch (error) {
      console.log("errrrrror", error);
      return null;
    }
  }


export async function getElectronicsProducts() {
  try {
    const res = await fetch(
      "https://ecommerce.routemisr.com/api/v1/products"
    );

    const data = await res.json();

    const electronicsProducts = data.data.filter((product: ProductType) => {
      return product.category?.name === "Electronics";
    });

    return electronicsProducts;
  } catch (error) {
    console.log("error getting electronics products", error);
    return [];
  }
}

export async function getWomenProducts() {
  try {
    const res = await fetch(
      "https://ecommerce.routemisr.com/api/v1/products"
    );

    const data = await res.json();

    const WomenProducts = data.data.filter((product: ProductType) => {
      return product.category?.name === "Women's Fashion";
    });

    return WomenProducts;
  } catch (error) {
    console.log("error getting women products", error);
    return [];
  }
}
export async function getMenProducts() {
  try {
    const res = await fetch(
      "https://ecommerce.routemisr.com/api/v1/products"
    );

    const data = await res.json();

    const MenProducts = data.data.filter((product: ProductType) => {
      return product.category?.name === "Men's Fashion";
    });

    return MenProducts;
  } catch (error) {
    console.log("error getting Men products", error);
    return [];
  }
}