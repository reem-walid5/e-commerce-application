import React from 'react'
import { getAllProducts } from '../../api/Services/Route.Services';
import Link from 'next/link';
import ProductCard from '../ProductCard';

export default async function ProductPage() {
    const allProducts = await getAllProducts();
  return (
    <div className="px-10 md:px-15 lg:px-25 m-auto">
        <p className="my-3 font-bold text-xl text-gray-600">Showing 40 products</p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {allProducts?.map((product) => (<Link key={product._id} href={`/product/${product._id}`} > <ProductCard product={product} /></Link>))}
    </div>
    </div>
  )
}
