import { useEffect, useReducer } from 'react';
import './App.css';
import axios from 'axios';
import Cart from './componenets/Cart/Cart';
import Products from './componenets/Products/Products';

export const ACTIONS = {
  addProduct: 'ADD_PRODUCT',
  addToCart: 'ADD_TO_CART',
};

function App() {
  const fetchDataPro = async () => {
    const { data } = await axios.get('https://dummyjson.com/products');
    const products = data.products;

    dispatch({ type: ACTIONS.addProduct, payload: products });
  };

  const [state, dispatch] = useReducer(reducer, {
    Product: [],
    Cart: [],
  });

  function reducer(state: any, { type, payload }: any) {
    switch (type) {
      case ACTIONS.addProduct:
        return {
          ...state,
          Product: payload,
        };
      case ACTIONS.addToCart:
        return {
          ...state,
          Cart: [...state.Cart, { ...payload }],
        };

      default:
        break;
    }
  }
  console.log(state.Cart);
  useEffect(() => {
    fetchDataPro();
  }, []);

  return (
    <div className="container">
      <div className="Product_container">
        <h1>Products</h1>
        <Products state={state} dispatch={dispatch} />
      </div>
      <div className="Cart_container">
        <h1>Cart</h1>
        <Cart state={state} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
