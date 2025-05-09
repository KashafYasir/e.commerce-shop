import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-pink-100 mt-12 py-6 text-center text-pink-700 text-sm">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4">
        {/* Left: Links */}
        <div className="space-x-4 mb-2 md:mb-0">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/shop" className="hover:underline">Shop</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>

        {/* Right: Copyright */}
        <p>&copy; {new Date().getFullYear()} BabyShop. All rights reserved.</p>
      </div>
    </footer>
  );
}
