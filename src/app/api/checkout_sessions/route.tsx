import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2022-08-01',
});

export async function POST(req: NextRequest) {
  try {
    const { total } = await req.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: 'KidsShop Order',
            },
            unit_amount: total * 100, // paise mein convert karna
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/cart`,
    });

    return NextResponse.json({ id: session.id });
  } catch (error) {
    console.error('Stripe Checkout Session Error:', error);
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
}
