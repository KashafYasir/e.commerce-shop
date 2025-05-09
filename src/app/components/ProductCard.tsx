"use client"
import { useDispatch } from 'react-redux';
import { addToCart } from '@/app/redux/cartSlice'



const ProductCard = ({product }) => {
    const dispatch = useDispatch();
  
    const handleAddToCart = () => {
      dispatch(addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      }));
    };
  
    return (
      <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
        <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
        <p className="text-pink-600 font-bold">Rs. {product.price}</p>
        <button
          onClick={handleAddToCart}
          className="mt-3 px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition"
        >
          Add to Cart
        </button>
      </div>
    );
  };
  
  export default ProductCard;
  