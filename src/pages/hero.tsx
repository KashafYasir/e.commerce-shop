// pages/index.tsx
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div>
      {/* Hero Section with Video Advertisement */}
      <section className="relative h-screen">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/video-ad.mp4.mp4" type="video/mp4" />
        </video>

      

        {/* Hero Content (Text) */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4">Welcome to BabyShop</h1>
          <p className="text-lg mb-8">Everything you need for your little one!</p>
          <Link  className="bg-pink-500 text-white py-3 px-8 rounded-full hover:bg-pink-600" href="/shop">
            
              Shop Now
            
          </Link>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-16 bg-gray-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category 1 */}
            <div className="bg-pink-400 p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Toys</h3>
              <Link className="text-gray-600" href="/shop">
                Shop Toys
              </Link>
            </div>

            {/* Category 2 */}
            <div className="bg-pink-400 p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Clothing</h3>
              <Link className="text-gray-600" href="/shop">
                Shop Clothing
              </Link>
            </div>

            {/* Category 3 */}
            <div className="bg-pink-400 p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Baby Gear</h3>
              <Link  className="text-gray-600" href="/shop">
                Shop Gear
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
