"use client"
import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Load Stripe outside of a component to avoid reinitialization on every render.
const stripePromise = loadStripe('your-publishable-key-here');

const CheckoutForm = ({ total }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCheckout = async () => {
    setLoading(true);

    // Create Checkout Session from the API.
    const res = await fetch('/api/checkout_sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ total }),
    });

    const session = await res.json();

    // Redirect to Stripe checkout page
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({ sessionId: session.id });

    if (error) {
      console.error('Stripe Checkout Error:', error);
    }
  };

  return (
    <div className="mt-4">
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition"
      >
        {loading ? 'Processing...' : 'Checkout with Stripe'}
      </button>
    </div>
  );
};

export default CheckoutForm;
