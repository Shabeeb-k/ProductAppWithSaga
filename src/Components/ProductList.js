import React, { useEffect } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  fetchProductsRequest,
  addToCart,
} from '../redux/actions/productActions';

const ProductList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  //   console.log('prod', products);

  const cartCount = useSelector((state) => state.cart.count);

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, [dispatch]);

  if (loading)
    return <p className='text-center text-lg text-blue-600'>Loading...</p>;
  if (error)
    return <p className='text-center text-lg text-red-600'>Error: {error}</p>;

  return (
    <div className='p-6 bg-gray-100 min-h-screen'>
      <h5 className='text-3xl font-bold  text-gray-800 mb-8'>Products</h5>
      <span>
        <FaCartPlus
          className='absolute top-0 right-9 text-gray-800 text-4xl mt-7 cursor-pointer'
          onClick={() => navigate('/cart')}
        />
      </span>
      {cartCount > 0 && (
        <span className='absolute top-7 right-5 bg-red-500 text-white text-xs rounded-full px-2'>
          {cartCount}
        </span>
      )}
      {/* <p>count is{cartCount}</p> */}
      <div className='grid xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {products.map((product) => (
          <div
            key={product.id}
            className='bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col p-4'
          >
            <img
              src={product.image}
              alt={product.title}
              className='w-full h-40 object-contain mb-4'
            />
            <h3 className='text-lg font-semibold text-gray-700 line-clamp-2'>
              {product.title}
            </h3>
            <p className='text-gray-500 font-medium mb-4'>${product.price}</p>
            <button
              onClick={() => dispatch(addToCart(product))}
              className='mt-auto bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors'
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
