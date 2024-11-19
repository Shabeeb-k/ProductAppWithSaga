export const fetchProductsRequest = () => ({ type: 'FETCH_PRODUCTS_REQUEST' });
export const addToCart = (product) => ({ type: 'ADD_TO_CART', payload: product });
export const removeFromCart = (productId) => ({ type: 'REMOVE_FROM_CART', payload: productId });
