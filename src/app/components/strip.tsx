import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const StripeCheckoutButton = ({ total }: { total: number }) => {
  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const response = await fetch('/api/checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ total }),
    });

    const session = await response.json();
    await stripe?.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <button
      onClick={handleCheckout}
      className="mt-4 px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition"
    >
      Checkout with Stripe
    </button>
  );
};

export default StripeCheckoutButton;
