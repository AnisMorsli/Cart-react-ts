import './products.css';
import { ACTIONS } from '../../App';
import { Link, useParams } from 'react-router-dom';

function Products({ state, dispatch }: { state: any; dispatch: any }) {
  console.log(state);
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        width: '80%',
      }}
    >
      {state.Product.map((index: any) => (
        <div key={index.id} className="product">
          <img src={index.thumbnail} alt={index.title} />
          <div className="infoBox">
            <p>{index.title}</p>
            <p>{index.price}$</p>
          </div>
          <button
            onClick={() => {
              dispatch({
                type: ACTIONS.addToCart,
                payload: {
                  id: index.id,
                  thumbnail: index.thumbnail,
                  title: index.title,
                  price: index.price,
                },
              });
            }}
          >
            add to cart
          </button>
          <Link to={`product/${index.id}`}>view Product</Link>
        </div>
      ))}
    </div>
  );
}

export default Products;
