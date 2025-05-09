'use client';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Menu, X, ShoppingCart, LogIn, UserPlus, Link } from 'lucide-react';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const cartCount = useSelector((state: { cart: { items: { qty: number }[] } }) =>
    state.cart.items.reduce((total, item) => total + item.qty, 0)
  );

  const handleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <>
      {/* === Desktop Navbar === */}
      <nav className="hidden md:flex justify-between items-center px-10 py-4 bg-gradient-to-r from-pink-300 to-purple-400 text-white shadow-md">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="h-10 w-10 rounded-full shadow-md" />
          <span className="text-2xl font-extrabold tracking-wide">KidsShop</span>
        </div>

        {/* Center: Menu */}
        <ul className="flex gap-8 text-lg font-medium relative">
          <li><a href="#" className="hover:text-purple-200 transition">Home</a></li>

          {['Toys', 'Clothing', 'Shoes'].map((item) => (
            <li className="relative" key={item}>
              <button onClick={() => handleDropdown(item)} className="hover:text-purple-200 transition">
                {item}
              </button>
              {openDropdown === item && (
                <div className="absolute top-full mt-2 bg-white text-gray-700 shadow-lg rounded-md py-2 w-40 z-40">
                  {item === 'Toys' && (
                    <>
                      <a href="#" className="block px-4 py-2 hover:bg-pink-100">Educational</a>
                      <a href="#" className="block px-4 py-2 hover:bg-pink-100">Stuffed</a>
                      <a href="#" className="block px-4 py-2 hover:bg-pink-100">Outdoor</a>
                    </>
                  )}
                  {item === 'Clothing' && (
                    <>
                      <a href="#" className="block px-4 py-2 hover:bg-pink-100">Girls</a>
                      <a href="#" className="block px-4 py-2 hover:bg-pink-100">Boys</a>
                      <a href="#" className="block px-4 py-2 hover:bg-pink-100">Winter</a>
                    </>
                  )}
                  {item === 'Shoes' && (
                    <>
                      <a href="#" className="block px-4 py-2 hover:bg-pink-100">Sneakers</a>
                      <a href="#" className="block px-4 py-2 hover:bg-pink-100">Boots</a>
                      <a href="#" className="block px-4 py-2 hover:bg-pink-100">Sandals</a>
                    </>
                  )}
                </div>
              )}
            </li>
          ))}

          <li><a href="#" className="hover:text-purple-200 transition">About</a></li>
          <li><a href="#" className="hover:text-purple-200 transition">Contact</a></li>
        </ul>

        {/* Right: Cart with Count */}
        <div className="relative">
          <Link href='/cart'>
          <button onClick={() => alert('Go to Cart')}>
            <ShoppingCart size={28} className="hover:text-purple-200 transition" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs w-5 h-5 flex items-center justify-center rounded-full text-white">
                {cartCount}
              </span>
            )}
          </button>
          </Link>
        </div>
      </nav>

      {/* === Mobile Navbar === */}
      <nav className="md:hidden bg-gradient-to-r from-pink-300 to-purple-400 text-white px-6 py-4 flex justify-between items-center shadow-md">
        <div className="text-xl font-extrabold">KidsShop</div>
        <button onClick={() => setDrawerOpen(true)}>
          <Menu size={28} />
        </button>
      </nav>

      {/* Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          drawerOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setDrawerOpen(false)}
      ></div>

      {/* Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 shadow-lg ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <span className="text-xl font-bold text-rose-500">Menu</span>
          <button onClick={() => setDrawerOpen(false)}>
            <X size={26} className="text-rose-500" />
          </button>
        </div>

        <ul className="flex flex-col gap-4 px-6 py-6 text-lg text-gray-700 font-semibold">
          <li><a href="#" onClick={() => setDrawerOpen(false)} className="hover:text-rose-500">Home</a></li>
          <li><a href="#" className="hover:text-rose-500">Toys</a></li>
          <li><a href="#" className="hover:text-rose-500">Clothing</a></li>
          <li><a href="#" className="hover:text-rose-500">Shoes</a></li>
          <li><a href="#" className="hover:text-rose-500">About</a></li>
          <li><a href="#" className="hover:text-rose-500">Contact</a></li>
        </ul>

        <hr className="mx-6 my-4 border-gray-300" />

        {/* Auth Buttons */}
        <div className="px-6 space-y-3">
          <button className="w-full flex items-center gap-2 justify-center bg-rose-400 hover:bg-rose-500 text-white font-semibold py-2 rounded-md transition">
            <LogIn size={18} /> Login
          </button>
          <button className="w-full flex items-center gap-2 justify-center bg-pink-300 hover:bg-pink-400 text-white font-semibold py-2 rounded-md transition">
            <UserPlus size={18} /> Register
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
