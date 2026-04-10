import { Button } from '_/components/ui/button'
import Link from 'next/link'
import { FaFolderOpen } from 'react-icons/fa'

export default function NoProducts() {
  return (
      <div className="container mx-auto">
        <div className="py-10">
          <div className="flex flex-col items-center justify-center text-center mt-20">
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center p-5 justify-center mb-6">
              <FaFolderOpen className="text-gray-500 text-3xl" />
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              No Subcategories Found
            </h2>

            <p className="text-gray-500 mb-6">
              This category doesn&apos;t have any subcategories yet.
            </p>

            <Link href="/Shop">
              <Button className="bg-green-600 hover:bg-green-700 text-white p-6 rounded-lg text-xl cursor-pointer">
                View All Products 
              </Button>
            </Link>
          </div>
        </div>
      </div>
  )
}
