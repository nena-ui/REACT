import { Link } from "react-router-dom"
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";

export default function CrochetPage() {
    return (
        <>
        <nav className="flex justify-between items-center p-4 bg-white shadow">
        <h1 className="text-xl font-bold text-b">The Stitch Snug</h1>
        <div className="flex gap-6">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
        </div>

         <div className="flex gap-6 text-2xl">
      <FaHeart className="cursor-pointer hover:text-red-500" />
      <FaShoppingCart className="cursor-pointer hover:text-green-600" />
      <FaUser className="cursor-pointer hover:text-blue-600" />
    </div>
        </nav>

        <div className="bg-gray-100 flex items-center justify-center h-[500px] relative">
      <img
        src=""
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
      <div className="relative z-10 text-left max-w-lg p-6">
        <h2 className="text-5xl font-bold text-white">THE STITCH SNUG</h2>
        <p className="text-lg text-white mt-4"></p>
        <button className="mt-6 px-6 py-2 bg-yellow-600 text-white rounded">
          Shop Now
        </button>
      </div>
    </div>
        </>
    )
}