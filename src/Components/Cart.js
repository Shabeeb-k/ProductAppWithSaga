import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';

import { removeFromCart } from '../redux/actions/productActions';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart?.cart || []);
  console.log('cart is:', cart);

  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-6 text-center'>Your Cart</h1>
      {cart.length === 0 ? (
        <p className='text-gray-600 text-center'>Your cart is empty.</p>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {cart.map((cartitem) => (
            <div
              key={cartitem.id}
              className='border rounded-lg shadow-md p-4 bg-white flex flex-col'
            >
              <img
                src={cartitem.image}
                alt={cartitem.title}
                className='w-full h-40 object-contain mb-4'
              />
              <h3 className='text-lg font-semibold text-gray-700 line-clamp-2'>
                {cartitem.title}
              </h3>
              <p className='text-gray-500 font-medium mb-4'>
                ${cartitem.price}
              </p>
              <span className='ml-auto cursor-pointer'>
                <FaTrashAlt
                  onClick={() => dispatch(removeFromCart(cartitem.id))}
                />
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
