import React from 'react'
import { getAllProducts } from '../../api/Services/Route.Services';
import Link from 'next/link';
import ProductCard from '../ProductCard';

export default async function ProductPage() {
    const allProducts = await getAllProducts();
  return (
    <div className="container m-auto">
        <p className="my-3 font-bold text-xl text-gray-600">Showing 40 products</p>
        <div className="grid lg:grid-cols-5 grid-cols-2 md:grid-cols-3 gap-4">
      {allProducts?.map((product) => (<Link key={product._id} href={`/product/${product._id}`} > <ProductCard product={product} /></Link>))}
    </div>
    </div>
  )
}
