import React from 'react';

function Cart({ state, dispatch }: { state: any; dispatch: any }) {
  const { Cart } = state;
  return (
    <>
      {Cart.map((index: any) => (
        <div
          key={index.id}
          style={{
            width: '80%',
            height: '300px',
            border: 'solid 1px black',
          }}
        >
          <img
            style={{
              width: '80%',
              height: '200px',
              objectFit: 'cover',
            }}
            src={index.thumbnail}
            alt={index.title}
          />
        </div>
      ))}
    </>
  );
}

export default Cart;
