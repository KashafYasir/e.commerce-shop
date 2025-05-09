'use client';

import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, addToCart } from '@/app/redux/cartSlice';
import StripeCheckoutButton from '../components/strip';

interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
  image?: string;
}

const CartPage = () => {
  const cartItems = useSelector((state: { cart: { items: CartItem[] } }) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);

  const handleIncrease = (item: CartItem) => {
    dispatch(addToCart({ ...item, qty: item.qty + 1 }));
  };

  const handleDecrease = (item: CartItem) => {
    if (item.qty > 1) {
      dispatch(addToCart({ ...item, qty: item.qty - 1 }));
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-pink-600">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 rounded-md shadow-md"
            >
              <div className="flex items-center gap-4">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                )}
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-rose-500">
                  Rs. {item.price * item.qty}
                </p>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => handleDecrease(item)}
                    className="px-2 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
                  >
                    -
                  </button>
                  <button
                    onClick={() => handleIncrease(item)}
                    className="px-2 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-sm text-red-500 hover:underline mt-1"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6 text-lg font-bold">
            <span>Total:</span>
            <span className="text-pink-600">Rs. {total}</span>
          </div>

          {/* Stripe Checkout Button */}
          <div className="mt-4">
            <StripeCheckoutButton total={total} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
