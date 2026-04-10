import { Tag } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import ProductPage from '../_components/Prdoducts/page'

export default function page() {
  return (
    <div>
      <div className="bg-linear-to-r from-green-700 to-green-500 text-white py-16 px-10 ">
        <div className="container m-auto">
          <div className="text-sm opacity-80">
            <Link href="/">Home</Link> /{" "}
            <Link href="/Shop" className="font-semibold">
              All Products
            </Link>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <div className="bg-white/20 p-4 rounded-2xl">
              <Tag className="w-6 h-6" />
            </div>

            <div>
              <h1 className="text-4xl font-bold">All Products</h1>
              <p className="opacity-80 mt-1">Explore our complete product collection</p>
            </div>
          </div>
        </div>
      </div>
      <ProductPage />
    </div>
  )
}
